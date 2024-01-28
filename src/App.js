import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import NavBar from "./component/Navbar/NavBar";
import HomeScreen from "./component/Screen/HomeScreen";
import FaqScreen from "./component/Screen/FaqScreen";
import StudentsScreen from "./component/StudentsScreen";
import SchoolScreen from "./component/SchoolScreen";
import ContactUsScreen from "./component/contactUsScreen";
import StudyAgents from "./component/StudyAgents";
import StudentApplicationGuide from "./component/StudentApplicationGuide";
import AboutUs from "./component/AboutUs";
import StudyInCountries from "./component/StudyInCountries";
import AllCountries from "./component/StudyDestinations/AllCountries";
import BachelorsDegrees from "./component/BachelorsDegrees";
import ScrollToTop from "./component/ScrollToTop";
import OnlineDegrees from "./component/OnlineDegrees";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <ScrollToTop/> */}
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route  path="/faq/" element={<FaqScreen />} />
          <Route  path="/Students/" element={<StudentsScreen />} />
          <Route  path="/schools/" element={<SchoolScreen />} />
          <Route  path="/contact-us/" element={<ContactUsScreen />} />
          <Route  path="/study-agents/" element={<StudyAgents />} />
          <Route  path="/student-application-guide/" element={<StudentApplicationGuide />} />   
          <Route  path="/about-us/" element={<AboutUs />} />
          <Route  path="/study-destinations/study-in-germany/" element={<StudyInCountries />} />
          <Route  path="/study-destinations/" element={<AllCountries />} />
          <Route  path="/bachelors-degrees/" element={<BachelorsDegrees />} />
          
          <Route  path="/online-degrees/" element={<OnlineDegrees />} />
        
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
