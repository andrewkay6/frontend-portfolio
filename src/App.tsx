import { useState } from 'react';
import HomePage from './HomePage';
import Header from './Header';
import AboutPage from './AboutPage';
import ResumePage from './ResumePage'; 
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';


function App() {
  const [pageState, setPageState] = useState("");
  
  let pageContents; 

  if (pageState === "home") {
    pageContents = <HomePage />;
  } else if (pageState === "about") {
    pageContents = <AboutPage />;
  } else if (pageState === "projects") {
    pageContents = <ProjectsPage />;
  } else if (pageState === "resume") {
    pageContents = <ResumePage />;
  } else if (pageState === "contact") {
    pageContents = <ContactPage />;
  } else {
    pageContents = <HomePage />;
  }
  return (

    <div className="App">
      <Header
        pageState={pageState}
        setPageState={setPageState}
      />
      {pageContents}
    </div>
  );
}

export default App;
