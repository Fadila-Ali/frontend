// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

// PAGES
import Home from "./Pages/Home";
import ShowDetails from "./Pages/ShowDetails";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Error from "./Pages/Error";
import Index from "./Pages/Index";
import "./App.css";

// COMPONENTS
import NavBar from "./components/NavBar";
import BarChart from "./components/BarChart";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Pinch Pennies</title>
          <link rel="canonical" href="http://mysite.com/example"></link>
          <meta name="description" content="Budget App"></meta>
        </Helmet>
      </HelmetProvider>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chart" element={<BarChart />} />
            <Route path="/transactions" element={<Index />} />
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
