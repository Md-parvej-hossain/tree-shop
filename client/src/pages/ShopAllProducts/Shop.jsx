import React, { useState } from 'react';
import useGetApi from '../../hooks/useGetApi';
import toast from 'react-hot-toast';
import { FadeLoader } from 'react-spinners';
import ShopCard from './ShopCard';

const Shop = () => {
  const [search, setSearch] = useState('');
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
    <div className='my-5'>
      {/* SEARCH & FILTER */}
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-10 w-11/12 mx-auto">
        <input
          type="text"
          placeholder="Search blog..."
          className="input input-bordered w-full md:max-w-sm"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select className="select select-bordered w-full md:max-w-xs">
          <option>All Categories</option>
          <option>Health</option>
          <option>Decoration</option>
          <option>Care</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-11">
        {data.map(plant => (
          <ShopCard key={plant.id} plants={plant} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
