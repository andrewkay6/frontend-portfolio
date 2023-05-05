import { useState } from 'react';
import Header from './Header';
import AnimatedRoutes from './AnimatedRoutes';

function App() {

  const [pageState, setPageState] = useState("");
  
  return (

    <div className="App">
      <Header
        pageState={pageState}
        setPageState={setPageState}
      />
      <AnimatedRoutes/>
    </div>
  );
}

export default App;
