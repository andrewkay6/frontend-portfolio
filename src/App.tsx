import { useRef, useState, useEffect } from 'react';
import HomePage from './HomePage';
import Header from './Header';
import AboutPage from './AboutPage';
import ResumePage from './ResumePage'; 
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';


function App() {
  const [pageState, setPageState] = useState("");
  return (

    <div className="App">
      <Header
        pageState={pageState}
        setPageState={setPageState}
      />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ResumePage />
      <ContactPage />
    </div>
  );
}

export default App;
