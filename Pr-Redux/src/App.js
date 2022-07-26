import Add from "./Admin/Add";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Admin/Home";
import Update from "./Admin/Update";
import Login from "./Admin/Login";
import Nav from "./Admin/Nav";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Update />} />
        <Route path="/add" element={<Add />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
