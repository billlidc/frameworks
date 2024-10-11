# Build a React App with Create React App



## Resources
- [Create React App GitHub Repository](https://github.com/facebook/create-react-app)
- [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)


## Step-by-Step Guide

> Check versions of Node.js and npm installed

```bash
node -v
```

```bash
npm -v
```

> Install `create-react-app` globally (optional)

```bash
npm install -g create-react-app
```

> Create a new react project

```bash
npx create-react-app my-app
```

> Navigate to the project directory

```bash
cd my-app
```

> Start the development server

```bash
npm start
```

- Opens the app in your default browser at `http://localhost:3000`.
- The browser will automatically refresh to reflect the updates.

> Edit the project

```javascript
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

> Install additional packages with npm (optional)

```bash
npm install react-router-dom axios
```

> Build the app for production

```bash
npm run build
```

- Creates an optimized version of the app in the `build` folder, which is ready to be deployed.

> Deploy the app

- Deploy the app to services like **Netlify**, **Vercel**, or **GitHub Pages**.
- Integrate the React frontend with a backend API built using Node.js (with Express.js as a framework).
