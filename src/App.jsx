import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import NotFoundPage from "./pages/404Page/404Page";
import Spinner from "./Components/Spinner/Spinner";
import MainLayout from "./admin/MainLayout/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* <Route path="*" element={<Navigate to="/404" />} /> */}

          <Route>
            <Route path="/admin" element={<MainLayout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
