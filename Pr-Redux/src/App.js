import Add from "./Admin/Add";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Admin/Home";
import Home2 from "./Admin/Home2";
import Update from "./Admin/Update";
import Login from "./Admin/Login";
import Nav from "./Admin/Nav";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/add" element={<Add />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
