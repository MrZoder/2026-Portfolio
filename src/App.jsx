import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ZTraderCaseStudy from './pages/ZTraderCaseStudy';
import ShipSmartCaseStudy from './pages/ShipSmartCaseStudy';
import GarageFormsCaseStudy from './pages/GarageFormsCaseStudy';
import ZikrPulseCaseStudy from './pages/ZikrPulseCaseStudy';
import StudySprintCaseStudy from './pages/StudySprintCaseStudy';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/ztrader" element={<ZTraderCaseStudy />} />
        <Route path="/case-study/shipsmart" element={<ShipSmartCaseStudy />} />
        <Route path="/case-study/garage-forms" element={<GarageFormsCaseStudy />} />
        <Route path="/case-study/zikrpulse" element={<ZikrPulseCaseStudy />} />
        <Route path="/case-study/studysprint" element={<StudySprintCaseStudy />} />
      </Routes>
    </>
  );
}
