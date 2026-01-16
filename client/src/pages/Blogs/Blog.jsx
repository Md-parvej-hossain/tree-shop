import { useState } from 'react';

const Blog = () => {
  const [search, setSearch] = useState('');

  const blogs = [
    {
      id: 1,
      title: 'How Indoor Plants Improve Health',
      description:
        'Discover how indoor plants can improve air quality, reduce stress, and boost productivity.',
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
      author: 'Admin',
      date: 'Jan 10, 2026',
      readTime: '5 min read',
      category: 'Health',
    },
    {
      id: 2,
      title: 'Best Plants for Home Decoration',
      description:
        'A complete guide to choosing beautiful plants for your living space.',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      author: 'Editor',
      date: 'Jan 12, 2026',
      readTime: '6 min read',
      category: 'Decoration',
    },
    {
      id: 3,
      title: 'Plant Care Tips for Beginners',
      description:
        'Simple and effective tips to keep your plants healthy and green.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      author: 'Admin',
      date: 'Jan 15, 2026',
      readTime: '4 min read',
      category: 'Care',
    },
  ];

  return (
    <div className="w-full">
      {/* HERO */}
      <div className="bg-success text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Our Blog</h1>
        <p className="text-sm opacity-90">
          Latest news, articles, and plant care tips
        </p>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 py-16">
        {/* SEARCH & FILTER */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-10">
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

        {/* BLOG GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div
              key={blog.id}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition"
            >
              <figure>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <span className="badge badge-success w-fit">
                  {blog.category}
                </span>

                <h2 className="card-title">{blog.title}</h2>

                <p className="text-sm text-gray-500">{blog.description}</p>

                <div className="text-xs text-gray-400 flex justify-between mt-4">
                  <span>{blog.author}</span>
                  <span>{blog.readTime}</span>
                </div>

                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-xs text-gray-400">{blog.date}</span>
                  <button className="btn btn-link btn-sm text-success">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-16">
          <div className="join">
            <button className="join-item btn btn-outline">Prev</button>
            <button className="join-item btn btn-active">1</button>
            <button className="join-item btn btn-outline">2</button>
            <button className="join-item btn btn-outline">Next</button>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h3 className="text-2xl font-semibold mb-3">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Get the latest articles and updates straight to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
            <button className="btn btn-success">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
