import './App.css';
import CVsList from './components/cvs-list/CVsList'
import CV from './components/cv/CV'
import { Routes, Route } from 'react-router-dom';
import CVForm from './components/cv-form/CVForm';


function App() {
  return (
    <div className="App">
      <div className="header"><h1>GLANCE</h1></div>
      <div className="body">
        <Routes>
          <Route path="/" element={<CVsList />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/new" element={<CVForm />} />
        </Routes>
      </div>
      <div className="footer">Developed by GLANCE.CORP in 2023</div>
    </div>
  );
}

export default App;
