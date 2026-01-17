import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import PlantCard from './PlantCard';
import { getPlantes } from '../../../api/paginationApi/getApi';
import { FadeLoader } from 'react-spinners';
import toast from 'react-hot-toast';

const Plants = () => {
  const [plantes, setPlantes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const limit = 6;

  useEffect(() => {
    loadData();
  }, [page]);

  const loadData = async () => {
    try {
      setLoading(true);
      const res = await getPlantes(page, limit);

      setPlantes(res?.data || []);
      setTotalPages(res?.pagination?.totalPages || 1);
    } catch (error) {
      toast.error(error?.message || 'Failed to load plants');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <FadeLoader />
      </div>
    );
  }

  return (
    <div className=" mx-auto px-4">
      {/* HEADER */}
      <div className="text-center my-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold py-4">
          New Arrival
        </h2>

   
      </div>

      {/* PLANTS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {plantes.map(plant => (
          <PlantCard key={plant._id} plants={plant} />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-12">
        <div className="join">
          <button
            className="join-item btn"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>

          {[...Array(totalPages).keys()].map(num => (
            <button
              key={num}
              className={`join-item btn ${
                page === num + 1 ? 'btn-active' : ''
              }`}
              onClick={() => setPage(num + 1)}
            >
              {num + 1}
            </button>
          ))}

          <button
            className="join-item btn"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plants;
