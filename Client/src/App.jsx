// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionListPage from "./pages/QuestionList";
import QuestionPage from "./pages/Question";
import QuestionForm from "./components/QuestionForm";
import Register from "./pages/Register";
import ProtectedRoute from "./pages/ProtectedRoute";
import Utilities from "./pages/Utilities";

const App = () => {
  return (
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
            <Route path="/" element={<QuestionListPage />} />
            <Route
              path="/questions/:questionId"
              element={<QuestionPage />}
            />
            <Route path="/submit-question" element={<QuestionForm />} />
          </Route>
        </Routes>
      </Router>

    
  );
};

export default App;
