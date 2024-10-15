# Express


### Option 1: Express Generator

**Note**: The `express-generator` creates a basic structure that includes routes, views, and middleware to handle requests and responses. Unnecessary components can be easily removed, allowing customization for building APIs.

1. Install express generator globally
   ```bash
   npm install -g express-generator
   ```

2. Create a new Express app
   ```bash
   express backend
   ```

3. Install dependencies
   ```bash
   cd backend
   npm install
   ```

4. Start the backend server, accessible at `http://localhost:3000`
   ```bash
   npm start
   ```


### Option 2: Manual Setup

1. Create a `backend` folder manually
   ```bash
   mkdir backend
   ```

2. Generate a `package.json` file
   ```bash
   npm init -y
   ```
   
3. Install Express and other necessary middleware such as CORS and dotenv
   ```bash
   npm install express cors dotenv
   ```

4. Create `index.js` or `server.js` file and set up the backend routes

   ```js
   const express = require('express');
   const app = express();
   const PORT = process.env.PORT || 5000;

   // Middleware to parse JSON and enable CORS
   app.use(express.json());
   const cors = require('cors');
   app.use(cors());

   // A simple route for testing
   app.get('/', (req, res) => {
   res.send('Hello, Express!');
   });

   // Start the server
   app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
   });
   ```

4. Start the backend server, accessible at `http://localhost:5000`
   ```bash
   node index.js
   ```


### Option 3: Boilerplates and Starters from GitHub

Various **boilerplate projects** are available on GitHub that can be cloned to quickly set up both frontend and backend. These projects are created by developers to save time and avoid writing repetitive boilerplate code.

For example:
- **React + Express**: [simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack)
