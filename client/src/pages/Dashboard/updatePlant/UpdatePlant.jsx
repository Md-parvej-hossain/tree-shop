import { useParams } from 'react-router';
import useGetSingleApi from '../../../hooks/useSingaleDataApi';
import uploadImage from '../../../api/uplodeImageImgeBB/uploadImage';
import useUpdateApi from '../../../hooks/useUpdateApi';

const UpdatePlant = () => {
  const { id } = useParams();
  const {
    data: plant,
    isLoading,
    isError,
    error,
  } = useGetSingleApi(['plant', id], `/plantes/${id}`, {
    enabled: !!id,
  });

  // React Query mutation
  const updatePlant = useUpdateApi('/plantes', {
    invalidateKey: ['plant', id],
    successMessage: 'Plant updated successfully!',
  });

  console.log(plant);
  const {
    name,
    image,
    newPrice,
    oldPrice,
    description,
    rating,
    quantity,
    category,
    type,
  } = plant || {};

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const imageFile = form.image.files[0];
    // 🔹 Upload image to ImgBB
    const imageUrl = await uploadImage(imageFile);
    const formData = new FormData(form);
    const plantInfo = {
      name: formData.get('name'),
      image: imageUrl,
      newPrice: formData.get('newPrice'),
      oldPrice: formData.get('oldPrice'),
      description: formData.get('description'),
      rating: formData.get('rating'),
      quantity: formData.get('quantity'),
      category: formData.get('category'),
    };
    console.log(plantInfo);
    // Call mutation
    updatePlant.mutate({ id, data: plantInfo });
    console.log(plantInfo);
    form.reset();
  };
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  return (
    <div className="min-h-screen bg-base-400 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-base-100 shadow-xl rounded-box p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          🌱 Update Plant
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Plant Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Plant Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter plant name"
              required
              className="input input-bordered"
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              defaultValue={category}
              name="category"
              required
              className="select select-bordered"
            >
              <option value="">Select category</option>
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Succulent">Succulent</option>
              <option value="Flower">Flower</option>
            </select>
          </div>
          {/* New Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">New Price ($)</span>
            </label>
            <input
              type="number"
              name="newPrice"
              defaultValue={newPrice}
              required
              placeholder="New price"
              className="input input-bordered"
            />
          </div>

          {/* Old Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Old Price ($)</span>
            </label>
            <input
              type="number"
              name="oldPrice"
              defaultValue={oldPrice}
              placeholder="Old price"
              className="input input-bordered"
            />
          </div>

          {/* Rating */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating (1–5)</span>
            </label>
            <input
              type="number"
              name="rating"
              defaultValue={rating}
              min="1"
              max="5"
              step="0.1"
              placeholder="Rating"
              className="input input-bordered"
            />
          </div>

          {/* Quantity */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              defaultValue={quantity}
              required
              placeholder="Available quantity"
              className="input input-bordered"
            />
          </div>
          {/* Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <select
              name="type"
              defaultValue={type}
              required
              className="select select-bordered"
            >
              <option value="">Select Type</option>
              <option value="Top Rated">Top Rated</option>
              <option value="Trending">Trending</option>
              <option value="Best Seller">Best Seller</option>
            </select>
          </div>
          {/* Image */}
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text">Plant Image</span>
            </label>

            {/* Show default/current image */}
            {image && (
              <div className="mb-2">
                <img
                  src={image}
                  alt={name}
                  className="w-32 h-32 object-cover rounded-md border"
                />
              </div>
            )}

            {/* File input to select new image */}
            <input
              type="file"
              name="image"
              className="file-input file-input-bordered w-full"
            />
          </div>

          {/* Description */}
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              rows="4"
              defaultValue={description}
              placeholder="Write plant description"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button type="submit" className="btn btn-success w-full">
              Add Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePlant;
