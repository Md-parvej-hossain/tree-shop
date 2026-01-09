import { useState } from 'react';
import { Link } from 'react-router';
import { FiX, FiTrash2, FiShoppingCart } from 'react-icons/fi';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const demoItems = [
  {
    id: 1,
    name: 'Diamond wedding ring',
    price: 5,
    qty: 1,
    img: 'https://i.ibb.co/RksNrphn/istockphoto-1467742991-612x612.jpg',
  },
  {
    id: 1,
    name: 'Diamond wedding ring',
    price: 5,
    qty: 1,
    img: 'https://i.ibb.co/RksNrphn/istockphoto-1467742991-612x612.jpg',
  },
  {
    id: 1,
    name: 'Diamond wedding ring',
    price: 5,
    qty: 1,
    img: 'https://i.ibb.co/RksNrphn/istockphoto-1467742991-612x612.jpg',
  },
  {
    id: 1,
    name: 'Diamond wedding ring',
    price: 5,
    qty: 1,
    img: 'https://i.ibb.co/RksNrphn/istockphoto-1467742991-612x612.jpg',
  },
  {
    id: 1,
    name: 'Diamond wedding ring',
    price: 5,
    qty: 1,
    img: 'https://i.ibb.co/RksNrphn/istockphoto-1467742991-612x612.jpg',
  },
  {
    id: 2,
    name: 'Living Summer Chair',
    price: 5,
    qty: 1,
    img: 'https://i.ibb.co/Mkp8J8K/plant.jpg',
  },
  {
    id: 3,
    name: 'Wireless Headphone',
    price: 5,
    qty: 1,
    img: 'https://i.ibb.co/6cXjZgs0/pro-modified.png',
  },
];

export default function CartSidebar({ open, setOpen }) {
  const subtotal = demoItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <>
      {/* Trigger Button */}
      {/* <button
        onClick={() => setOpen(true)}
        className="btn btn-primary fixed bottom-6 right-6 z-40 rounded-full"
      >
        <FiShoppingCart size={22} />
      </button> */}

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 h-full w-full sm:w-[380px] bg-base-100 z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button className="cursor-pointer" onClick={() => setOpen(false)}>
            <IoIosCloseCircleOutline size={25} />
          </button>
        </div>

        {/* Items */}
        <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-220px)]">
          {demoItems.map(item => (
            <div
              key={item.id}
              className="flex gap-4 pb-4 border-b last:border-none"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="flex-1">
                <h4 className="font-medium leading-tight">{item.name}</h4>
                <p className="text-sm text-gray-500">
                  {item.qty} × ${item.price.toFixed(2)}
                </p>
              </div>
              <button className="text-error hover:text-error/80">
                <FiTrash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t space-y-4">
          <div className="flex justify-between text-sm">
            <span>Subtotal:</span>
            <span className="font-semibold text-success">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <Link
            to="/checkout"
            className="btn btn-success w-full"
            onClick={() => setOpen(false)}
          >
            Checkout
          </Link>
        </div>
      </aside>
    </>
  );
}
