// pages/dashboard/Overview.jsx
const Overview = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="stat bg-base-100 shadow rounded-xl">
        <div className="stat-title">Users</div>
        <div className="stat-value">1,245</div>
      </div>

      <div className="stat bg-base-100 shadow rounded-xl">
        <div className="stat-title">Orders</div>
        <div className="stat-value">560</div>
      </div>

      <div className="stat bg-base-100 shadow rounded-xl">
        <div className="stat-title">Revenue</div>
        <div className="stat-value">$12k</div>
      </div>
    </div>
  );
};

export default Overview;
