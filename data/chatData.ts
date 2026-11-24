export interface Intent {
  name: string;
  description: string;
  type: 'fixed' | 'retrieval';
  topic?: string;
  patterns: string[];
  response?: string;
}

export interface KnowledgeEntry {
  id: string;
  topic: string;
  language: 'en' | 'hi';
  text: string;
}

export const intents: Intent[] = [
  // 1. Greetings / Small talk
  {
    name: "GREETING",
    description: "Basic greetings",
    type: "fixed",
    patterns: [
      "hi", "hello", "hey", "hey there", "namaste", "namaskar", 
      "hii raj", "hello bro", "kya haal hai", "how are you", 
      "how r u", "kaise ho", "kem cho", "paper pots", "good morning", "good evening",
      "hey paper pots", "hello assistant", "paper pots ho", "tumhara name kya hai",
      "are you paper pots"
    ],
    response:
      "Hi! I’m Paper Pots 🪴. Ask me about Raj Saroj's skills, projects, Webforge, or contact info!\n\nनमस्ते! मैं Paper Pots हूँ। आप मुझसे राज सरोज के स्किल्स, प्रोजेक्ट्स, Webforge या कॉन्टैक्ट के बारे में पूछ सकते हैं!"
  },

  {
    name: "HOW_ARE_YOU",
    description: "Respond to 'how are you'",
    type: "fixed",
    patterns: [
      "how are you", "how is he", "kya haal", "kaise ho", 
      "kaisi chal rhi hai", "sab kaisa chal raha hai", "what's up", "wassup",
      "doing good", "how is raj"
    ],
    response:
      "He's doing great, busy building his startup Webforge! Ask about his projects or skills?\n\nवो बढ़िया हैं, अपने स्टार्टअप Webforge पर काम कर रहे हैं! उनके प्रोजेक्ट्स या स्किल्स के बारे में पूछें?"
  },

  // 2. About me
  {
    name: "ABOUT_ME",
    description: "Who are you / about you",
    type: "fixed",
    patterns: [
      "who are you", "tell me about yourself", "about you", "about u", 
      "tum kaun ho", "aap kaun ho", "who is raj", "who is he",
      "tell me about raj", "about raj", "profile", "bio", "introduction",
      "tell me about him", "can you introduce raj", "can you introduce him",
      "who built this website", "raj kaun hai", "thoda introduction de do",
      "is portfolio ke owner kaun hain", "owner of this website"
    ],
    response:
      "Raj Saroj is a CS student (2022–26) & aspiring founder. He's currently building Webforge, a competitive platform for developers.\n\nराज सरोज एक CS स्टूडेंट (2022–26) और फाउंडर हैं। अभी वो डेवलपर्स के लिए Webforge प्लेटफॉर्म बना रहे हैं।"
  },

  // 3. Skills / Tech Stack
  {
    name: "SKILLS",
    description: "Skills and tech stack",
    type: "fixed",
    patterns: [
      "what are your skills", "your skills", "his skills", "skills batao", 
      "what tech stack do you use", "tech stack", "which languages you know", 
      "kon kon si language aati hai", "programming skills", "coding stack",
      "skills", "technology", "technologies", "know", "coding",
      "what are raj's skills", "what tech stack does he use",
      "which programming languages does he know", "is he a frontend or backend developer",
      "does he know react or nodejs", "uski skills kya hain", 
      "kaun si programming languages aati hain", "web development aata hai kya"
    ],
    response:
      "Tech Stack:\n• Langs: JS, TS, Python\n• Web: React, Next.js, Tailwind\n• Backend: Node.js, Express\n• Tools: Git, AI APIs\n\nटेक स्टैक:\n• Langs: JS, TS, Python\n• Web: React, Next.js\n• Backend: Node.js\n• Tools: Git, AI APIs"
  },

  // 4. Education
  {
    name: "EDUCATION",
    description: "College, branch, year",
    type: "fixed",
    patterns: [
      "which college", "what college", "where do you study", "where does he study",
      "where are you studying", "college details", "education", 
      "qualification", "which year are you in", "kaun se year me ho", 
      "kaun se college me ho", "degree", "btech", "university", "study",
      "what is his educational background", "which college does he study in",
      "is he currently a student", "college kaunsa hai", "abhi padh raha hai ya pass out",
      "which year is he in"
    ],
    response:
      "He's a B.Tech Computer Science student (2022–26), balancing academics with building real startups.\n\nवो B.Tech कंप्यूटर साइंस स्टूडेंट (2022–26) हैं, जो पढ़ाई के साथ स्टार्टअप्स भी बना रहे हैं।"
  },

  // 5. Projects overview (Retrieval)
  {
    name: "PROJECTS_OVERVIEW",
    description: "General projects question",
    type: "retrieval",
    topic: "projects_overview",
    patterns: [
      "what projects have you done", "your projects", "his projects",
      "show me your projects", "projects batao", "kya kya banaya hai", 
      "portfolio projects", "side projects", "konsi website banayi hai",
      "projects", "works", "creations", "what projects has Raj saroj worked on",
      "can you show me his projects", "what kind of projects does he build",
      "any interesting or startup level projects", "portfolio projects ka overview do",
      "koi real world project banaya hai", "any interesting projects"
    ]
  },

  // 6. Webforge specific (Retrieval)
  {
    name: "Webforge_INTRO",
    description: "What is Webforge",
    type: "retrieval",
    topic: "Webforge_intro",
    patterns: [
      "what is Webforge", "tell me about Webforge", "Webforge kya hai", 
      "Webforge ke baare me batao", "your startup", "his startup",
      "your platform", "developer arena platform", "dev competition platform",
      "Webforge", "why did Raj saroj start Webforge", "what problem does Webforge solve",
      "how is Webforge different from other platforms", "Webforge ka idea kaise aaya",
      "ye platform kis cheez ke liye hai", "Webforge vision", "difference between Webforge and other platforms"
    ]
  },

  // 7. Founder mindset (Retrieval)
  {
    name: "FOUNDER_MINDSET",
    description: "Questions about startup mindset and future goals",
    type: "retrieval",
    topic: "founder_mindset",
    patterns: [
      "what are your future goals", "future plans", "his future plans",
      "what do you want to become", "aage kya karna hai", 
      "do you want job or startup", "job chahiye ya business", 
      "startup mindset", "you want to be founder or employee", 
      "how will you become millionaire", "goal", "dream", "ambition",
      "does Raj saroj want a job or a startup", "is he interested in startups",
      "does he want to be a founder", "what is his long term vision",
      "aage ka plan kya hai", "job karega ya business", "founder or employee"
    ]
  },

  // 8. Experience (Retrieval)
  {
    name: "EXPERIENCE",
    description: "Internships, freelance, contributions",
    type: "retrieval",
    topic: "experience",
    patterns: [
      "do you have any experience", "work experience", "his experience",
      "internship", "freelance", "experience batao", 
      "koi experience hai", "kya tumne kahin kaam kiya hai", "experience", "job",
      "does he have any work experience", "has he done internships",
      "does he do freelancing", "how does he learn new technologies",
      "internship ki hai kya", "kaise practice karta hai coding"
    ]
  },

  // 9. Contact
  {
    name: "CONTACT",
    description: "How to contact",
    type: "fixed",
    patterns: [
      "how can i contact you", "contact details", "your email", "his email",
      "email id", "linkedin", "github", "social media", "reach you", 
      "connect with you", "tumse kaise baat kar sakte hain", 
      "contact kaise kare", "contact", "email", "phone", "message",
      "how can i contact Raj saroj", "can i connect with him on linkedin",
      "what is his email address", "can i see his github",
      "linkedin ya github milega", "baat karni ho to kaise karein"
    ],
    response:
      "Reach him here:\ncall - +91 8591100328\nmail - rajsaroj7991@gmail.com\nlinkedin - Raj saroj-Gaurav\nX/twitter - Papercode_\n\nयहाँ संपर्क करें:\ncall - +91 8591100328\nmail - rajsaroj7991@gmail.com\nlinkedin - Raj saroj-Gaurav\nX/twitter - Papercode_"
  },

  // 10. Resume / CV
  {
    name: "RESUME",
    description: "Resume / CV link",
    type: "fixed",
    patterns: [
      "can i see your resume", "send me your cv", "your resume", "his resume",
      "cv de do", "resume dikhao", "share resume", "download your resume",
      "resume", "cv", "curriculum vitae", "give me his resume",
      "is his resume available", "can i download his cv", "resume ka link milega kya",
      "resume dikhao"
    ],
    response:
      "Grab his resume from the top right button! ↗️\n\nऊपर दाईं ओर दिए गए बटन से रिज़्यूमे डाउनलोड करें! ↗️"
  },

  // 11. Hobbies
  {
    name: "HOBBIES",
    description: "Hobbies and interests",
    type: "fixed",
    patterns: [
      "what are your hobbies", "your hobbies", "his hobbies",
      "free time me kya karte ho", "interest kya hai", 
      "what do you do in free time", "timepass kaise karte ho",
      "hobby", "interest", "what does raj do in his free time",
      "tell me his hobbies", "what interests him apart from coding",
      "coding ke alawa kya karta hai", "koi hobbies hain kya"
    ],
    response:
      "He loves shipping side projects, brainstorming startup ideas, and learning new tech. 🛠️\n\nउन्हें साइड प्रोजेक्ट्स बनाना, स्टार्टअप आइडियाज़ सोचना और नई टेक्नोलॉजी सीखना पसंद है।"
  },

  // 12. Language preference
  {
    name: "LANGUAGE_PREFERENCE",
    description: "Change language",
    type: "fixed",
    patterns: [
      "talk in hindi", "hindi me baat karo", "hindi me bolo", 
      "speak in hindi", "speak english", "only english", 
      "english me baat karo", "hinglish me baat karo",
      "can you talk in hindi", "speak in english only", "only english please",
      "hinglish me reply karo"
    ],
    response:
      "I speak English & Hindi! Just say 'Only English' or 'Sirf Hindi' to switch.\n\nमैं हिंदी और इंग्लिश दोनों बोलती हूँ!"
  },

  // 13. Feedback
  {
    name: "FEEDBACK",
    description: "User wants to give feedback",
    type: "fixed",
    patterns: [
      "i want to give feedback", "feedback", "suggestion", "improvement", 
      "i have a suggestion", "bot feedback", "chatbot feedback", 
      "ek suggestion hai", "nice portfolio", "this chatbot is helpful",
      "can i give feedback", "feedback dena hai", "bot achha laga"
    ],
    response:
      "Thanks! Please email him directly or DM on LinkedIn.\n\nशुक्रिया! कृपया उन्हें सीधे ईमेल करें या LinkedIn पर DM करें।"
  },

  // 14. Identity (New)
  {
    name: "BOT_IDENTITY",
    description: "Who is the bot",
    type: "fixed",
    patterns: [
      "who are you bot", "are you real", "are you ai", "who made you", 
      "paper pots identity", "bot identity", "are you a real person",
      "are you human or ai", "what is paper pots", "ye chatbot kaise bana hai",
      "tum kya ho exactly", "who created you"
    ],
    response:
      "I'm Paper Pots, a digital assistant built by Raj saroj to help you explore his work!\n\nमैं Paper Pots हूँ, एक बॉट जिसे राज सरोज ने आपके सवालों के जवाब देने के लिए बनाया है!"
  },

  // 15. Appreciation (New)
  {
    name: "APPRECIATION",
    description: "Compliments",
    type: "fixed",
    patterns: ["good bot", "nice work", "awesome", "great portfolio", "cool website", "love it", "nice"],
    response: "Aw, thank you! I'll pass the message to Raj saroj. 🪴\n\nशुक्रिया! मैं  को बता दूँगी। 🪴"
  },

  // 16. Fallback
  {
    name: "FALLBACK",
    description: "Default if nothing matches",
    type: "fixed",
    patterns: [], 
    response:
      "I'm not sure. Ask about Skills, Projects, Webforge, or Contact!\n\nमुझे पक्का नहीं पता। स्किल्स, प्रोजेक्ट्स, Webforge या कॉन्टैक्ट के बारे में पूछें!"
  }
];

// Concise Knowledge Base for Retrieval
export const knowledgeBase: KnowledgeEntry[] = [
  // Projects
  {
    id: "projects_overview_en",
    topic: "projects_overview",
    language: "en",
    text: "He builds real-world platforms. Key projects: Webforge (developer arena), Paperfolio (this site), and Gemini Vision AI tools."
  },
  {
    id: "projects_overview_hi",
    topic: "projects_overview",
    language: "hi",
    text: "वो असली प्लेटफॉर्म्स बनाते हैं। मुख्य प्रोजेक्ट्स: Webforge (डेवलपर एरीना), Paperfolio (यह साइट), और Gemini AI टूल्स।"
  },

  // Webforge
  {
    id: "Webforge_intro_en",
    topic: "Webforge_intro",
    language: "en",
    text: "Webforge is a battle arena for developers. It allows them to prove skills via hackathons and daily challenges, not just resumes."
  },
  {
    id: "Webforge_intro_hi",
    topic: "Webforge_intro",
    language: "hi",
    text: "Webforge डेवलपर्स के लिए एक बैटल एरीना है जहाँ वो हैकाथॉन्स और चैलेंजेज़ के ज़रिए अपनी स्किल्स साबित कर सकते हैं।"
  },

  // Founder Mindset
  {
    id: "founder_mindset_en",
    topic: "founder_mindset",
    language: "en",
    text: "He sees himself as a builder/founder, not just an employee. His goal is financial independence by shipping successful products."
  },
  {
    id: "founder_mindset_hi",
    topic: "founder_mindset",
    language: "hi",
    text: "वो खुद को एक फाउंडर/बिल्डर मानते हैं। उनका लक्ष्य रियल प्रोडक्ट्स बनाकर फाइनेंशियल इंडिपेंडेंस पाना है।"
  },

  // Experience
  {
    id: "experience_en",
    topic: "experience",
    language: "en",
    text: "He creates his own opportunities by building platforms like Webforge. He treats every side project like a real product with users."
  },
  {
    id: "experience_hi",
    topic: "experience",
    language: "hi",
    text: "वो Webforge जैसे प्लेटफॉर्म बनाकर खुद मौके बनाते हैं। वो हर साइड प्रोजेक्ट को असली प्रोडक्ट की तरह मानते हैं।"
  }
];

// Structured contact entries (visible text stored in knowledgeBase above, hidden links exported below)
export const contactLinks: { phone: string; mail: string; linkedin: string; twitter: string } = {
  phone: 'tel:+918591100328',
  mail: 'mailto:rajsaroj7991@gmail.com',
  linkedin: 'https://www.linkedin.com/in/Raj saroj-gaurav-5b70112a2/',
  twitter: 'https://x.com/papercode_'
};

// Add contact entries to the knowledge base so retrievals can return the visible labels.
knowledgeBase.push({
  id: 'contact_en',
  topic: 'contact',
  language: 'en',
  text: 'call - +91 8591100328\nmail - rajsaroj7991@gmail.com\nlinkedin - Raj saroj-Gaurav\nX/twitter - Papercode_'
});

knowledgeBase.push({
  id: 'contact_hi',
  topic: 'contact',
  language: 'hi',
  text: 'call - +91 8591100328\nmail - rajsaroj7991@gmail.com\nlinkedin - Raj saroj-Gaurav\nX/twitter - Papercode_'
});
