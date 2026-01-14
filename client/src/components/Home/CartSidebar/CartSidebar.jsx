import { Link } from 'react-router';
import { FiTrash2 } from 'react-icons/fi';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import useGetApi from '../../../hooks/useGetApi';
import { FadeLoader } from 'react-spinners';
import useDeleteApi from '../../../hooks/useDeleatApi';
import { toast } from 'react-hot-toast';

export default function CartSidebar({ open, setOpen }) {
  const { data = [], isLoading, isError, error } = useGetApi('cards', '/cards');
  console.log(data);
  const subtotal = data.reduce(
    (total, item) => total + item.price * item.quantity,
    0
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
    return <p className="text-center py-10">Your cart is empty</p>;

  return (
    <>
    

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
          {data.map(item => (
            <div
              key={item.id}
              className="flex gap-4 pb-4 border-b last:border-none"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="flex-1">
                <h4 className="font-medium leading-tight">{item.name}</h4>
                <p className="text-sm text-gray-500">
                  {item.quantity} × ${item.price.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => handleDelete(item._id)}
                className="text-error hover:text-error/80"
              >
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
            to="/addTOCard"
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
