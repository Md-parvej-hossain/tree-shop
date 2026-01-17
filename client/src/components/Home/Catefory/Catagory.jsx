import useGetSingleApi from '../../../hooks/useSingaleDataApi';
import { useParams } from 'react-router';
import { FadeLoader } from 'react-spinners';
import CategoryCard from './CategoryCard';
import EmptyState from '../../Shared/EmptyState/EmptyState';

const Catagory = () => {
  const { categoryName } = useParams();
  const {
    data: categorysData = [],
    isLoading,
    isError,
    error,
  } = useGetSingleApi(
    ['plant', categoryName],
    `/plantes/category/${categoryName}`,
    {
      enabled: !!categoryName,
    }
  );
  if (categorysData.length === 0) return <EmptyState />;
  if (isLoading) return <FadeLoader />;
  if (isError) return <p>{error.message}</p>;
  return (
    <div>
      <div className="text-center  my-5">
        <h1 className="text-3xl">{categoryName} Plants</h1>
        <p className='pt-2'>
          Plants bring natural beauty and freshness to any space. They improve
          air quality, create a calming atmosphere,<br/> and enhance both indoor and
          outdoor environments effortlessly.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {categorysData.map(categoryData => (
          <CategoryCard key={categoryData._id} categoryData={categoryData} />
        ))}
      </div>
    </div>
  );
};

export default Catagory;
