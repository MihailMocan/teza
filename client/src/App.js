import logo from "./logo.svg";
import { Registration } from "./Components/AuthComponents/Registration";
import { Login } from "./Components/AuthComponents/Login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { MainPage } from "./Components/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
