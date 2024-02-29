# ottonova
coding challenge
Frontend Development
Introduction:
The React frontend application is designed to display a list of cities along with their details such as country, continent, founded year, and landmarks. Users can search for cities, filter them by continent, and sort them based on different criteria.
Components:
The CityList component is responsible for rendering the list of cities along with search, filter, and sorting functionalities.
Props:
cities  An array of city objects containing details like name, country, continent, founded year, and landmarks.
Functionality:
Search Users can search for cities by typing in the search input field. The list of cities dynamically updates as the user types.
Filter Users can filter cities by continent using the dropdown menu.
Sort Users can sort the list of cities either alphabetically by name or by the
year founded. They can also toggle between ascending and descending order.
App.js:
The App component serves as the entry point of the React application. It fetches city data from the backend API and passes it down to the CityList component.
Functionality:
Data Fetching Upon component mounting, the App component fetches city data from the backend API using Axios.
Loading State While data is being fetched, a loading indicator is displayed.
ottonova challenge documentation 1
Rendering Once data is fetched, the CityList component is rendered with the received city data.
Usage:
To use our frontend React application, follow these steps:
 Install dependencies using npm install .
 Start the development server using npm start .
 Open your web browser and navigate to the specified URL (usually http://localhost:3000 ).
Dependencies:
React Axios Material-UI
Backend Development
Introduction:
This backend server is built to serve data about various cities around the world. The Express.js backend application provides a simple and efficient API for accessing information about cities globally. Leveraging the power of Express.js, we've created a robust server that delivers city data in a structured format, allowing developers to easily incorporate it into their applications.
Key features:
City Data: Retrieve detailed information about cities, including their names, countries, continents, populations, and landmarks.
API Endpoints: Access city data through well-defined API endpoints, making integration seamless for frontend applications.
Scalability: Built on Express.js, our backend application is highly scalable, capable of handling large amounts of traffic and data requests.
    ottonova challenge documentation 2

Easy Setup: With straightforward installation steps and minimal dependencies, getting started with our backend application is quick and hassle-free.
Installation and setup:
API End point:
GET /api/cities
 Retrieves a list of cities. Request Parameters: None
Response Data: Array of city objects containing name, country, continent, latitude, longitude, population, founded, and landmarks.
Dependencies:
express cors
fs
Running the server:
Frontend Testing
The result:
 git clone <repository-url>
cd backend
npm install
npm start
 node index.js
  PASS  src/components/CityList.test.js
Test Suites: 1 failed, 1 passed, 2 total
ottonova challenge documentation 3

 Tests:
Snapshots:
Time:
1 passed, 1 total
0 total
3.829 s
Backend Testing
Dependencies:
Jest A JavaScript testing framework used for writing and running tests. Supertest A library used to make HTTP assertions in tests
Express.js The backend web framework used for handling HTTP requests.
Setup:
Install Dependencies:
Creating test file:
 npm install --save-dev jest
 npm install --save-dev jest supertest
 const request = require('supertest');
const app = require('./index');
describe('GET /api/cities', () => {
  it('responds with JSON containing a list of cities', async ()
    const response = await request(app).get('/api/cities');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.cities)).toBe(true);
    expect(response.body.cities).toHaveLength(8);
  });
});
ottonova challenge documentation 4

describe('GET /api/cities/:id', () => {});
Running tests:
Test coverage:
Handling of valid requests:
The test case verifies that the endpoint /api/cities responds with a status code of 200 and returns a JSON containing a list of cities. This verifies the handling of valid requests.
npm test
 
