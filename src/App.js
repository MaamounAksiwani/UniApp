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
import MastersDegree from "./component/MastersDegree/Index";
import NoTitle from "./component/NoTitle";
import CategoryUncategorized from "./component/CategoryUncategorized";
import AcademicPapers from "./component/AcademicPapers";
import StudyMedicineInGermany from "./component/StudyMedicineInGermany";
import GuideFirstTimeStudents from "./component/StudentApplicationGuide/GuideToCollege/GuideFirstTimeStudents";
import GuideTransferStudent from "./component/StudentApplicationGuide/GuideToCollege/GuideTransferStudent";
import Afghanistan from "./component/StudyInCountries/Afghanistan";
import StudyMedicine from "./component/StudyMedicine"
import PrivacyAndTerms from "./component/PrivacyAndTerms";
import Terms from "./component/PrivacyAndTerms/Terms";
import Impressum from "./component/PrivacyAndTerms/Impressum";
import France from "./component/StudyInCountries/France";
import USA from './component/StudyInCountries/USA'
import UnitedKingdom from "./component/StudyInCountries/UnitedKingdom";


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
          <Route  path="/student-application-guide/" element={<StudentApplicationGuide />} />   
          <Route  path="/about-us/" element={<AboutUs />} />
          <Route  path="/study-destinations/study-in-germany/" element={<StudyInCountries />} />
          <Route  path="/study-destinations/" element={<AllCountries />} />
          <Route  path="/bachelors-degrees/" element={<BachelorsDegrees />} />
          <Route  path="/online-degrees/" element={<OnlineDegrees />} />        
          <Route  path="/masters-degree-in-tourism-and-hospitality-management/" element={<MastersDegree />} />
          <Route  path="/14128-2/" element={<NoTitle />} />
          <Route  path="/category/uncategorized/" element={<CategoryUncategorized />} />
          <Route  path="/where-to-source-for-academic-papers/" element={<AcademicPapers />} />
          <Route  path="/study-medicine-in-germany-for-international-students/" element={<StudyMedicineInGermany />} />
          <Route  path="/student-application-guide/first-time-students/" element={<GuideFirstTimeStudents />} />
          <Route  path="/student-application-guide/transfer-student/" element={<GuideTransferStudent />} />
          <Route  path="/student-application-guide/transfer-student/" element={<GuideTransferStudent />} />
          <Route  path="/Afghanistan/" element={<Afghanistan/>} />
          <Route  path="/study-medicine-in-europe/" element={<StudyMedicine/>} />
          <Route path="/privacy/" element={<PrivacyAndTerms/>}/>
          <Route path="/impressum/" element={<Impressum/>}/>
          <Route path="/terms/" element={<Terms/>}/>
          <Route path="/study-destinations/study-in-france/" element={<France/>}/>
          <Route path="/study-destinations/study-in-usa/" element={<USA/>}/>
          <Route path="/study-destinations/study-in-united-kingdom/" element={<UnitedKingdom/>}/>

          {/* /study-destinations/study-in-united-kingdom/ */}
        </Routes>
        <ScrollToTop/>
        <Footer />
      </BrowserRouter>
    </>
  )
};

export default App;
