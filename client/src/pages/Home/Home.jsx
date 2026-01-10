import { Helmet } from 'react-helmet-async';
import CategorySlider from '../../components/Home/CategorySlider';
import HeroSlider from '../../components/Home/HeroSlider';
import Plants from '../../components/Home/plants/Plants';
import BestProducts from '../../components/Home/BestProduct/BestProducts';
import TopRatedProducts from '../../components/Home/TopRatedProducts/TopRatedProducts';
import Articles from '../../components/Home/Article/Articles';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { useState } from 'react';
import CartSidebar from '../../components/Home/CartSidebar/CartSidebar';
const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <Helmet>
        <title>PlantNet | Home</title>
        <meta
          name="description"
          content="This is the description for the home page"
        />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Helmet>
      <div
        onClick={() => setOpen(true)}
        className="fixed absolute z-50 bottom-96 -right-0 bg-green-50 hover:bg-green-200"
      >
        <div className=" p-4 rounded-lg shadow-lg flex flex-col items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
          <MdOutlineShoppingBag />
          <p>5 items</p>
          <p>$453</p>
        </div>
      </div>
      <HeroSlider />
      <div className="w-11/12 mx-auto">
        <CategorySlider />
        <Plants />
        <BestProducts />
        <TopRatedProducts />
        <Articles />
      </div>
      <CartSidebar open={open} setOpen={setOpen} />
    </div>
  );
};

export default Home;
