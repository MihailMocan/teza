import logo from "./logo.svg";
import "./App.css";
import { Registration } from "./Components/AuthComponents/Registration";
import { Login } from "./Components/AuthComponents/Login";

function App() {
  return (
    <div className="App">
      {/*<Registration />*/}\
      <Login />
    </div>
  );
}

export default App;
