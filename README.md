# TaxCalc - [Live Demo](https://justjcurtis.dev/TaxCalc/)
TaxCalc is a simple tax calculator that calculates the tax amount based on the given income. It consists of a C# backend and a React frontend. 
The backend is a simple REST API that takes the income as input and returns the tax amount. The frontend is a simple form that takes the income as input and displays the tax amount.

## Installation

### Prerequisites
1. Visual Studio
2. .NET 8.0
3. Node.js
4. npm or yarn

### Backend
1. Clone the repository
2. Open the solution in Visual Studio
3. Run the solution
4. The backend will be running on `https://localhost:5068` and your browser should open the included swagger documentation
5. You can test API manually from the swagger page or you can run the included unit test project

### Frontend
1. Clone the repository
2. Navigate to the `frontend` directory
3. Run `npm install` or `yarn install`
4. Create a .ENV file in the root of the frontend directory and add the following line `VITE_API_URL=https://localhost:5068` or some other URL where the backend is running (if you are using a dev tunnel for example)
4. Run `npm run dev` or `yarn dev`
5. The frontend will be running on `http://localhost:5173`

## Usage
0. Setup and run both the backend and frontend as instructed above
1. Navigate to `http://localhost:5173`
2. Enter the income in the input field (40000)
3. Click on the `Calc` button
4. The tax amount and other results will be displayed below the button
5. Enter a negative number and click the 'Calc' button to see the error message
6. Hitting calc without changing the input field will not perform additional requests
7. A loading indicator is shown within the button when the request is being processed
8. The frontend is responsive and works on mobile devices as well

## Technologies Used
- C#
- .NET 8.0
- xUnit
- Yarn
- Vite
- React
- Tailwind CSS
- DaisyUI
