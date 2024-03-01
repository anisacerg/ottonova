import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './CityList.css';

const CityList = ({ cities }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCriteria, setFilterCriteria] = useState('');
  const [sortedCities, setSortedCities] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    if (!cities) return;
    const filteredCities = cities.filter(
      (city) =>
        city.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filterCriteria === '' ||
          city.continent.toLowerCase() === filterCriteria.toLowerCase())
    );
    const sortedCities = [...filteredCities];
    if (sortBy === 'name') {
      sortedCities.sort((a, b) =>
        sortOrder === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
    } else if (sortBy === 'founded') {
      sortedCities.sort((a, b) =>
        sortOrder === 'asc'
          ? parseInt(a.founded) - parseInt(b.founded)
          : parseInt(b.founded) - parseInt(a.founded)
      );
    }
    setSortedCities(sortedCities);
  }, [cities, searchQuery, filterCriteria, sortOrder, sortBy]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterCriteria(event.target.value);
  };

  const handleSortOrderChange = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
    setSortOrder('asc');
  };

  const getSortButtonText = () => {
    if (sortBy === 'founded') {
      return sortOrder === 'asc' ? 'Oldest' : 'Newest';
    } else {
      return sortOrder === 'asc' ? 'A-Z' : 'Z-A';
    }
  };

  return (
    <div className="city-list-container">
      <div className="city-list">
        <h2>List of Cities</h2>
        <div className="filters">
          <TextField
            id="search"
            label="Search by city name"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <TextField
            select
            id="filter"
            label="Filter by continent"
            variant="outlined"
            value={filterCriteria}
            onChange={handleFilterChange}
            className="filter-dropdown"
          >
            <MenuItem value="">All Continents</MenuItem>
            <MenuItem value="australia">Australia</MenuItem>
            <MenuItem value="north america">North America</MenuItem>
            <MenuItem value="europe">Europe</MenuItem>
            <MenuItem value="asia">Asia</MenuItem>
            <MenuItem value="africa">Africa</MenuItem>
            <MenuItem value="south america">South America</MenuItem>
          </TextField>
          <TextField
            select
            id="sortBy"
            label="Sort by"
            variant="outlined"
            value={sortBy}
            onChange={handleSortByChange}
          >
            <MenuItem value="name">Name (A-Z)</MenuItem>
            <MenuItem value="founded">Founded Year</MenuItem>
          </TextField>
          <Button
            variant="contained"
            onClick={handleSortOrderChange}
            className="sort-button"
          >
            {getSortButtonText()}
          </Button>
        </div>
        <div className="city-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Continent</th>
                <th>Founded Year</th>
                <th>Landmarks</th>
              </tr>
            </thead>
            <tbody>
              {sortedCities.map((city, index) => (
                <tr key={index}>
                  <td>{city.name}</td>
                  <td>{city.country}</td>
                  <td>{city.continent}</td>
                  <td>{city.founded}</td>
                  <td>{city.landmarks.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CityList;
