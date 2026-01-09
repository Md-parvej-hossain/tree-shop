import { Helmet } from 'react-helmet-async';
import CategorySlider from '../../components/Home/CategorySlider';
import HeroSlider from '../../components/Home/HeroSlider';
import Plants from '../../components/Home/plants/Plants';
import BestProducts from '../../components/Home/BestProduct/BestProducts';
import TopRatedProducts from '../../components/Home/TopRatedProducts/TopRatedProducts';
import Articles from '../../components/Home/Article/Articles';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PlantNet | Home</title>
        <meta
          name="description"
          content="This is the description for the home page"
        />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Helmet>
      <HeroSlider />
      <CategorySlider />
      <Plants />
      <BestProducts />
      <TopRatedProducts />
      <Articles />
    </div>
  );
};

export default Home;
