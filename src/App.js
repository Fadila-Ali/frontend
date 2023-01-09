// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";

// COMPONENTS
import "./App.css";
import NavBar from "./components/NavBar";
import ShowDetails from "./Pages/ShowDetails";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Error from "./Pages/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/transactions" element={<Home />} />
            <Route path="/transactions/:index" element={<ShowDetails />} />
            <Route path="/transactions/:index/edit" element={<Edit />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
