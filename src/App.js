import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Varsayılan veya anasayfa olarak bir route daha ekleyebilirsiniz */}
        {/*<Route path="/" element={<Home />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
