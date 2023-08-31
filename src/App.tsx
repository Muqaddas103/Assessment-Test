import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropertyDetail from "./pages/propertyDetails";
import Home from "./pages/home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property-detail/:id" element={<PropertyDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
