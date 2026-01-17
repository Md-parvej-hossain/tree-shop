import { useState } from 'react';
import { FaRegStar, FaStar, FaEye, FaShoppingCart } from 'react-icons/fa';
import PlantCardModel from '../../Model/PlantCardModel/PlantCardModel';
import CartSidebar from '../CartSidebar/CartSidebar';
import usePostApi from '../../../hooks/usePostApi';

const PlantCard = ({ plants }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const { mutate } = usePostApi('/cards', {
    successMessage: 'Card added successfully',
    invalidateKey: 'card',
  });
  const reflase = reflase => {
    reflase()
  };
  // Function to handle add to cart click
  const handleAddToCart = async () => {
    if (!plants?._id) return; // safety check
    await mutate({
      name: plants.name,
      image: plants.image,
      price: plants.newPrice,
      quantity: 1,
    });
    reflase()
  };
  return (
    <div className="group relative bg-base-100  shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
        <img
          src={plants.image}
          alt={plants.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-4
                opacity-0 group-hover:opacity-100 transition duration-700"
        >
          <button
            title="Quick View"
            className="  bg-green-400 text-white hover:bg-white hover:text-green-400 rounded-full p-2   cursor-pointer "
          >
            <FaEye size={25} onClick={() => setIsOpen(true)} />
          </button>

          <button
            onClick={handleAddToCart}
            title="Add To Card"
            className="   bg-green-500 text-white hover:bg-white hover:text-green-500 rounded-full p-2   cursor-pointer "
          >
            <FaShoppingCart onClick={() => setOpen(true)} size={25} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 text-center space-y-2">
        {/* Title */}
        <h2 className="text-lg font-semibold text-base-content truncate">
          {plants.name}
        </h2>

        {/* Rating */}
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, index) =>
            index < plants.rating ? (
              <FaStar key={index} className="text-yellow-400 text-sm" />
            ) : (
              <FaRegStar key={index} className="text-gray-300 text-sm" />
            )
          )}
        </div>

        {/* Price */}
        <div className="flex justify-center items-center gap-2">
          <span className="text-sm text-gray-400 line-through">
            ${plants.oldPrice}
          </span>
          <span className="text-lg font-bold text-green-600">
            ${plants.newPrice}
          </span>
        </div>
      </div>

      {/* Modals */}
      <PlantCardModel
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onClose={onClose}
        id={plants._id}
      />

      <CartSidebar open={open} setOpen={setOpen} reflase={reflase} />
    </div>
  );
};

export default PlantCard;
