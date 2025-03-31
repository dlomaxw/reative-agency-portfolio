"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "lg" | "fr" | "sw" | "rw"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations for all supported languages
const translations = {
  en: {
    // Header
    services: "Services",
    animation: "Animation",
    architecture: "Architecture",
    about: "About",
    contact: "Contact",

    // Hero
    "hero.title": "VirtuScope Studios",
    "hero.subtitle":
      "Transforming imagination into immersive digital experiences through cutting-edge virtual reality and creative solutions.",
    "hero.cta.explore": "Explore Our Services",
    "hero.cta.contact": "Contact Us",

    // Services
    "services.title": "Our Services",
    "services.vr.title": "Virtual Reality Solutions",
    "services.vr.description": "Immersive experiences that captivate users and drive engagement.",
    "services.vr.corporate": "Corporate VR Tours",
    "services.vr.corporate.description":
      "Interactive virtual tours of facilities, products, or services for real estate, hospitality, and tourism sectors.",
    "services.vr.events": "Event VR Experiences",
    "services.vr.events.description":
      "Immersive environments for conferences, trade shows, and gatherings to engage audiences.",
    "services.vr.custom": "Custom VR Applications",
    "services.vr.custom.description":
      "Tailored VR solutions for healthcare, education, and training to simulate real-world scenarios.",

    "services.multimedia.title": "Multimedia Production",
    "services.multimedia.description": "Stunning visual content that tells your story.",
    "services.multimedia.music": "Music Video Creation",
    "services.multimedia.music.description":
      "Visually stunning narratives that translate musical vision using advanced camera techniques.",
    "services.multimedia.documentary": "Documentary Filmmaking",
    "services.multimedia.documentary.description":
      "In-depth research and striking cinematography to create informative and inspiring narratives.",
    "services.multimedia.wedding": "Wedding Videography",
    "services.multimedia.wedding.description":
      "Artistic cinematography and heartfelt storytelling to capture the essence of special days.",

    "services.digital.title": "Digital Development",
    "services.digital.description": "Cutting-edge digital solutions for modern businesses.",
    "services.digital.web": "Web Development",
    "services.digital.web.description":
      "User-friendly and visually appealing websites with responsive designs that perform seamlessly across devices.",
    "services.digital.ai": "AI Module Creation",
    "services.digital.ai.description":
      "Bespoke AI solutions that enhance decision-making and improve efficiency for businesses.",
    "services.digital.graphic": "Graphic Design",
    "services.digital.graphic.description":
      "Captivating visuals for branding, marketing materials, and user interfaces that communicate effectively.",

    // About
    "about.title": "About Us",
    "about.overview.title": "Company Overview",
    "about.overview.description":
      "VirtuScope Studios is a pioneering entity in the realm of virtual reality and digital solutions, dedicated to transforming the way individuals and organizations interact with technology. Established with a mission to innovate and inspire, our company leverages cutting-edge technology to create immersive experiences that captivate users and drive engagement.",
    "about.mission.title": "Mission",
    "about.mission.description":
      "Our mission at VirtuScope Studios is to empower creativity and enhance user interaction through state-of-the-art virtual reality solutions. We strive to bridge the gap between imagination and reality by providing tools that allow users to explore new dimensions, whether for entertainment, education, or professional training.",
    "about.values.title": "Values",
    "about.values.innovation": "Innovation - Continuously seeking new ideas and methods",
    "about.values.creativity": "Creativity - Thinking outside the box and challenging norms",
    "about.values.customer": "Customer Satisfaction - Prioritizing client needs and feedback",
    "about.unique.title": "Unique Value Proposition",
    "about.unique.description":
      "What sets VirtuScope Studios apart is our commitment to customization and user-centric design. We understand that each client has unique needs, which is why our team works closely with clients to develop tailor-made solutions that align with their vision.",

    // Team
    "team.title": "Our Team",
    "team.ceo.name": "Habimana Aime",
    "team.ceo.role": "CEO/Founder",
    "team.ceo.bio": "Visionary leader with expertise in virtual reality technologies and digital innovation.",
    "team.creative.name": "Muvunyi Blaise",
    "team.creative.role": "Creative Director",
    "team.creative.bio":
      "Talented creative professional guiding the artistic vision and design direction of all projects.",
    "team.content.name": "Mwebaaze",
    "team.content.role": "Content Management",
    "team.content.bio": "Skilled content strategist ensuring high-quality multimedia production across all projects.",

    // Clients
    "clients.title": "Who We Serve",
    "clients.description":
      "At VirtuScope Studios, we cater to a diverse clientele, each with distinct needs and expectations that guide our tailored solutions.",

    // Projects  each with distinct needs and expectations that guide our tailored solutions.",

    // Projects
    "projects.title": "Featured Projects",
    "projects.animation": "Animation",
    "projects.architecture": "Architecture",

    // 3D Model Explorer
    "model.title": "Interactive 3D Model Explorer",
    "model.description":
      "Explore our architectural designs in 3D. Drag to rotate, scroll to zoom, and select different models below.",
    "model.controls": "Drag to rotate • Scroll to zoom • Double-click to reset",
    "model.loading": "Loading model...",
    "model.office": "Modern Office Building",
    "model.office.description": "Contemporary office space with open floor plan and sustainable design elements",
    "model.villa": "Residential Villa",
    "model.villa.description": "Luxury residential villa with swimming pool and panoramic views",
    "model.cultural": "Cultural Center",
    "model.cultural.description": "Multi-purpose cultural center with exhibition spaces and auditorium",

    // Video Carousel
    "video.title": "Our Work in Motion",
    "video.description":
      "These are just a few examples of our work. Contact us to see our full portfolio or discuss your project needs.",

    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "We'd love to hear from you. Reach out to discuss how we can bring your vision to life.",
    "contact.info.title": "Contact Information",
    "contact.info.address": "Address",
    "contact.info.address.value": "1st Floor Shop 6, The Square, Plot 10 Third St, Kampala",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.website": "Website",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",

    // Footer
    "footer.about": "About",
    "footer.services": "Services",
    "footer.projects": "Projects",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.copyright": "© 2023 VirtuScope Studios. All rights reserved.",

    // Language Selector
    "language.select": "Select Language",
    "language.en": "English",
    "language.lg": "Luganda",
    "language.fr": "French",
    "language.sw": "Swahili",
    "language.rw": "Kinyarwanda",
  },

  lg: {
    // Header
    services: "Empeereza",
    animation: "Ebifaananyi Ebitambula",
    architecture: "Enteekateeka y'Amayumba",
    about: "Ebikwata ku Ffe",
    contact: "Tukwatibweko",

    // Hero
    "hero.title": "VirtuScope Studios",
    "hero.subtitle": "Tukyusa ebirowoozo okufuuka ebintu ebirabika obulungi nga tukozesa tekinologiya ey'omulembe.",
    "hero.cta.explore": "Kebera Empeereza Zaffe",
    "hero.cta.contact": "Tukwatibweko",

    // Services
    "services.title": "Empeereza Zaffe",
    "services.vr.title": "Empeereza za Virtual Reality",
    "services.vr.description": "Ebintu ebirabika obulungi ebikwasa abantu amaanyi.",
    "services.vr.corporate": "Okulambuza Kampuni mu VR",
    "services.vr.corporate.description": "Okulambuza ebintu mu ngeri ennungi ey'amakolero, ebirungo, oba empeereza.",
    "services.vr.events": "Emikolo mu VR",
    "services.vr.events.description": "Emikolo egikwata ku mikutano, emizannyo, n'enkungaana okukwasa abantu amaanyi.",
    "services.vr.custom": "Enkozesa za VR Ezenjawulo",
    "services.vr.custom.description": "Enkozesa za VR ezenjawulo ez'eby'obulamu, okusoma, n'okutendeka.",

    // Model Explorer
    "model.title": "Kebera Ebifaananyi by'Amayumba mu 3D",
    "model.description":
      "Kebera enteekateeka z'amayumba gaffe mu 3D. Kwata okuzunga, yingiza okuzoominga, era londa ebifaananyi eby'enjawulo wansi.",
    "model.controls": "Kwata okuzunga • Yingiza okuzoominga • Nyiga emirundi ebiri okuddamu",
    "model.loading": "Ebifaananyi bitandika...",
    "model.office": "Eyumba y'Ofiisi Eyomulembe",
    "model.office.description": "Ofiisi ennungi n'ebifo ebiggule n'ebintu eby'omulembe",
    "model.villa": "Villa y'Abaami",
    "model.villa.description": "Villa y'abaami n'ekidiba n'endabika ennungi",
    "model.cultural": "Ekizimbe ky'Obuwangwa",
    "model.cultural.description": "Ekizimbe ky'obuwangwa n'ebifo by'okweraga n'ekizimbe ky'emiziki",

    // Contact
    "contact.title": "Tukwatibweko",
    "contact.subtitle":
      "Twagala okuwulira okuva gyoli. Tukwatibweko okwogera ku ngeri gye tuyinza okuleeta ebirowoozo byo mu bulamu.",
    "contact.form.name": "Erinnya",
    "contact.form.email": "Email",
    "contact.form.phone": "Ennamba y'Essimu",
    "contact.form.message": "Obubaka",
    "contact.form.submit": "Weereza Obubaka",
    "contact.form.sending": "Tuweereza...",
  },

  fr: {
    // Header
    services: "Services",
    animation: "Animation",
    architecture: "Architecture",
    about: "À Propos",
    contact: "Contact",

    // Hero
    "hero.title": "VirtuScope Studios",
    "hero.subtitle":
      "Transformer l'imagination en expériences numériques immersives grâce à des solutions de réalité virtuelle et créatives de pointe.",
    "hero.cta.explore": "Découvrir Nos Services",
    "hero.cta.contact": "Contactez-Nous",

    // Services
    "services.title": "Nos Services",
    "services.vr.title": "Solutions de Réalité Virtuelle",
    "services.vr.description": "Des expériences immersives qui captent les utilisateurs et stimulent l'engagement.",
    "services.vr.corporate": "Visites Virtuelles d'Entreprise",
    "services.vr.corporate.description":
      "Visites virtuelles interactives d'installations, de produits ou de services pour les secteurs de l'immobilier, de l'hôtellerie et du tourisme.",
    "services.vr.events": "Expériences VR pour Événements",
    "services.vr.events.description":
      "Environnements immersifs pour conférences, salons professionnels et rassemblements pour engager le public.",
    "services.vr.custom": "Applications VR Personnalisées",
    "services.vr.custom.description":
      "Solutions VR sur mesure pour la santé, l'éducation et la formation pour simuler des scénarios réels.",

    // Model Explorer
    "model.title": "Explorateur de Modèles 3D Interactif",
    "model.description":
      "Explorez nos conceptions architecturales en 3D. Faites glisser pour faire pivoter, défilez pour zoomer et sélectionnez différents modèles ci-dessous.",
    "model.controls": "Glisser pour pivoter • Défiler pour zoomer • Double-cliquer pour réinitialiser",
    "model.loading": "Chargement du modèle...",
    "model.office": "Immeuble de Bureaux Moderne",
    "model.office.description": "Espace de bureau contemporain avec plan ouvert et éléments de conception durable",
    "model.villa": "Villa Résidentielle",
    "model.villa.description": "Villa de luxe avec piscine et vues panoramiques",
    "model.cultural": "Centre Culturel",
    "model.cultural.description": "Centre culturel polyvalent avec espaces d'exposition et auditorium",

    // Contact
    "contact.title": "Contactez-Nous",
    "contact.subtitle":
      "Nous aimerions avoir de vos nouvelles. Contactez-nous pour discuter de la façon dont nous pouvons donner vie à votre vision.",
    "contact.form.name": "Nom",
    "contact.form.email": "Email",
    "contact.form.phone": "Numéro de Téléphone",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer le Message",
    "contact.form.sending": "Envoi en cours...",
  },

  sw: {
    // Header
    services: "Huduma",
    animation: "Animesheni",
    architecture: "Ujenzi",
    about: "Kuhusu Sisi",
    contact: "Wasiliana Nasi",

    // Hero
    "hero.title": "VirtuScope Studios",
    "hero.subtitle":
      "Kubadilisha mawazo kuwa uzoefu wa kidijitali kupitia teknolojia ya hali ya juu ya uhalisia pepe na suluhisho bunifu.",
    "hero.cta.explore": "Chunguza Huduma Zetu",
    "hero.cta.contact": "Wasiliana Nasi",

    // Services
    "services.title": "Huduma Zetu",
    "services.vr.title": "Suluhisho za Uhalisia Pepe",
    "services.vr.description": "Uzoefu wa kuvutia ambao hushawishi watumiaji na kuongeza ushiriki.",
    "services.vr.corporate": "Ziara za VR za Kampuni",
    "services.vr.corporate.description":
      "Ziara za uhalisia pepe za vifaa, bidhaa, au huduma kwa sekta za mali isiyohamishika, ukarimu, na utalii.",
    "services.vr.events": "Uzoefu wa VR wa Matukio",
    "services.vr.events.description":
      "Mazingira ya kuvutia kwa mikutano, maonyesho ya biashara, na makusanyiko kushirikisha hadhira.",
    "services.vr.custom": "Programu za VR Maalum",
    "services.vr.custom.description":
      "Suluhisho za VR zilizoundwa kwa ajili ya afya, elimu, na mafunzo kuiga hali halisi.",

    // Model Explorer
    "model.title": "Kichunguzi cha Modeli za 3D",
    "model.description":
      "Chunguza michoro yetu ya ujenzi katika 3D. Buruta kuzungusha, skroli kwa kukuza, na chagua modeli tofauti hapa chini.",
    "model.controls": "Buruta kuzungusha • Skroli kukuza • Bofya mara mbili kurudisha",
    "model.loading": "Inapakia modeli...",
    "model.office": "Jengo la Ofisi la Kisasa",
    "model.office.description": "Nafasi ya ofisi ya kisasa na mpango wazi na vipengele vya ujenzi endelevu",
    "model.villa": "Villa ya Makazi",
    "model.villa.description": "Villa ya kifahari na bwawa la kuogelea na mandhari ya kuvutia",
    "model.cultural": "Kituo cha Utamaduni",
    "model.cultural.description":
      "Kituo cha utamaduni chenye matumizi mengi na nafasi za maonyesho na ukumbi wa mikutano",

    // Contact
    "contact.title": "Wasiliana Nasi",
    "contact.subtitle":
      "Tungependa kusikia kutoka kwako. Wasiliana nasi kujadili jinsi tunaweza kuleta maono yako katika uhalisia.",
    "contact.form.name": "Jina",
    "contact.form.email": "Barua pepe",
    "contact.form.phone": "Namba ya Simu",
    "contact.form.message": "Ujumbe",
    "contact.form.submit": "Tuma Ujumbe",
    "contact.form.sending": "Inatuma...",
  },

  rw: {
    // Header
    services: "Serivisi",
    animation: "Animasiyo",
    architecture: "Ubwubatsi",
    about: "Turi Ba Nde",
    contact: "Twandikire",

    // Hero
    "hero.title": "VirtuScope Studios",
    "hero.subtitle": "Guhindura ibitekerezo bikaba ibikorwa bifatika binyuze muri tekinoloji y'ikoranabuhanga.",
    "hero.cta.explore": "Reba Serivisi Zacu",
    "hero.cta.contact": "Twandikire",

    // Services
    "services.title": "Serivisi Zacu",
    "services.vr.title": "Serivisi za Virtual Reality",
    "services.vr.description": "Ibikorwa bifatika bifasha abantu kugira uruhare.",
    "services.vr.corporate": "Kwerekana Ibigo muri VR",
    "services.vr.corporate.description": "Kwerekana ibigo, ibicuruzwa, cyangwa serivisi mu buryo bw'ikoranabuhanga.",
    "services.vr.events": "Ibikorwa bya VR",
    "services.vr.events.description":
      "Ibikorwa bifatika by'inama, amakinamico, n'amahuriro yo gufasha abantu kugira uruhare.",
    "services.vr.custom": "Porogaramu za VR Zihariye",
    "services.vr.custom.description":
      "Serivisi za VR zihariye zo mu buvuzi, uburezi, n'amahugurwa yo kwerekana ibintu mu buzima nyabwo.",

    // Model Explorer
    "model.title": "Reba Amashusho y'Amazu muri 3D",
    "model.description":
      "Reba amashusho y'amazu yacu muri 3D. Kanda kuzenguruka, kanda kugira ngo ubone hafi, kandi uhitemo amashusho atandukanye hasi.",
    "model.controls": "Kanda kuzenguruka • Kanda kugira ngo ubone hafi • Kanda kabiri gusubiza",
    "model.loading": "Itegereze...",
    "model.office": "Inzu y'Ibiro Igezweho",
    "model.office.description": "Ibiro bigezweho bifite umwanya munini n'ibintu by'ikoranabuhanga",
    "model.villa": "Inzu Nziza",
    "model.villa.description": "Inzu nziza ifite ikiyaga n'ahantu heza",
    "model.cultural": "Ikigo cy'Umuco",
    "model.cultural.description": "Ikigo cy'umuco gifite ahantu ho kwerekana ibintu n'ahantu ho gukorera inama",

    // Contact
    "contact.title": "Twandikire",
    "contact.subtitle":
      "Twifuza kumva ibyawe. Twandikire kugira ngo tuganire ku buryo twagufasha gushyira mu bikorwa ibitekerezo byawe.",
    "contact.form.name": "Izina",
    "contact.form.email": "Imeyili",
    "contact.form.phone": "Telefoni",
    "contact.form.message": "Ubutumwa",
    "contact.form.submit": "Ohereza Ubutumwa",
    "contact.form.sending": "Kohereza...",
  },
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")

  // Load language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "lg", "fr", "sw", "rw"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    const currentTranslations = translations[language] || translations.en
    return currentTranslations[key] || translations.en[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

