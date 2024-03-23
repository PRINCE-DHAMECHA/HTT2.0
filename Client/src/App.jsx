// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import QuestionListPage from "./pages/QuestionList";
import QuestionPage from "./pages/Question";
import QuestionForm from "./components/QuestionForm";
import Register from "./pages/Register";
import ProtectedRoute from "./pages/ProtectedRoute";
import Utilities from "./pages/Utilities";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import QuestionListPage from "./pages/QuestionList";

const App = () => {
  // TODO : Add NavBar into routes such that we can access all routes in Navbar and also it should display on all routes
  return (
    <>
    <Navbar /> 
    <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Utilities />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/question" element={<QuestionListPage/>} />
            <Route
              path="/questions/:questionId"
              element={<QuestionPage />}
            />
            <Route path="/submit-question" element={<QuestionForm />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
