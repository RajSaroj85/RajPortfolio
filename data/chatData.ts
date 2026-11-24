

export type Language = "en" | "hi";
export type IntentType = "fixed" | "retrieval";

export interface Intent {
  name: string;
  description: string;
  type: IntentType;
  topic?: string;
  patterns: string[];
  response?: Record<Language, string>;
}

export interface KnowledgeEntry {
  id: string;
  topic: string;
  language: Language;
  title: string;
  text: string;
  keywords: string[];
}

export interface ContactLinks {
  phone: string;
  email: string;
  linkedin: string;
  twitter: string;
}

export const PAPER_POTS_PROFILE = {
  assistantName: "Paper Pots",
  ownerName: "Raj Saroj",
  role: "Portfolio AI Assistant",
  supportedLanguages: ["en", "hi"] as Language[],
  personality: [
    "friendly",
    "professional",
    "clear",
    "honest",
    "helpful",
  ],
  rules: [
    "Answer only with information supported by the knowledge base.",
    "Never invent qualifications, work experience, project features, or achievements.",
    "If information is unavailable, say so and suggest contacting Raj.",
    "Keep answers concise, structured, and easy to understand.",
    "Use the visitor's chosen language when possible.",
  ],
};

export const contactLinks: ContactLinks = {
  phone: "tel:+918591100328",
  email: "mailto:rajsaroj7991@gmail.com",
  
  linkedin: "https://www.linkedin.com/in/rajsaroj/",
  twitter: "https://x.com/RajSaroj199689",
};

const bilingual = (en: string, hi: string): Record<Language, string> => ({
  en,
  hi,
});

export const intents: Intent[] = [
  {
    name: "GREETING",
    description: "Greetings and starting a conversation",
    type: "fixed",
    patterns: [
      "hi", "hello", "hey", "hey there", "good morning", "good afternoon",
      "good evening", "namaste", "namaskar", "hii", "hello paper pots",
      "hey paper pots",
    ],
    response: bilingual(
      "Hey! 👋 I'm Paper Pots, Raj Saroj's portfolio assistant. I can help you explore his projects, skills, education, goals, and contact details. What would you like to know?",
      "नमस्ते! 👋 मैं Paper Pots हूँ, Raj Saroj का portfolio assistant। मैं उनके projects, skills, education, goals और contact details के बारे में बता सकता हूँ। आप क्या जानना चाहेंगे?"
    ),
  },
  {
    name: "HOW_ARE_YOU",
    description: "Small talk",
    type: "fixed",
  patterns: ["how are you", "how are you doing", "whats up", "what's up", "kaise ho", "kya haal hai"],
    response: bilingual(
      "I'm doing great and ready to help you explore Raj's portfolio. What would you like to know?",
      "मैं बढ़िया हूँ और Raj का portfolio explore कराने के लिए तैयार हूँ। आप क्या जानना चाहेंगे?"
    ),
  },
  {
    name: "ABOUT_RAJ",
    description: "Raj's introduction and profile",
    type: "fixed",
        title: "प्रोजेक्ट्स",
    text: "मौजूदा जानकारी में WebForge (developer arena), Paperfolio (portfolio website) और Gemini Vision AI tools मुख्य projects के रूप में दिए गए हैं। अधिक जानकारी के लिए Raj के portfolio का projects section देखें।",
    keywords: ["WebForge", "paperfolio", "gemini", "vision", "ai tools", "portfolio"],
  },
  {
    id: "webforge_en",
    topic: "webforge",
    language: "en",
    title: "WebForge",
    text: "WebForge is a battle arena for developers. It aims to let developers demonstrate their skills through hackathons and daily challenges, rather than relying only on resumes.",
    keywords: ["developer", "battle arena", "hackathons", "daily challenges", "skills", "resume"],
  },
  {
    id: "webforge_hi",
    topic: "webforge",
    language: "hi",
    title: "WebForge",
    text: "WebForge developers के लिए एक battle arena है। इसका उद्देश्य developers को केवल resumes पर निर्भर रहने के बजाय hackathons और daily challenges के माध्यम से अपनी skills दिखाने का अवसर देना है।",
    keywords: ["developer", "battle arena", "hackathons", "daily challenges", "skills", "resume"],
  },
  {
    id: "goals_en",
    topic: "goals",
    language: "en",
    title: "Goals and Founder Mindset",
    text: "Raj describes himself as a builder and aspiring founder. His stated goal is to build successful products and achieve financial independence.",
    keywords: ["builder", "founder", "products", "financial independence", "startup"],
  },
  {
    id: "goals_hi",
    topic: "goals",
    language: "hi",
    title: "लक्ष्य और Founder Mindset",
    text: "Raj खुद को builder और aspiring founder मानते हैं। उनका बताया गया लक्ष्य successful products बनाना और financial independence हासिल करना है।",
    keywords: ["builder", "founder", "products", "financial independence", "startup"],
  },
  {
    id: "experience_en",
    topic: "experience",
    language: "en",
    title: "Experience",
    text: "The current knowledge base describes Raj as someone who creates opportunities by building platforms such as WebForge and treats side projects like real products. It does not confirm a formal job or internship.",
    keywords: ["platforms", "WebForge", "side projects", "products", "internship", "job"],
  },
  {
    id: "experience_hi",
    topic: "experience",
    language: "hi",
    title: "अनुभव",
    text: "मौजूदा जानकारी के अनुसार Raj WebForge जैसे platforms बनाकर अवसर तैयार करते हैं और side projects को real products की तरह लेते हैं। इसमें किसी formal job या internship की पुष्टि नहीं है।",
    keywords: ["platforms", "WebForeg", "side projects", "products", "internship", "job"],
  },
];

export const fallbackResponse: Record<Language, string> = bilingual(
  "I don't have verified information about that yet. I don't want to guess or give you an inaccurate answer. Try asking about Raj's projects, skills, education, WebForge, goals, or contact details.",
  "इस सवाल के बारे में मेरे पास अभी verified जानकारी नहीं है। मैं अंदाज़ा लगाकर गलत जवाब नहीं देना चाहता। आप Raj के projects, skills, education, WebForge, goals या contact details के बारे में पूछ सकते हैं।"
);

export function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scorePattern(message: string, pattern: string): number {
  const normalizedPattern = normalizeText(pattern);
  if (!normalizedPattern) return 0;
  if (message === normalizedPattern) return 100 + normalizedPattern.length;
  if (message.includes(normalizedPattern)) return 50 + normalizedPattern.length;

  const words = normalizedPattern.split(" ");
  const matched = words.filter((word) => message.split(" ").includes(word)).length;
  if (words.length === 0) return 0;
  return (matched / words.length) * 20;
}

export function detectIntent(message: string): Intent | undefined {
  const normalizedMessage = normalizeText(message);
  if (!normalizedMessage) return undefined;

  let bestIntent: Intent | undefined;
  let bestScore = 0;

  for (const intent of intents) {
    const score = Math.max(
      0,
      ...intent.patterns.map((pattern) => scorePattern(normalizedMessage, pattern))
    );

    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  // Avoid forcing a weak keyword match into an unrelated answer.
  return bestScore >= 20 ? bestIntent : undefined;
}

export function getKnowledge(topic: string, language: Language = "en"): KnowledgeEntry | undefined {
  return (
    knowledgeBase.find((entry) => entry.topic === topic && entry.language === language) ??
    knowledgeBase.find((entry) => entry.topic === topic && entry.language === "en")
  );
}

export function getIntentResponse(intent: Intent, language: Language = "en"): string | undefined {
  return intent.response?.[language] ?? intent.response?.en;
}

export function getPaperPotsReply(message: string, language: Language = "en"): string {
  const intent = detectIntent(message);
  if (!intent) return fallbackResponse[language];

  if (intent.type === "fixed") {
    return getIntentResponse(intent, language) ?? fallbackResponse[language];
  }

  if (intent.topic) {
    const entry = getKnowledge(intent.topic, language);
    return entry?.text ?? fallbackResponse[language];
  }

  return fallbackResponse[language];
