import uploadImage from '../../../api/uplodeImageImgeBB/uploadImage';
import usePostApi from '../../../hooks/usePostApi';

const AddPlant = () => {
  const { mutate, isLoading } = usePostApi('/plantes', {
    successMessage: 'Plant added successfully',
    invalidateKey: 'plants',
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const imageFile = form.image.files[0];

    // 🔹 Upload image to ImgBB
    const imageUrl = await uploadImage(imageFile);
    const plantInfo = {
      name: formData.get('name'),
      image: imageUrl,
      newPrice: Number(formData.get('newPrice')),
      oldPrice: Number(formData.get('oldPrice')),
      description: formData.get('description'),
      rating: Number(formData.get('rating')),
      quantity: Number(formData.get('quantity')),
      category: formData.get('category'),
      type: formData.get('type'),
    };
    //console.log(plantInfo);
    // 🔹 Call POST API
    mutate(plantInfo, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <div className="min-h-screen bg-base-400 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-base-100 shadow-xl rounded-box p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          🌱 Add New Plant
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
            <select name="category" required className="select select-bordered">
              <option value="">Select category</option>
              <option value="Flower">Flower</option>
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Fruit">Fruit</option>
              <option value="Air">Air</option>
              <option value="Succulent">Succulent</option>
              <option value="Medicinal">Medicinal</option>
              <option value="Bonsai">Bonsai</option>
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
            <select name="type" required className="select select-bordered">
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
            <input
              type="file"
              name="image"
              required
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
              placeholder="Write plant description"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-success w-full"
            >
              {isLoading ? 'Saving...' : 'Add Plant'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlant;
