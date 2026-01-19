import React, { useState } from 'react';
import usePostApi from '../../../hooks/usePostApi';
import { FaEye, FaRegStar, FaShoppingCart, FaStar } from 'react-icons/fa';
import PlantCardModel from '../../Model/PlantCardModel/PlantCardModel';
import CartSidebar from '../CartSidebar/CartSidebar';

const CategoryCard = ({ categoryData }) => {
  const max = 5;
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const { mutate } = usePostApi('/cards', {
    successMessage: 'Card added successfully',
    invalidateKey: 'card',
  });

  // Function to handle add to cart click
  const handleAddToCart = async () => {
    if (!categoryData?._id) return; // safety check
    await mutate({
      name: categoryData.name,
      image: categoryData.image,
      price: categoryData.newPrice,
      quantity: 1,
    });
  };
  return (
    <div className="card bg-base-100 group shadow-sm overflow-hidden">
      {/* Image Wrapper */}
      <div className="relative">
        <figure className="px-10 pt-10">
          <img
            src={categoryData.image}
            referrerPolicy="no-referrer"
            alt="Plant"
            className="rounded-xl transition-all duration-500 
              group-hover:scale-110 group-hover:opacity-50 w-[250px] h-[180px] object-cover"
          />
        </figure>

        {/* Center Icons */}
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

      {/* Card Body */}
      <div className="card-body items-center text-center">
        <h2 className="card-title">{categoryData.name}</h2>

        {/* Rating */}
        <div className="flex gap-1 text-yellow-400">
          {[...Array(max)].map((_, index) =>
            index < categoryData.rating ? (
              <FaStar key={index} />
            ) : (
              <FaRegStar key={index} className="text-gray-300" />
            ),
          )}
        </div>

        {/* Price */}
        <div className="card-actions text-black font-semibold text-lg">
          <div className="inline-flex items-center gap-2  px-4 py-2  ">
            <span className="text-gray-400 line-through text-sm">
              ${categoryData.oldPrice}
            </span>
            <span className="text-green-600 font-semibold text-lg">
              ${categoryData.newPrice}
            </span>
          </div>
        </div>
        {/* PlantCardModel */}
        <PlantCardModel
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onClose={onClose}
          id={categoryData._id}
        />
      </div>
      <CartSidebar open={open} setOpen={setOpen} />
    </div>
  );
};

export default CategoryCard;
