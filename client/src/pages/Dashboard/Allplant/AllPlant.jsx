import AllPlantsTable from '../../../components/Tables/AllPlantsTable';

const AllPlant = () => {
  const plants = [
    {
      _id: '1',
      name: 'Rose',
      type: 'Flower',
      category: 'Outdoor',
      price: 12,
    },
    {
      _id: '2',
      name: 'Aloe Vera',
      type: 'Medicinal',
      category: 'Indoor',
      price: 8,
    },
  ];
  const handleDelete = id => {
    if (confirm('Are you sure you want to delete this plant?')) {
      console.log('Delete plant id:', id);
      // API call here
    }
  };

  return (
    <div>
      <AllPlantsTable plants={plants} onDelete={handleDelete} />
    </div>
  );
};

export default AllPlant;
