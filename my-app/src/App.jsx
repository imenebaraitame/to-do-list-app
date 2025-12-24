import List from './components/list';
// import { useState } from 'react';

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  //  const toggleMode = () => {
  //       setDarkMode(prev => !prev);
  //   };
  
  return (
    <>
      {/* <div className={darkMode ? "dark" : "light"}>
          <button className="toggle-btn" onClick={toggleMode}>
              <i className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
          </button> */}
      
        <List />  
      {/* </div>  */}
    </>
  );
}

export default App
