import useRole from '../../hooks/useRole';
import AdminStatistics from './AdminStatistics';
import CustomerStatistics from './CustomerStatistics';
import SellerStatistic from './SellerStatistic';

const Analytics = () => {
  const { role } = useRole();
  //console.log(role);
  return (
    <div>
      {role === 'seller' && <SellerStatistic />}
      {role === 'admin' && <AdminStatistics />}
      {role === 'Customer' && <CustomerStatistics />}
    </div>
  );
};

export default Analytics;
