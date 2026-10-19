/* =====================================================================
   ALL THE TEXT ON THE WEBSITE LIVES IN THIS FILE.
   ---------------------------------------------------------------------
   How to edit:
   - Change only the words inside the "quotes".
   - Keep the quotes, commas and brackets exactly where they are.
   - Inside a text, don't type a plain " character. Use «ёлочки» or ’ instead.
   - Words wrapped in *stars* get the yellow highlighter on the website.
   - An empty "" hides that thing (for example an empty whatsapp: "").
   - After saving on GitHub, the website updates in about 1 minute.
   ===================================================================== */

window.SITE = {

  /* ---------- SETTINGS (same for both languages) ---------- */
  settings: {
    // Paste the Google Calendar "Appointment schedule" booking link here.
    // Best: in Google Calendar open the schedule > Share > "Website embed"
    // and copy only the link inside src="..." (it starts with
    // https://calendar.google.com/calendar/appointments/...).
    // Then the calendar shows right on the page. Any other booking link
    // works too, but then it opens in a new tab.
    bookingLink: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Sp16wZm_WqOiXG9f0ZOCR7xzDJGzLAH9inu0ZCCm_x6QGoF-xhvA-wEDr_WNenn4WlvJqefSZ",

    // Contact details. Leave "" to hide one.
    email: "hello@englishwithjelena.com",
    whatsapp: "",          // e.g. "+44 7700 900123"
    telegram: "jelena_english", // username without @
    instagram: "",         // username without @

    // Show the "Lessons & prices" section? true = show, false = hide
    showPrices: true,

    // EXCHANGE RATES for showing € and $ next to £ prices.
    // 1 pound = this many euros / dollars. Update now and then.
    rates: { EUR: 1.17, USD: 1.33 },

    // PAYMENT -------------------------------------------------------
    // Stripe payment links for each lesson type (paste the link from Stripe
    // between the quotes). Empty = no card button for that lesson.
    payLinks: {
      adult: "",
      pack5: "",
      pack10: "",
      kids5: "",
      kids10: "",
      gcse: "",
      ielts: "",
      essay: ""
    },
    // Bank details for transfers (e.g. from Wise Business). Empty = hidden.
    bank: {
      holder: "",
      sortCode: "",
      account: "",
      iban: "",
      bic: ""
    },

    // REVIEWS FORM ---------------------------------------------------
    // Link to a Google Form for new reviews (Google Form > Send > <> embed,
    // copy only the link inside src="..."). Empty = show email instead.
    feedbackForm: "",

    // SPEAKING CLUB: paste the Google Form link here. Empty = the button opens Telegram.
    clubForm: "",
    // Telegram CHANNEL link for the "word with a history" card. Empty = no link.
    telegramChannel: "",
    // Profiles shown at the bottom of every page. Empty = hidden.
    profiles: {
      tutorful: "https://tutorful.co.uk/tutors/w2ewb4mw",
      preply: "https://preply.com/en/tutor/2125253",
      threads: ""
    },

    // Show the free level test? true / false
    showTest: true
  },

  /* ---------- FREE LEVEL TEST QUESTIONS (in English for both languages) ----------
     "answer" is the number of the correct option: 0 = first, 1 = second, 2 = third, 3 = fourth.
     Questions go from easy (A1) to hard (C2). Score → level is set in "testLevels" below. */
  testQuestions: [
    { q: "She ___ a teacher.", options: ["am", "is", "are", "be"], answer: 1 },
    { q: "I ___ coffee every morning.", options: ["drink", "drinks", "drinking", "am drink"], answer: 0 },
    { q: "There ___ two books on the table.", options: ["is", "be", "are", "am"], answer: 2 },
    { q: "We ___ to London last summer.", options: ["go", "goes", "have gone", "went"], answer: 3 },
    { q: "This test is ___ than the last one.", options: ["easier", "more easy", "easy", "easiest"], answer: 0 },
    { q: "I’ve lived here ___ 2019.", options: ["for", "since", "from", "during"], answer: 1 },
    { q: "If it rains tomorrow, we ___ at home.", options: ["stay", "would stay", "will stay", "stayed"], answer: 2 },
    { q: "The castle ___ in the 12th century.", options: ["built", "has built", "is building", "was built"], answer: 3 },
    { q: "I’m not used to ___ up so early.", options: ["getting", "get", "got", "be getting"], answer: 0 },
    { q: "By the time we arrived, the film ___.", options: ["already started", "had already started", "has already started", "was already starting"], answer: 1 },
    { q: "I wish I ___ more time to travel.", options: ["have", "would have", "had", "will have"], answer: 2 },
    { q: "She suggested ___ the museum first.", options: ["to visit", "visit", "we visiting", "visiting"], answer: 3 },
    { q: "Not until the treaty was signed ___ return home.", options: ["could the soldiers", "the soldiers could", "the soldiers can", "did the soldiers could"], answer: 0 },
    { q: "Had I known about the delay, I ___ earlier.", options: ["would leave", "would have left", "had left", "will have left"], answer: 1 },
    { q: "His explanation was so confusing that nobody could ___ what he meant.", options: ["make up", "make over", "make out", "make off"], answer: 2 },
    { q: "The minister’s speech was ___ with references to Roman history.", options: ["abundant", "teeming", "riddled", "replete"], answer: 3 },
    { q: "She has a real ___ for languages: she picked up Latvian in a year.", options: ["flair", "flare", "sense", "gift to"], answer: 0 },
    { q: "Little ___ that the letter would change history.", options: ["he knew", "did he know", "he did know", "knew he"], answer: 1 }
  ],
  // Minimum correct answers for each level (out of 18)
  testLevels: [
    { min: 0,  code: "A1" }, { min: 4,  code: "A2" }, { min: 7,  code: "B1" },
    { min: 10, code: "B2" }, { min: 13, code: "C1" }, { min: 16, code: "C2" }
  ],

  /* ================= ENGLISH ================= */
  en: {
    meta: {
      title: "Online English Tutor Jelena Skudra | GCSE & IELTS Preparation, Kids & Adults",
      description: "Online English lessons with a UK-accredited teacher: speaking-focused lessons for children and adults, GCSE English and IELTS preparation, essay checking. Free level test and online booking."
    },
    nav: { about: "About me", lessons: "Lessons", boards: "Lesson examples", prices: "Prices", reviews: "Reviews", payment: "Payment", test: "Test & FAQ", start: "How to start", book: "Book a lesson" },

    hero: {
      eyebrow: "Online English tutor · GCSE · IELTS",
      tagline: "English that works with your brain",
      title: "English for anyone who has started a hundred times *and quit a hundred and one*",
      text: "I’m Jelena. I’ve lived in England since 2010, graduated from the University of Nottingham and have taught English for 7 years, in British schools and online. Speaking-focused lessons for children, teens and adults, plus GCSE and IELTS preparation.",
      bookButton: "Book a lesson",
      moreButton: "What a lesson is like",
      facts: ["University of Nottingham", "UK-accredited teacher", "7 years of teaching"]
    },

    about: {
      title: "About me",
      note: "In England since 2010",
      photoAlt: "Jelena Skudra at her graduation in front of the Trent Building, University of Nottingham",
      photoCaption: "Graduation day, University of Nottingham",
      paragraphs: [
        "I moved to England in 2010 and graduated with honours from the University of Nottingham in 2020. In 2021 I gained UK state accreditation as an English teacher. In 7 years of teaching I’ve worked in schools and online, with children, teenagers and adults.",
        "My biggest advantage: I still remember what it’s like to look at a sentence and think «I’ll never be able to say it like that». But I also have years of real experience, from everyday conversation to academic study, and I can pass it on to my students.",
        "People often think they have to choose: a native speaker or a teacher who speaks their language? A «unique method» or a textbook? I think it’s a false choice. I lived, worked and studied in England for more than ten years, so my English is the English people actually speak. And I’ll still understand you if you say something in Russian, and I’m trained to teach."
      ]
    },

    steps: {
      title: "How to start",
      items: [
        { title: "Book a first lesson", text: "Pick a free time in my online calendar. You get a confirmation email and a video link straight away." },
        { title: "We find your topics", text: "We talk about your goals and interests, and I check your level in a relaxed way, with no tests to fear." },
        { title: "Lessons made for you", text: "Every lesson is planned around your interests, with materials and homework you’ll actually enjoy." }
      ]
    },

    offer: {
      title: "What I offer",
      items: [
        { title: "English for neurodivergent learners", text: "Flexible topics, support when your attention switches, and a safe space with no judgement. The pace and structure fit the way your brain works. The main rule: it’s better to start and make mistakes than not to start at all. We’ll fix the mistakes over time." },
        { title: "GCSE English", text: "English Language and Literature, the exams taken by native speakers, adapted for Russian speakers. We’ll look at how the exam works and what examiners really want, practise the skills and learn the key topics. You can ask a question in Russian at any time, check a translation, or try a skill on a short Russian text first. I have real experience preparing students for GCSE in a British school." },
        { title: "Individual and group lessons", text: "Individual lessons focus on your own goal, whether that’s passing IELTS or getting ready for a trip or a job interview, and bring in your interests. Groups make lessons more affordable and give you practice talking with different people." }
      ]
    },

    lesson: {
      title: "What a lesson is like",
      paragraphs: [
        "I teach with a focus on speaking. First, because real conversation is exactly what no video course or AI can give you. Second, because it works best. Years ago I was put into an ordinary English state school without speaking the language, and I had to learn it on the go. Now I know how to build a conversation around the exact topic you need, and combine it with grammar and vocabulary.",
        "I build lessons on textbooks written by teams of qualified specialists, then add to them: your interests, and more speaking practice with what we’ve covered. You just answer questions, sometimes everyday ones, sometimes deeper, and as you answer you practise the lesson’s topic while I listen carefully and note any mistakes. We fix them gradually."
      ],
      expectTitle: "What to expect",
      expect: ["Vocabulary, grammar and steady progress in all four skills: speaking, reading, writing and listening", "Lots of speaking practice", "A flexible structure, not a rigid one"],
      exampleLabel: "An example",
      example: "A student was sure she didn’t understand the Present Perfect. We spent most of the lesson playing «Never have I ever…» with prompts on the screen (in English, of course). At the end I pointed out that she’d been using the mysterious Present Perfect, correctly, for half an hour.",
      flexTitle: "Why a flexible structure?",
      flex: "Not everything should be planned in advance. Small gaps we fix on the spot; bigger ones go into the plan for the next lesson. If a five-minute review takes longer because a topic has faded, I’ll spend the time on it, with no «but we’ve already done this!» guilt. And if you want to tell a long story about your weekend during the warm-up, I won’t cut you off when the timer runs out. I’ll give you the words and structures you need, so the story becomes part of the lesson."
    },

    reviews: {
      title: "What students say",
      // Reviews are shown as written. featured: true = bigger card.
      items: [
        { name: "Pavel", date: "June 2026", featured: true, home: true, text: "Jelena is a wonderful tutor, not only for improving your general English level and preparing for exams, but also for more specific goals such as university admissions and interviews. Her lessons are both effective and enjoyable, and she creates a friendly and supportive atmosphere. With her help, I was able to improve my English quickly, gain confidence, and get admitted to the university I wanted to attend." },
        { name: "Анна, IELTS", date: "", featured: true, home: true, text: "Я была уверена, что слушание сдам стабильно на 5, а больше всего разочаровал спикинг, но письмо с чтением — правда хороший результат. Набрала более высокую оценку там, где и не думала. Спасибо вам за вашу работу! Без вас я бы даже такого уровня не достигла. Вы открыли мне другой английский, который приятно и интересно изучать, а не чувствовать страх, когда его видишь." },
        { name: "Bob Simpson", role: "Head of English, British school", date: "", featured: true, home: true, text: "A committed, experienced and sensitive teacher, Jelena has the expertise and the patience to be a wholly effective tutor. She has a good range of resources and a positive and supportive demeanour." },
        { name: "Inese", date: "February 2026", text: "Focused on my needs." },
        { name: "Anna", date: "July 2025", text: "She explains clearly." },
        { name: "Armands", date: "April 2025", text: "Many moments were clear and understandable :)" },
        { name: "Dina", date: "May 2025", text: "Everything is good." }
      ]
    },

    levels: {
      title: "Every level, from first words to fluent",
      text: "Levels follow the European scale (CEFR). Not sure where you are? We’ll find out together in the first lesson.",
      items: [
        { code: "A1", name: "Beginner" },
        { code: "A2", name: "Elementary" },
        { code: "B1", name: "Intermediate" },
        { code: "B2", name: "Upper-intermediate" },
        { code: "C1", name: "Advanced" },
        { code: "C2", name: "Proficient" }
      ]
    },

    languages: {
      title: "Languages are my passion",
      text: "Besides English, I’m passionate about other languages: Russian, Ukrainian, Latvian and Spanish. Exploring them myself shows me what really helps when you learn a new language.",
      // "level" is optional. Leave "" to show only the language name.
      items: [
        { name: "Русский", level: "" },
        { name: "Українська", level: "" },
        { name: "Latviešu", level: "" },
        { name: "Español", level: "" }
      ]
    },

    word: {
      label: "A word with a history",
      word: "quarantine",
      origin: "from Venetian Italian quaranta giorni, «forty days»",
      story: "During plague outbreaks in the 14th and 15th centuries, ships arriving in Venice had to wait forty days before anyone could come ashore. The number has gone from the word, but the waiting stayed."
    },

    prices: {
      title: "Lessons & prices",
      text: "All lessons are online. Prices are per lesson unless stated otherwise.",
      // Each card: id (don’t change; links it to payLinks), tag, name, text, length, price.
      items: [
        { id: "adult", tag: "Adults", name: "English lesson", text: "Speaking, grammar and vocabulary built around your interests and goals.", length: "50 min", price: "£20" },
        { id: "pack5", tag: "Adults · pack", name: "5 lessons", text: "Five 50-minute lessons. £19 per lesson: you save £5.", length: "5 × 50 min", price: "£95" },
        { id: "pack10", tag: "Adults · pack", name: "10 lessons", text: "Ten 50-minute lessons. £17 per lesson: you save £30.", length: "10 × 50 min", price: "£170" },
        { id: "kids5", tag: "Children 5–10", name: "Kids’ lesson", text: "Playful lessons with stories, games and songs.", length: "30 min", price: "£15" },
        { id: "kids10", tag: "Children 10+", name: "Kids’ lesson", text: "School support and confident speaking for older children.", length: "40 min", price: "£17" },
        { id: "gcse", tag: "Exam", name: "GCSE preparation", text: "Exam technique, reading and writing tasks, and practice with past papers.", length: "55 min", price: "£25" },
        { id: "ielts", tag: "Exam", name: "IELTS preparation", text: "All four skills, timed practice and strategies for a higher band score.", length: "55 min", price: "£25" },
        { id: "essay", tag: "Exam", name: "Essay checking", text: "4 IELTS or GCSE essays a month, with detailed written feedback.", length: "4 essays / month", price: "£30" }
      ]
    },

    pages: {
      about: { metaTitle: "About Jelena Skudra · Online English Teacher from the UK", description: "UK-accredited English teacher, University of Nottingham graduate, 7 years of teaching in British schools and online. How my speaking-focused lessons work.", title: "About me", lead: "In England since 2010. UK-accredited English teacher with 7 years of experience." },
      prices: { metaTitle: "English Lesson Prices · GCSE, IELTS, Kids & Adults | Jelena Skudra", description: "Prices for online English lessons in £, € and $: adults £20 (50 min), children from £15, GCSE and IELTS preparation £25, essay checking £30 a month.", title: "Lessons & prices", lead: "All lessons are online. Prices are in pounds, with approximate euro and dollar equivalents." },
      test: { metaTitle: "Free English Level Test (A1–C2) & FAQ | Jelena Skudra", description: "Find out your English level in 3 minutes: 18 questions from beginner to advanced, instant CEFR result (A1–C2). Free, no sign-up. Plus answers to common questions about lessons.", title: "Level test and questions", lead: "Check your English level in 3 minutes, and find answers to common questions." },
      start: { metaTitle: "How to Start Online English Lessons · Jelena Skudra", description: "Three simple steps: book a first lesson online, we find your topics and level, then lessons planned around your interests and goals.", title: "How to start", lead: "Three simple steps to your first lesson." },
      book: { metaTitle: "Book an Online English Lesson · Jelena Skudra", description: "Choose a free time in Jelena’s calendar and book an online English lesson. You’ll get a Google Meet link and a reminder by email.", title: "Book a lesson", lead: "Choose a free time in my calendar. You’ll get a confirmation email with a video link." }
    },

    /* ---------- HOME PAGE (new layout) ---------- */
    front: {
      eyebrow: "Online English tutor · for children, teens and adults · GCSE · IELTS",
      subtitle: "I teach you not just to speak correctly, but to sound natural.",
      text: "I moved to England in 2010, studied and worked here, so I teach the English people actually speak. In lessons we talk a lot, and I adapt topics, tasks and pace to your goals and interests.",
      bookButton: "Book a lesson",
      pricesButton: "Prices",
      moreButton: "How lessons work",
      facts: [
        { icon: "cap", title: "Two British degrees", sub: "Nottingham, Birmingham" },
        { icon: "cert", title: "TEFL teaching diploma", sub: "Level 5, recognised in the UK" },
        { icon: "clock", title: "7 years of teaching", sub: "" }
      ],
      photoAlt: "Jelena Skudra",
      marginWrong: "I lived in London since 2010",
      marginRight: "I have lived in London since 2010",
      directions: {
        title: "What we can work on",
        more: "More",
        items: [
          { icon: "chat", title: "Conversational English", q: "Studied English for years but still get lost in conversation?", text: "We’ll talk a lot, build your vocabulary step by step and learn to express your thoughts naturally and confidently.", link: "" },
          { icon: "book", title: "GCSE English", q: "Your child is at a British school but doesn’t know how to analyse language and structure?", text: "We’ll work out what examiners expect and learn to find quotations and explain them. Tricky points can be clarified in Russian.", link: "" },
          { icon: "cap", title: "IELTS", q: "Need a certain band score for university, work or a visa?", text: "We’ll go through the exam format and focus on what will raise your score.", link: "" },
          { icon: "sprout", title: "English for children (6+)", q: "Want your child not just to learn rules but to actually use English?", text: "Textbook, interactive games and speaking practice: we speak English as much as possible and use Russian only when it’s really needed.", link: "" }
        ]
      },
      how: {
        title: "How lessons work",
        text: "My lessons focus on speaking. I use textbooks written by professional teams and add your interests and plenty of conversation. You answer questions on the lesson topic, I listen and note your mistakes, and we fix them step by step.",
        points: ["Lots of speaking practice", "Vocabulary, grammar and all four skills: speaking, reading, writing, listening", "A flexible, not rigid, structure"],
        langNote: "We speak English as much as possible, but use Russian when it’s really needed.",
        button: "More about lessons"
      },
      peek: {
        title: "Take a look at a lesson",
        text: "Lessons are based on textbooks, but I add more speaking practice and choose extra materials for your goals and interests. Sometimes I create interactive boards and games myself. Here are two examples you can open and try on your own.",
        all: "All lessons",
        open: "Open the lesson",
        cards: [
          { title: "Falling for Autumn", meta: "B1 · Reading · Speaking · Grammar", text: "We read a text about autumn, discuss it and practise the present perfect in conversation.", img: "lessons/previews/autumn.jpg", href: "/lessons/autumn#demo" },
          { title: "Language Features Detective", meta: "GCSE English Language", text: "We look for language features in a text and learn to explain their effect on the reader.", img: "lessons/previews/detective.jpg", href: "/lessons/detective-demo.html" }
        ]
      },
      reviewsTitle: "What students say",
      reviewsAll: "All reviews",
      wordMore: "More stories like this on my Telegram channel",
      club: { title: "Speaking club for adults — coming soon", text: "Level B1–B2. The first meetings are free.", button: "I’m interested", note: "I only need your contact to tell you when the club starts." },
      start: { title: "Prices and booking", text: "The first session is a 30-minute introduction: we talk about your goals and make a plan. 50% off.", book: "Book a lesson", prices: "Prices" },
      footer: { test: "Level test and questions", payment: "Payment", contacts: "Contacts" }
    },

    home: {
      offerMore: "Prices & details →",
      aboutMore: "More about me →",
      pricesFrom: "Lessons from",
      pricesMore: "See all prices",
      testTitle: "What’s your English level?",
      testText: "Take the free 3-minute test and see your level (A1–C2) straight away.",
      testButton: "Take the free test",
      bookButton: "Choose a time"
    },

    currencyNote: "€ and $ prices are approximate. Payment is in pounds (£).",

    faq: {
      title: "Questions and answers",
      items: [
        { q: "How much does a lesson cost?", a: "An English lesson for adults (50 min) is £20, or £95 for 5 lessons and £170 for 10. Lessons for children are £15 for ages 5–10 (30 min) and £17 for 10+ (40 min). GCSE and IELTS preparation (55 min) is £25. Essay checking is £30 a month for 4 essays." },
        { q: "How do online lessons work?", a: "Lessons take place on Google Meet. When you book a time in my calendar, you get a confirmation email with the video link and a reminder." },
        { q: "Can I study with you if I live outside the UK?", a: "Yes. Lessons are online, so you can join from any country: Latvia, Ukraine, Russia, Spain or anywhere else. If you’re paying from Russia, please write to me first, as Russian bank cards don’t work with my payment methods." },
        { q: "Do you teach children?", a: "Yes, from age 5. Lessons for ages 5–10 are 30 minutes and full of stories, games and songs; for 10+ they’re 40 minutes. For older children I also help with school English and GCSE." },
        { q: "My child studies at a British school. Can you help with GCSE English?", a: "Yes. I have experience preparing students for GCSE English Language and Literature in a British school. We work on exam technique and key topics, and your child can always ask a question in Russian." },
        { q: "Do you work with neurodivergent learners?", a: "Yes. Lessons have flexible topics, a pace and structure that fit the way your brain works, support when attention switches, and a safe space with no judgement." },
        { q: "How do I find out my level?", a: "Take the free 3-minute level test on this page. In the first lesson we’ll also check your speaking and listening and make a plan." }
      ]
    },

    book: {
      title: "Book a lesson",
      text: "Choose a free time in my calendar. The lesson goes straight into both our calendars, with a video link and a reminder.",
      button: "Open my calendar",
      soon: "Online booking opens very soon. For now, write to me and we’ll find a time.",
      contactTitle: "Or write to me",
      copy: "Copy",
      copied: "Copied"
    },

    test: {
      nav: "Free test",
      eyebrow: "Free · 3 minutes · no sign-up",
      title: "What’s your English level? *Find out now*",
      text: "18 quick questions, from beginner to advanced. You’ll see your estimated level (A1–C2) straight away.",
      start: "Start the test",
      question: "Question",
      of: "of",
      next: "Next",
      resultLabel: "Your estimated level",
      scoreText: "correct answers",
      resultNote: "This is a quick estimate of grammar and vocabulary. In the first lesson we’ll also look at speaking and listening, and plan how to reach your next level.",
      book: "Book a lesson to reach the next level",
      send: "Send my result to Jelena",
      again: "Take the test again",
      messageText: "Hello Jelena! I took the English test on your website. My result: "
    },

    reviewsPage: {
      metaTitle: "Reviews · Jelena Skudra, English teacher",
      title: "What students say",
      text: "Real reviews from my students: adults, teenagers and exam candidates.",
      allLink: "All reviews →",
      formTitle: "Leave a review",
      formText: "Have you studied with me? A few words would mean a lot, and they help other students choose.",
      formSoon: "The review form is coming soon. Until then, you can send your review by email:"
    },

    payment: {
      metaTitle: "Payment · Jelena Skudra, English teacher",
      title: "Payment",
      text: "Pay for lessons by card, Apple Pay or Google Pay, or by bank transfer. Prices are in pounds (£).",
      cardTitle: "Pay by card",
      payButton: "Pay",
      noCard: "Card payment is coming soon. For now, please pay by bank transfer or write to me.",
      bankTitle: "Bank transfer",
      labels: { holder: "Account holder", sortCode: "Sort code", account: "Account number", iban: "IBAN", bic: "BIC / SWIFT", reference: "Reference" },
      reference: "Your name and lesson date",
      bankSoon: "Bank details are coming soon. Write to me and I’ll send them.",
      notesTitle: "Good to know",
      notes: [
        "Please pay before the lesson.",
        "Use your name as the payment reference so I can find your payment.",
        "Paying from Russia? Russian bank cards don’t work with these payment methods, so please write to me first.",
        "Any questions about payment? Write to me."
      ],
      bookTitle: "Already paid?",
      bookText: "Choose a time for your lesson in my calendar."
    },

    footer: "English teacher online"
  },

  /* ================= РУССКИЙ ================= */
  ru: {
    meta: {
      title: "Репетитор английского онлайн — Елена Скудра | GCSE, IELTS, дети и взрослые",
      description: "Уроки английского онлайн с преподавателем из Англии: разговорный английский, подготовка к GCSE и IELTS, занятия для детей от 5 лет и взрослых. Британская аккредитация, 7 лет опыта. Бесплатный тест уровня и онлайн-запись."
    },
    nav: { about: "Обо мне", lessons: "Занятия", boards: "Уроки", prices: "Цены", reviews: "Отзывы", payment: "Оплата", test: "Тест и вопросы", start: "Как начать", book: "Записаться" },

    hero: {
      eyebrow: "Репетитор английского онлайн · GCSE · IELTS",
      tagline: "English that works with your brain",
      title: "Английский для тех, кто начинал уже сто раз *и забросил сто один*",
      text: "Меня зовут Елена. Я живу в Англии с 2010 года, окончила Ноттингемский университет и 7 лет преподаю английский — в британских школах и онлайн. Уроки с упором на живую речь для детей, подростков и взрослых, подготовка к GCSE и IELTS.",
      bookButton: "Записаться на урок",
      moreButton: "Как проходит занятие",
      facts: ["Ноттингемский университет", "Британская аккредитация преподавателя", "7 лет преподавания"]
    },

    about: {
      title: "О себе",
      note: "В Англии с 2010 года",
      photoAlt: "Елена Скудра на выпускном у здания Trent Building, Ноттингемский университет",
      photoCaption: "Выпускной, Ноттингемский университет",
      paragraphs: [
        "В 2010 году я переехала в Англию, а в 2020 с отличием окончила Ноттингемский университет. В 2021 получила британскую государственную аккредитацию преподавателя английского языка. За 7 лет преподавания работала и в школах, и онлайн — с детьми, подростками и взрослыми.",
        "Мой главный плюс — я ещё помню, каково это: смотреть на предложение и думать «да я так никогда не сформулирую». Но у меня уже много реального опыта — ежедневного общения и академического обучения, — который я могу передать ученикам.",
        "Обычно при выборе преподавателя кажется, что надо выбрать: носитель или свой? «Авторская методика» или учебник? Мне кажется, это ложный выбор. Я больше десяти лет жила, работала и училась в Англии, поэтому мой английский — живой: так, как действительно разговаривают, а не как пишут в старых учебниках. И при этом я пойму, если вы скажете что-то по-русски, и у меня есть профессиональная подготовка преподавателя."
      ]
    },

    steps: {
      title: "Как начать",
      items: [
        { title: "Запишитесь на первый урок", text: "Выберите свободное время в моём онлайн-календаре. Письмо с подтверждением и ссылка на видеозвонок придут сразу." },
        { title: "Находим ваши темы", text: "Обсуждаем ваши цели и интересы, а я спокойно определяю ваш уровень — без страшных тестов." },
        { title: "Уроки под вас", text: "Каждый урок строится вокруг ваших интересов: материалы и домашние задания, которые действительно интересно делать." }
      ]
    },

    offer: {
      title: "Направления",
      items: [
        { title: "Английский для нейроотличных", text: "Гибкий выбор тем, поддержка при переключении внимания, безопасная среда без осуждения. Темп и структура обучения подстроены под ваш мозг. Главное правило: лучше начать и делать с ошибками, чем не делать вообще. Ошибки со временем исправим." },
        { title: "GCSE English", text: "Английский язык и литература для носителей — адаптировано для русскоговорящих. Разберём структуру экзамена и что на самом деле хотят экзаменаторы, потренируем нужные навыки, выучим ключевые темы. В любой момент можно задать вопрос по-русски, уточнить перевод слова или разобрать навык на маленьком русском тексте, прежде чем браться за английский. Есть реальный опыт работы в британской школе и подготовки учеников к GCSE." },
        { title: "Индивидуальные и групповые занятия", text: "Индивидуальные уроки позволяют сосредоточиться на вашей личной цели — сдать IELTS, подготовиться к путешествию или собеседованию — и добавить в уроки ваши интересы. Группы делают занятия доступнее и сразу тренируют общение с разными людьми." }
      ]
    },

    lesson: {
      title: "Как проходит занятие",
      paragraphs: [
        "Я преподаю с упором на речь. Во-первых, потому что живой разговор — именно то, что вам не даст ни одно обучающее видео или ИИ. Во-вторых, потому что так эффективнее всего. Когда-то меня без знания языка отправили в обычную государственную школу в Англии, и язык пришлось учить на ходу. Сейчас я знаю, как выстроить разговор так, чтобы практиковать нужную именно сейчас тему и совмещать это с грамматикой и лексикой.",
        "Я строю уроки на основе учебников, созданных командами профессиональных методистов, и дополняю их: добавляю ваши интересы и больше практики пройденного в живой речи. Перед вами — просто вопросы, иногда бытовые, иногда глубже, и, отвечая на них, вы точечно тренируете тему урока, а я внимательно слушаю и отмечаю ошибки. Исправляем их постепенно."
      ],
      expectTitle: "Чего ждать от уроков",
      expect: ["Лексики, грамматики и постепенного развития всех навыков: речь, чтение, письмо, слушание", "Много разговорной практики", "Гибкой, а не жёсткой структуры"],
      exampleLabel: "Пример",
      example: "Ученица была уверена, что не понимает Present Perfect. Большую часть урока мы играли в «Я никогда не…» по подсказкам на экране (на английском, разумеется). В конце я показала ей, что она полчаса использовала этот таинственный Present Perfect — и правильно!",
      flexTitle: "Почему структура «не жёсткая»?",
      flex: "Не всё стоит строго планировать заранее. Небольшие пробелы закрываем сразу, большие — попадают в план следующего занятия. Если пятиминутное повторение растягивается, потому что тема подзабылась, я потрачу на неё время — без чувства вины «мы же это уже прошли!». А если на разминке хочется рассказать длинную историю о выходных, поделиться радостью или пожаловаться на жизнь — я не перебью по таймеру, а подскажу нужные слова и конструкции, чтобы история стала частью урока."
    },

    reviews: {
      title: "Отзывы учеников",
      // Reviews are shown as written. featured: true = bigger card.
      items: [
        { name: "Pavel", date: "June 2026", featured: true, home: true, text: "Jelena is a wonderful tutor, not only for improving your general English level and preparing for exams, but also for more specific goals such as university admissions and interviews. Her lessons are both effective and enjoyable, and she creates a friendly and supportive atmosphere. With her help, I was able to improve my English quickly, gain confidence, and get admitted to the university I wanted to attend." },
        { name: "Анна, IELTS", date: "", featured: true, home: true, text: "Я была уверена, что слушание сдам стабильно на 5, а больше всего разочаровал спикинг, но письмо с чтением — правда хороший результат. Набрала более высокую оценку там, где и не думала. Спасибо вам за вашу работу! Без вас я бы даже такого уровня не достигла. Вы открыли мне другой английский, который приятно и интересно изучать, а не чувствовать страх, когда его видишь." },
        { name: "Bob Simpson", role: "руководитель кафедры английского языка, британская школа", date: "", featured: true, home: true, text: "A committed, experienced and sensitive teacher, Jelena has the expertise and the patience to be a wholly effective tutor. She has a good range of resources and a positive and supportive demeanour." },
        { name: "Inese", date: "February 2026", text: "Focused on my needs." },
        { name: "Anna", date: "July 2025", text: "She explains clearly." },
        { name: "Armands", date: "April 2025", text: "Many moments were clear and understandable :)" },
        { name: "Dina", date: "May 2025", text: "Everything is good." }
      ]
    },

    levels: {
      title: "Любой уровень — от первых слов до свободной речи",
      text: "Уровни по европейской шкале (CEFR). Не знаете свой уровень? Определим вместе на первом уроке.",
      items: [
        { code: "A1", name: "Начальный" },
        { code: "A2", name: "Элементарный" },
        { code: "B1", name: "Средний" },
        { code: "B2", name: "Выше среднего" },
        { code: "C1", name: "Продвинутый" },
        { code: "C2", name: "Свободный" }
      ]
    },

    languages: {
      title: "Языки — моё большое увлечение",
      text: "Кроме английского, я увлекаюсь и другими языками: русским, украинским, латышским и испанским. Изучая их, я по себе знаю, что действительно помогает выучить новый язык.",
      items: [
        { name: "Русский", level: "" },
        { name: "Українська", level: "" },
        { name: "Latviešu", level: "" },
        { name: "Español", level: "" }
      ]
    },

    word: {
      label: "Слово с историей",
      word: "quarantine",
      origin: "от венецианского quaranta giorni — «сорок дней»",
      story: "Во время эпидемий чумы в XIV–XV веках корабли, приходившие в Венецию, должны были ждать сорок дней, прежде чем кто-то мог сойти на берег. Число из слова исчезло, а ожидание осталось."
    },

    prices: {
      title: "Уроки и цены",
      text: "Все занятия проходят онлайн. Цена указана за один урок, если не написано иначе.",
      items: [
        { id: "adult", tag: "Взрослые", name: "Урок английского", text: "Разговор, грамматика и лексика — вокруг ваших интересов и целей.", length: "50 мин", price: "£20" },
        { id: "pack5", tag: "Взрослые · пакет", name: "5 уроков", text: "Пять уроков по 50 минут. £19 за урок — экономия £5.", length: "5 × 50 мин", price: "£95" },
        { id: "pack10", tag: "Взрослые · пакет", name: "10 уроков", text: "Десять уроков по 50 минут. £17 за урок — экономия £30.", length: "10 × 50 мин", price: "£170" },
        { id: "kids5", tag: "Дети 5–10 лет", name: "Урок для детей", text: "Игровые уроки с историями, играми и песнями.", length: "30 мин", price: "£15" },
        { id: "kids10", tag: "Дети от 10 лет", name: "Урок для детей", text: "Помощь со школой и уверенная разговорная речь.", length: "40 мин", price: "£17" },
        { id: "gcse", tag: "Экзамен", name: "Подготовка к GCSE", text: "Техника экзамена, задания на чтение и письмо, практика на реальных вариантах.", length: "55 мин", price: "£25" },
        { id: "ielts", tag: "Экзамен", name: "Подготовка к IELTS", text: "Все четыре навыка, практика на время и стратегии для более высокого балла.", length: "55 мин", price: "£25" },
        { id: "essay", tag: "Экзамен", name: "Проверка эссе", text: "4 эссе IELTS или GCSE в месяц с подробным письменным разбором.", length: "4 эссе в месяц", price: "£30" }
      ]
    },

    pages: {
      about: { metaTitle: "Обо мне · Елена Скудра, преподаватель английского из Англии", description: "Преподаватель английского с британской аккредитацией, выпускница Ноттингемского университета, 7 лет опыта в британских школах и онлайн. Как проходят мои уроки с упором на разговор.", title: "Обо мне", lead: "В Англии с 2010 года. Преподаватель английского с британской аккредитацией и 7 годами опыта." },
      prices: { metaTitle: "Цены на уроки английского онлайн · GCSE, IELTS, дети и взрослые", description: "Стоимость онлайн-уроков английского в £, € и $: взрослые — £20 (50 мин), дети — от £15, подготовка к GCSE и IELTS — £25, проверка эссе — £30 в месяц.", title: "Уроки и цены", lead: "Все занятия проходят онлайн. Цены в фунтах, в евро и долларах — примерно." },
      test: { metaTitle: "Бесплатный тест на уровень английского (A1–C2) и ответы на вопросы", description: "Узнайте свой уровень английского за 3 минуты: 18 вопросов от начального до продвинутого, результат по шкале CEFR (A1–C2) сразу. Бесплатно и без регистрации. А также ответы на частые вопросы об уроках.", title: "Тест уровня и вопросы", lead: "Проверьте свой уровень английского за 3 минуты и найдите ответы на частые вопросы." },
      start: { metaTitle: "Как начать заниматься английским онлайн · Елена Скудра", description: "Три простых шага: запишитесь на первый урок онлайн, мы найдём ваши темы и уровень, а дальше — уроки под ваши интересы и цели.", title: "Как начать", lead: "Три простых шага до первого урока." },
      book: { metaTitle: "Записаться на урок английского онлайн · Елена Скудра", description: "Выберите свободное время в календаре и запишитесь на онлайн-урок английского. Ссылка на Google Meet и напоминание придут на почту.", title: "Записаться на урок", lead: "Выберите свободное время в моём календаре. На почту придёт подтверждение со ссылкой на видеозвонок." }
    },

    /* ---------- ГЛАВНАЯ (новая) ---------- */
    front: {
      eyebrow: "Репетитор английского онлайн · для детей, подростков и взрослых · GCSE · IELTS",
      subtitle: "Учу не только говорить правильно, но и звучать естественно.",
      text: "В 2010 году я переехала в Англию, здесь училась и работала — поэтому учу тому английскому, на котором говорят на самом деле. На занятиях мы много разговариваем, а темы, задания и темп обучения я подстраиваю под ваши цели и интересы.",
      bookButton: "Записаться на урок",
      pricesButton: "Цены",
      moreButton: "Как проходят занятия",
      facts: [
        { icon: "cap", title: "Два британских диплома", sub: "Ноттингем, Бирмингем" },
        { icon: "cert", title: "Диплом преподавателя TEFL", sub: "уровень 5, признан в Великобритании" },
        { icon: "clock", title: "7 лет преподавания", sub: "" }
      ],
      photoAlt: "Елена Скудра",
      marginWrong: "I lived in London since 2010",
      marginRight: "I have lived in London since 2010",
      directions: {
        title: "Направления",
        more: "Подробнее",
        items: [
          { icon: "chat", title: "Разговорный английский", q: "Учили английский годами, но в разговоре всё равно теряетесь?", text: "Будем много говорить, постепенно расширять словарный запас и учиться выражать мысли естественно и уверенно.", link: "" },
          { icon: "book", title: "GCSE English", q: "Ребёнок учится в британской школе, но не понимает, как анализировать язык и структуру текста?", text: "Разберёмся, чего ждут экзаменаторы, научимся находить цитаты и объяснять их. Сложное можно уточнить по-русски.", link: "" },
          { icon: "cap", title: "IELTS", q: "Нужен определённый балл для университета, работы или визы?", text: "Разберём формат экзамена и сосредоточимся на том, что поднимет именно ваш балл.", link: "" },
          { icon: "sprout", title: "Английский для детей (от 6 лет)", q: "Хотите, чтобы ребёнок не просто учил правила, а пользовался английским?", text: "Учебник, интерактивные игры и разговорная практика — стараемся говорить как можно больше по-английски, но используем и русский, когда это необходимо.", link: "" }
        ]
      },
      how: {
        title: "Как проходят занятия",
        text: "Я преподаю с упором на живую речь: беру за основу учебники, созданные профессиональными методистами, и дополняю их вашими интересами и разговорной практикой. Вы отвечаете на вопросы по теме урока, а я слушаю, отмечаю ошибки, и мы постепенно их исправляем.",
        points: ["Много разговорной практики", "Лексика, грамматика и все навыки: речь, чтение, письмо, слушание", "Гибкая, а не жёсткая структура"],
        langNote: "Стараемся говорить как можно больше по-английски, но используем и русский, когда это необходимо.",
        button: "Подробнее о занятиях"
      },
      peek: {
        title: "Загляните на урок",
        text: "Занятия строятся на основе учебников, но я добавляю больше разговорной практики и подбираю дополнительные материалы под ваши цели и интересы. Иногда я сама создаю интерактивные доски и игры — вот два примера, их можно открыть и попробовать самостоятельно.",
        all: "Все уроки",
        open: "Открыть урок",
        cards: [
          { title: "Falling for Autumn", meta: "B1 · чтение · разговор · грамматика", text: "Читаем текст об осени, обсуждаем его и тренируем Present Perfect в речи.", img: "lessons/previews/autumn.jpg", href: "/lessons/autumn#demo" },
          { title: "Language Features Detective", meta: "GCSE English Language", text: "Ищем языковые приёмы в тексте и учимся объяснять, как они действуют на читателя.", img: "lessons/previews/detective.jpg", href: "/lessons/detective-demo.html" }
        ]
      },
      reviewsTitle: "Отзывы учеников",
      reviewsAll: "Все отзывы",
      wordMore: "Больше таких историй в моём Телеграм-канале",
      club: { title: "Разговорный клуб для взрослых — скоро", text: "Уровень B1–B2, первые встречи бесплатные.", button: "Хочу в клуб", note: "Контакт нужен только чтобы сообщить о запуске клуба." },
      start: { title: "Цены и запись", text: "Первое занятие — 30 минут знакомства: обсудим ваши цели и составим план. Скидка 50%.", book: "Записаться на урок", prices: "Цены" },
      footer: { test: "Тест и вопросы", payment: "Оплата", contacts: "Контакты" }
    },

    home: {
      offerMore: "Цены и подробности →",
      aboutMore: "Подробнее обо мне →",
      pricesFrom: "Уроки от",
      pricesMore: "Все цены",
      testTitle: "Какой у вас уровень английского?",
      testText: "Пройдите бесплатный тест за 3 минуты и сразу узнайте свой уровень (A1–C2).",
      testButton: "Пройти тест",
      bookButton: "Выбрать время"
    },

    currencyNote: "Цены в € и $ примерные. Оплата — в фунтах (£).",

    faq: {
      title: "Вопросы и ответы",
      items: [
        { q: "Сколько стоит урок английского?", a: "Урок для взрослых (50 минут) — £20, пакет из 5 уроков — £95, из 10 уроков — £170. Уроки для детей: £15 для 5–10 лет (30 минут) и £17 для детей от 10 лет (40 минут). Подготовка к GCSE и IELTS (55 минут) — £25. Проверка эссе — £30 в месяц за 4 эссе." },
        { q: "Как проходят онлайн-уроки?", a: "Занятия проходят в Google Meet. После записи в моём календаре вам придёт письмо с подтверждением, ссылкой на видеозвонок и напоминанием." },
        { q: "Можно ли заниматься, если я живу не в Англии?", a: "Да. Уроки онлайн, поэтому заниматься можно из любой страны: Латвии, Украины, России, Испании и других. Если вы оплачиваете из России, пожалуйста, сначала напишите мне: российские карты не работают с моими способами оплаты." },
        { q: "Вы занимаетесь с детьми?", a: "Да, с 5 лет. Уроки для детей 5–10 лет длятся 30 минут — с историями, играми и песнями, для детей от 10 лет — 40 минут. Детям постарше помогаю со школьным английским и GCSE." },
        { q: "Ребёнок учится в британской школе. Поможете с GCSE English?", a: "Да. У меня есть опыт подготовки учеников к GCSE English Language и Literature в британской школе. Разбираем технику экзамена и ключевые темы, а вопросы всегда можно задать по-русски." },
        { q: "Подходят ли ваши уроки нейроотличным ученикам?", a: "Да. Гибкий выбор тем, темп и структура, подстроенные под ваш мозг, поддержка при переключении внимания и безопасная среда без осуждения." },
        { q: "Как узнать свой уровень английского?", a: "Пройдите бесплатный тест на этой странице — он займёт 3 минуты. На первом уроке мы также проверим разговор и понимание на слух и составим план." }
      ]
    },

    book: {
      title: "Записаться на урок",
      text: "Выберите свободное время в моём календаре. Урок сразу появится и в вашем, и в моём календаре, со ссылкой на видеозвонок и напоминанием.",
      button: "Открыть календарь",
      soon: "Онлайн-запись откроется совсем скоро. А пока напишите мне, и мы подберём время.",
      contactTitle: "Или напишите мне",
      copy: "Копировать",
      copied: "Скопировано"
    },

    test: {
      nav: "Бесплатный тест",
      eyebrow: "Бесплатно · 3 минуты · без регистрации",
      title: "Какой у вас уровень английского? *Узнайте сейчас*",
      text: "18 коротких вопросов — от начального уровня до продвинутого. Примерный уровень (A1–C2) вы увидите сразу.",
      start: "Начать тест",
      question: "Вопрос",
      of: "из",
      next: "Дальше",
      resultLabel: "Ваш примерный уровень",
      scoreText: "правильных ответов",
      resultNote: "Это быстрая оценка грамматики и лексики. На первом уроке мы также проверим разговор и понимание на слух и составим план, как перейти на следующий уровень.",
      book: "Записаться на урок",
      send: "Отправить результат Елене",
      again: "Пройти тест ещё раз",
      messageText: "Здравствуйте, Елена! Я прошёл(а) тест по английскому на вашем сайте. Мой результат: "
    },

    reviewsPage: {
      metaTitle: "Отзывы · Елена Скудра, преподаватель английского",
      title: "Отзывы учеников",
      text: "Настоящие отзывы моих учеников: взрослых, подростков и тех, кто готовился к экзаменам.",
      allLink: "Все отзывы →",
      formTitle: "Оставить отзыв",
      formText: "Занимались со мной? Буду благодарна за пару слов — это помогает другим ученикам сделать выбор.",
      formSoon: "Форма для отзывов скоро появится. А пока можно отправить отзыв на почту:"
    },

    payment: {
      metaTitle: "Оплата · Елена Скудра, преподаватель английского",
      title: "Оплата",
      text: "Оплатить уроки можно картой, через Apple Pay или Google Pay, либо банковским переводом. Цены указаны в фунтах (£).",
      cardTitle: "Оплата картой",
      payButton: "Оплатить",
      noCard: "Оплата картой скоро появится. А пока, пожалуйста, оплатите переводом или напишите мне.",
      bankTitle: "Банковский перевод",
      labels: { holder: "Получатель", sortCode: "Sort code", account: "Номер счёта", iban: "IBAN", bic: "BIC / SWIFT", reference: "Назначение платежа" },
      reference: "Ваше имя и дата урока",
      bankSoon: "Реквизиты скоро появятся. Напишите мне, и я их пришлю.",
      notesTitle: "Полезно знать",
      notes: [
        "Пожалуйста, оплачивайте урок заранее.",
        "Укажите своё имя в назначении платежа, чтобы я могла найти вашу оплату.",
        "Оплачиваете из России? Российские карты с этими способами оплаты не работают — пожалуйста, сначала напишите мне.",
        "Есть вопросы по оплате? Напишите мне."
      ],
      bookTitle: "Уже оплатили?",
      bookText: "Выберите время урока в моём календаре."
    },

    footer: "Преподаватель английского онлайн"
  }
};
