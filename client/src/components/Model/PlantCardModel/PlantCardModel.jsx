import { useState } from 'react';
import { FaStar, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router';

const PlantCardModel = ({ isOpen, onClose }) => {
  const [qty, setQty] = useState(2);

  if (!isOpen) return null;

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
              src="https://i.imgur.com/5Y5Z6cX.png"
              alt="Plant"
              className="max-h-[400px] object-contain"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Aliquam vel</h2>

            {/* Price */}
            <div className="flex items-center gap-4 mb-3">
              <span className="text-gray-400 line-through text-lg">$12</span>
              <span className="text-green-700 text-2xl font-bold">$10</span>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
              nulla eu dui suscipit ultricies. Mauris vestibulum volutpat nisl
              vel cursus.
            </p>

            {/* Rating */}
            <div className="flex gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Category */}
            <p className="font-medium mb-4">
              Category : <span className="font-normal">Small Plant</span>
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-medium">Quantity</span>

              <div className="flex items-center border rounded-md overflow-hidden">
                <button
                  onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                  className="px-4 py-1 text-xl cursor-pointer"
                >
                  −
                </button>
                <span className="px-4 py-1">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-1 text-xl cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <Link
              to="/addToCard"
              className="bg-green-700 text-white px-8 py-3 rounded-md hover:bg-green-800 cursor-pointer"
            >
              Add to cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCardModel;
