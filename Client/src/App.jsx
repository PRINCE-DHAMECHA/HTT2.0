// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionListPage from './pages/QuestionList';
import QuestionPage from './pages/Question';
import QuestionForm from './components/QuestionForm';
import Navbar from './components/Navbar';
import Hero from './components/Home/Hero';

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="" element={<Hero />} index />
          <Route path="/question" element={<QuestionListPage />} />
          <Route path="/questions/:questionId" element={<QuestionPage />} />
          <Route path="/submit-question" element={<QuestionForm />} />
        </Routes>
      </Router>
    </>
    
  );
};

export default App;
