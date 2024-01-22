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



const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route  path="/faq/" element={<FaqScreen />} />
          <Route  path="/Students/" element={<StudentsScreen />} />
          <Route  path="/schools/" element={<SchoolScreen />} />
          <Route  path="/contact-us/" element={<ContactUsScreen />} />
          <Route  path="/study-agents/" element={<StudyAgents />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
