import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./component/about/About";
import Home from "./component/home/Home";
import Login from "./component/authentication/Login";
import Register from "./component/authentication/Register";
import ProtectedRoute from "./component/authentication/ProtectedRoute";
import Article from "./component/article/Article";
import ArticleDetail from "./component/article/ArticleDetail";
import NavigationBar from "./component/NavigationBar";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="article" element={<Article />} />
        <Route
          path="article/:id"
          element={
            <ProtectedRoute>
              <ArticleDetail />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
