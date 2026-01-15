import { NavLink } from 'react-router';
import PlantCard from './PlantCard';
import toast from 'react-hot-toast';
import useGetApi from '../../../hooks/useGetApi';
import { FadeLoader } from 'react-spinners';

const Plants = () => {
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
      <div className="text-center items-center my-5">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold md:font-bold py-4">
          New Arrival
        </h2>
        <ul className="flex justify-center items-center gap-5 md:gap-10 sm:text-sm text-lg md:text-xl font-bold py-4">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {data.map(plant => (
          <PlantCard key={plant.id} plants={plant} />
        ))}
      </div>
    </div>
  );
};

export default Plants;
