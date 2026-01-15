import React from 'react';
import useGetApi from '../../hooks/useGetApi';
import toast from 'react-hot-toast';
import { FadeLoader } from 'react-spinners';
import ShopCard from './ShopCard';

const Shop = () => {
   const {
     data = [],
     isLoading,
     isError,
     error,
   } = useGetApi('Allplantes', '/plantes');
   console.log(data);
   if (isLoading) return <FadeLoader />;
   if (isError) return toast.error(error?.message);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-11">
        {data.map(plant => (
          <ShopCard key={plant.id} plants={plant} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
