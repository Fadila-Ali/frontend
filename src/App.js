// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

// PAGES
import Home from "./Pages/Home";

// COMPONENTS
import "./App.css";
import NavBar from "./components/NavBar";
import ShowDetails from "./Pages/ShowDetails";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Error from "./Pages/Error";
import Index from "./Pages/Index";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pinch Pennies</title>
        <link rel="canonical" href="http://mysite.com/example"></link>
        <meta name="description" content="A YouTube clone"></meta>
      </Helmet>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
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
