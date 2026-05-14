import { StreamId } from './careerData';

// ── Interest Test (12 Questions) ─────────────────────────────────────
export interface TestQuestion {
  id: number;
  question: string;
  emoji: string;
  options: { label: string; streams: StreamId[]; points: number }[];
}

export const INTEREST_QUESTIONS: TestQuestion[] = [
  {
    id: 1,
    question: 'What do you enjoy doing most in your free time?',
    emoji: '⏰',
    options: [
      { label: 'Solving math puzzles or coding challenges', streams: ['science','computer_it','engineering'], points: 3 },
      { label: 'Reading novels, writing or debating', streams: ['arts','media','law'], points: 3 },
      { label: 'Drawing, sketching or creating digital art', streams: ['design_creative','media'], points: 3 },
      { label: 'Playing sports or outdoor activities', streams: ['sports','medical'], points: 3 },
    ],
  },
  {
    id: 2,
    question: 'Which school subject excites you the most?',
    emoji: '📚',
    options: [
      { label: 'Physics / Chemistry / Biology', streams: ['science','medical','engineering'], points: 3 },
      { label: 'Accountancy / Economics / Business', streams: ['commerce','finance'], points: 3 },
      { label: 'History / Political Science / Languages', streams: ['arts','government','law'], points: 3 },
      { label: 'Computer Science / IT', streams: ['computer_it','engineering'], points: 3 },
    ],
  },
  {
    id: 3,
    question: 'Imagine your ideal future workplace. Which feels most exciting?',
    emoji: '🏢',
    options: [
      { label: 'A research lab or tech company', streams: ['science','computer_it','engineering'], points: 3 },
      { label: 'A courtroom, government office or NGO', streams: ['law','government','arts'], points: 3 },
      { label: 'A creative studio or media house', streams: ['design_creative','media'], points: 3 },
      { label: 'A hospital, clinic or wellness centre', streams: ['medical','sports'], points: 3 },
    ],
  },
  {
    id: 4,
    question: 'Which activity would you pick for a school project?',
    emoji: '🎯',
    options: [
      { label: 'Building a working model (robot / bridge)', streams: ['engineering','science','vocational'], points: 3 },
      { label: 'Designing a poster / app interface', streams: ['design_creative','computer_it'], points: 3 },
      { label: 'Writing a report on social issues', streams: ['arts','media','government'], points: 3 },
      { label: 'Running a mini business / stock simulation', streams: ['commerce','finance'], points: 3 },
    ],
  },
  {
    id: 5,
    question: 'What kind of problems do you LOVE solving?',
    emoji: '🧩',
    options: [
      { label: 'Technical / analytical / logical problems', streams: ['science','computer_it','engineering','finance'], points: 3 },
      { label: 'Human / social / emotional problems', streams: ['arts','medical','sports','law'], points: 3 },
      { label: 'Creative / visual / design problems', streams: ['design_creative','media'], points: 3 },
      { label: 'Business / money / strategy problems', streams: ['commerce','finance','government'], points: 3 },
    ],
  },
  {
    id: 6,
    question: 'Which of these inspires you the most?',
    emoji: '✨',
    options: [
      { label: 'Elon Musk / APJ Abdul Kalam (Innovators)', streams: ['science','engineering','computer_it'], points: 3 },
      { label: 'Virat Kohli / PT Usha (Athletes)', streams: ['sports'], points: 3 },
      { label: 'APJ Abdul Kalam / Marie Curie (Scientists)', streams: ['science','medical'], points: 3 },
      { label: 'Sundar Pichai / Steve Jobs (Tech leaders)', streams: ['computer_it','engineering','commerce'], points: 3 },
    ],
  },
  {
    id: 7,
    question: 'How would friends describe your natural strengths?',
    emoji: '💪',
    options: [
      { label: 'Analytical and logical — loves numbers', streams: ['science','engineering','finance','computer_it'], points: 3 },
      { label: 'Creative and expressive — great storyteller', streams: ['arts','media','design_creative'], points: 3 },
      { label: 'Caring and empathetic — natural helper', streams: ['medical','sports','hospitality'], points: 3 },
      { label: 'Leader and organiser — gets things done', streams: ['commerce','government','law'], points: 3 },
    ],
  },
  {
    id: 8,
    question: 'Which type of movie do you enjoy the most?',
    emoji: '🎬',
    options: [
      { label: 'Sci-fi / technology thrillers', streams: ['science','computer_it','engineering'], points: 2 },
      { label: 'Drama / biographical / political films', streams: ['arts','government','media','law'], points: 2 },
      { label: 'Sports films / inspirational stories', streams: ['sports'], points: 2 },
      { label: 'Business / heist / crime thrillers', streams: ['commerce','finance','law'], points: 2 },
    ],
  },
  {
    id: 9,
    question: 'Which skill would you most like to master?',
    emoji: '🎓',
    options: [
      { label: 'Coding / Machine Learning / Data Science', streams: ['computer_it','science'], points: 3 },
      { label: 'Public speaking / debate / writing', streams: ['arts','media','law','government'], points: 3 },
      { label: 'Drawing / animation / 3D design', streams: ['design_creative'], points: 3 },
      { label: 'Financial modelling / investing', streams: ['finance','commerce'], points: 3 },
    ],
  },
  {
    id: 10,
    question: 'What motivates you the most?',
    emoji: '🚀',
    options: [
      { label: 'Making scientific discoveries that change the world', streams: ['science','medical','engineering'], points: 3 },
      { label: 'Creating beautiful things people love', streams: ['design_creative','media','arts'], points: 3 },
      { label: 'Serving society and protecting people', streams: ['government','law','medical'], points: 3 },
      { label: 'Building wealth and financial freedom', streams: ['commerce','finance'], points: 3 },
    ],
  },
  {
    id: 11,
    question: 'Which extracurricular activity are you most drawn to?',
    emoji: '🎭',
    options: [
      { label: 'Science Olympiad / Math competitions', streams: ['science','engineering','computer_it'], points: 3 },
      { label: 'MUN / Debate / Drama club', streams: ['arts','law','government','media'], points: 3 },
      { label: 'Sports team / fitness club', streams: ['sports','medical'], points: 3 },
      { label: 'Entrepreneurship cell / stock club', streams: ['commerce','finance'], points: 3 },
    ],
  },
  {
    id: 12,
    question: 'In 10 years, you see yourself as:',
    emoji: '🔮',
    options: [
      { label: 'A tech entrepreneur or scientist', streams: ['computer_it','science','engineering'], points: 3 },
      { label: 'A government official or lawyer', streams: ['government','law','arts'], points: 3 },
      { label: 'A creative director or media personality', streams: ['design_creative','media'], points: 3 },
      { label: 'A doctor, coach or wellness expert', streams: ['medical','sports','hospitality'], points: 3 },
    ],
  },
];

// ── Aptitude Tests per Stream ─────────────────────────────────────────
export interface AptitudeQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number; // index of correct answer
  explanation: string;
}

export const APTITUDE_TESTS: Record<string, AptitudeQuestion[]> = {
  science: [
    { id: 1, question: 'A body moves with velocity 20m/s. What is the kinetic energy if mass = 5kg?', options: ['500 J','1000 J','250 J','2000 J'], correct: 2, explanation: 'KE = ½mv² = ½×5×20² = 1000 J → Wait: ½×5×400 = 1000 J. Correct: 1000 J.' },
    { id: 2, question: 'Which of these is NOT a noble gas?', options: ['Helium','Neon','Nitrogen','Argon'], correct: 2, explanation: 'Nitrogen (N₂) is a diatomic molecule, not a noble gas.' },
    { id: 3, question: 'DNA stands for:', options: ['Deoxyribonucleic Acid','Diribonucleic Acid','Deoxyribose Nucleotide Acid','Diphosphate Nucleic Acid'], correct: 0, explanation: 'DNA = Deoxyribonucleic Acid — carries genetic information.' },
    { id: 4, question: 'The speed of light in vacuum is approximately:', options: ['3×10⁶ m/s','3×10⁸ m/s','3×10¹⁰ m/s','3×10⁴ m/s'], correct: 1, explanation: 'Speed of light c = 3×10⁸ m/s (300,000 km/s).' },
    { id: 5, question: 'Which planet is known as the "Red Planet"?', options: ['Venus','Mars','Jupiter','Saturn'], correct: 1, explanation: 'Mars has iron oxide (rust) on its surface giving it a red appearance.' },
  ],
  computer_it: [
    { id: 1, question: 'What does HTML stand for?', options: ['Hyper Text Markup Language','High Tech Modern Language','Hyper Transfer Mode Language','Home Tool Markup Language'], correct: 0, explanation: 'HTML = HyperText Markup Language — the backbone of web pages.' },
    { id: 2, question: 'Which data structure uses LIFO (Last In First Out)?', options: ['Queue','Array','Stack','Linked List'], correct: 2, explanation: 'A Stack uses LIFO — the last element pushed is the first to be popped.' },
    { id: 3, question: 'Binary representation of decimal 10 is:', options: ['1010','1100','1001','0110'], correct: 0, explanation: '10 in binary: 8+2 = 1010.' },
    { id: 4, question: 'Which language is primarily used for Machine Learning?', options: ['PHP','Java','Python','C++'], correct: 2, explanation: 'Python dominates ML due to TensorFlow, PyTorch, scikit-learn ecosystem.' },
    { id: 5, question: 'What does CPU stand for?', options: ['Central Processing Unit','Computer Processing Unit','Central Program Utility','Core Processing Unit'], correct: 0, explanation: 'CPU = Central Processing Unit — the brain of a computer.' },
  ],
  engineering: [
    { id: 1, question: 'What is the unit of electrical resistance?', options: ['Ampere','Volt','Ohm','Watt'], correct: 2, explanation: 'Ohm (Ω) is the SI unit of electrical resistance (V = IR).' },
    { id: 2, question: 'Which material is the best conductor of electricity?', options: ['Iron','Copper','Aluminium','Silver'], correct: 3, explanation: 'Silver has the highest electrical conductivity, though copper is used more economically.' },
    { id: 3, question: "Newton's 2nd Law states: F = ?", options: ['ma','mv','m/a','m+a'], correct: 0, explanation: 'Force = Mass × Acceleration (F = ma).' },
    { id: 4, question: 'What does CAD stand for in engineering?', options: ['Computer Aided Design','Computer Automated Drawing','Core Application Design','Computer Analysis Database'], correct: 0, explanation: 'CAD = Computer-Aided Design — software used by engineers to create 2D/3D models.' },
    { id: 5, question: 'The ratio of output power to input power is called:', options: ['Force','Efficiency','Torque','Momentum'], correct: 1, explanation: 'Efficiency = (Output Power / Input Power) × 100%' },
  ],
  commerce: [
    { id: 1, question: 'What does GDP stand for?', options: ['Gross Domestic Product','General Domestic Production','Gross Development Policy','Global Demand Product'], correct: 0, explanation: 'GDP = Gross Domestic Product — total value of goods/services produced in a country.' },
    { id: 2, question: 'Double entry bookkeeping means:', options: ['Recording every transaction twice','Every debit has an equal credit','Using two ledgers','None of the above'], correct: 1, explanation: 'Every debit entry must have a corresponding equal credit entry.' },
    { id: 3, question: 'A stock market index tracks:', options: ['Exchange rates','Performance of selected stocks','Bank interest rates','Import/export data'], correct: 1, explanation: 'Indices like SENSEX, NIFTY track performance of a basket of selected stocks.' },
    { id: 4, question: 'GST stands for:', options: ['General Sales Tax','Goods and Services Tax','Government Service Tax','Global Supply Tax'], correct: 1, explanation: 'GST = Goods and Services Tax — India\'s unified indirect tax.' },
    { id: 5, question: 'Depreciation means:', options: ['Increase in asset value','Decrease in asset value over time','Tax on assets','Profit from asset sale'], correct: 1, explanation: 'Depreciation is the reduction in value of an asset over its useful life.' },
  ],
  arts: [
    { id: 1, question: 'Which article of the Indian Constitution deals with Freedom of Speech?', options: ['Article 14','Article 19','Article 21','Article 32'], correct: 1, explanation: 'Article 19 guarantees Freedom of Speech and Expression to Indian citizens.' },
    { id: 2, question: 'The Renaissance began in which country?', options: ['France','England','Italy','Germany'], correct: 2, explanation: 'The Renaissance (14th–17th century) began in Italy (Florence, Venice, Rome).' },
    { id: 3, question: "Freud's psychoanalysis focuses on:", options: ['Behavior modification','The unconscious mind','Social conditioning','Brain chemistry'], correct: 1, explanation: 'Sigmund Freud developed psychoanalysis focusing on unconscious drives and conflicts.' },
    { id: 4, question: 'The United Nations has how many official languages?', options: ['4','5','6','7'], correct: 2, explanation: 'The UN has 6 official languages: Arabic, Chinese, English, French, Russian, Spanish.' },
    { id: 5, question: 'Which Fundamental Right protects against arbitrary arrest?', options: ['Article 14','Article 20','Article 22','Article 19'], correct: 2, explanation: 'Article 22 provides protection against arbitrary arrest and detention.' },
  ],
  medical: [
    { id: 1, question: 'Normal human body temperature is:', options: ['36°C','37°C','38°C','35°C'], correct: 1, explanation: 'Normal body temperature is 37°C (98.6°F).' },
    { id: 2, question: 'Which organ produces insulin?', options: ['Liver','Kidney','Pancreas','Heart'], correct: 2, explanation: 'The Pancreas (beta cells of islets of Langerhans) produces insulin.' },
    { id: 3, question: 'The largest organ in the human body is:', options: ['Liver','Brain','Skin','Intestine'], correct: 2, explanation: 'Skin is the largest organ, covering the entire body surface.' },
    { id: 4, question: 'NEET exam is required for admission to:', options: ['Engineering','Medicine (MBBS/BDS)','Law','Architecture'], correct: 1, explanation: 'NEET-UG is mandatory for MBBS, BDS, BAMS, BHMS and other medical courses.' },
    { id: 5, question: 'Which blood group is the universal donor?', options: ['A+','B+','AB+','O-'], correct: 3, explanation: 'O-negative (O−) is the universal donor — compatible with all blood types.' },
  ],
  finance: [
    { id: 1, question: 'ROI stands for:', options: ['Return on Investment','Rate of Income','Revenue on Interest','Return of Income'], correct: 0, explanation: 'ROI = Return on Investment = (Net Profit / Cost of Investment) × 100' },
    { id: 2, question: 'The Reserve Bank of India was established in:', options: ['1935','1947','1950','1969'], correct: 0, explanation: 'RBI was established on April 1, 1935 under the RBI Act 1934.' },
    { id: 3, question: 'A bond is a form of:', options: ['Equity','Debt instrument','Commodity','Currency'], correct: 1, explanation: 'A bond is a debt instrument where the issuer borrows money from investors.' },
    { id: 4, question: 'Which exam do CA candidates appear for in India?', options: ['ICAI','CFA','ACCA','CMA'], correct: 0, explanation: 'ICAI (Institute of Chartered Accountants of India) conducts the CA examination.' },
    { id: 5, question: 'Inflation means:', options: ['Decrease in prices','Increase in general price level','Economic growth','Budget surplus'], correct: 1, explanation: 'Inflation is the sustained increase in the general price level of goods and services.' },
  ],
  government: [
    { id: 1, question: 'UPSC stands for:', options: ['Union Public Service Commission','United Public Service Corporation','Universal Public Sector Committee','Union Policy Service Council'], correct: 0, explanation: 'UPSC = Union Public Service Commission — conducts Civil Services exam for IAS/IPS/IFS.' },
    { id: 2, question: 'NDA exam is conducted by:', options: ['Ministry of Defence','UPSC','SSC','State Governments'], correct: 1, explanation: 'UPSC conducts the NDA (National Defence Academy) examination twice a year.' },
    { id: 3, question: 'How many members does the Rajya Sabha have?', options: ['250','545','543','240'], correct: 0, explanation: 'Rajya Sabha has a maximum of 250 members (238 elected + 12 nominated).' },
    { id: 4, question: 'The Preamble of the Constitution declares India as:', options: ['Federal','Sovereign Socialist Secular Democratic Republic','Parliamentary Democracy','Constitutional Monarchy'], correct: 1, explanation: 'The Preamble declares India a Sovereign, Socialist, Secular, Democratic Republic.' },
    { id: 5, question: 'Which is the highest court in India?', options: ['High Court','District Court','Supreme Court','National Green Tribunal'], correct: 2, explanation: 'The Supreme Court of India is the apex court and the final court of appeal.' },
  ],
  design_creative: [
    { id: 1, question: 'RGB stands for:', options: ['Red Green Blue','Red Gold Brown','Round Grid Base','Raster Graphic Block'], correct: 0, explanation: 'RGB = Red, Green, Blue — the additive color model used in digital screens.' },
    { id: 2, question: 'UI stands for:', options: ['User Interface','Unique Interaction','Universal Input','User Integration'], correct: 0, explanation: 'UI = User Interface — the visual layer users interact with in apps/websites.' },
    { id: 3, question: 'Which software is widely used for vector graphic design?', options: ['Photoshop','Illustrator','After Effects','Premiere Pro'], correct: 1, explanation: 'Adobe Illustrator is the industry standard for vector-based graphic design.' },
    { id: 4, question: 'The Golden Ratio is approximately:', options: ['1.618','3.14','2.718','1.414'], correct: 0, explanation: 'The Golden Ratio (φ ≈ 1.618) is a mathematical ratio found in nature and used in design.' },
    { id: 5, question: 'FPS in animation stands for:', options: ['Frames Per Second','Final Production Stage','Forward Path Sequence','File Processing Speed'], correct: 0, explanation: 'FPS = Frames Per Second — standard film is 24fps; games often run at 60fps.' },
  ],
  hospitality: [
    { id: 1, question: 'NCHMCT JEE is the entrance exam for:', options: ['Hotel Management colleges','Medical colleges','Engineering colleges','Law colleges'], correct: 0, explanation: 'NCHMCT JEE is the national entrance test for BSc Hospitality & Hotel Administration.' },
    { id: 2, question: 'What does F&B stand for in hospitality?', options: ['Finance & Business','Food & Beverage','Front & Back','Fare & Booking'], correct: 1, explanation: 'F&B = Food & Beverage — a core department in hotel operations.' },
    { id: 3, question: 'Which organization globally classifies hotels with star ratings?', options: ['WHO','WTO (Tourism)','UNESCO','IATA'], correct: 1, explanation: 'UNWTO (World Tourism Organization) sets global standards for hospitality classification.' },
    { id: 4, question: 'RevPAR in hotels means:', options: ['Revenue Per Available Room','Return Per Asset Rate','Revenue Per Active Rate','Room Per Available Rating'], correct: 0, explanation: 'RevPAR = Revenue Per Available Room — key hotel performance metric.' },
    { id: 5, question: 'Which country is the top tourist destination globally?', options: ['USA','China','France','India'], correct: 2, explanation: 'France consistently ranks as the world\'s most visited country by international tourists.' },
  ],
  law: [
    { id: 1, question: 'CLAT stands for:', options: ['Common Law Admission Test','Central Law Application Test','College Law Aptitude Test','Common Legal Admission Trial'], correct: 0, explanation: 'CLAT = Common Law Admission Test — entry to National Law Universities (NLUs).' },
    { id: 2, question: 'A "plaintiff" in a lawsuit is:', options: ['The judge','The accused person','The person who files the case','The lawyer'], correct: 2, explanation: 'The plaintiff is the party that initiates a lawsuit by filing a complaint.' },
    { id: 3, question: 'FIR stands for:', options: ['First Information Report','Formal Inquiry Record','Federal Investigation Report','First Instance Register'], correct: 0, explanation: 'FIR = First Information Report — filed at a police station to report a crime.' },
    { id: 4, question: 'The principle of "innocent until proven guilty" is called:', options: ['Due process','Presumption of innocence','Habeas Corpus','Double jeopardy'], correct: 1, explanation: 'Presumption of innocence is a fundamental legal right — burden of proof lies on the prosecution.' },
    { id: 5, question: 'Which article of the Indian Constitution abolishes untouchability?', options: ['Article 14','Article 15','Article 17','Article 19'], correct: 2, explanation: 'Article 17 abolishes untouchability and makes its practice a punishable offence.' },
  ],
  media: [
    { id: 1, question: 'IIMC stands for:', options: ['Indian Institute of Mass Communication','International Institute of Media Creation','Indian Institute of Modern Communication','Integrated Institute of Mass Commerce'], correct: 0, explanation: 'IIMC = Indian Institute of Mass Communication — premier media institution in India.' },
    { id: 2, question: 'The "inverted pyramid" in journalism means:', options: ['Most important info first','Story told chronologically','Starting with conclusions','Breaking news only'], correct: 0, explanation: 'The inverted pyramid structure puts the most critical facts at the top of a news story.' },
    { id: 3, question: 'What is a "byline" in journalism?', options: ['The headline','The reporter\'s name credit','The publication date','The source citation'], correct: 1, explanation: 'A byline credits the author/reporter who wrote the article.' },
    { id: 4, question: 'SEO stands for:', options: ['Search Engine Optimization','Social Engagement Output','Server Error Override','Site Engagement Organizer'], correct: 0, explanation: 'SEO = Search Engine Optimization — techniques to rank higher on Google/Bing.' },
    { id: 5, question: 'Which is the world\'s first and oldest news agency?', options: ['Reuters','AP','AFP','ANI'], correct: 0, explanation: 'Reuters (founded 1851) is one of the oldest and largest international news agencies.' },
  ],
  sports: [
    { id: 1, question: 'Which body governs world football (soccer)?', options: ['ICC','FIFA','FIBA','IOC'], correct: 1, explanation: 'FIFA (Fédération Internationale de Football Association) governs world football.' },
    { id: 2, question: 'The Olympic Games are held every:', options: ['2 years','3 years','4 years','5 years'], correct: 2, explanation: 'The Summer Olympics are held every 4 years (Olympiad cycle).' },
    { id: 3, question: 'VO2 max measures:', options: ['Heart rate','Maximum oxygen uptake','Blood pressure','Muscle strength'], correct: 1, explanation: 'VO2 max is the maximum rate of oxygen consumption — key fitness indicator.' },
    { id: 4, question: 'The SAI stands for:', options: ['Sports Association of India','Sports Authority of India','State Athletic Institute','South Asian Institution'], correct: 1, explanation: 'SAI = Sports Authority of India — apex body for sports development in India.' },
    { id: 5, question: 'Which sport uses the term "Love" for zero?', options: ['Cricket','Tennis','Badminton','Table Tennis'], correct: 1, explanation: 'In Tennis, "Love" means zero (0) points scored.' },
  ],
  vocational: [
    { id: 1, question: 'ITI stands for:', options: ['Industrial Training Institute','International Technical Institution','Indian Technical Infrastructure','Integrated Training Institute'], correct: 0, explanation: 'ITI = Industrial Training Institute — provides vocational trade training in India.' },
    { id: 2, question: 'The colour of a neutral wire in Indian electrical standards is:', options: ['Red','Yellow','Black','Green'], correct: 2, explanation: 'In Indian wiring, Black = Neutral, Red = Phase, Green = Earth.' },
    { id: 3, question: 'PMKVY is a skill development scheme by:', options: ['State Government','Ministry of MSME','Ministry of Skill Development','NASSCOM'], correct: 2, explanation: 'PMKVY (Pradhan Mantri Kaushal Vikas Yojana) is run by the Ministry of Skill Development.' },
    { id: 4, question: 'COPA trade in ITI stands for:', options: ['Computer Operator & Programming Assistant','Core Operations & Programming Art','Computer Output & Print Automation','Core Process Automation'], correct: 0, explanation: 'COPA = Computer Operator and Programming Assistant — popular IT trade in ITI.' },
    { id: 5, question: 'A Vernier caliper is used to measure:', options: ['Temperature','Mass','Small lengths precisely','Electric current'], correct: 2, explanation: 'Vernier calipers measure small distances/dimensions with high precision (0.02mm accuracy).' },
  ],
  diploma: [
    { id: 1, question: 'Lateral entry in B.Tech is available for students with:', options: ['10th pass','12th pass','Diploma holders','ITI holders'], correct: 2, explanation: 'Diploma holders can enter B.Tech directly into 2nd year via lateral entry.' },
    { id: 2, question: 'What does CAD/CAM stand for?', options: ['Computer Aided Design/Computer Aided Manufacturing','Core Application Design/Core Application Management','Computer Applied Drawing/Computer Applied Modeling','Central Applied Design/Central Applied Machinery'], correct: 0, explanation: 'CAD = Computer-Aided Design, CAM = Computer-Aided Manufacturing.' },
    { id: 3, question: 'A 3-phase power supply has how many wires?', options: ['2','3','4','5'], correct: 2, explanation: 'A 3-phase supply uses 4 wires: 3 phase conductors + 1 neutral wire.' },
    { id: 4, question: 'JEECUP is the entrance exam for polytechnic in:', options: ['Maharashtra','Gujarat','Uttar Pradesh','Tamil Nadu'], correct: 2, explanation: 'JEECUP = Joint Entrance Examination Council Uttar Pradesh — for UP polytechnic admission.' },
    { id: 5, question: 'The C programming language was developed by:', options: ['Bill Gates','Dennis Ritchie','Linus Torvalds','James Gosling'], correct: 1, explanation: 'Dennis Ritchie developed the C programming language at Bell Labs (1969–1973).' },
  ],
};
