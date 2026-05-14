import { AnimatePresence, motion } from 'framer-motion';
import { AppProvider, useApp } from './context/AppContext';
import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import TestRulesScreen from './components/TestRulesScreen';
import InterestTestScreen from './screens/InterestTestScreen';
import InterestResultsScreen from './screens/InterestResultsScreen';
import AptitudeTestScreen from './screens/AptitudeTestScreen';
import FinalResultScreen from './screens/FinalResultScreen';
import CareerPathDashboard from './screens/CareerPathDashboard';
import UserDashboardScreen from './screens/UserDashboardScreen';
import AcademicCoursesScreen from './screens/AcademicCoursesScreen';
import AcademicStreamsScreen from './screens/AcademicStreamsScreen';
import ScienceStreamsScreen from './screens/ScienceStreamsScreen';
import CommerceStreamsScreen from './screens/CommerceStreamsScreen';
import BusinessFocusScreen from './screens/BusinessFocusScreen';
import BankingEconomicsFocusScreen from './screens/BankingEconomicsFocusScreen';
import FinanceAccountingFocusScreen from './screens/FinanceAccountingFocusScreen';
import FinanceITFocusScreen from './screens/FinanceITFocusScreen';
import CivilServicesFocusScreen from './screens/CivilServicesFocusScreen';
import LawFocusScreen from './screens/LawFocusScreen';
import ArtsHumanitiesFocusScreen from './screens/ArtsHumanitiesFocusScreen';
import PsychologyFocusScreen from './screens/PsychologyFocusScreen';
import MediaFocusScreen from './screens/MediaFocusScreen';
import ArtsFocusScreen from './screens/ArtsFocusScreen';
import GeographyFocusScreen from './screens/GeographyFocusScreen';
import DiplomaPolytechnicScreen from './screens/DiplomaPolytechnicScreen';
import EngineeringDiplomasScreen from './screens/EngineeringDiplomasScreen';
import MechanicalManufacturingScreen from './screens/MechanicalManufacturingScreen';
import CivilInfrastructureScreen from './screens/CivilInfrastructureScreen';
import ElectricalPowerSystemsScreen from './screens/ElectricalPowerSystemsScreen';
import ElectronicsCommunicationScreen from './screens/ElectronicsCommunicationScreen';
import ComputerITEngineeringScreen from './screens/ComputerITEngineeringScreen';
import AutomobileEVTechnologyScreen from './screens/AutomobileEVTechnologyScreen';
import RoboticsAutomationScreen from './screens/RoboticsAutomationScreen';
import EnvironmentalEnergyEngineeringScreen from './screens/EnvironmentalEnergyEngineeringScreen';
import IndustrialProductionTechnologyScreen from './screens/IndustrialProductionTechnologyScreen';
import CommerceBusinessDiplomasScreen from './screens/CommerceBusinessDiplomasScreen';
import BusinessManagementDiplomaScreen from './screens/BusinessManagementDiplomaScreen';
import AccountingFinanceDiplomaScreen from './screens/AccountingFinanceDiplomaScreen';
import BankingInsuranceDiplomaScreen from './screens/BankingInsuranceDiplomaScreen';
import DigitalMarketingEcommerceDiplomaScreen from './screens/DigitalMarketingEcommerceDiplomaScreen';
import RetailSalesManagementDiplomaScreen from './screens/RetailSalesManagementDiplomaScreen';
import EntrepreneurshipStartupManagementDiplomaScreen from './screens/EntrepreneurshipStartupManagementDiplomaScreen';
import LogisticsSupplyChainDiplomaScreen from './screens/LogisticsSupplyChainDiplomaScreen';
import SoftwareAppDevelopmentScreen from './screens/SoftwareAppDevelopmentScreen';
import NetworkingCloudCybersecurityScreen from './screens/NetworkingCloudCybersecurityScreen';
import AIDataScienceIoTScreen from './screens/AIDataScienceIoTScreen';
import GameDevelopmentMultimediaScreen from './screens/GameDevelopmentMultimediaScreen';
import UIUXWebTechnologiesScreen from './screens/UIUXWebTechnologiesScreen';
import MedicalParamedicalDiplomasScreen from './screens/MedicalParamedicalDiplomasScreen';
import NursingPatientCareScreen from './screens/NursingPatientCareScreen';
import PharmacyScreen from './screens/PharmacyScreen';
import LabDiagnosticTechnologyScreen from './screens/LabDiagnosticTechnologyScreen';
import ImagingOperationTheatreScreen from './screens/ImagingOperationTheatreScreen';
import EmergencyCardiacDialysisScreen from './screens/EmergencyCardiacDialysisScreen';
import DentalEyeRehabilitationScreen from './screens/DentalEyeRehabilitationScreen';
import HospitalAdministrationPublicHealthScreen from './screens/HospitalAdministrationPublicHealthScreen';
import GeneralNursingScreen from './screens/GeneralNursingScreen';
import CriticalCareNursingScreen from './screens/CriticalCareNursingScreen';
import PediatricNursingScreen from './screens/PediatricNursingScreen';
import GeriatricNursingScreen from './screens/GeriatricNursingScreen';
import PharmacyPracticeScreen from './screens/PharmacyPracticeScreen';
import PharmaceuticalChemistryScreen from './screens/PharmaceuticalChemistryScreen';
import HospitalPharmacyScreen from './screens/HospitalPharmacyScreen';
import RetailPharmacyScreen from './screens/RetailPharmacyScreen';
import MedicalLaboratoryTechnologyScreen from './screens/MedicalLaboratoryTechnologyScreen';
import PathologyLaboratoryScreen from './screens/PathologyLaboratoryScreen';
import DiagnosticImagingScreen from './screens/DiagnosticImagingScreen';
import ClinicalLaboratoryScreen from './screens/ClinicalLaboratoryScreen';
import MedicalStreamCombinationsScreen from './screens/MedicalStreamCombinationsScreen';
import MedicalImagingTechnologyScreen from './screens/MedicalImagingTechnologyScreen';
import OperationTheatreTechnologyScreen from './screens/OperationTheatreTechnologyScreen';
import RadiologyImagingScreen from './screens/RadiologyImagingScreen';
import SurgicalTechnologyScreen from './screens/SurgicalTechnologyScreen';
import EmergencyMedicalTechnologyScreen from './screens/EmergencyMedicalTechnologyScreen';
import CardiacCareTechnologyScreen from './screens/CardiacCareTechnologyScreen';
import DialysisTechnologyScreen from './screens/DialysisTechnologyScreen';
import CriticalCareEmergencyScreen from './screens/CriticalCareEmergencyScreen';
import DentalTechnologyScreen from './screens/DentalTechnologyScreen';
import OptometryTechnologyScreen from './screens/OptometryTechnologyScreen';
import RehabilitationTherapyScreen from './screens/RehabilitationTherapyScreen';
import ProstheticsOrthoticsScreen from './screens/ProstheticsOrthoticsScreen';
import HospitalAdministrationScreen from './screens/HospitalAdministrationScreen';
import PublicHealthManagementScreen from './screens/PublicHealthManagementScreen';
import HealthcareManagementScreen from './screens/HealthcareManagementScreen';
import MedicalRecordManagementScreen from './screens/MedicalRecordManagementScreen';
import DesignCreativeDiplomasScreen from './screens/DesignCreativeDiplomasScreen';
import AnimationMultimediaScreen from './screens/AnimationMultimediaScreen';
import UIUXWebDesignScreen from './screens/UIUXWebDesignScreen';
import FashionDesignScreen from './screens/FashionDesignScreen';
import InteriorDesignScreen from './screens/InteriorDesignScreen';
import PhotographyVideoProductionScreen from './screens/PhotographyVideoProductionScreen';
import FineArtsIllustrationScreen from './screens/FineArtsIllustrationScreen';
import EngineeringStreamCombinationsScreen from './screens/EngineeringStreamCombinationsScreen';
import ComputerITStreamCombinationsScreen from './screens/ComputerITStreamCombinationsScreen';
import PureScienceResearchScreen from './screens/PureScienceResearchScreen';
import AgricultureEnvironmentalDiplomaScreen from './screens/AgricultureEnvironmentalDiplomaScreen';
import AgricultureEnvironmentalComparisonScreen from './screens/AgricultureEnvironmentalComparisonScreen';
import HospitalityTourismDiplomaScreen from './screens/HospitalityTourismDiplomaScreen';
import HotelManagementDiplomaScreen from './screens/HotelManagementDiplomaScreen';
import TourismManagementDiplomaScreen from './screens/TourismManagementDiplomaScreen';
import CulinaryArtsDiplomaScreen from './screens/CulinaryArtsDiplomaScreen';
import EventManagementDiplomaScreen from './screens/EventManagementDiplomaScreen';
import AirlineManagementDiplomaScreen from './screens/AirlineManagementDiplomaScreen';
import SpaWellnessDiplomaScreen from './screens/SpaWellnessDiplomaScreen';
import HorticultureDiplomaScreen from './screens/HorticultureDiplomaScreen';
import DairyAnimalHusbandryDiplomaScreen from './screens/DairyAnimalHusbandryDiplomaScreen';
import FisheriesAquacultureDiplomaScreen from './screens/FisheriesAquacultureDiplomaScreen';
import EnvironmentalScienceSustainabilityDiplomaScreen from './screens/EnvironmentalScienceSustainabilityDiplomaScreen';
import ForestryWildlifeManagementDiplomaScreen from './screens/ForestryWildlifeManagementDiplomaScreen';
import AgriculturalBusinessFarmManagementDiplomaScreen from './screens/AgriculturalBusinessFarmManagementDiplomaScreen';
import VocationalITIScreen from './screens/VocationalITIScreen';
import VocationalCareerPathScreen from './screens/VocationalCareerPathScreen';
import GovernmentExamsScreen from './screens/GovernmentExamsScreen';
import SkillBasedCoursesScreen from './screens/SkillBasedCoursesScreen';
import CareerRoleScreen from './screens/CareerRoleScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import FeaturesScreen from './screens/FeaturesScreen';
import GetPremiumScreen from './screens/GetPremiumScreen';
import DynamicCareerPage from './screens/DynamicCareerPage';
import ChatBot from './components/ui/ChatBot';
import SubscriptionModal from './components/ui/SubscriptionModal';
import Toast from './components/ui/Toast';

function AppContent() {
  const { screen, setScreen, authReady, selectedVocationalStream, previousScreen, isPremiumModalOpen, toast, hideToast, selectedCareerId } = useApp();
  console.log('Current screen:', screen);

  if (!authReady) {
    return (
      <div className="min-h-screen bg-[#081120] text-white flex items-center justify-center">
        <div className="glass-strong rounded-3xl border border-white/10 px-8 py-6 text-center">
          <div className="mx-auto mb-4 h-10 w-10 rounded-full border-2 border-cyan-400/30 border-t-cyan-300 animate-spin" />
          <p className="text-sm text-white/70">Restoring your secure session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d1a] text-white overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.4, 0, 0.2, 1],
            scale: { type: "spring", stiffness: 300, damping: 25 }
          }}
          className={`min-h-screen transition-[filter,transform] duration-300 ${isPremiumModalOpen ? 'pointer-events-none blur-sm scale-[0.99]' : ''}`}
        >
          {screen === 'start' && <StartScreen />}
          {screen === 'login' && <LoginScreen />}
          {screen === 'home' && <HomeScreen />}
          {screen === 'profile' && <ProfileScreen />}
          {screen === 'test_rules' && <TestRulesScreen />}
          {screen === 'interest_test' && <InterestTestScreen />}
          {screen === 'interest_results' && <InterestResultsScreen />}
          {screen === 'aptitude_test' && <AptitudeTestScreen />}
          {screen === 'user_dashboard' && <UserDashboardScreen />}
          {screen === 'final_result' && <FinalResultScreen />}
          {screen === 'career_dashboard' && <CareerPathDashboard />}
          {screen === 'career_role' && <CareerRoleScreen />}
        {screen === 'academic_courses' && <AcademicCoursesScreen />}
        {screen === 'academic_streams' && <AcademicStreamsScreen />}
        {screen === 'science_streams' && <ScienceStreamsScreen />}
        {screen === 'commerce_streams' && <CommerceStreamsScreen />}
        {screen === 'diploma_polytechnic' && <DiplomaPolytechnicScreen />}
        {screen === 'engineering_diplomas' && <EngineeringDiplomasScreen />}
        {screen === 'mechanical_manufacturing' && <MechanicalManufacturingScreen />}
        {screen === 'civil_infrastructure' && <CivilInfrastructureScreen />}
        {screen === 'electrical_power_systems' && <ElectricalPowerSystemsScreen setScreen={setScreen} />}
        {screen === 'electronics_communication' && <ElectronicsCommunicationScreen setScreen={setScreen} />}
        {screen === 'computer_it_engineering' && <ComputerITEngineeringScreen setScreen={setScreen} />}
        {screen === 'automobile_ev_technology' && <AutomobileEVTechnologyScreen setScreen={setScreen} />}
        {screen === 'robotics_automation' && <RoboticsAutomationScreen setScreen={setScreen} />}
        {screen === 'environmental_energy_engineering' && <EnvironmentalEnergyEngineeringScreen setScreen={setScreen} />}
        {screen === 'industrial_production_technology' && <IndustrialProductionTechnologyScreen setScreen={setScreen} />}
        {screen === 'commerce-business' && <CommerceBusinessDiplomasScreen setScreen={setScreen} />}
        {screen === 'business-management' && <BusinessManagementDiplomaScreen setScreen={setScreen} />}
        {screen === 'accounting-finance' && <AccountingFinanceDiplomaScreen setScreen={setScreen} />}
        {screen === 'banking-insurance' && <BankingInsuranceDiplomaScreen setScreen={setScreen} />}
        {screen === 'digital-marketing-ecommerce' && <DigitalMarketingEcommerceDiplomaScreen setScreen={setScreen} />}
        {screen === 'retail-sales-management' && <RetailSalesManagementDiplomaScreen setScreen={setScreen} />}
        {screen === 'entrepreneurship-startup-management' && <EntrepreneurshipStartupManagementDiplomaScreen setScreen={setScreen} />}
        {screen === 'logistics-supply-chain' && <LogisticsSupplyChainDiplomaScreen setScreen={setScreen} />}
        {screen === 'software_app_development' && <SoftwareAppDevelopmentScreen setScreen={setScreen} previousScreen={previousScreen} />}
        {screen === 'networking_cloud_cybersecurity' && <NetworkingCloudCybersecurityScreen setScreen={setScreen} />}
        {screen === 'ai_data_science_iot' && <AIDataScienceIoTScreen setScreen={setScreen} />}
        {screen === 'game_development_multimedia' && <GameDevelopmentMultimediaScreen setScreen={setScreen} />}
        {screen === 'ui_ux_web_technologies' && <UIUXWebTechnologiesScreen setScreen={setScreen} />}
        {screen === 'medical_paramedical_diplomas' && <MedicalParamedicalDiplomasScreen setScreen={setScreen} />}
        {screen === 'nursing-patient-care' && <NursingPatientCareScreen setScreen={setScreen} />}
        {screen === 'pharmacy' && <PharmacyScreen setScreen={setScreen} />}
        {screen === 'lab-diagnostic-technology' && <LabDiagnosticTechnologyScreen setScreen={setScreen} />}
        {screen === 'imaging-operation-theatre' && <ImagingOperationTheatreScreen setScreen={setScreen} />}
        {screen === 'emergency-cardiac-dialysis' && <EmergencyCardiacDialysisScreen setScreen={setScreen} />}
        {screen === 'dental-eye-rehabilitation' && <DentalEyeRehabilitationScreen setScreen={setScreen} />}
        {screen === 'hospital-administration-public-health' && <HospitalAdministrationPublicHealthScreen setScreen={setScreen} />}
        {screen === 'general-nursing' && <GeneralNursingScreen setScreen={setScreen} />}
        {screen === 'critical-care-nursing' && <CriticalCareNursingScreen setScreen={setScreen} />}
        {screen === 'pediatric-nursing' && <PediatricNursingScreen setScreen={setScreen} />}
        {screen === 'geriatric-nursing' && <GeriatricNursingScreen setScreen={setScreen} />}
        {screen === 'pharmacy-practice' && <PharmacyPracticeScreen setScreen={setScreen} />}
        {screen === 'pharmaceutical-chemistry' && <PharmaceuticalChemistryScreen setScreen={setScreen} />}
        {screen === 'hospital-pharmacy' && <HospitalPharmacyScreen setScreen={setScreen} />}
        {screen === 'retail-pharmacy' && <RetailPharmacyScreen setScreen={setScreen} />}
        {screen === 'medical-laboratory-technology' && <MedicalLaboratoryTechnologyScreen setScreen={setScreen} />}
        {screen === 'pathology-laboratory' && <PathologyLaboratoryScreen setScreen={setScreen} />}
        {screen === 'diagnostic-imaging' && <DiagnosticImagingScreen setScreen={setScreen} />}
        {screen === 'clinical-laboratory' && <ClinicalLaboratoryScreen setScreen={setScreen} />}
        {screen === 'medical-imaging-technology' && <MedicalImagingTechnologyScreen setScreen={setScreen} />}
        {screen === 'operation-theatre-technology' && <OperationTheatreTechnologyScreen setScreen={setScreen} />}
        {screen === 'radiology-imaging' && <RadiologyImagingScreen setScreen={setScreen} />}
        {screen === 'surgical-technology' && <SurgicalTechnologyScreen setScreen={setScreen} />}
        {screen === 'emergency-medical-technology' && <EmergencyMedicalTechnologyScreen setScreen={setScreen} />}
        {screen === 'cardiac-care-technology' && <CardiacCareTechnologyScreen setScreen={setScreen} />}
        {screen === 'dialysis-technology' && <DialysisTechnologyScreen setScreen={setScreen} />}
        {screen === 'critical-care-emergency' && <CriticalCareEmergencyScreen setScreen={setScreen} />}
        {screen === 'dental-technology' && <DentalTechnologyScreen setScreen={setScreen} />}
        {screen === 'optometry-technology' && <OptometryTechnologyScreen setScreen={setScreen} />}
        {screen === 'rehabilitation-therapy' && <RehabilitationTherapyScreen setScreen={setScreen} />}
        {screen === 'prosthetics-orthotics' && <ProstheticsOrthoticsScreen setScreen={setScreen} />}
        {screen === 'hospital-administration' && <HospitalAdministrationScreen setScreen={setScreen} />}
        {screen === 'public-health-management' && <PublicHealthManagementScreen setScreen={setScreen} />}
        {screen === 'healthcare-management' && <HealthcareManagementScreen setScreen={setScreen} />}
        {screen === 'medical-record-management' && <MedicalRecordManagementScreen setScreen={setScreen} />}
        {screen === 'design-creative-diplomas' && <DesignCreativeDiplomasScreen setScreen={setScreen} />}
        {screen === 'animation-multimedia' && <AnimationMultimediaScreen setScreen={setScreen} />}
        {screen === 'ui-ux-web-design' && <UIUXWebDesignScreen setScreen={setScreen} />}
        {screen === 'fashion-design' && <FashionDesignScreen setScreen={setScreen} />}
        {screen === 'interior-design' && <InteriorDesignScreen setScreen={setScreen} />}
        {screen === 'photography-video-production' && <PhotographyVideoProductionScreen setScreen={setScreen} />}
        {screen === 'fine-arts-illustration' && <FineArtsIllustrationScreen setScreen={setScreen} />}
        {screen === 'arts_humanities_focus' && <ArtsHumanitiesFocusScreen />}
        {screen === 'civil_services_focus' && <CivilServicesFocusScreen />}
        {screen === 'law_focus' && <LawFocusScreen />}
        {screen === 'psychology_focus' && <PsychologyFocusScreen />}
        {screen === 'media_focus' && <MediaFocusScreen />}
        {screen === 'arts_focus' && <ArtsFocusScreen />}
        {screen === 'geography_focus' && <GeographyFocusScreen />}
        {screen === 'business_focus' && <BusinessFocusScreen />}
        {screen === 'banking_economics_focus' && <BankingEconomicsFocusScreen />}
        {screen === 'finance_accounting_focus' && <FinanceAccountingFocusScreen />}
        {screen === 'finance_it_focus' && <FinanceITFocusScreen />}
        {screen === 'medical_stream_combinations' && <MedicalStreamCombinationsScreen />}
        {screen === 'engineering_stream_combinations' && <EngineeringStreamCombinationsScreen />}
        {screen === 'computer_it_stream_combinations' && <ComputerITStreamCombinationsScreen />}
        {screen === 'pure_science_research' && <PureScienceResearchScreen />}
        {screen === 'agriculture_environmental_diplomas' && <AgricultureEnvironmentalDiplomaScreen />}
        {screen === 'agriculture_environmental_comparison' && <AgricultureEnvironmentalComparisonScreen />}
        {screen === 'hospitality_tourism_diplomas' && <HospitalityTourismDiplomaScreen />}
        {screen === 'hotel_management_diploma' && <HotelManagementDiplomaScreen />}
        {screen === 'tourism_management_diploma' && <TourismManagementDiplomaScreen />}
        {screen === 'culinary_arts_diploma' && <CulinaryArtsDiplomaScreen />}
        {screen === 'event_management_diploma' && <EventManagementDiplomaScreen />}
        {screen === 'airline_management_diploma' && <AirlineManagementDiplomaScreen />}
        {screen === 'spa_wellness_diploma' && <SpaWellnessDiplomaScreen />}
        {screen === 'horticulture_diploma' && <HorticultureDiplomaScreen />}
        {screen === 'dairy_animal_husbandry_diploma' && <DairyAnimalHusbandryDiplomaScreen />}
        {screen === 'fisheries_aquaculture_diploma' && <FisheriesAquacultureDiplomaScreen />}
        {screen === 'environmental_science_diploma' && <EnvironmentalScienceSustainabilityDiplomaScreen />}
        {screen === 'forestry_wildlife_diploma' && <ForestryWildlifeManagementDiplomaScreen />}
        {screen === 'agricultural_business_diploma' && <AgriculturalBusinessFarmManagementDiplomaScreen />}
        {screen === 'vocational_iti' && <VocationalITIScreen />}
        {screen === 'vocational_career_path' && <VocationalCareerPathScreen streamId={selectedVocationalStream || 'electrical'} />}
        {screen === 'government_exams' && <GovernmentExamsScreen />}
        {screen === 'skill_based_courses' && <SkillBasedCoursesScreen />}
        {screen === 'about_us' && <AboutUsScreen />}
        {screen === 'features' && <FeaturesScreen />}
        {screen === 'get_premium' && <GetPremiumScreen />}
        {screen === 'dynamic_career_page' && <DynamicCareerPage careerId={selectedCareerId || 'default'} />}
        </motion.div>
      </AnimatePresence>
      <ChatBot />
      <SubscriptionModal />
      {toast && <Toast message={toast.message} type={toast.type} onClose={hideToast} />}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
