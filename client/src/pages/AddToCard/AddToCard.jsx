import { useNavigate } from 'react-router';
import useGetApi from '../../hooks/useGetApi';
import useDeleteApi from '../../hooks/useDeleatApi';
import toast from 'react-hot-toast';
import { FadeLoader } from 'react-spinners';
import EmptyState from '../../components/Shared/EmptyState/EmptyState';

const AddToCart = () => {
  const navigate = useNavigate();
  const { data = [], isLoading, isError, error } = useGetApi('cards', '/cards');
  const subtotal = data.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const deletePlant = useDeleteApi('/cards', {
    invalidateKey: 'cards',
    successMessage: 'Cards deleted successfully',
  });
  const handleDelete = id => {
    deletePlant.mutate(id, {
      onSuccess: () => toast.success('Item removed from cart'),
    });
  };
  if (isLoading)
    return (
      <div className="flex justify-center py-10">
        <FadeLoader />
      </div>
    );

  if (isError)
    return <p className="text-red-600 text-center">{error?.message}</p>;
  if (data.length === 0)
    return (
      <p className="text-center py-10">
        <EmptyState />
      </p>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-6">
        Selected Item : {data.length}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: CART ITEMS */}
        <div className="lg:col-span-2 space-y-6">
          {data.map(item => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-base-100 shadow rounded-lg p-4"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-green-600 font-medium">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <p className="text-black font-medium ">
                    Quantity : {item.quantity}
                  </p>
                </div>
                <p className="font-semibold w-16 text-right flex">
                  Total : ${item.price * item.quantity}
                </p>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-xs btn-circle btn-outline btn-error"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          <p className="text-sm">
            Do you want to add more?
            <button
              onClick={() => navigate(-1)}
              className="ml-2 link link-primary"
            >
              Click Here
            </button>
          </p>
        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div className="bg-base-100 shadow rounded-lg p-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Delivery Charge</span>
              <span>$50</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-lg">
              <span>Payable Amount</span>
              <span>${subtotal + 50}</span>
            </div>
          </div>

          <div className="text-center space-y-3">
            <p className="text-sm">Are you sure you want to order?</p>
            <button className="btn btn-success w-full">Place Order</button>
            <p className="text-xs text-gray-400">
              By clicking Place Order, I agree to Terms of Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
