import "./Components/custom.css";
import './App.css';
import Nav from './Components/Nav';
import Back from "./Components/Back";
import { Routes, Route } from "react-router-dom";
import Info from './Components/Info';
import About from './Components/About';
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Whychoose from "./Components/Whychoose";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Userpage from "./Components/Userpage.js";
import Userpagenew from "./Components/Userpagenew";


function App() {
 
  
  return (
    <body>
      
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="nav" element={<Nav/>}/>
          <Route path="registration" element={<Registration/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="whychoose" element={<Whychoose/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="userpagenew" element={<Userpagenew/>}/>
          <Route exact path="userpage" element={<Userpage/>}/>
         
          
        </Routes>
    
        <div>
        <header id="header" className="fixed-top d-flex align-items-center">
          <div className="container">
            <Nav />
      

          </div>
        </header>
        <Back />
      </div>
      <div>
        <Info />


      </div>
      <main id="main">
        <section>
          <About />
        </section>
        <section>
          <Services />
        </section>
        <Whychoose />

        <Contact />
        
      </main>
 
    </body >

  );
}

export default App;
