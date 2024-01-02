
import './App.css';
import Header from './header/header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './header/home'
import About from './header/about'
import Contact from './header/contactus'
import Property1 from './23/property1'
import Final23 from './23/final'
import Last23 from './23/last'
import Property2 from './21/property2'
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Property1" element={<Property1 />} />
        <Route path="/Final" element={<Final23 />} />
        <Route path="/Last" element={<Last23 />} />
        <Route path="/Property2" element={<Property2 />} />
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
