import PropTypes from 'prop-types';
import { FiDollarSign, FiClock, FiTruck } from 'react-icons/fi';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

const SellerStatistic = () => {
  // Demo statistics (replace with API data later)
  const totalEarnings = 45280;
  const pendingAmount = 3120;
  const totalDelivery = 128;

  const pieData = [
    { name: 'Total Earnings', value: totalEarnings },
    { name: 'Pending Amount', value: pendingAmount },
    { name: 'Deliveries', value: totalDelivery },
  ];

  const COLORS = ['#22c55e', '#facc15', '#3b82f6'];

  return (
    <div className="p-4 md:p-6">
      {/* TITLE */}
      <h2 className="text-xl font-semibold text-amber-500 mb-6">
        Seller Statistics
      </h2>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        <StatCard
          title="Total Earnings"
          value={`৳ ${totalEarnings.toLocaleString()}`}
          icon={<FiDollarSign size={26} />}
          color="bg-green-100 text-green-600"
        />

        <StatCard
          title="Pending Amount"
          value={`৳ ${pendingAmount.toLocaleString()}`}
          icon={<FiClock size={26} />}
          color="bg-yellow-100 text-yellow-600"
        />

        <StatCard
          title="Total Delivery"
          value={totalDelivery}
          icon={<FiTruck size={26} />}
          color="bg-blue-100 text-blue-600"
        />
      </div>

      {/* PIE CHART */}
      <div className="bg-white rounded-xl shadow p-4 md:p-6">
        <h3 className="text-lg font-semibold text-amber-500 mb-4">
          Earnings Overview
        </h3>

        <div className="w-full h-[320px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={110}
                innerRadius={60}
                dataKey="value"
                paddingAngle={3}
              >
                {pieData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) =>
                  typeof value === 'number'
                    ? `৳ ${value.toLocaleString()}`
                    : value
                }
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
      <div className={`p-3 rounded-full ${color}`}>{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
};

export default SellerStatistic;
