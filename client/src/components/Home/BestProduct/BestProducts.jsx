import React from 'react';
import BestProductCard from './BestProductCard';

const BestProducts = () => {
  return (
    <div>
      <div className="text-center items-center my-5">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold md:font-bold py-4">
          Best Product
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        <BestProductCard />
        <BestProductCard />
        <BestProductCard />
        <BestProductCard />
        <BestProductCard />
      </div>
    </div>
  );
};

export default BestProducts;
