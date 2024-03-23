// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionListPage from './pages/QuestionList';
import QuestionPage from './pages/Question';
import QuestionForm from './components/QuestionForm';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <div>
        <h1>My Coaching Website</h1>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<QuestionListPage />} />
          <Route path="/questions/:questionId/:questionTitle/:questionBody" element={<QuestionPage />} />
          <Route path="/submit-question" element={<QuestionForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
