import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const Dashboard: React.FC = () => {
  const [inventoryData, setInventoryData] = useState({
    labels: [],
    datasets: [{
      label: 'Inventory Value',
      data: [],
      borderColor: 'rgba(75,192,192,1)',
      fill: false
    }]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/products');
        const labels = response.data.map(product => product.name);
        const data = response.data.map(product => product.quantity);
        setInventoryData({
          labels,
          datasets: [{ ...inventoryData.datasets[0], data }]
        });
      } catch (error) {
        console.error('Error fetching inventory data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard Operativa</h2>
      <div className="chart-container">
        <Line data={inventoryData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default Dashboard;