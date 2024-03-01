import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CityList from './components/CityList';

function App() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/cities');
        setCities(response.data.cities);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      {loading ? <div>Loading...</div> : <CityList cities={cities} />}
    </div>
  );
}

export default App;
