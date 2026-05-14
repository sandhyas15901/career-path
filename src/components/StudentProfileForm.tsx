import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import NavBar from './ui/NavBar';
import Button from './ui/Button';
import { ApiError } from '../lib/api';

interface StudentProfileData {
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  state: string;
  city: string;
  hobbies: string;
  schoolName: string;
  stateBoard: string;
  tenthMarks: string;
  streamInterest: string[];
  favoriteSubjects: string[];
  careerGoal: string;
  address: string;
}

const COUNTRIES = ['India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Other'];
const STATES = [
  'Select State',
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
  'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
];
const CITIES = {
  'Select State': ['Select City'],
  'Andhra Pradesh': ['Amaravati', 'Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Tirupati', 'Kakinada'],
  'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Pasighat', 'Tawang', 'Ziro', 'Tezu', 'Changlang'],
  'Assam': ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tezpur', 'Bongaigaon'],
  'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Munger'],
  'Chhattisgarh': ['Raipur', 'Bhilai', 'Bilaspur', 'Durg', 'Korba', 'Rajnandgaon'],
  'Goa': ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda'],
  'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Bhavnagar', 'Jamnagar'],
  'Haryana': ['Chandigarh', 'Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Karnal', 'Sonipat'],
  'Himachal Pradesh': ['Shimla', 'Solan', 'Dharamshala', 'Mandi', 'Kullu', 'Manali', 'Palampur'],
  'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih'],
  'Karnataka': ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Gulbarga', 'Davanagere'],
  'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Kottayam', 'Alappuzha'],
  'Madhya Pradesh': ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Satna'],
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur', 'Amravati', 'Kolhapur'],
  'Manipur': ['Imphal', 'Thoubal', 'Churachandpur', 'Bishnupur', 'Kakching', 'Ukhrul'],
  'Meghalaya': ['Shillong', 'Tura', 'Nongstoin', 'Jowai', 'Baghmara', 'Williamnagar'],
  'Mizoram': ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip', 'Kolasib', 'Lawngtlai', 'Saitual'],
  'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Zunheboto', 'Phek'],
  'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Puri', 'Sambalpur', 'Balasore', 'Bargarh'],
  'Punjab': ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali'],
  'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner', 'Alwar', 'Sikar'],
  'Sikkim': ['Gangtok', 'Namchi', 'Mangan', 'Gyalshing', 'Rangpo'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Vellore'],
  'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Ramagundam', 'Mahbubnagar'],
  'Tripura': ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailashahar', 'Belonia', 'Khowai'],
  'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Ghaziabad', 'Agra', 'Varanasi', 'Meerut', 'Allahabad', 'Bareilly'],
  'Uttarakhand': ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rishikesh', 'Kashipur', 'Rudrapur'],
  'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Burdwan', 'Kharagpur'],
  'Andaman and Nicobar Islands': ['Port Blair'],
  'Chandigarh': ['Chandigarh'],
  'Dadra and Nagar Haveli and Daman and Diu': ['Daman', 'Diu', 'Silvassa'],
  'Delhi': ['New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'Central Delhi'],
  'Jammu and Kashmir': ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Kupwara', 'Pulwama', 'Udhampur'],
  'Ladakh': ['Leh', 'Kargil'],
  'Lakshadweep': ['Kavaratti', 'Agatti', 'Bangaram', 'Kadmat'],
  'Puducherry': ['Puducherry', 'Karaikal', 'Mahe', 'Yanam']
};
const STATE_BOARDS = [
  'Select Board',
  'CBSE - Central Board of Secondary Education',
  'ICSE - Indian Certificate of Secondary Education',
  'BSEAP - Andhra Pradesh Board of Secondary Education',
  'APDH - Arunachal Pradesh Directorate of School Education',
  'SEBA - Board of Secondary Education, Assam',
  'BSEB - Bihar School Examination Board',
  'CGBSE - Chhattisgarh Board of Secondary Education',
  'GBSHSE - Goa Board of Secondary and Higher Secondary Education',
  'GSEB - Gujarat Secondary and Higher Secondary Education Board',
  'HBSE - Haryana Board of School Education',
  'HPBOSE - Himachal Pradesh Board of School Education',
  'JAC - Jharkhand Academic Council',
  'KSEAB - Karnataka School Examination and Assessment Board',
  'DHSE - Directorate of Higher Secondary Education, Kerala',
  'MPBSE - Madhya Pradesh Board of Secondary Education',
  'MSBSHSE - Maharashtra State Board of Secondary and Higher Secondary Education',
  'BOSEM - Board of Secondary Education, Manipur',
  'MBOSE - Meghalaya Board of School Education',
  'MBSE - Mizoram Board of School Education',
  'NBSE - Nagaland Board of School Education',
  'CHSE - Council of Higher Secondary Education, Odisha',
  'PSEB - Punjab School Education Board',
  'RBSE - Board of Secondary Education, Rajasthan',
  'SBSEC - Sikkim Board of Secondary Education',
  'DGE TN - Directorate of Government Examinations, Tamil Nadu',
  'TSBIE - Telangana State Board of Intermediate Education',
  'TBSE - Tripura Board of Secondary Education',
  'UPMSP - Uttar Pradesh Madhyamik Shiksha Parishad',
  'UBSE - Uttarakhand Board of School Education',
  'WBCHSE - West Bengal Council of Higher Secondary Education',
  'IB - International Baccalaureate',
  'Cambridge - Cambridge International',
  'NIOS - National Institute of Open Schooling'
];
const STREAMS = [
  'Select Stream',
  'Science',
  'Commerce',
  'Arts / Humanities',
  'Computer & IT',
  'Engineering & Technology',
  'Medical & Healthcare',
  'Design & Creativity',
  'Government Jobs / Civil Services',
  'Hospitality & Tourism',
  'Law',
  'Media & Communication',
  'Vocational / ITI / Skill Trades'
];

export default function StudentProfileForm() {
  const appContext = useApp();
  const { setScreen, goBack, user, authenticatedRequest, setUser } = appContext;
  
  // Initialize form state with user data or defaults
  const [formData, setFormData] = useState<StudentProfileData>(() => ({
    fullName: user?.name || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || '',
    country: user?.country || 'India',
    state: user?.state || 'Select State',
    city: user?.city || 'Select City',
    hobbies: user?.hobbies || '',
    schoolName: user?.schoolName || '',
    stateBoard: user?.stateBoard || 'Select Board',
    tenthMarks: user?.tenthMarks || '',
    streamInterest: user?.streamInterest || [],
    favoriteSubjects: user?.favoriteSubjects || [],
    careerGoal: user?.careerGoal || '',
    address: user?.address || '',
  }));
  
  // Update form when user data loads
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        fullName: user.name || prev.fullName,
        email: user.email || prev.email,
        phoneNumber: user.phoneNumber || prev.phoneNumber,
        country: user.country || prev.country,
        state: user.state || prev.state,
        city: user.city || prev.city,
        hobbies: user.hobbies || prev.hobbies,
        schoolName: user.schoolName || prev.schoolName,
        stateBoard: user.stateBoard || prev.stateBoard,
        tenthMarks: user.tenthMarks || prev.tenthMarks,
        streamInterest: user.streamInterest || prev.streamInterest,
        favoriteSubjects: user.favoriteSubjects || prev.favoriteSubjects,
        careerGoal: user.careerGoal || prev.careerGoal,
        address: user.address || prev.address,
      }));
    }
  }, [user]);

  const [selectedStream, setSelectedStream] = useState('Select Stream');
  const [selectedSubject, setSelectedSubject] = useState('Select Subject');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (field: keyof StudentProfileData, value: string) => {
    if (field === 'state') {
      // Reset city when state changes
      setFormData(prev => ({ ...prev, [field]: value, city: 'Select City' }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const addStream = () => {
    if (selectedStream !== 'Select Stream' && !formData.streamInterest.includes(selectedStream)) {
      setFormData(prev => ({
        ...prev,
        streamInterest: [...prev.streamInterest, selectedStream]
      }));
      setSelectedStream('Select Stream');
    }
  };

  
  const addSubject = () => {
    if (selectedSubject !== 'Select Subject' && !formData.favoriteSubjects.includes(selectedSubject)) {
      setFormData(prev => ({
        ...prev,
        favoriteSubjects: [...prev.favoriteSubjects, selectedSubject]
      }));
      setSelectedSubject('Select Subject');
    }
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveError('');
    
    if (!user) {
      setSaveError('Please log in to save your profile.');
      return;
    }

    const trimmedFullName = formData.fullName.trim();
    if (!trimmedFullName || !formData.email.trim()) {
      setSaveError('Full name and email are required.');
      return;
    }

    const marks = Number(formData.tenthMarks);
    if (formData.tenthMarks.trim() && (Number.isNaN(marks) || marks < 0 || marks > 100)) {
      setSaveError('10th marks must be a valid percentage between 0 and 100.');
      return;
    }

    const nameParts = trimmedFullName.split(/\s+/).filter(Boolean);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ');

    try {
      setIsSaving(true);

      // First, get the current user's profile to get the profile ID
      const profileList = await authenticatedRequest<any>(`/user-profiles/`, {
        method: 'GET',
      });

      const profiles = Array.isArray(profileList)
        ? profileList
        : Array.isArray(profileList?.results)
          ? profileList.results
          : [];

      if (profiles.length === 0) {
        setSaveError('No profile found. Please contact support.');
        return;
      }
      
      const profileId = profiles[0].id;

      await authenticatedRequest(`/users/${user.id}/`, {
        method: 'PATCH',
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: formData.email.trim(),
        }),
      });

      await authenticatedRequest(`/user-profiles/${profileId}/`, {
        method: 'PATCH',
        body: JSON.stringify({
          mobile_number: formData.phoneNumber.trim(),
          country: formData.country,
          state: formData.state,
          city: formData.city,
          hobbies: formData.hobbies,
          school_name: formData.schoolName,
          state_board: formData.stateBoard,
          tenth_marks: formData.tenthMarks,
          stream_interest: formData.streamInterest,
          favorite_subjects: formData.favoriteSubjects,
          career_goal: formData.careerGoal,
          address: formData.address,
        }),
      });

      // Update local user state with saved profile data
      setUser({
        ...user,
        name: trimmedFullName || user.name,
        email: formData.email.trim(),
        phoneNumber: formData.phoneNumber,
        mobileNumber: formData.phoneNumber,
        country: formData.country,
        state: formData.state,
        city: formData.city,
        hobbies: formData.hobbies,
        schoolName: formData.schoolName,
        stateBoard: formData.stateBoard,
        tenthMarks: formData.tenthMarks,
        streamInterest: formData.streamInterest,
        favoriteSubjects: formData.favoriteSubjects,
        careerGoal: formData.careerGoal,
        address: formData.address,
      });

      // Show success message
      setShowSuccessMessage(true);
      // Hide message after 3 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.error('Error saving profile:', error);
      if (error instanceof ApiError) {
        setSaveError(typeof error.payload.detail === 'string' ? error.payload.detail : 'Failed to save profile. Please try again.');
      } else {
        setSaveError('Failed to save profile. Please try again.');
      }
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <NavBar />

      {/* Success Message */}
      {showSuccessMessage && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed right-4 top-24 z-50 flex items-center gap-2 rounded-2xl border border-emerald-300/20 bg-emerald-500/18 px-4 py-3 text-white shadow-lg shadow-emerald-500/15"
        >
          <CheckCircle2 className="h-4 w-4 text-emerald-200" />
          Profile saved successfully.
        </motion.div>
      )}
      
      {/* Blobs - matching home page */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 sm:py-12">
        {/* Header - matching home page style */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex items-start justify-between gap-4"
        >
          <button 
            onClick={() => goBack('home')}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="text-center flex-1">
            <p className="text-indigo-400 text-sm font-medium mb-1">Complete your profile</p>
            <h1 className="text-4xl font-bold text-white">
              Student <span className="grad-text-indigo">Profile</span>
            </h1>
            <p className="text-white/40 text-sm mt-2">Share your academic and personal information</p>
          </div>
          <div className="w-12"></div>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="glass rounded-[2rem] border border-white/10 max-w-6xl mx-auto px-4 py-6 sm:px-6 sm:py-8 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column - Personal Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white mb-6">Personal Details</h2>
              
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
                           text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 
                           transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
                           text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 
                           transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
                           text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 
                           transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Country</label>
                <select
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
                           text-white focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                >
                  {COUNTRIES.map(country => (
                    <option key={country} value={country} className="bg-purple-700">{country}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">State</label>
                <select
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
                           text-white focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                >
                  {STATES.map(state => (
                    <option key={state} value={state} className="bg-purple-700">{state}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">City</label>
                <select
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
                           text-white focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                >
                  {CITIES[formData.state as keyof typeof CITIES]?.map(city => (
                    <option key={city} value={city} className="bg-purple-700">{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Hobbies</label>
                <textarea
                  value={formData.hobbies}
                  onChange={(e) => handleInputChange('hobbies', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
                           text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 
                           transition-all resize-none"
                  placeholder="Enter your hobbies..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Address</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
                           text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 
                           transition-all resize-none"
                  placeholder="Enter your address..."
                />
              </div>
            </div>

            {/* Right Column - Academic Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white mb-6">Academic Details</h2>
              
              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">School Name</label>
                <input
                  type="text"
                  value={formData.schoolName}
                  onChange={(e) => handleInputChange('schoolName', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
                           text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 
                           transition-all"
                  placeholder="Enter your school name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">State Board</label>
                <select
                  value={formData.stateBoard}
                  onChange={(e) => handleInputChange('stateBoard', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
                           text-white focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                >
                  {STATE_BOARDS.map(board => (
                    <option key={board} value={board} className="bg-purple-700">{board}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">10th Marks (%)</label>
                <input
                  type="text"
                  value={formData.tenthMarks}
                  onChange={(e) => handleInputChange('tenthMarks', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
                           text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 
                           transition-all"
                  placeholder="Enter your 10th marks percentage"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Stream Interest</label>
                <div className="flex gap-2">
                  <select
                    value={selectedStream}
                    onChange={(e) => setSelectedStream(e.target.value)}
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
                             text-white focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                  >
                    {STREAMS.map(stream => (
                      <option key={stream} value={stream} className="bg-purple-700">{stream}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={addStream}
                    className="px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl 
                             transition-colors font-medium"
                  >
                    <Plus className="w-5 h-5 text-white" />
                  </button>
                </div>
                
                {/* Selected Streams Display */}
                <div className="mt-3 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl min-h-[60px]">
                  {formData.streamInterest.length === 0 ? (
                    <p className="text-white/50 text-sm">Selected streams will appear here</p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {formData.streamInterest.map(stream => (
                        <span
                          key={stream}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 text-white rounded-full text-sm"
                        >
                          {stream}
                          <button
                            type="button"
                            onClick={() => {
                              setFormData(prev => ({
                                ...prev,
                                streamInterest: prev.streamInterest.filter(s => s !== stream)
                              }));
                            }}
                            className="text-white/70 hover:text-white font-bold"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Favorite Subject</label>
                <div className="flex gap-2">
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
                             text-white focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                  >
                    <option value="Select Subject" className="bg-purple-700">Select Subject</option>
                    <option value="Mathematics" className="bg-purple-700">Mathematics</option>
                    <option value="Physics" className="bg-purple-700">Physics</option>
                    <option value="Chemistry" className="bg-purple-700">Chemistry</option>
                    <option value="Biology" className="bg-purple-700">Biology</option>
                    <option value="English" className="bg-purple-700">English</option>
                    <option value="Social Science" className="bg-purple-700">Social Science</option>
                    <option value="Computer Science" className="bg-purple-700">Computer Science</option>
                    <option value="Accountancy" className="bg-purple-700">Accountancy</option>
                    <option value="Business Studies" className="bg-purple-700">Business Studies</option>
                    <option value="Economics" className="bg-purple-700">Economics</option>
                    <option value="History" className="bg-purple-700">History</option>
                    <option value="Political Science" className="bg-purple-700">Political Science</option>
                    <option value="Psychology" className="bg-purple-700">Psychology</option>
                    <option value="Sociology" className="bg-purple-700">Sociology</option>
                    <option value="Geography" className="bg-purple-700">Geography</option>
                    <option value="Information Technology" className="bg-purple-700">Information Technology</option>
                    <option value="Physical Education" className="bg-purple-700">Physical Education</option>
                    <option value="Fine Arts" className="bg-purple-700">Fine Arts</option>
                  </select>
                  <button
                    type="button"
                    onClick={addSubject}
                    className="px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl 
                             transition-colors font-medium"
                  >
                    <Plus className="w-5 h-5 text-white" />
                  </button>
                </div>
                
                {/* Selected Subjects Display */}
                <div className="mt-3 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl min-h-[60px]">
                  {formData.favoriteSubjects.length === 0 ? (
                    <p className="text-white/50 text-sm">Selected subjects will appear here</p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {formData.favoriteSubjects.map(subject => (
                        <span
                          key={subject}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 text-white rounded-full text-sm"
                        >
                          {subject}
                          <button
                            type="button"
                            onClick={() => {
                              setFormData(prev => ({
                                ...prev,
                                favoriteSubjects: prev.favoriteSubjects.filter(s => s !== subject)
                              }));
                            }}
                            className="text-white/70 hover:text-white font-bold"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/90 mb-2">Career Goal</label>
                <textarea
                  value={formData.careerGoal}
                  onChange={(e) => handleInputChange('careerGoal', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
                           text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 
                           transition-all resize-none"
                  placeholder="Enter your career goal..."
                />
              </div>
            </div>
          </div>

          {saveError && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-center text-sm text-rose-100"
            >
              {saveError}
            </motion.p>
          )}

          {/* Save Profile Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <Button type="button" variant="secondary" onClick={() => setScreen('home')}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? 'Saving profile...' : 'Save profile'}
            </Button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
