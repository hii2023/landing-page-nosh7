import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "hinglish" | "hi" | "gu";

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "hinglish", label: "Hinglish", flag: "🇮🇳" },
  { code: "hi", label: "हिंदी", flag: "🇮🇳" },
  { code: "gu", label: "ગુજરાતી", flag: "🇮🇳" },
];

export const translations = {
  en: {
    nav: {
      benefits: "Benefits",
      howItWorks: "How It Works",
      customPlans: "Custom Plans",
      testimonials: "Testimonials",
      partnerNow: "Partner Now",
      pureVeg: "100% Pure Veg",
      tagline: "Ahmedabad's #1 Salad Kitchen",
    },
    hero: {
      badge: "🥗 Ahmedabad ka #1 Pure Veg Salad Cloud Kitchen",
      heading: "Partner With Nosh7 —",
      headingSpan: "Fuel Your Clients' Goals",
      sub: "Join 2000+ satisfied clients across Ahmedabad. Help your patients stick to their meal plans with fresh, nutritionist-backed, 100% pure-veg salads — customised to their condition and your prescription.",
      cta1: "Become a Partner",
      cta2: "💬 Request Free Sample",
    },
    stats: {
      customers: "Happy Customers",
      customersLabel: "in Ahmedabad",
      fresh: "100%",
      freshLabel: "Fresh, Never Frozen",
      batches: "4 Batches",
      batchesLabel: "Cooked Fresh Daily",
      rating: "4.6 ★",
      ratingLabel: "Average Customer Rating",
      orderLabel: "Order or rate us:",
      ratedBy: "Rated by customers",
      directOrder: "Direct Order",
    },
    features: {
      whyTitle: "Why Partner With Us?",
      whySub: "We solve the biggest roadblock in diet plans: execution. When clients don't have to cook, they actually follow your advice.",
      challengeHead: "The Challenge",
      solutionHead: "Nosh7 Solution",
      challenges: [
        "Clients can't maintain meal plans",
        "Clients struggle with portion control",
        "Cultural dietary needs ignored",
        "Hard to track client compliance",
        "No tangible partner benefits",
      ],
      solutions: [
        "Fresh cooked salads delivered daily in 4 batches",
        "Nutritionist-calibrated, portion-controlled meals",
        "100% pure veg · Jain options · No onion-garlic option",
        "Easy WhatsApp ordering, daily delivery",
        "Earn commission starting 5% + clients get discount",
      ],
      qualityTitle: "Our Quality Promise",
      qualitySub: "Food you can confidently recommend to your most discerning clients.",
      quality: [
        { title: "Seasonal Fresh Ingredients", desc: "We use what nature offers this season — peak nutrition, better taste, maximum freshness." },
        { title: "Jain Friendly", desc: "Jain Dairy original paneer. No onion, no garlic, no root vegetables on request." },
        { title: "0 Preservatives. Ever.", desc: "Zero artificial additives or colors. Always natural ingredients, always real food." },
        { title: "Health Goal Focused", desc: "Custom meals for Weight Loss, Diabetes, Thyroid, PCOD, and High Protein goals." },
        { title: "Cloud Kitchen Fresh", desc: "Every order freshly prepared — never pre-made, never frozen, always today's batch." },
        { title: "Salads + Drinks + Seeds", desc: "Complete nutrition: fresh salads, health drinks, and seeds in every meal plan." },
      ],
      batchTitle: "4 Fresh Delivery Batches",
      batchSub: "We don't cook once for the whole day. Salads are prepared just hours before consumption.",
      batches: [
        { label: "Morning Batch", prep: "Prep starts 8:30 AM" },
        { label: "Lunch Batch", prep: "Prep starts 10:30 AM" },
        { label: "Evening Batch", prep: "Prep starts 3:30 PM" },
        { label: "Dinner Batch", prep: "Prep starts 5:30 PM" },
      ],
    },
    howItWorks: {
      title: "How The Partnership Works",
      sub: "Four simple steps to better client results and a new revenue stream for your practice.",
      steps: [
        { title: "1. Register", desc: "Sign up as a partner on WhatsApp and get your unique clinic code instantly." },
        { title: "2. Share Code", desc: "Give the code to clients alongside their diet plan. They get a special discount on every order." },
        { title: "3. Client Orders", desc: "Clients order via WhatsApp or nosh7.com — fresh salads delivered to their door daily." },
        { title: "4. Earn Commission", desc: "You earn commission starting from 5% on every single meal your clients order." },
      ],
    },
    customPlans: {
      badge: "🎨 Fully Customizable",
      title: "We Build the Plan",
      titleSpan: "You Design",
      sub: "No fixed menus. No one-size-fits-all. You prescribe the diet — we cook and deliver it exactly as you envision, every single day.",
      cards: [
        { title: "Customized Salad Bowls", desc: "Every salad bowl is built to your exact dietary specifications — ingredients, portions, toppings, and dressings tailored per client." },
        { title: "Macro-Calibrated Meals", desc: "We calibrate protein, carb, and fat ratios according to your prescription — whether it's high-protein, low-carb, or balanced macros." },
        { title: "Ingredient Substitutions", desc: "Allergic to something? Need to avoid specific ingredients? We swap seamlessly — no cross-contamination, fully documented." },
        { title: "Health Drinks & Seeds", desc: "Pair salads with custom seed blends and health drinks recommended by you — chia, flax, pumpkin, and more." },
        { title: "Portion Flexibility", desc: "Light snack, full meal, or multi-course plan — portion sizes adjusted exactly per your client's calorie target." },
        { title: "Partner-Managed Menus", desc: "You design the menu, we execute it. Send us your client's plan on WhatsApp and we handle the rest daily." },
      ],
      calloutTitle: "You Prescribe. We Deliver.",
      calloutSub: "Simply send us your client's dietary requirements on WhatsApp — ingredients, quantities, frequency — and we take it from there. No app, no complexity.",
      calloutBtn: "💬 Discuss a Custom Plan",
    },
    whiteLabelTitle: "🏷️ White Label Option Available",
    whiteLabelSub: "Want to offer salad delivery under your own brand? We offer white label partnerships — your logo, your name, our kitchen. Perfect for clinics, wellness centers, and corporate wellness programs.",
    whiteLabelPoints: [
      "Your brand name on packaging",
      "Custom menu design with your logo",
      "Exclusive delivery area for your clinic",
      "Dedicated kitchen slot for your clients",
    ],
    whiteLabelBtn: "💬 Enquire About White Label",
    conditionSpecific: {
      badge: "🩺 Dietitian-Recommended",
      title: "Condition-Specific Diets,",
      titleSpan: "Built on Your Prescription",
      sub: "We follow your clinical recommendations to the letter. Share your patient's condition and dietary guidelines — we prepare meals that align with your treatment protocol.",
      conditions: [
        { title: "Weight Management", desc: "Calorie-deficit or calorie-controlled salads with high satiety ingredients. We follow your prescribed calorie window precisely.", tags: ["Low Cal", "High Fibre", "Portion Controlled"] },
        { title: "Diabetes Management", desc: "Low-glycaemic index greens, seeds, and vegetables. No added sugar, no refined grains — completely aligned with diabetic diet plans.", tags: ["Low GI", "No Sugar", "Fibre Rich"] },
        { title: "Thyroid Support", desc: "Selenium-rich, iodine-balanced ingredients. We avoid raw cruciferous overload and follow your thyroid-specific ingredient checklist.", tags: ["Selenium Rich", "Balanced", "Anti-Inflammatory"] },
        { title: "PCOD / PCOS", desc: "Anti-inflammatory, hormone-balancing ingredients. High-fibre, low-carb focused salads that support insulin sensitivity and hormonal balance.", tags: ["Anti-Inflammatory", "Low Carb", "Hormone Friendly"] },
        { title: "High Protein Plans", desc: "Paneer, legumes, seeds, and protein-dense greens to hit your client's daily protein targets without any non-veg sources.", tags: ["High Protein", "Pure Veg", "Muscle Support"] },
        { title: "Cardiac & Cholesterol", desc: "Low saturated fat, high Omega-3 ingredients. Heart-healthy greens, flaxseeds, and antioxidant rich vegetables per dietitian guidelines.", tags: ["Heart Healthy", "Omega-3", "Low Fat"] },
      ],
      steps: [
        { num: "01", title: "Share the Prescription", desc: "Send us your client's condition, restrictions, and dietary guidelines via WhatsApp." },
        { num: "02", title: "We Customise the Meal", desc: "Our kitchen team prepares a daily fresh salad bowl exactly matching your clinical protocol." },
        { num: "03", title: "Delivered Fresh Daily", desc: "Client receives fresh meals every day. You track compliance. Outcomes improve." },
      ],
    },
    testimonials: {
      title: "Trusted by Professionals",
      sub: "See what other dietitians and nutritionists say about partnering with us in Ahmedabad.",
      items: [
        { name: "Dr. Priya Mehta", role: "Clinical Nutritionist, Ahmedabad", quote: "Nosh7 has transformed my client compliance. My patients actually stick to their meal plans now because the salads are fresh and genuinely tasty!" },
        { name: "Ananya Sharma", role: "Registered Dietitian, Ahmedabad", quote: "The pure veg commitment and Jain options make it perfect for most of my Gujarati clients. The condition-specific customization is outstanding." },
        { name: "Ravi Patel", role: "Sports Nutritionist, Ahmedabad", quote: "Earning commission while genuinely helping clients is a win-win. The PCOD and diabetes-specific plans my clients need are perfectly made." },
        { name: "Neha Gupta", role: "Wellness Coach, Ahmedabad", quote: "I simply WhatsApp my client's prescription and Nosh7 builds the exact meal. My thyroid and cardiac patients are seeing real results." },
      ],
    },
    contact: {
      ctaTitle: "Ready to Partner with Nosh7?",
      ctaSub: "Get a free sample salad box delivered to your clinic in Satellite, Ahmedabad. Taste the quality yourself before recommending it to clients. No strings attached.",
      ctaBtn: "💬 Request Free Sample on WhatsApp",
      title: "Get in Touch",
      sub: "Our partner success team is ready to help you get started.",
      cards: [
        { val: "+91 9712989498", sub: "Call us directly" },
        { val: "nosh7.com/order", sub: "Place orders online" },
        { val: "nosh7.in", sub: "Visit our website" },
      ],
      whatsapp: "💬 Chat on WhatsApp",
    },
    footer: {
      location: "📍 Satellite, Ahmedabad, Gujarat 🇮🇳",
      tagline: "Pure Veg Always 🌱 · Ahmedabad ka #1 Salad Cloud Kitchen",
      rights: "All rights reserved.",
    },
  },

  hinglish: {
    nav: {
      benefits: "Fayde",
      howItWorks: "Kaise Kaam Karta Hai",
      customPlans: "Custom Plans",
      testimonials: "Reviews",
      partnerNow: "Partner Bano",
      pureVeg: "100% Pure Veg",
      tagline: "Ahmedabad ka #1 Salad Kitchen",
    },
    hero: {
      badge: "🥗 Ahmedabad ka #1 Pure Veg Salad Cloud Kitchen",
      heading: "Nosh7 ke Saath Partner Bano —",
      headingSpan: "Apne Clients ke Goals Poore Karo",
      sub: "2000+ satisfied clients ke saath join karo. Apne patients ko unka diet plan follow karne mein help karo — fresh, pure-veg salads ke zariye, jo bilkul unki condition ke hisaab se bane hain.",
      cta1: "Partner Bano",
      cta2: "💬 Free Sample Maango",
    },
    stats: {
      customers: "Khush Customers",
      customersLabel: "Ahmedabad mein",
      fresh: "100%",
      freshLabel: "Fresh, Kabhi Frozen Nahi",
      batches: "4 Batches",
      batchesLabel: "Roz Fresh Pakaya Jaata Hai",
      rating: "4.6 ★",
      ratingLabel: "Average Customer Rating",
      orderLabel: "Hamare platforms pe order karo:",
      ratedBy: "Customers ne diya rating",
      directOrder: "Direct Order",
    },
    features: {
      whyTitle: "Nosh7 ke Saath Partner Kyun Banein?",
      whySub: "Diet plans mein sabse badi problem hai execution. Jab clients ko khana nahi banana padta, tab woh aapki baat maante hain.",
      challengeHead: "Mushkilein",
      solutionHead: "Nosh7 ka Solution",
      challenges: [
        "Clients meal plan follow nahi kar paate",
        "Portion control bahut mushkil lagta hai",
        "Indian dietary needs ignore hoti hain",
        "Client compliance track karna hard hai",
        "Partner ko koi benefit nahi milta",
      ],
      solutions: [
        "Roz fresh salads 4 batches mein deliver",
        "Nutritionist ke hisaab se portions",
        "100% pure veg · Jain options available",
        "WhatsApp pe easy ordering",
        "5% se commission milega + clients ko discount",
      ],
      qualityTitle: "Hamaari Quality ki Guarantee",
      qualitySub: "Aisa khaana jo aap apne har patient ko confidently suggest kar sako.",
      quality: [
        { title: "Seasonal Fresh Sabjiyaan", desc: "Hum wahi use karte hain jo is mausam mein best hai — zyada nutrition, better taste." },
        { title: "Jain Friendly", desc: "Jain Dairy ka original paneer. Request pe bina pyaz-lahsun ka option." },
        { title: "0 Preservatives. Kabhi Nahi.", desc: "Koi artificial cheez nahi. Hamesha natural ingredients, hamesha asli khaana." },
        { title: "Health Goal Focus", desc: "Weight Loss, Diabetes, Thyroid, PCOD aur High Protein ke liye custom meals." },
        { title: "Cloud Kitchen Fresh", desc: "Har order fresh banaya jaata hai — kabhie bhi frozen nahi." },
        { title: "Salads + Drinks + Seeds", desc: "Poori nutrition: fresh salads, health drinks, aur seeds." },
      ],
      batchTitle: "4 Fresh Delivery Batches",
      batchSub: "Hum poore din ke liye ek baar nahi pakaate. Salads deliver se sirf kuch ghante pehle taiyaar hoti hain.",
      batches: [
        { label: "Subah ka Batch", prep: "Taiyaari 8:30 AM se" },
        { label: "Dopahar ka Batch", prep: "Taiyaari 10:30 AM se" },
        { label: "Shaam ka Batch", prep: "Taiyaari 3:30 PM se" },
        { label: "Raat ka Batch", prep: "Taiyaari 5:30 PM se" },
      ],
    },
    howItWorks: {
      title: "Partnership Kaise Kaam Karti Hai",
      sub: "4 simple steps mein better client results aur extra income.",
      steps: [
        { title: "1. Register Karo", desc: "WhatsApp pe partner ke roop mein sign up karo aur apna unique clinic code paao." },
        { title: "2. Code Share Karo", desc: "Clients ko code do saath unke diet plan ke. Unhein har order pe discount milega." },
        { title: "3. Client Order Kare", desc: "Client WhatsApp ya nosh7.com pe order karta hai — roz fresh salads ghar pe aate hain." },
        { title: "4. Commission Kamao", desc: "Aapke client ke har order pe aapko 5% se commission milta hai." },
      ],
    },
    customPlans: {
      badge: "🎨 Bilkul Custom",
      title: "Plan Aap Banaao,",
      titleSpan: "Hum Execute Karte Hain",
      sub: "Koi fixed menu nahi. Aap diet prescribe karo — hum exactly waisa hi banaa ke deliver karte hain, har roz.",
      cards: [
        { title: "Customized Salad Bowls", desc: "Har salad bowl aapki exact specification ke hisaab se banata hai — ingredients, portions, toppings sab kuch." },
        { title: "Macro-Calibrated Meals", desc: "Protein, carb, fat aapke prescription ke hisaab se — high-protein, low-carb, ya balanced macros." },
        { title: "Ingredient Substitutions", desc: "Kuch allergy hai? Kuch avoid karna hai? Hum swap karte hain bina kisi dikkat ke." },
        { title: "Health Drinks & Seeds", desc: "Aapke suggest kiye seeds aur health drinks ke saath salads — chia, flax, pumpkin, aur bhi." },
        { title: "Portion Flexibility", desc: "Light snack, full meal, ya multi-course — bilkul client ki calorie ke hisaab se." },
        { title: "Partner-Managed Menus", desc: "Aap menu design karo, hum execute karein. WhatsApp pe plan bhejo, baaki hum sambhaalte hain." },
      ],
      calloutTitle: "Aap Prescribe Karo. Hum Deliver Karein.",
      calloutSub: "WhatsApp pe client ki requirements bhejo — ingredients, quantity, frequency — aur hum sab handle kar lete hain. Koi app nahi, koi complexity nahi.",
      calloutBtn: "💬 Custom Plan pe Baat Karo",
    },
    whiteLabelTitle: "🏷️ White Label Option Available Hai",
    whiteLabelSub: "Apne clinic ke naam se salad delivery dena chahte ho? Hum white label partnership dete hain — aapka logo, aapka naam, hamari kitchen. Clinics, wellness centers aur corporates ke liye perfect.",
    whiteLabelPoints: [
      "Packaging pe aapka brand name",
      "Aapke logo ke saath custom menu",
      "Aapke clinic ke liye exclusive delivery area",
      "Dedicated kitchen slot aapke clients ke liye",
    ],
    whiteLabelBtn: "💬 White Label ke Baare Mein Poochhein",
    conditionSpecific: {
      badge: "🩺 Dietitian ki Salah pe Based",
      title: "Condition-Specific Diets,",
      titleSpan: "Aapki Prescription pe Based",
      sub: "Hum aapki clinical recommendations follow karte hain exactly. Patient ki condition aur diet guidelines share karo — hum aapke treatment protocol ke hisaab se meals banate hain.",
      conditions: [
        { title: "Weight Management", desc: "Calorie-deficit salads with high satiety ingredients. Aapka prescribed calorie window exactly follow kiya jaata hai.", tags: ["Low Cal", "High Fibre", "Portion Controlled"] },
        { title: "Diabetes Control", desc: "Low-GI greens, seeds, aur vegetables. Koi added sugar nahi, koi refined grain nahi — diabetic diet ke saath perfectly aligned.", tags: ["Low GI", "No Sugar", "Fibre Rich"] },
        { title: "Thyroid Support", desc: "Selenium-rich ingredients. Raw cruciferous overload avoid kiya jaata hai, aur aapka thyroid checklist follow hota hai.", tags: ["Selenium Rich", "Balanced", "Anti-Inflammatory"] },
        { title: "PCOD / PCOS", desc: "Anti-inflammatory, hormone-balancing ingredients. High-fibre, low-carb salads jo insulin sensitivity support karte hain.", tags: ["Anti-Inflammatory", "Low Carb", "Hormone Friendly"] },
        { title: "High Protein Plans", desc: "Paneer, legumes, seeds, protein-dense greens — bina kisi non-veg ke protein targets achieve karo.", tags: ["High Protein", "Pure Veg", "Muscle Support"] },
        { title: "Heart & Cholesterol", desc: "Low saturated fat, high Omega-3. Heart-healthy greens, flaxseeds, antioxidant-rich vegetables — dietitian guidelines ke saath.", tags: ["Heart Healthy", "Omega-3", "Low Fat"] },
      ],
      steps: [
        { num: "01", title: "Prescription Share Karo", desc: "WhatsApp pe client ki condition, restrictions, aur diet guidelines bhejo." },
        { num: "02", title: "Hum Meal Customise Karein", desc: "Hamari kitchen team roz fresh salad bowl exactly aapke protocol ke hisaab se banati hai." },
        { num: "03", title: "Roz Fresh Deliver Hoga", desc: "Client ko roz fresh meals milte hain. Aap compliance track karo. Results aate hain." },
      ],
    },
    testimonials: {
      title: "Professionals ka Bharosa",
      sub: "Dekho ki doosre dietitians aur nutritionists Ahmedabad mein Nosh7 ke baare mein kya kehte hain.",
      items: [
        { name: "Dr. Priya Mehta", role: "Clinical Nutritionist, Ahmedabad", quote: "Nosh7 ne meri clients ki compliance bilkul badal di. Mere patients ab meal plan follow karte hain kyunki food fresh aur tasty hai!" },
        { name: "Ananya Sharma", role: "Registered Dietitian, Ahmedabad", quote: "Pure veg aur Jain options mere zyaadatar Gujarati clients ke liye perfect hain. Condition-specific customization bahut badhiya hai." },
        { name: "Ravi Patel", role: "Sports Nutritionist, Ahmedabad", quote: "Commission kamaana aur clients ki genuinely help karna — dono ek saath. Nosh7 ek game-changer hai." },
        { name: "Neha Gupta", role: "Wellness Coach, Ahmedabad", quote: "Main sirf WhatsApp pe prescription bhejti hoon aur Nosh7 exact meal banata hai. Mere thyroid patients ke results dekh ke khushi hoti hai." },
      ],
    },
    contact: {
      ctaTitle: "Nosh7 ke Saath Partner Banne ke Liye Taiyaar Ho?",
      ctaSub: "Apne clinic mein free sample salad box mangaao Satellite, Ahmedabad mein. Khud quality taste karo pehle recommend karne se. Koi commitment nahi.",
      ctaBtn: "💬 WhatsApp pe Free Sample Maango",
      title: "Contact Karo",
      sub: "Hamari partner success team aapki help ke liye ready hai.",
      cards: [
        { val: "+91 9712989498", sub: "Seedha call karo" },
        { val: "nosh7.com/order", sub: "Online order karo" },
        { val: "nosh7.in", sub: "Website visit karo" },
      ],
      whatsapp: "💬 WhatsApp pe Baat Karo",
    },
    footer: {
      location: "📍 Satellite, Ahmedabad, Gujarat 🇮🇳",
      tagline: "Pure Veg Hamesha 🌱 · Ahmedabad ka #1 Salad Cloud Kitchen",
      rights: "Sab rights reserved.",
    },
  },

  hi: {
    nav: {
      benefits: "फायदे",
      howItWorks: "कैसे काम करता है",
      customPlans: "कस्टम प्लान",
      testimonials: "समीक्षाएं",
      partnerNow: "पार्टनर बनें",
      pureVeg: "100% शुद्ध शाकाहारी",
      tagline: "अहमदाबाद का #1 सलाद किचन",
    },
    hero: {
      badge: "🥗 अहमदाबाद का #1 प्योर वेज सलाद क्लाउड किचन",
      heading: "Nosh7 के साथ पार्टनर बनें —",
      headingSpan: "अपने क्लाइंट्स के लक्ष्य पूरे करें",
      sub: "अहमदाबाद के 2000+ संतुष्ट ग्राहकों के साथ जुड़ें। अपने मरीज़ों को उनके डाइट प्लान से जोड़े रखने में मदद करें — ताज़े, पोषण विशेषज्ञ द्वारा अनुशंसित 100% शुद्ध शाकाहारी सलाद के ज़रिए।",
      cta1: "पार्टनर बनें",
      cta2: "💬 मुफ़्त सैंपल मांगें",
    },
    stats: {
      customers: "खुश ग्राहक",
      customersLabel: "अहमदाबाद में",
      fresh: "100%",
      freshLabel: "ताज़ा, कभी फ्रोज़न नहीं",
      batches: "4 बैच",
      batchesLabel: "रोज़ ताज़ा पकाया जाता है",
      rating: "4.6 ★",
      ratingLabel: "औसत ग्राहक रेटिंग",
      orderLabel: "हमारे प्लेटफॉर्म पर ऑर्डर करें:",
      ratedBy: "ग्राहकों द्वारा रेटेड",
      directOrder: "सीधा ऑर्डर",
    },
    features: {
      whyTitle: "Nosh7 के साथ पार्टनर क्यों बनें?",
      whySub: "डाइट प्लान में सबसे बड़ी बाधा है अनुपालन। जब ग्राहकों को खाना नहीं बनाना पड़ता, तो वे आपकी सलाह मानते हैं।",
      challengeHead: "चुनौतियां",
      solutionHead: "Nosh7 का समाधान",
      challenges: [
        "क्लाइंट मील प्लान नहीं बना पाते",
        "पोर्शन कंट्रोल बहुत मुश्किल लगता है",
        "भारतीय आहार की ज़रूरतें नज़रअंदाज़",
        "क्लाइंट अनुपालन ट्रैक करना कठिन",
        "पार्टनर को कोई ठोस लाभ नहीं",
      ],
      solutions: [
        "रोज़ 4 बैच में ताज़ा सलाद डिलीवरी",
        "पोषण विशेषज्ञ के अनुसार सटीक पोर्शन",
        "100% शुद्ध शाकाहारी · जैन विकल्प उपलब्ध",
        "WhatsApp पर आसान ऑर्डरिंग",
        "5% से कमीशन + क्लाइंट्स को डिस्काउंट",
      ],
      qualityTitle: "हमारी गुणवत्ता का वादा",
      qualitySub: "ऐसा भोजन जिसे आप अपने सबसे ज़रूरी क्लाइंट्स को भी विश्वास के साथ सुझा सकें।",
      quality: [
        { title: "मौसमी ताज़ी सब्जियां", desc: "हम वही उपयोग करते हैं जो इस मौसम में सबसे अच्छा है — अधिकतम पोषण, बेहतर स्वाद।" },
        { title: "जैन अनुकूल", desc: "जैन डेयरी का असली पनीर। अनुरोध पर बिना प्याज-लहसुन का विकल्प।" },
        { title: "0 परिरक्षक। कभी नहीं।", desc: "कोई कृत्रिम एडिटिव्स या रंग नहीं। हमेशा प्राकृतिक सामग्री, हमेशा असली खाना।" },
        { title: "स्वास्थ्य लक्ष्य केंद्रित", desc: "वज़न घटाने, मधुमेह, थायरॉइड, PCOD और हाई प्रोटीन के लिए कस्टम भोजन।" },
        { title: "क्लाउड किचन ताज़ा", desc: "हर ऑर्डर ताज़ा बनाया जाता है — कभी भी पहले से नहीं बना, कभी भी फ्रोज़न नहीं।" },
        { title: "सलाद + ड्रिंक्स + बीज", desc: "संपूर्ण पोषण: ताज़ा सलाद, हेल्थ ड्रिंक्स और बीज हर मील प्लान में।" },
      ],
      batchTitle: "4 ताज़ी डिलीवरी बैच",
      batchSub: "हम पूरे दिन के लिए एक बार नहीं पकाते। सलाद डिलीवरी से बस कुछ घंटे पहले तैयार होते हैं।",
      batches: [
        { label: "सुबह का बैच", prep: "तैयारी 8:30 AM से" },
        { label: "दोपहर का बैच", prep: "तैयारी 10:30 AM से" },
        { label: "शाम का बैच", prep: "तैयारी 3:30 PM से" },
        { label: "रात का बैच", prep: "तैयारी 5:30 PM से" },
      ],
    },
    howItWorks: {
      title: "पार्टनरशिप कैसे काम करती है",
      sub: "4 सरल चरणों में बेहतर परिणाम और अतिरिक्त आय।",
      steps: [
        { title: "1. रजिस्टर करें", desc: "WhatsApp पर पार्टनर के रूप में साइन अप करें और अपना यूनिक क्लिनिक कोड पाएं।" },
        { title: "2. कोड शेयर करें", desc: "क्लाइंट्स को उनके डाइट प्लान के साथ कोड दें। हर ऑर्डर पर डिस्काउंट मिलेगा।" },
        { title: "3. क्लाइंट ऑर्डर करे", desc: "क्लाइंट WhatsApp या nosh7.com पर ऑर्डर करता है — रोज़ ताज़ा सलाद घर पर।" },
        { title: "4. कमीशन कमाएं", desc: "आपके क्लाइंट के हर ऑर्डर पर 5% से कमीशन मिलता है।" },
      ],
    },
    customPlans: {
      badge: "🎨 पूरी तरह कस्टमाइज़ेबल",
      title: "प्लान आप बनाएं,",
      titleSpan: "हम पूरा करें",
      sub: "कोई फिक्स्ड मेनू नहीं। आप डाइट प्रेस्क्राइब करें — हम ठीक वैसा ही बनाकर डिलीवर करते हैं, हर रोज़।",
      cards: [
        { title: "कस्टमाइज़्ड सलाद बोल", desc: "हर सलाद बोल आपकी सटीक आहार विशिष्टताओं के अनुसार — सामग्री, पोर्शन, टॉपिंग सब।" },
        { title: "मैक्रो-कैलिब्रेटेड भोजन", desc: "प्रोटीन, कार्ब, फैट आपके प्रेस्क्रिप्शन के अनुसार — हाई-प्रोटीन, लो-कार्ब, या बैलेंस्ड।" },
        { title: "सामग्री प्रतिस्थापन", desc: "कोई एलर्जी? कुछ से बचना है? हम बिना किसी परेशानी के बदल देते हैं।" },
        { title: "हेल्थ ड्रिंक्स और बीज", desc: "आपके सुझाए बीज और हेल्थ ड्रिंक्स के साथ सलाद — चिया, अलसी, कद्दू, और भी।" },
        { title: "पोर्शन लचीलापन", desc: "हल्का स्नैक, पूर्ण भोजन — बिल्कुल क्लाइंट की कैलोरी लक्ष्य के अनुसार।" },
        { title: "पार्टनर-प्रबंधित मेनू", desc: "आप मेनू डिज़ाइन करें, हम निष्पादित करें। WhatsApp पर प्लान भेजें, बाकी हम संभालते हैं।" },
      ],
      calloutTitle: "आप प्रेस्क्राइब करें। हम डिलीवर करें।",
      calloutSub: "WhatsApp पर क्लाइंट की आवश्यकताएं भेजें — सामग्री, मात्रा, आवृत्ति — और हम बाकी संभाल लेते हैं।",
      calloutBtn: "💬 कस्टम प्लान पर चर्चा करें",
    },
    whiteLabelTitle: "🏷️ व्हाइट लेबल विकल्प उपलब्ध है",
    whiteLabelSub: "अपने क्लिनिक के नाम से सलाद डिलीवरी देना चाहते हैं? हम व्हाइट लेबल पार्टनरशिप देते हैं — आपका लोगो, आपका नाम, हमारी किचन। क्लिनिक्स और वेलनेस सेंटर्स के लिए परफेक्ट।",
    whiteLabelPoints: [
      "पैकेजिंग पर आपका ब्रांड नाम",
      "आपके लोगो के साथ कस्टम मेनू",
      "आपके क्लिनिक के लिए एक्सक्लूसिव डिलीवरी",
      "आपके क्लाइंट्स के लिए डेडिकेटेड किचन स्लॉट",
    ],
    whiteLabelBtn: "💬 व्हाइट लेबल के बारे में पूछें",
    conditionSpecific: {
      badge: "🩺 आहार विशेषज्ञ द्वारा अनुशंसित",
      title: "स्थिति-विशिष्ट आहार,",
      titleSpan: "आपके प्रेस्क्रिप्शन पर आधारित",
      sub: "हम आपकी नैदानिक सिफारिशों का अक्षरशः पालन करते हैं। मरीज़ की स्थिति और आहार दिशानिर्देश साझा करें — हम आपके उपचार प्रोटोकॉल के अनुसार भोजन तैयार करते हैं।",
      conditions: [
        { title: "वज़न प्रबंधन", desc: "उच्च संतृप्ति सामग्री के साथ कैलोरी-नियंत्रित सलाद। आपका निर्धारित कैलोरी लक्ष्य सटीक रूप से पालन किया जाता है।", tags: ["लो कैल", "हाई फाइबर", "पोर्शन कंट्रोल्ड"] },
        { title: "मधुमेह प्रबंधन", desc: "लो-जीआई हरी सब्जियां, बीज और सब्जियां। कोई अतिरिक्त चीनी नहीं, कोई रिफाइंड अनाज नहीं।", tags: ["लो जीआई", "नो शुगर", "फाइबर रिच"] },
        { title: "थायरॉइड सहायता", desc: "सेलेनियम-समृद्ध सामग्री। कच्ची क्रूसीफेरस अधिकता से बचाव और आपकी चेकलिस्ट का पालन।", tags: ["सेलेनियम रिच", "बैलेंस्ड", "एंटी-इंफ्लेमेटरी"] },
        { title: "PCOD / PCOS", desc: "एंटी-इंफ्लेमेटरी, हार्मोन-संतुलन सामग्री। इंसुलिन संवेदनशीलता का समर्थन करने वाले हाई-फाइबर, लो-कार्ब सलाद।", tags: ["एंटी-इंफ्लेमेटरी", "लो कार्ब", "हार्मोन फ्रेंडली"] },
        { title: "हाई प्रोटीन प्लान", desc: "पनीर, दालें, बीज और प्रोटीन-युक्त हरी सब्जियां — बिना किसी नॉन-वेज के।", tags: ["हाई प्रोटीन", "प्योर वेज", "मसल सपोर्ट"] },
        { title: "हृदय और कोलेस्ट्रॉल", desc: "कम संतृप्त वसा, उच्च ओमेगा-3। हृदय-स्वस्थ हरी सब्जियां, अलसी, एंटीऑक्सीडेंट-समृद्ध सब्जियां।", tags: ["हार्ट हेल्दी", "ओमेगा-3", "लो फैट"] },
      ],
      steps: [
        { num: "01", title: "प्रेस्क्रिप्शन साझा करें", desc: "WhatsApp पर क्लाइंट की स्थिति, प्रतिबंध और आहार दिशानिर्देश भेजें।" },
        { num: "02", title: "हम भोजन कस्टमाइज़ करें", desc: "हमारी किचन टीम रोज़ आपके प्रोटोकॉल के अनुसार ताज़ा सलाद बोल तैयार करती है।" },
        { num: "03", title: "रोज़ ताज़ा डिलीवरी", desc: "क्लाइंट को रोज़ ताज़ा भोजन मिलता है। आप अनुपालन ट्रैक करें। परिणाम आते हैं।" },
      ],
    },
    testimonials: {
      title: "पेशेवरों का भरोसा",
      sub: "देखें कि अहमदाबाद के अन्य आहार विशेषज्ञ और पोषण विशेषज्ञ Nosh7 के बारे में क्या कहते हैं।",
      items: [
        { name: "डॉ. प्रिया मेहता", role: "क्लिनिकल न्यूट्रिशनिस्ट, अहमदाबाद", quote: "Nosh7 ने मेरे क्लाइंट्स की अनुपालन दर पूरी तरह बदल दी। मेरे मरीज़ अब मील प्लान फॉलो करते हैं क्योंकि खाना ताज़ा और स्वादिष्ट है!" },
        { name: "अनन्या शर्मा", role: "रजिस्टर्ड डाइटीशियन, अहमदाबाद", quote: "प्योर वेज और जैन विकल्प मेरे अधिकांश गुजराती क्लाइंट्स के लिए परफेक्ट हैं। स्थिति-विशिष्ट कस्टमाइज़ेशन बेहद उत्कृष्ट है।" },
        { name: "रवि पटेल", role: "स्पोर्ट्स न्यूट्रिशनिस्ट, अहमदाबाद", quote: "कमीशन कमाना और क्लाइंट्स की मदद करना — दोनों एक साथ। PCOD और मधुमेह के विशिष्ट प्लान परफेक्ट बने हैं।" },
        { name: "नेहा गुप्ता", role: "वेलनेस कोच, अहमदाबाद", quote: "मैं बस WhatsApp पर प्रेस्क्रिप्शन भेजती हूं और Nosh7 बिल्कुल वैसा भोजन बनाता है। मेरे थायरॉइड रोगियों के परिणाम देखकर खुशी होती है।" },
      ],
    },
    contact: {
      ctaTitle: "Nosh7 के साथ पार्टनर बनने के लिए तैयार हैं?",
      ctaSub: "Satellite, अहमदाबाद में अपने क्लिनिक में मुफ़्त सैंपल सलाद बॉक्स मंगाएं। क्लाइंट्स को सुझाने से पहले खुद गुणवत्ता का स्वाद लें।",
      ctaBtn: "💬 WhatsApp पर मुफ़्त सैंपल मांगें",
      title: "संपर्क करें",
      sub: "हमारी पार्टनर सक्सेस टीम आपकी मदद के लिए तैयार है।",
      cards: [
        { val: "+91 9712989498", sub: "सीधे कॉल करें" },
        { val: "nosh7.com/order", sub: "ऑनलाइन ऑर्डर करें" },
        { val: "nosh7.in", sub: "वेबसाइट विज़िट करें" },
      ],
      whatsapp: "💬 WhatsApp पर बात करें",
    },
    footer: {
      location: "📍 Satellite, अहमदाबाद, गुजरात 🇮🇳",
      tagline: "हमेशा शुद्ध शाकाहारी 🌱 · अहमदाबाद का #1 सलाद क्लाउड किचन",
      rights: "सर्वाधिकार सुरक्षित।",
    },
  },

  gu: {
    nav: {
      benefits: "ફાયદા",
      howItWorks: "કેવી રીતે કાર્ય કરે છે",
      customPlans: "કસ્ટમ પ્લાન",
      testimonials: "પ્રતિભાવ",
      partnerNow: "પાર્ટનર બનો",
      pureVeg: "100% શુદ્ધ શાકાહારી",
      tagline: "અમદાવાદનું #1 સૅલડ કિચન",
    },
    hero: {
      badge: "🥗 અમદાવાદનું #1 પ્યોર વેજ સૅલડ ક્લાઉડ કિચન",
      heading: "Nosh7 સાથે પાર્ટનર બનો —",
      headingSpan: "તમારા ક્લાઇન્ટ્સના લક્ષ્ય પૂર્ણ કરો",
      sub: "અમદાવાદના 2000+ સંતુષ્ટ ગ્રાહકો સાથે જોડાઓ. તમારા દર્દીઓને ડાઇટ પ્લાન અનુસરવામાં મદદ કરો — તાઝા, 100% શુદ્ધ શાકાહારી સૅલડ દ્વારા, જે તેમની સ્થિતિ અને તમારી સ્ક્રિption અનુસાર બનેલ છે.",
      cta1: "પાર્ટનર બનો",
      cta2: "💬 મફત સૅમ્પલ મેળવો",
    },
    stats: {
      customers: "ખુશ ગ્રાહકો",
      customersLabel: "અમદાવાદમાં",
      fresh: "100%",
      freshLabel: "તાઝું, ક્યારેય ફ્રોઝન નહીં",
      batches: "4 બૅચ",
      batchesLabel: "દરરોજ તાઝું રાંધવામાં આવે",
      rating: "4.6 ★",
      ratingLabel: "સરેરાશ ગ્રાહક રેટિંગ",
      orderLabel: "ઓર્ડર આપો:",
      ratedBy: "ગ્રાહકો દ્વારા રેટ",
      directOrder: "સીધો ઓર્ડર",
    },
    features: {
      whyTitle: "Nosh7 સાથે પાર્ટનર શા માટે બનવું?",
      whySub: "ડાઇટ પ્લાનમાં સૌથી મોટો અવરોધ છે અમલ. જ્યારે ક્લાઇન્ટ્સને ખોરાક બનાવવો ન પડે, ત્યારે તેઓ ખરેખર તમારી સલાહ માને છે.",
      challengeHead: "પડકારો",
      solutionHead: "Nosh7નો ઉકેલ",
      challenges: [
        "ક્લાઇન્ટ્સ ભોજન યોજના અનુસરી શકતા નથી",
        "ભાગ નિયંત્રણ ખૂબ કઠિન",
        "ભારતીય આહારની જરૂરિયાતો અવગણાય",
        "ક્લાઇન્ટ અનુપાલન ટ્રૅક કરવું મુશ્કેલ",
        "પાર્ટનરને કોઈ ઠોસ ફાયદો નહીં",
      ],
      solutions: [
        "દરરોજ 4 બૅચમાં તાઝા સૅલડ ડિલિવરી",
        "પોષણ નિષ્ણાત અનુસાર ભાગ",
        "100% શુદ્ધ શાક · જૈન વિકલ્પ ઉપલબ્ધ",
        "WhatsApp પર સરળ ઓર્ડરિંગ",
        "5%થી કમિશન + ક્લાઇન્ટ્સને ડિસ્કાઉન્ટ",
      ],
      qualityTitle: "અમારી ગુણવત્તાનું વચન",
      qualitySub: "એવો ખોરાક જે તમે તમારા સૌથી ખાસ ક્લાઇન્ટ્સને પણ વિશ્વાસ સાથે સૂચવી શકો.",
      quality: [
        { title: "સૌઝૌ-તાઝી શાકભાજી", desc: "આ ઋતુ જે શ્રેષ્ઠ આપે છે તેનો ઉપયોગ — સૌથી વધુ પોષણ, સ્વાદ." },
        { title: "જૈન અનુકૂળ", desc: "જૈન ડૅરી મૂળ પનીર. વિનંતી પર ડુંગળી-લસણ વગરનો વિકલ્પ." },
        { title: "0 સંરક્ષકો. ક્યારેય નહીં.", desc: "કૃત્રિમ ઉમેરણ કે રંગ નહીં. હંમેશા કુદરતી સામગ્રી." },
        { title: "સ્વાસ્થ્ય લક્ષ્ય કેન્દ્રિત", desc: "વજન ઘટાડવા, ડાઇબિટીઝ, થાઇરૉઇડ, PCOD, હાઇ પ્રોટીન." },
        { title: "ક્લાઉડ કિચન ફ્રેશ", desc: "દરેક ઓર્ડર તાઝો — ક્યારેય અગાઉ બનાવેલ નહીં, ક્યારેય ફ્રોઝન નહીં." },
        { title: "સૅલડ + ડ્રિન્ક્સ + બીજ", desc: "સંપૂર્ણ પોષણ: તાઝા સૅલડ, હૅલ્થ ડ્રિન્ક્સ, અને બીજ." },
      ],
      batchTitle: "4 તાઝા ડિલિવરી બૅચ",
      batchSub: "અમે આખા દિવસ માટે એકવાર રાંધતા નથી. સૅલડ ડિલિવરી ફક્ત થોડા કલાક પહેલા તૈયાર થાય.",
      batches: [
        { label: "સવારનો બૅચ", prep: "તૈયારી 8:30 AM" },
        { label: "બપોરનો બૅચ", prep: "તૈયારી 10:30 AM" },
        { label: "સાંજનો બૅચ", prep: "તૈયારી 3:30 PM" },
        { label: "રાત્રિ બૅચ", prep: "તૈયારી 5:30 PM" },
      ],
    },
    howItWorks: {
      title: "ભાગીદારી કેવી રીતે કાર્ય કરે",
      sub: "4 સરળ પગલામાં વધુ સારા ક્લાઇન્ટ પરિણામ અને વધારાની આવક.",
      steps: [
        { title: "1. નોંધણી કરો", desc: "WhatsApp પર ભાગીદાર તરીકે નોંધણી કરો અને તમારો અનન્ય ક્લિનિક કોડ મેળવો." },
        { title: "2. કોડ શૅર કરો", desc: "ક્લાઇન્ટ્સને ડાઇટ પ્લાન સાથે કોડ આપો. દરેક ઓર્ડર પર ડિસ્કાઉન્ટ મળશે." },
        { title: "3. ક્લાઇન્ટ ઓર્ડર કરે", desc: "ક્લાઇન્ટ WhatsApp કે nosh7.com પર ઓર્ડર કરે — દરરોજ ઘરે તાઝા સૅલડ." },
        { title: "4. કમિશન કમાઓ", desc: "ક્લાઇન્ટના દરેક ઓર્ડર પર 5%થી કમિશન." },
      ],
    },
    customPlans: {
      badge: "🎨 સંપૂર્ણ કસ્ટમ",
      title: "પ્લાન તમે બનાવો,",
      titleSpan: "અમે અમલ કરીએ",
      sub: "કોઈ નિશ્ચિત મેનૂ નહીં. તમે ડાઇટ સૂચવો — અમે બિલ્કુલ એ જ બનાવી ડિલિવર કરીએ, દરરોજ.",
      cards: [
        { title: "કસ્ટમ સૅલડ બોલ", desc: "દરેક સૅલડ બોલ ચોક્કસ આહાર વિશિષ્ટ — ઘટકો, ભાગ, ટૉપિંગ." },
        { title: "મૅક્રો-કૅલિબ્રેટ ભોજન", desc: "પ્રોટીન, કાર્બ, ફૅટ presciptionanusar — highprotein, lowcarb, balanced." },
        { title: "ઘટક બદલ", desc: "ઍલર્જી? ટાળવાનું? અમે સ્VisMy‍ swapkariye — bina koi problem." },
        { title: "હૅલ્થ ડ્રિન્ક્સ & બીજ", desc: "chia, alsi, pumpkin — aapna suggest seeds ane health drinks." },
        { title: "ભાગ લવચીકતા", desc: "Light snack ke full meal — client ni calorie anusar adjust." },
        { title: "ભાગીદાર-સંચાલિત મેનૂ", desc: "Tame menu banavo, ame execute karie. WhatsApp par plan moko." },
      ],
      calloutTitle: "તમે Prescribe કરો. અમે Deliver કરીએ.",
      calloutSub: "WhatsApp par client ni jaruriyat moko — ingredients, maatra, frequency — ane baaki ame sambhalie. Koi app nahi, koi complex nahi.",
      calloutBtn: "💬 Custom Plan ange vat karo",
    },
    whiteLabelTitle: "🏷️ White Label વિકલ્પ ઉપલ્બ્ધ",
    whiteLabelSub: "તમારા ક્લિનિકના નામ હેઠળ સૅlad delivery આpवु chhe? અмे white label partnership આपіе — tamaro logo, tamaru naam, amari kitchen. Clinic, wellness center, corporate mategno perfect.",
    whiteLabelPoints: [
      "Packaging par tamaro brand naam",
      "Tamara logo sathe custom menu",
      "Tamara clinic mate exclusive delivery",
      "Clients mate dedicated kitchen slot",
    ],
    whiteLabelBtn: "💬 White Label badhla poochho",
    conditionSpecific: {
      badge: "🩺 Dietitian anusar",
      title: "સ્થિતિ-વિશિષ્ટ આહાર,",
      titleSpan: "તમારી Prescription પર",
      sub: "અме tamari clinical recommendations ne aksharse follow kariye. Dardinī sthiti ane diet guidelines share karo — ame tamara treatment protocol anusar meal banавіе.",
      conditions: [
        { title: "વજन管理", desc: "High satiety ingredients sathe calorie-controlled salad. Tamaro prescribed calorie target sahit.", tags: ["Low Cal", "High Fibre", "Portion Controlled"] },
        { title: "Diabetes Niyantran", desc: "Low-GI greens, seeds, ane shaakbhaji. Koi sugar nahi, refined grain nahi.", tags: ["Low GI", "No Sugar", "Fibre Rich"] },
        { title: "Thyroid Sahayata", desc: "Selenium-rich ingredients. Cruciferous overload taalvamau aave, thyroid checklist follow.", tags: ["Selenium Rich", "Balanced", "Anti-Inflammatory"] },
        { title: "PCOD / PCOS", desc: "Hormononu santulam thay teva anti-inflammatory ingredients. Low-carb, high-fibre salads.", tags: ["Anti-Inflammatory", "Low Carb", "Hormone Friendly"] },
        { title: "High Protein Plan", desc: "Paneer, legumes, seeds, protein-dense greens — bina non-veg na.", tags: ["High Protein", "Pure Veg", "Muscle Support"] },
        { title: "Heart & Cholesterol", desc: "Low saturated fat, high Omega-3. Heart-healthy greens, flaxseeds, antioxidant vegetables.", tags: ["Heart Healthy", "Omega-3", "Low Fat"] },
      ],
      steps: [
        { num: "01", title: "Prescription Share Karo", desc: "WhatsApp par client ni sthiti, restrictions, ane diet guidelines moko." },
        { num: "02", title: "Meal Customise Kariye", desc: "Amari kitchen team roz tamara protocol anusar fresh salad bowl tayar kare." },
        { num: "03", title: "Roz Fresh Delivery", desc: "Client ne roz fresh meal male. Tame compliance track karo. Results aave." },
      ],
    },
    testimonials: {
      title: "Professionals નો ભરોસો",
      sub: "જuio ke Ahmedabad na anya dietitians ane nutritionists Nosh7 vise shu kahe che.",
      items: [
        { name: "Dr. Priya Mehta", role: "Clinical Nutritionist, Ahmedabad", quote: "Nosh7 e mara clients ni compliance badli nakhi. Mara daridio hun meal plan follow kare che karan food taza ane swadishtu che!" },
        { name: "Ananya Sharma", role: "Registered Dietitian, Ahmedabad", quote: "Pure veg ane Jain options mara Gujarati clients mate perfect che. Condition-specific customization khub saru che." },
        { name: "Ravi Patel", role: "Sports Nutritionist, Ahmedabad", quote: "Commission kamazvu ane clients ne madad karavu — banne ek sathe. PCOD ane diabetes plans bilkul sariya che." },
        { name: "Neha Gupta", role: "Wellness Coach, Ahmedabad", quote: "Hu fakt WhatsApp par prescription moku ane Nosh7 bilkul te j meal banave. Mara thyroid dardinana results joi khushi thay." },
      ],
    },
    contact: {
      ctaTitle: "Nosh7 sathe Partner banava tayar cho?",
      ctaSub: "Satellite, Ahmedabad ma tamara clinic par free sample salad box mangavo. Recommend karva pehla khud quality taste karo.",
      ctaBtn: "💬 WhatsApp par Free Sample Mangavo",
      title: "સંparkaro",
      sub: "Amari partner success team tamari madad mate taiyar che.",
      cards: [
        { val: "+91 9712989498", sub: "Seedha call karo" },
        { val: "nosh7.com/order", sub: "Online order karo" },
        { val: "nosh7.in", sub: "Website visit karo" },
      ],
      whatsapp: "💬 WhatsApp par vat karo",
    },
    footer: {
      location: "📍 Satellite, Ahmedabad, Gujarat 🇮🇳",
      tagline: "Hameshe Pure Veg 🌱 · Ahmedabad nu #1 Salad Cloud Kitchen",
      rights: "Sarva hakko surakshit.",
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem("nosh7-lang");
      if (stored && (stored === "en" || stored === "hinglish" || stored === "hi" || stored === "gu")) return stored;
    } catch {
      // localStorage unavailable (SSR/private browsing)
    }
    return "en";
  });

  const setLang = (l: Language) => {
    try {
      localStorage.setItem("nosh7-lang", l);
    } catch {
      // ignore write errors
    }
    setLangState(l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
