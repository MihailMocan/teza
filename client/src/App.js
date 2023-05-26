import { Registration } from "./Components/AuthComponents/Registration";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./Components/AuthComponents/Login";
import MainPage from "./Components/MainPage";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { PassportPreview } from "./Components/Services/Passport/PassportPreview";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="main" element={<MainPage />} />
          <Route path="passport" element={<PassportPreview />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
