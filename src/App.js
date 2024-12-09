import "./App.css";
import Header from "./components/Header"; // Import the Header component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // React Router v6
import Signup from "./pages/Signup"; // Import Signup Page
import Dashboard from "./pages/Dashboard"; // Import Dashboard Page
import About from "./pages/about"; // Import About Page
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        {/* Navbar is here */}
        <Header />
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App; 