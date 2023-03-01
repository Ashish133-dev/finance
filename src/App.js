import "./App.css";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { ForgetPassword } from "./pages/ForgetPassword";
import { Registration } from "./pages/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
