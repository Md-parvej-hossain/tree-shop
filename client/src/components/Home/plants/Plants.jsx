import { NavLink } from 'react-router';
import PlantCard from './PlantCard';

const Plants = () => {
  return (
    <div>
      <div className="text-center items-center my-5">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold md:font-bold py-4">
          New Arrival
        </h2>
        <ul className="flex justify-center items-center gap-5 md:gap-10 text-xl font-bold py-4">
          <li>
            <NavLink>All</NavLink>
          </li>
          <li>
            <NavLink>Top Rated</NavLink>
          </li>
          <li>
            <NavLink>Trending</NavLink>
          </li>
          <li>
            <NavLink>Best Seller</NavLink>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
      </div>
    </div>
  );
};

export default Plants;
