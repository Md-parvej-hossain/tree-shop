// import { Helmet } from 'react-helmet-async';
import CategorySlider from '../../components/Home/CategorySlider';
import HeroSlider from '../../components/Home/HeroSlider';
import Plants from '../../components/Home/plants/Plants';
import BestProducts from '../../components/Home/BestProduct/BestProducts';
import TopRatedProducts from '../../components/Home/TopRatedProducts/TopRatedProducts';
import Articles from '../../components/Home/Article/Articles';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { useState } from 'react';
import CartSidebar from '../../components/Home/CartSidebar/CartSidebar';
import useGetApi from '../../hooks/useGetApi';
import Trending from '../../components/Home/Trending/Trending';
const Home = () => {
  const [open, setOpen] = useState(false);
  const { data = [] } = useGetApi('cards', '/cards');
  const subtotal = data.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="relative">
      {/* <Helmet>
        <title>PlantNet | Home</title>
        <meta
          name="description"
          content="This is the description for the home page"
        />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Helmet> */}
      
              {/* Center Icons */}
              {/* <div
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
              </div> */}
      <div
        
        onClick={() => setOpen(true)}
        className="fixed absolute z-50 bottom-96 -right-0 bg-green-50 hover:bg-green-200"
      >
        <div className=" p-4 rounded-lg shadow-lg flex flex-col items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
          <MdOutlineShoppingBag />
          <p>{data.length} items</p>
          <p>${subtotal}</p>
        </div>
      </div>
      <HeroSlider />
      <div className="w-11/12 mx-auto">
        <CategorySlider />
        <Plants />
        <BestProducts />
        <TopRatedProducts />
        <Trending/>
        <Articles />
      </div>
      <CartSidebar open={open} setOpen={setOpen} />
    </div>
  );
};

export default Home;
