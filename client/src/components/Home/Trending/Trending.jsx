
import useGetSingleApi from '../../../hooks/useSingaleDataApi';
import TrendingCard from './TrendingCard';

const Trending = () => {
  const TrendingType = 'Trending';
  const {
    data: typeData = [],
    isLoading,
    isError,
    error,
  } = useGetSingleApi(['type', TrendingType], `/plantes/type/${TrendingType}`, {
    enabled: !!TrendingType,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  console.log(typeData);
  return (
    <div>
      <div className="text-center items-center my-5">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold md:font-bold py-4">
          Trending Product
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {typeData.map(item => (
          <TrendingCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
