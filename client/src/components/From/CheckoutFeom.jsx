import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAxiosPublic from './../../hooks/useAxiosPublic';

const CheckoutForm = ({ totalPrice, closeModal, orderData, fetchData }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const stripe = useStripe();
  const elements = useElements();

  const [cardError, setCardError] = useState('');
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  /**
   * Create Payment Intent
   */
  useEffect(() => {
    if (!totalPrice || totalPrice <= 0) return;

    const getClientSecret = async () => {
      try {
        const { data } = await axiosPublic.post('/create-payment-intent', {
          price: totalPrice,
        });
        // console.log(data);
        setClientSecret(data.clientSecret);
      } catch (error) {
        toast.error('Failed to initialize payment');
      }
    };

    getClientSecret();
  }, [axiosSecure, totalPrice]);

  /**
   * Handle Payment Submit
   */
  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) return;

    setProcessing(true);
    setCardError('');

    const card = elements.getElement(CardElement);
    if (!card) {
      setProcessing(false);
      return;
    }

    // Create payment method
    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error.message);
      setProcessing(false);
      return;
    }

    // Confirm payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: user?.displayName || 'Anonymous',
          email: user?.email,
        },
      },
    });

    if (result.error) {
      setCardError(result.error.message);
      setProcessing(false);
      return;
    }

    if (result.paymentIntent.status === 'succeeded') {
      try {
        const paymentData = {
          ...orderData,
          transactionId: result.paymentIntent.id,
          price: totalPrice,
          email: user.email,
          status: 'paid',
        };

        await axiosSecure.post('/order', paymentData);

        await axiosSecure.patch(`/quantity-update/${orderData.plantId}`, {
          quantityToUpdate: orderData.quantity,
          status: 'decrease',
        });

        toast.success('Order placed successfully!');
        fetchData();
        closeModal();
      } catch (error) {
        toast.error('Order save failed');
      } finally {
        setProcessing(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': { color: '#aab7c4' },
            },
            invalid: { color: '#9e2146' },
          },
        }}
      />

      {cardError && <p className="text-red-500">{cardError}</p>}

      <button
        type="submit"
        disabled={!stripe || !clientSecret || processing}
        className="w-full py-2 bg-green-500 text-white rounded disabled:opacity-50"
      >
        {processing ? <ClipLoader size={20} /> : `Pay $${totalPrice}`}
      </button>
    </form>
  );
};

export default CheckoutForm;
