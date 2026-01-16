import { useNavigate } from 'react-router';

const EmptyState = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-lg">
        <div className="card-body items-center text-center">
          <div className="text-6xl mb-4">🌱</div>

          <h2 className="card-title text-xl font-semibold">No Data Found</h2>

          <p className="text-sm text-gray-500">
            There is no data available right now. Please add new items or try
            again later.
          </p>

          <div className="card-actions mt-6">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-primary btn-sm"
            >
              Go Back{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
