import { useState } from 'react';
import { FaRegStar, FaStar, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router';
import useGetSingleApi from '../../../hooks/useSingaleDataApi';
import usePostApi from '../../../hooks/usePostApi';
import toast from 'react-hot-toast';
import usePatchApi from '../../../hooks/usePatchApi';

const PlantCardModel = ({ isOpen, onClose, id }) => {
  const [qty, setQty] = useState(1); // for cart quantity
  // local copy of plant.quantity

  const {
    data: plant,
    isLoading,
    isError,
    error,
  } = useGetSingleApi(['plant', id], `/plantes/${id}`, {
    enabled: !!id,
  });
  const {
    name,
    image,
    newPrice,
    oldPrice,
    description,
    rating,
    quantity,
    category,
  } = plant || {};
  const { mutate } = usePostApi('/cards', {
    successMessage: 'Card added successfully',
    invalidateKey: 'card',
  });
  const { mutate: incrementQty } = usePatchApi(`/plantes/${id}/increment`, {
    successMessage: null, // no toast spam
    invalidateKey: ['plant', id],
  });

  const { mutate: decrementQty } = usePatchApi(`/plantes/${id}/decrement`, {
    successMessage: null,
    invalidateKey: ['plant', id],
  });

  // Function to handle add to cart click
  const handleAddToCart = async () => {
    if (!plant?._id) return;

    await mutate({
      plantId: plant._id,
      name,
      image,
      price: newPrice,
      quantity: qty,
    });
  };

  const totalPrice = qty * newPrice;

  if (!isOpen) return null;
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {/* Modal Box */}
      <div className="relative bg-white w-[95%] max-w-4xl rounded-lg shadow-lg p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-green-700 border border-green-700 rounded-full p-1 hover:bg-green-700 hover:text-white cursor-pointer"
        >
          <FaTimes />
        </button>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={image}
              alt="Plant"
              className="max-h-[200px] md:max-h-[400px] object-contain"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">{name}</h2>
            {/* Price */}
            <div className="flex items-center gap-4 mb-3">
              <span className="text-gray-400 line-through text-lg">
                ${oldPrice}
              </span>
              <span className="text-green-700 text-2xl font-bold">
                ${totalPrice}
              </span>
            </div>
            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              {description}
            </p>
            {/* Rating */}
            <div className="flex gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, index) =>
                index < rating ? (
                  <FaStar key={index} />
                ) : (
                  <FaRegStar key={index} className="text-gray-300" />
                ),
              )}
            </div>
            {/* Category */}
            <p className="font-medium mb-4">
              Category : <span className="font-normal">{category}</span>
            </p>
            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-medium">Quantity : {quantity}</span>

              <div className="flex items-center border rounded-md overflow-hidden">
                <button
                  onClick={() => {
                    if (qty > 1) {
                      setQty(qty - 1);
                      decrementQty();
                    }
                  }}
                  className="px-4 py-1 text-xl cursor-pointer"
                >
                  −
                </button>

                <span className="px-4 py-1">{qty}</span>
                <button
                  disabled={qty === quantity}
                  onClick={() => {
                    if (qty < quantity) {
                      setQty(qty + 1);
                      incrementQty();
                    } else {
                      toast.error('Not enough stock available');
                    }
                  }}
                  className="px-4 py-1 text-xl cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
            {/* Add to Cart */}
            <button
              onClick={handleAddToCart} // ✅ fixed
              className="bg-green-700 text-white px-8 py-3 rounded-md hover:bg-green-800 cursor-pointer"
            >
              <Link to="/addToCard"> Add to cart</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCardModel;
