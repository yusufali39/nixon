import "./App.css";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from "react-router-dom";
import PreLoader from "./components/PreLoader";
import Course from "./components/Pages/Courses/Course";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import FAQs from "./components/Navbar/FAQs/Faqs";
import About from "./components/Navbar/About/About";
import Contact from "./components/Navbar/Contact/Contact";

function App() {
  return(
  <>
  <PreLoader />
  <Router>
  <Navbar />
  <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/Course" element={<Course/>} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />}></Route>
  </Routes>
  <Footer />
  </Router>
  </>
  )
}

export default App;
