import { useState } from "react";
import reactLogo from "./assets/img/react.svg";
import viteLogo from "/vite.svg";
import "./assets/css/App.css";
import { Home, About, Contact } from "./page";

function App() {
  let homeData = <Home />;
  let aboutData = <About />;
  let contactData = <Contact />;
  let [mainContent, setContent] = useState(homeData);

  return (
    <>
      <nav>
        <ul>
          <li>
            <a onClick={()=> setContent(homeData)}>Home</a>
          </li>
          <li>
            <a onClick={()=> setContent(aboutData)}>About Us</a>
          </li>
          <li>
            <a onClick={()=> setContent(contactData)}>Contact</a>
          </li>
        </ul>
      </nav>

      {mainContent}
    </>
  );
}

export default App;
