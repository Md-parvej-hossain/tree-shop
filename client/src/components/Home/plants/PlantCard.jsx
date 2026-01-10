import { useState } from 'react';
import { FaRegStar, FaStar, FaEye, FaShoppingCart } from 'react-icons/fa';
import PlantCardModel from '../../Model/PlantCardModel/PlantCardModel';
import CartSidebar from '../CartSidebar/CartSidebar';

const PlantCard = () => {
  const rating = 4;
  const max = 5;
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  return (
    <div className="card bg-base-100 group shadow-sm overflow-hidden">
      {/* Image Wrapper */}
      <div className="relative">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Plant"
            className="rounded-xl transition-all duration-500 
              group-hover:scale-110 group-hover:opacity-50"
          />
        </figure>

        {/* Center Icons */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-4
          opacity-0 group-hover:opacity-100 transition duration-700"
        >
          <button
            title="Quick View"
            className="  bg-green-500 text-white hover:bg-white hover:text-green-500 rounded-full p-2   cursor-pointer "
          >
            <FaEye size={25} onClick={() => setIsOpen(true)} />
          </button>

          <button
            title="Add To Card"
            className="   bg-green-500 text-white hover:bg-white hover:text-green-500 rounded-full p-2   cursor-pointer "
          >
            <FaShoppingCart onClick={() => setOpen(true)} size={25} />
          </button>
        </div>
      </div>
      {/* PlantCardModel */}
      <PlantCardModel isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} />
      {/* Card Body */}
      <div className="card-body items-center text-center">
        <h2 className="card-title">Green Tree</h2>

        {/* Rating */}
        <div className="flex gap-1 text-yellow-400">
          {[...Array(max)].map((_, index) =>
            index < rating ? (
              <FaStar key={index} />
            ) : (
              <FaRegStar key={index} className="text-gray-300" />
            )
          )}
        </div>

        {/* Price */}
        <div className="card-actions text-black font-semibold text-lg">
          <p>$7465</p>
        </div>
      </div>
      <CartSidebar open={open} setOpen={setOpen} />
    </div>
  );
};

export default PlantCard;
