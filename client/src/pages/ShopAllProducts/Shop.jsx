
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { FadeLoader } from 'react-spinners';
import ShopCard from './ShopCard';
import { getPlantes } from '../../api/paginationApi/getApi';


const Shop = () => {
  const [search, setSearch] = useState('');
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
    <div className="my-5">
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
        {plantes.map(plant => (
          <ShopCard key={plant.id} plants={plant} />
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

export default Shop;
