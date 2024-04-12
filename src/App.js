import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import Form from "./pages/Form.jsx";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nouvelle-tache" element={<Form />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
