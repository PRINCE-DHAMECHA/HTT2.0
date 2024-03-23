// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionListPage from './pages/QuestionList';
import QuestionPage from './pages/Question';
import QuestionForm from './components/QuestionForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>My Coaching Website</h1>
        <Routes>
          <Route path="/" element={<QuestionListPage />} />
          <Route path="/questions/:questionId" element={<QuestionPage />} />
          <Route path="/submit-question" element={<QuestionForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
