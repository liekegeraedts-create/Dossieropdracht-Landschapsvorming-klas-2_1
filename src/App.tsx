import React from "react";

type Screen = "start" | "theorie" | "animatie" | "quiz" | "quizvmbo" | "kaart";

type CardProps = {
  title: string;
  children: React.ReactNode;
};

type StartScreenProps = {
  onStart: () => void;
};

type TheoryStep = {
  id: number;
  title: string;
  text: string;
  example: string;
  next: string;
};

type MediaQuestionProps = {
  title: string;
  prompt: string;
  options: string[];
  correct: number;
  value: number | null;
  onChange: (value: number) => void;
  feedbackCorrect: string;
  feedbackWrong: string;
};



type QuizQuestion = {
  id: number;
  title: string;
  points: number;
  level: string;
  question: string;
  hint: string;
  feedback: string;
  modelAnswer: string;
};

type TheoryMediaAnswers = {
  rivier: number | null;
  wind: number | null;
  zee: number | null;
  ijs: number | null;
};

type TransferAnswers = {
  wind: number | null;
  zee: number | null;
  ijs: number | null;
};

const theorySteps: TheoryStep[] = [
  {
    id: 0,
    title: "Stap 1: Wat is sediment?",
    text: "Sediment is los materiaal zoals grind, zand en klei. Je ziet het op een strand, in een rivierbedding of als modder na regen.",
    example: "Denk aan zand tussen je schoenen na een dagje strand of modder op je fietsband.",
    next: "Zal ik uitleggen waarom sommige korrels groot zijn en andere klein?",
  },
  {
    id: 1,
    title: "Stap 2: Korrelgrootte",
    text: "Grind heeft grote korrels, zand middelgrote korrels en klei heel kleine korrels. Hoe groter en zwaarder de korrel, hoe meer kracht nodig is om hem te verplaatsen.",
    example: "Een kiezel optillen kost meer moeite dan een handje fijn zand wegblazen.",
    next: "Zal ik nu uitleggen wat verwering is?",
  },
  {
    id: 2,
    title: "Stap 3: Verwering",
    text: "Verwering is het kapotgaan van gesteente op dezelfde plek. Het gesteente breekt in kleinere stukken, maar wordt nog niet meegenomen.",
    example: "Een stoeptegel die scheurt door vorst of een baksteen die langzaam afbrokkelt in de regen.",
    next: "Wil je daarna het verschil met erosie zien?",
  },
  {
    id: 3,
    title: "Stap 4: Erosie",
    text: "Erosie is het meenemen van materiaal door water, wind, zee of ijs. Dus: verwering maakt kleiner, erosie verplaatst.",
    example: "Een harde regenbui die zand van een voetbalveld naar de stoep spoelt.",
    next: "Zal ik uitleggen hoe verwering en erosie samenwerken?",
  },
  {
    id: 4,
    title: "Stap 5: Samenhang",
    text: "Vaak komt eerst verwering en daarna erosie. Rotsen of stenen breken eerst in kleinere stukken. Daarna kunnen rivier, wind of ijs die stukken makkelijker meenemen.",
    example: "Eerst brokkelt een randje aarde los, daarna spoelt het weg in een plas of sloot.",
    next: "Wil je nu weten wat transport en sedimentatie zijn?",
  },
  {
    id: 5,
    title: "Stap 6: Transport en sedimentatie",
    text: "Transport is het verplaatsen van sediment door een stromend medium: water, wind, zee of ijs. Sedimentatie is het neerleggen van sediment. Hoe meer energie de stroming heeft, hoe makkelijker materiaal wordt meegenomen. Verliest de stroming energie, dan blijft materiaal liggen.",
    example: "Denk aan fietsen: als je hard een berg af fietst, heb je veel energie en kun je makkelijker iets zwaars meenemen.",
    next: "Zal ik laten zien wat energie en stroomsnelheid doen met korrelgrootte?",
  },
  {
    id: 6,
    title: "Stap 7: Energie en korrelgrootte",
    text: "Hoe meer energie een stroming heeft, hoe zwaarder en groter de korrels zijn die meegenomen kunnen worden. Snelle stroming betekent veel energie. Langzame stroming betekent weinig energie.",
    example: "Vergelijk het met een bal op een steile helling: die rolt sneller en harder dan op een flauwe helling.",
    next: "Wil je zien dat dit niet alleen voor rivieren geldt, maar ook voor wind, zee en ijs?",
  },
  {
    id: 7,
    title: "Stap 8: Niet alleen water",
    text: "Dit principe geldt voor alle stromende media: rivierwater, zeegolven, wind en ijs. Hoe meer energie ze hebben, hoe groter en zwaarder het materiaal is dat ze kunnen verplaatsen.",
    example: "Sterke wind kan zand en kleine steentjes verplaatsen, terwijl zwakke wind dat niet kan.",
    next: "Wil je ook bekijken waar erosie en sedimentatie precies plaatsvinden?",
  },
  {
    id: 8,
    title: "Stap 9: Waar vindt erosie en sedimentatie plaats?",
    text: "Kijk niet alleen naar sterk of zwak, maar vooral naar de plek in het landschap. Op sommige plekken is de stroming geconcentreerd en krachtig: daar zie je erosie. Op andere plekken verliest het medium energie: daar zie je sedimentatie. Bij ijs werkt het net iets anders: een gletsjer stroomt heel langzaam, maar is supersterk door zijn enorme massa.",
    example: "Bij een rivier: in de bovenloop en in de buitenbocht is vaak erosie. In de binnenbocht en bij de monding is vaak sedimentatie.",
    next: "Kies nu per medium waar erosie en sedimentatie plaatsvinden. Je krijgt feedback die je naar het juiste antwoord leidt.",
  },
];

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "Vraag 1 van 5",
    points: 2,
    level: "Onthouden",
    question: "Leg het verschil uit tussen verwering en erosie.",
    hint: "Gebruik de woorden afbreken, verplaatsen en gesteente.",
    feedback: "Feedback: Je noemt wel de kern van de begrippen, maar je beschrijving is te kort en niet volledig.",
    modelAnswer: "Modelantwoord: Verwering is het verbrokkelen van gesteente waarbij de stukjes blijven liggen. Erosie is het uitslijten van het aardoppervlak waarbij de losse stukjes steen ook echt worden verplaatst.",
  },
  {
    id: 2,
    title: "Vraag 2 van 5",
    points: 3,
    level: "Begrijpen",
    question: "Leg uit waarom erosie vaak pas kan plaatsvinden nadat er verwering is geweest. Gebruik in je antwoord de woorden oorzaak en gevolg.",
    hint: "Beschrijf eerst wat verwering doet met gesteente en daarna wat erosie met die losse stukjes kan doen.",
    feedback: "Feedback: Je hebt de oorzaak en het gevolg goed beschreven, maar je hebt niet uitgelegd waarom een massieve rots niet door erosie kan worden verplaatst zonder verwering.",
    modelAnswer: "Modelantwoord: De oorzaak is dat een massieve rots te groot en te zwaar is om door wind of water te worden meegenomen. Het gevolg hiervan is dat de rots eerst door verwering in kleine stukjes moet breken voordat erosie deze deeltjes kan verplaatsen.",
  },
  {
  id: 3,
  title: "Vraag 3 van 5",
  points: 2,
  level: "Toepassen",
  question: "Het water in een scheur in een rots bevriest en zet uit. Daarna ontdooit het weer. Welke vorm van verwering vindt hier plaats, en waarom maakt dit erosie later makkelijker?",
  hint: "",
  feedback: "Feedback: Correct beantwoord. Hier vind je de volledige redenering nog eens terug, zodat je het proces kunt vergelijken met je eigen antwoord.",
  modelAnswer: "Modelantwoord: Hier vindt mechanische verwering of vorstverwering plaats. Door bevriezend water verbrokkelt de steen. Daardoor ontstaan kleinere stukken die later makkelijker door water of wind kunnen worden verplaatst.",
},
 {
  id: 4,
  title: "Vraag 4 van 5",
  points: 2,
  level: "Analyseren",
  question: "Een rivier stroomt vanuit de bergen naar de zee. Leg uit wat er met een zandkorrel gebeurt als de rivier heel hard stroomt en wat er bij de monding gebeurt.",
  hint: "Sneller water = meer energie = erosie en transport. Langzamer water = minder energie = sedimentatie.",
  feedback: "Feedback: Je hebt de belangrijkste concepten goed benoemd, maar je kunt je antwoord iets duidelijker en uitgebreider formuleren.",
  modelAnswer: "Modelantwoord: Als het water hard stroomt, heeft het veel energie en kan het zand eroderen en worden meegenomen in de bovenloop. Bij de monding stroomt het water langzaam en heeft het weinig energie en sedimenteert het zand.",
},
  {
  id: 5,
  title: "Vraag 5 van 5",
  points: 3,
  level: "Evalueren - VWO",
  question: "Beoordeel of een waterafstotende coating op rotsen in de Alpen genoeg is om problemen door erosie en puin op de weg te voorkomen.",
  hint: "Denk aan verwering op lange termijn en bestaand los materiaal op korte termijn.",
  feedback: "Feedback: Je hebt gelijk dat de coating verwering tegengaat, maar je mist het onderscheid tussen korte en lange termijn effecten en het bestaande losse materiaal.",
  modelAnswer: "Modelantwoord: De coating kan nieuwe verwering verminderen, maar bestaand los materiaal kan nog steeds worden verplaatst. Op korte termijn helpt het dus niet genoeg, op lange termijn mogelijk wel deels.",
},
];

function Card({ title, children }: CardProps) {
  return (
    <section className="rounded-[2rem] border border-slate-200/80 bg-white p-7 shadow-lg shadow-slate-200/70 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
      <div className="mb-5 flex items-center gap-3">
        <div className="h-10 w-2 rounded-full bg-gradient-to-b from-sky-500 to-emerald-500" />
        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
          {title}
        </h2>
      </div>

      <div className="space-y-4 leading-8 text-slate-700">{children}</div>
    </section>
  );
}

function MediaQuestion({
  title,
  prompt,
  options,
  correct,
  value,
  onChange,
  feedbackCorrect,
  feedbackWrong,
}: MediaQuestionProps) {
  const isAnswered = value !== null;
  const isCorrect = value === correct;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="mb-1 font-semibold text-slate-900">{title}</div>
      <div className="mb-3 text-sm text-slate-600">{prompt}</div>
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onChange(index)}
            className={`w-full rounded-xl border px-3 py-2 text-left ${
              value === index
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-700"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {isAnswered && (
        <div
          className={`mt-3 rounded-xl border p-3 text-sm ${
            isCorrect
              ? "border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border-amber-200 bg-amber-50 text-amber-900"
          }`}
        >
          {isCorrect ? feedbackCorrect : feedbackWrong}
        </div>
      )}
    </div>
  );
}




function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-8 shadow-sm">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Interactieve les
          </p>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Ontdek hoe landschappen veranderen
          </h2>

          <p className="mb-6 text-base leading-7 text-slate-700">
            Leer stap voor stap hoe gesteente afbreekt, sediment wordt verplaatst
            en nieuw landschap ontstaat door verwering, erosie, transport en sedimentatie.
          </p>

          <button
            onClick={onStart}
            className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-900"
          >
            Start de les →
          </button>
        </div>
      </section>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 text-3xl">📚</div>
          <h3 className="mb-2 font-bold text-slate-950">Theorie</h3>
          <p className="text-sm leading-6 text-slate-600">
            Korte uitleg in kleine stappen, met voorbeelden uit het dagelijks leven.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 text-3xl">🌊</div>
          <h3 className="mb-2 font-bold text-slate-950">Animatie</h3>
          <p className="text-sm leading-6 text-slate-600">
            Onderzoek zelf wat stroomsnelheid doet met klei, zand en grind.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 text-3xl">✅</div>
          <h3 className="mb-2 font-bold text-slate-950">Quiz & opdracht</h3>
          <p className="text-sm leading-6 text-slate-600">
            Oefen met vragen op verschillende niveaus en sluit af met een eindopdracht.
          </p>
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 text-lg font-bold text-slate-950">Leerdoelen</h3>

        <div className="grid gap-3 md:grid-cols-2">
          {[
            "Ik kan het verschil uitleggen tussen verwering en erosie.",
            "Ik kan uitleggen hoe sediment wordt verplaatst.",
            "Ik kan vier vormen van erosie benoemen.",
            "Ik kan stroomsnelheid koppelen aan korrelgrootte.",
            "Ik kan erosie en sedimentatie herkennen in landschappen.",
            "Ik kan voorbeelden aanwijzen op een kaart.",
          ].map((goal) => (
            <div
              key={goal}
              className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700"
            >
              {goal}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TheorieScreen() {
  const [stepIndex, setStepIndex] = React.useState(0);
  const [chatLog, setChatLog] = React.useState<TheoryStep[]>([theorySteps[0]]);
  const [customQuestion, setCustomQuestion] = React.useState("");
  const [mediaAnswers, setMediaAnswers] = React.useState<TheoryMediaAnswers>({
    rivier: null,
    wind: null,
    zee: null,
    ijs: null,
  });

  const currentStep = theorySteps[stepIndex];
  const isLastStep = stepIndex === theorySteps.length - 1;

  const addStepToChat = (index: number) => {
    setStepIndex(index);
    setChatLog((prev) => [...prev, theorySteps[index]]);
  };

const makeExtraExplanation = (question: string): TheoryStep => {
  const lower = question.toLowerCase();
  const step = currentStep.id;

  const simpleTexts = [
    "Sediment betekent: losse stukjes materiaal, zoals zand, klei of grind.",
    "Korrelgrootte betekent hoe groot of klein een stukje sediment is.",
    "Verwering betekent: steen gaat kapot, maar blijft op dezelfde plek.",
    "Erosie betekent: los materiaal wordt meegenomen door water, wind, ijs of zee.",
    "Eerst moet gesteente vaak kapotgaan. Daarna kan het makkelijker worden meegenomen.",
    "Transport is meenemen. Sedimentatie is neerleggen.",
    "Hoe sneller iets stroomt, hoe meer kracht het heeft om grotere korrels mee te nemen.",
    "Niet alleen rivieren vervoeren sediment. Wind, zee en ijs kunnen dat ook.",
    "Erosie gebeurt waar veel kracht is. Sedimentatie gebeurt waar kracht verloren gaat.",
  ];

  const extraExamples = [
    "Denk aan zand in je schoen na het strand: dat zand is sediment.",
    "Een kiezelsteen is groter dan zand. Klei is juist veel fijner dan zand.",
    "Een baksteen die langzaam afbrokkelt door regen en vorst is een voorbeeld van verwering.",
    "Modder die na een regenbui van een helling naar beneden spoelt, is een voorbeeld van erosie.",
    "Een rotsblok kan niet zomaar worden meegenomen. Kleine stukjes steen kunnen dat veel makkelijker.",
    "Een rivier die zand meeneemt doet aan transport. Als dat zand op de bodem blijft liggen, is dat sedimentatie.",
    "Een snelstromende bergrivier kan grind meenemen. Een rustige rivier laat vooral materiaal bezinken.",
    "Wind kan zandduinen maken, zee kan stranden veranderen en ijs kan stenen meeslepen.",
    "In de buitenbocht van een rivier is vaak erosie. In de binnenbocht blijft juist vaak sediment liggen.",
  ];

  const summaries = [
    "Sediment = los materiaal.",
    "Grote korrels hebben meer energie nodig om te bewegen dan kleine korrels.",
    "Verwering = kapotgaan op dezelfde plek.",
    "Erosie = materiaal wordt meegenomen.",
    "Verwering maakt materiaal los; erosie verplaatst het.",
    "Transport = verplaatsen; sedimentatie = neerleggen.",
    "Meer energie betekent grotere korrels in transport.",
    "Water, wind, zee en ijs kunnen allemaal sediment vervoeren.",
    "Veel energie geeft erosie; weinig energie geeft sedimentatie.",
  ];

  if (
    lower.includes("simpel") ||
    lower.includes("makkelijk") ||
    lower.includes("snap") ||
    lower.includes("begrijp")
  ) {
    return {
      id: Date.now(),
      title: `Simpeler uitgelegd: ${currentStep.title}`,
      text: simpleTexts[step],
      example: extraExamples[step],
      next: "Probeer dit nu in één eigen zin uit te leggen.",
    };
  }

  if (
    lower.includes("voorbeeld") ||
    lower.includes("bijvoorbeeld") ||
    lower.includes("situatie")
  ) {
    return {
      id: Date.now(),
      title: `Extra voorbeeld: ${currentStep.title}`,
      text: "Hier is een ander voorbeeld dan het vorige voorbeeld.",
      example: extraExamples[step],
      next: "Kun je zelf ook zo’n voorbeeld bedenken?",
    };
  }

  if (
    lower.includes("kort") ||
    lower.includes("samenvatting") ||
    lower.includes("samenvatten")
  ) {
    return {
      id: Date.now(),
      title: `Korte samenvatting: ${currentStep.title}`,
      text: summaries[step],
      example: "Onthoud vooral deze kernzin.",
      next: "Als je deze zin begrijpt, kun je door naar de volgende stap.",
    };
  }

  if (
    lower.includes("verschil") ||
    lower.includes("vergelijken") ||
    lower.includes("anders")
  ) {
    return {
      id: Date.now(),
      title: `Verschil uitgelegd: ${currentStep.title}`,
      text: "Verwering = kapotgaan. Erosie = meenemen. Transport = verplaatsen. Sedimentatie = neerleggen.",
      example: "Steen brokkelt af = verwering. Stukjes spoelen weg = erosie/transport. Stukjes blijven liggen = sedimentatie.",
      next: "Vraag jezelf steeds af: gaat het kapot, wordt het meegenomen, of blijft het liggen?",
    };
  }

  return {
    id: Date.now(),
    title: `Extra uitleg: ${currentStep.title}`,
    text: simpleTexts[step],
    example: extraExamples[step],
    next: summaries[step],
  };
};

  return (
    <div className="space-y-6">
      <Card title="Theoriecoach">
        <div className="mb-6 rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-6">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-sky-700">
            Stap voor stap
          </p>

          <h3 className="mb-3 text-2xl font-black tracking-tight text-slate-950">
            Leer de begrippen alsof je met een coach praat
          </h3>

          <p className="max-w-3xl leading-7 text-slate-700">
            Lees steeds één uitlegblok. Daarna kun je doorgaan, opnieuw laten
            uitleggen of zelf een extra vraag stellen. De app probeert je vraag
            te herkennen en geeft dan bijvoorbeeld een simpelere uitleg, een
            extra voorbeeld of een korte samenvatting.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {theorySteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => addStepToChat(index)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                index === stepIndex
                  ? "bg-slate-950 text-white shadow-lg"
                  : "border border-slate-200 bg-white text-slate-700 hover:bg-sky-50"
              }`}
            >
              Stap {index + 1}
            </button>
          ))}
        </div>

        <div className="space-y-5">
          {chatLog.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-xl text-white">
                  🤖
                </div>

                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-slate-500">
                    Uitleg
                  </div>
                  <h3 className="text-xl font-black text-slate-950">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-50 p-5 leading-7 text-slate-700">
                {item.text}
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-amber-100 bg-amber-50 p-4">
                  <div className="mb-2 text-sm font-bold text-amber-800">
                    💡 Voorbeeld
                  </div>
                  <p className="text-sm leading-6 text-amber-900">
                    {item.example}
                  </p>
                </div>

                <div className="rounded-3xl border border-sky-100 bg-sky-50 p-4">
                  <div className="mb-2 text-sm font-bold text-sky-800">
                    ➡️ Volgende denkstap
                  </div>
                  <p className="text-sm leading-6 text-sky-900">
                    {item.next}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-5">
          <div className="mb-3 text-sm font-bold text-slate-900">
            Stel een extra vraag
          </div>

          <div className="mb-3 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-white px-3 py-1 text-slate-600">
              probeer: “leg simpeler uit”
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-slate-600">
              “geef voorbeeld”
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-slate-600">
              “wat is het verschil?”
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-slate-600">
              “kort samenvatten”
            </span>
          </div>

          <div className="grid items-start gap-3 md:grid-cols-[1fr_auto_auto]">
            <input
              type="text"
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
              placeholder="Bijvoorbeeld: leg dit simpeler uit of geef nog een voorbeeld"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900"
            />

            <button
              onClick={() => {
                if (!customQuestion.trim()) return;

                const answer = makeExtraExplanation(customQuestion.trim());

                setChatLog((prev) => [...prev, answer]);
                setCustomQuestion("");
              }}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-sky-50"
            >
              Vraag uitleg
            </button>

            <button
              onClick={() => !isLastStep && addStepToChat(stepIndex + 1)}
              disabled={isLastStep}
              className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-sky-900 disabled:opacity-40"
            >
              Volgende stap
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={() => {
                const repeatMessage: TheoryStep = {
                  ...currentStep,
                  title: `${currentStep.title} opnieuw`,
                };
                setChatLog((prev) => [...prev, repeatMessage]);
              }}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100"
            >
              Leg dit nog eens uit
            </button>

            <button
              onClick={() => {
                setStepIndex(0);
                setChatLog([theorySteps[0]]);
                setCustomQuestion("");
                setMediaAnswers({
                  rivier: null,
                  wind: null,
                  zee: null,
                  ijs: null,
                });
              }}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100"
            >
              Opnieuw beginnen
            </button>
          </div>
        </div>

        {currentStep.id === 8 && (
          <div className="mt-6 space-y-4">
            <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-5">
              <h3 className="mb-2 text-lg font-black text-emerald-900">
                Toepassen: waar gebeurt erosie of sedimentatie?
              </h3>
              <p className="text-sm leading-6 text-emerald-800">
                Kies per medium waar sedimentatie of erosie vooral plaatsvindt.
                Je krijgt meteen feedback.
              </p>
            </div>

            <MediaQuestion
              title="Rivier"
              prompt="Waar vindt in een rivier vooral sedimentatie plaats?"
              options={[
                "In de binnenbocht en bij de monding, waar het water snelheid verliest",
                "In de bovenloop en in de buitenbocht, waar het water hard stroomt",
                "Midden in de snelste stroomgeul, waar het water de meeste kracht heeft",
              ]}
              correct={0}
              value={mediaAnswers.rivier}
              onChange={(v) =>
                setMediaAnswers((prev) => ({ ...prev, rivier: v }))
              }
              feedbackCorrect="Goed! In de binnenbocht en bij de monding verliest de rivier snelheid. Dan heeft het water minder energie en wordt sediment afgezet."
              feedbackWrong="Nog niet goed. Kijk naar de plekken waar het water juist afremt. In de bovenloop, buitenbocht en snelste stroomgeul is vaak veel energie en dus eerder erosie."
            />

            <MediaQuestion
              title="Wind"
              prompt="Waar vindt bij wind vooral sedimentatie plaats?"
              options={[
                "Achter een obstakel of plant, waar de wind wordt afgeremd",
                "Midden in een open, kale vlakte waar de wind vrij spel heeft",
                "Op de plek waar de wind het hardst door een smalle opening blaast",
              ]}
              correct={0}
              value={mediaAnswers.wind}
              onChange={(v) =>
                setMediaAnswers((prev) => ({ ...prev, wind: v }))
              }
              feedbackCorrect="Goed! Achter een plant, hek of steen verliest de wind snelheid. Dan valt zand neer: dat is sedimentatie."
              feedbackWrong="Nog niet goed. Sedimentatie vindt eerder plaats op beschutte plekken waar de wind energie verliest."
            />

            <MediaQuestion
              title="Zee"
              prompt="Waar vindt aan zee vooral erosie plaats?"
              options={[
                "In een stroomgeul of op een plek waar golven en stroming sterk geconcentreerd zijn",
                "Op een rustig strand waar golven uitrollen en water snelheid verliest",
                "Achter een duin waar bijna geen water komt",
              ]}
              correct={0}
              value={mediaAnswers.zee}
              onChange={(v) =>
                setMediaAnswers((prev) => ({ ...prev, zee: v }))
              }
              feedbackCorrect="Precies! In een stroomgeul of op een plek met sterke golfaanval is veel energie."
              feedbackWrong="Kijk naar de plek waar water het meest gebundeld en krachtig stroomt."
            />

            <MediaQuestion
              title="IJs (gletsjer)"
              prompt="Waar vindt bij een gletsjer vooral sedimentatie plaats?"
              options={[
                "In een warmer dal waar het ijs smelt en stenen en zand achterblijven",
                "Onder het dikste, schuivende deel van de gletsjer hoog in de bergen",
                "Op de plek waar het ijs het hardst tegen de rotswand schuurt",
              ]}
              correct={0}
              value={mediaAnswers.ijs}
              onChange={(v) =>
                setMediaAnswers((prev) => ({ ...prev, ijs: v }))
              }
              feedbackCorrect="Goed gezien! Als een gletsjer smelt, blijven stenen en zand achter: een morene."
              feedbackWrong="Sedimentatie bij ijs gebeurt vooral waar de gletsjer smelt en materiaal achterblijft."
            />
          </div>
        )}
      </Card>
    </div>
  );
}

function AnimatieScreen() {
  const [position, setPosition] = React.useState(0);
  const [sentence, setSentence] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const [transferAnswers, setTransferAnswers] =
    React.useState<TransferAnswers>({
      wind: null,
      zee: null,
      ijs: null,
    });

  const riverEnergy = 100 - position;

const particles = [
  {
    name: "Grind",
    threshold: 75,
    size: 28,
    transportY: 70,
    bottomY: 84,
  },
  {
    name: "Zand",
    threshold: 45,
    size: 20,
    transportY: 67,
    bottomY: 86,
  },
  {
    name: "Klei",
    threshold: 15,
    size: 14,
    transportY: 63,
    bottomY: 88,
  },
];

  const movingParticles = particles
    .filter((particle) => riverEnergy >= particle.threshold)
    .map((particle) => particle.name);

  const energyLabel =
    riverEnergy < 30 ? "Laag" : riverEnergy < 65 ? "Middelmatig" : "Hoog";

  const riverZone =
    position < 34
      ? "Bovenloop"
      : position < 67
        ? "Middenloop"
        : "Benedenloop / monding";

  const energyText =
    position < 34
      ? "Bovenloop: hoge stroomsnelheid, veel energie, erosie en transport van grover sediment."
      : position < 67
        ? "Middenloop: de energie neemt af. Grover sediment, zoals grind, kan gaan sedimenteren."
        : "Benedenloop: lage stroomsnelheid. Zand en uiteindelijk klei worden afgezet richting de monding.";

  const lower = sentence.toLowerCase();
  const howCount = lower.split("hoe").length - 1;
  const mentionsEnergy = lower.includes("energie");
  const mentionsGrain =
    lower.includes("korrel") ||
    lower.includes("korrelgrootte") ||
    lower.includes("groot") ||
    lower.includes("zwaar") ||
    lower.includes("fijn");

  const isValidHowSentence = howCount >= 3;
  const isConceptComplete =
    isValidHowSentence && mentionsEnergy && mentionsGrain;

  return (
    <div className="space-y-6">
      <Card title="Rivier van bovenloop naar benedenloop">
        <p className="mb-5 leading-7 text-slate-700">
          Verschuif de positie van links naar rechts. Links is de bovenloop met
          hoge energie. Rechts is de benedenloop/monding met lage energie.
          Sediment blijft in transport zolang de rivier genoeg energie heeft.
          Zodra de energie te laag wordt, valt het sediment naar de bodem.
        </p>

        <div className="mb-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-red-100 bg-red-50 p-4">
            <div className="text-sm font-bold text-red-800">Bovenloop</div>
            <p className="mt-1 text-sm text-red-700">
              Veel energie. Erosie en transport van klei, zand en grind.
            </p>
          </div>

          <div className="rounded-3xl border border-sky-100 bg-sky-50 p-4">
            <div className="text-sm font-bold text-sky-800">Middenloop</div>
            <p className="mt-1 text-sm text-sky-700">
              Minder energie. Grind kan niet meer goed worden vervoerd en
              sedimenteert.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-4">
            <div className="text-sm font-bold text-emerald-800">
              Benedenloop / monding
            </div>
            <p className="mt-1 text-sm text-emerald-700">
              Lage energie. Eerst zand, daarna klei sedimenteert bij de monding.
            </p>
          </div>
        </div>

        <div className="mb-5 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-700">
            <span>Positie in de rivier: bovenloop → benedenloop</span>
            <span>
              {riverZone} · energie {riverEnergy}
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="w-full"
          />

          <div className="mt-2 flex justify-between text-xs font-semibold text-slate-500">
            <span>Bovenloop: hoge energie</span>
            <span>Middenloop</span>
            <span>Benedenloop: lage energie</span>
          </div>
        </div>

        <div className="relative h-[460px] overflow-hidden rounded-[2rem] border border-sky-200 bg-gradient-to-b from-sky-100 to-white shadow-xl shadow-sky-100">
          <div className="absolute left-5 top-5 z-30 rounded-2xl bg-white/95 px-5 py-3 shadow-lg">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Huidige zone
            </div>
            <div className="text-xl font-black text-slate-950">
              {riverZone}
            </div>
            <div className="mt-1 max-w-[310px] text-xs text-slate-600">
              {energyText}
            </div>
          </div>

          <div className="absolute right-5 top-5 z-30 rounded-2xl bg-white/95 px-5 py-3 shadow-lg">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Energie: {energyLabel}
            </div>
            <div className="text-sm font-bold text-sky-800">
              Transport:{" "}
              {movingParticles.length > 0
                ? movingParticles.join(", ")
                : "geen transport"}
            </div>
          </div>

          <div className="absolute left-0 top-0 h-full w-1/3 bg-red-50/70" />
          <div className="absolute left-1/3 top-0 h-full w-1/3 bg-sky-50/90" />
          <div className="absolute right-0 top-0 h-full w-1/3 bg-emerald-50/80" />

          <div className="absolute left-[8%] top-[120px] z-20 rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white shadow">
            Bovenloop
          </div>

          <div className="absolute left-[43%] top-[120px] z-20 rounded-full bg-sky-700 px-4 py-2 text-xs font-bold text-white shadow">
            Middenloop
          </div>

          <div className="absolute right-[7%] top-[120px] z-20 rounded-full bg-emerald-700 px-4 py-2 text-xs font-bold text-white shadow">
            Benedenloop / monding
          </div>

          <div className="absolute left-8 top-44 z-10 h-24 w-32 rounded-t-full bg-slate-300" />
          <div className="absolute left-20 top-36 z-10 h-32 w-40 rounded-t-full bg-slate-400" />
          <div className="absolute left-36 top-48 z-10 h-20 w-36 rounded-t-full bg-slate-300" />

          <div className="absolute left-24 top-40 z-20 text-sm font-bold text-slate-700">
            berggebied
          </div>

          <div className="absolute right-0 bottom-14 z-10 h-32 w-52 rounded-l-full bg-cyan-200" />
          <div className="absolute right-10 bottom-28 z-20 text-sm font-bold text-cyan-800">
            zee
          </div>

          <div className="absolute left-[5%] right-[5%] top-[260px] z-20 h-32 rounded-[999px] bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300 shadow-inner">
            <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-white/90 px-4 py-1 text-xs font-bold text-sky-800 shadow">
              rivier
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-8 rounded-b-[999px] bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-200 opacity-80" />

            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-1 rounded-full bg-white/80 transition-all duration-500"
                style={{
                  top: `${35 + i * 8}px`,
                  left: `${8 + ((i * 12 + riverEnergy / 2) % 72)}%`,
                  width: `${35 + riverEnergy}px`,
                }}
              />
            ))}
          </div>

          <div
            className="absolute top-[235px] z-40 h-[155px] w-1 rounded-full bg-slate-950 shadow-lg transition-all duration-500"
            style={{ left: `${8 + position * 0.84}%` }}
          />

          <div
            className="absolute top-[222px] z-40 -translate-x-1/2 rounded-full bg-slate-950 px-3 py-1 text-xs font-bold text-white shadow-lg transition-all duration-500"
            style={{ left: `${8 + position * 0.84}%` }}
          >
            huidige positie
          </div>

          <div className="absolute left-[8%] top-[365px] z-20 rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-800">
            erosie
          </div>

          <div className="absolute left-[44%] top-[365px] z-20 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800">
            transport
          </div>

          <div className="absolute right-[8%] top-[365px] z-20 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
            sedimentatie
          </div>

          {particles.map((particle) => {
            const isInTransport = riverEnergy >= particle.threshold;

const currentX = 14 + position * 0.68;

const sedimentationPosition = 100 - particle.threshold;
const sedimentationX = 14 + sedimentationPosition * 0.68;

const x = isInTransport ? currentX : sedimentationX;

const y = isInTransport ? particle.transportY : particle.bottomY;

            return (
              <div key={particle.name}>
                <div
                  className={`absolute z-30 rounded-full border-2 transition-all duration-700 ${
                    isInTransport
                      ? "border-white bg-slate-100 shadow-xl"
                      : "border-amber-900 bg-amber-800 shadow-md"
                  }`}
                  style={{
                    width: particle.size,
                    height: particle.size,
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                />

                <div
                  className="absolute z-30 rounded-xl border border-slate-200 bg-white/95 px-3 py-1 text-xs font-bold text-slate-700 shadow transition-all duration-700"
                  style={{
                    left: `${Math.min(84, x + 4)}%`,
                    top: `${y - 5}%`,
                  }}
                >
                  {particle.name}:{" "}
                  {isInTransport ? "transport" : "sedimentatie"}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-[2rem] border border-sky-100 bg-sky-50 p-5">
          <label className="mb-2 block text-sm font-semibold text-slate-800">
            Leg uit met een hoe-hoe-hoe zin
          </label>

          <input
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
            placeholder="Hoe verder naar de benedenloop, hoe lager de stroomsnelheid..."
            className="w-full rounded-2xl border border-slate-200 bg-white p-3"
          />

          <div className="mt-3 flex flex-wrap gap-3">
            <button
              onClick={() => setSubmitted(true)}
              className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-sky-900"
            >
              Check antwoord
            </button>

            <button
              onClick={() => {
                setSentence("");
                setSubmitted(false);
              }}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700"
            >
              Wis
            </button>
          </div>

          {submitted && (
            <div className="mt-4 rounded-2xl border bg-white p-4 text-sm leading-7">
              {isConceptComplete ? (
                <div className="text-emerald-700">
                  Sterk! Je koppelt stroomsnelheid, energie en korrelgrootte
                  goed aan elkaar.
                </div>
              ) : isValidHowSentence ? (
                <div className="text-amber-700">
                  Goed begin. Noem nog duidelijk energie én korrelgrootte.
                </div>
              ) : (
                <div className="text-amber-700">
                  Probeer een zin met: hoe verder naar de benedenloop..., hoe
                  lager de energie..., hoe kleiner/fijner het sediment...
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 space-y-5">
          <h3 className="text-lg font-bold text-slate-950">
            Geldt dit ook voor andere media?
          </h3>

          <MediaQuestion
            title="Wind"
            prompt="Wat gebeurt er bij sterkere wind?"
            options={[
              "Er kunnen grotere of zwaardere deeltjes worden meegenomen",
              "Alleen kleine deeltjes bewegen",
            ]}
            correct={0}
            value={transferAnswers.wind}
            onChange={(v) =>
              setTransferAnswers((prev) => ({ ...prev, wind: v }))
            }
            feedbackCorrect="Juist! Meer energie betekent dat grotere deeltjes kunnen bewegen."
            feedbackWrong="Denk aan de rivier: meer energie betekent juist dat grotere deeltjes mee kunnen worden genomen."
          />

          <MediaQuestion
            title="Zee"
            prompt="Wat gebeurt er bij sterkere golven?"
            options={[
              "Alleen zand beweegt",
              "Ook grotere stenen kunnen worden verplaatst",
            ]}
            correct={1}
            value={transferAnswers.zee}
            onChange={(v) =>
              setTransferAnswers((prev) => ({ ...prev, zee: v }))
            }
            feedbackCorrect="Goed! Sterkere golven betekenen meer energie."
            feedbackWrong="Vergelijk met de rivier: meer energie geeft meer transportkracht."
          />

          <MediaQuestion
            title="IJs"
            prompt="Waarom kan ijs grote rotsen meenemen?"
            options={[
              "Omdat ijs langzaam maar heel zwaar en krachtig is",
              "Omdat ijs snel stroomt",
            ]}
            correct={0}
            value={transferAnswers.ijs}
            onChange={(v) =>
              setTransferAnswers((prev) => ({ ...prev, ijs: v }))
            }
            feedbackCorrect="Precies! IJs heeft door zijn enorme massa veel kracht."
            feedbackWrong="Bij ijs is niet snelheid maar massa belangrijk."
          />
        </div>
      </Card>
    </div>
  );
}

function QuizScreen() {
  const [answers, setAnswers] = React.useState<Record<number, string>>({});
  const [revealed, setRevealed] = React.useState<Record<number, boolean>>({});

  const analyzeAnswer = (text: string, questionId: number, maxPoints: number) => {
    const lower = text.toLowerCase();

    const hasAny = (words: string[]) =>
      words.some((word) => lower.includes(word));

    let results: { label: string; passed: boolean }[] = [];

    if (questionId === 1) {
      results = [
        {
          label: "Je koppelt verwering correct aan afbreken/verbrokkelen",
          passed:
            lower.includes("verwering") &&
            hasAny(["afbre", "verbrokkel", "kapot", "breekt", "breken"]) &&
            !hasAny(["verwering is verplaatsen", "verwering verplaatst"]),
        },
        {
          label: "Je koppelt erosie correct aan verplaatsen/meenemen",
          passed:
            lower.includes("erosie") &&
            hasAny(["verplaats", "meenemen", "meegenomen", "wegspoel", "wegspoelen", "vervoerd"]) &&
            !hasAny(["erosie is afbreken", "erosie breekt af"]),
        },
      ];
    }

    if (questionId === 2) {
      results = [
        {
          label: "Je legt uit dat verwering eerst gesteente kleiner of losser maakt",
          passed:
            lower.includes("verwering") &&
            hasAny(["klein", "los", "stuk", "stukjes", "afbre", "verbrokkel", "kapot"]),
        },
        {
          label: "Je legt uit dat erosie daarna los materiaal kan verplaatsen",
          passed:
            lower.includes("erosie") &&
            hasAny(["verplaats", "meenemen", "meegenomen", "transport", "wegspoel", "vervoerd"]),
        },
        {
          label: "Je gebruikt oorzaak en gevolg op een logische manier",
          passed:
            lower.includes("oorzaak") &&
            lower.includes("gevolg") &&
            lower.indexOf("oorzaak") < lower.indexOf("gevolg"),
        },
      ];
    }

    if (questionId === 3) {
      results = [
        {
          label: "Je noemt vorstverwering of mechanische verwering",
          passed: hasAny(["vorstverwering", "vorst", "mechanische verwering"]),
        },
        {
          label: "Je legt uit dat water bevriest en uitzet",
          passed:
            lower.includes("water") &&
            hasAny(["bevriest", "bevriezen", "bevr", "uitzet", "uitzetten"]),
        },
        {
          label: "Je legt uit dat de steen scheurt of verbrokkelt",
          passed: hasAny(["scheur", "scheurt", "verbrokkel", "kapot", "breekt", "barst"]),
        },
        {
          label: "Je legt uit dat erosie daarna makkelijker wordt",
          passed:
            lower.includes("erosie") &&
            hasAny(["makkelijker", "gemakkelijker", "verplaats", "meenemen", "meegenomen"]),
        },
      ];
    }

    if (questionId === 4) {
      results = [
        {
          label: "Je koppelt hard/snel stromend water aan veel energie",
          passed:
            hasAny(["hard", "snel", "hoge stroomsnelheid"]) &&
            hasAny(["veel energie", "meer energie", "hoge energie", "energie"]),
        },
        {
          label: "Je legt uit dat zand in de bovenloop kan eroderen of worden meegenomen",
          passed:
            lower.includes("zand") &&
            lower.includes("bovenloop") &&
            hasAny(["erod", "erosie", "meegenomen", "meenemen", "transport", "verplaatst"]),
        },
        {
          label: "Je koppelt de monding aan langzaam stromend water en weinig energie",
          passed:
            lower.includes("monding") &&
            hasAny(["langzaam", "lage stroomsnelheid"]) &&
            hasAny(["weinig energie", "minder energie", "lage energie"]),
        },
        {
          label: "Je legt uit dat zand bij de monding sedimenteert",
          passed:
            lower.includes("zand") &&
            lower.includes("monding") &&
            hasAny(["sediment", "afgezet", "afzetting", "bezinkt", "zakt"]),
        },
      ];
    }

    if (questionId === 5) {
      results = [
        {
          label: "Je noemt dat de coating verwering kan verminderen",
          passed:
            lower.includes("coating") &&
            lower.includes("verwering") &&
            hasAny(["verminder", "tegen", "minder", "voorkom", "bescherm"]),
        },
        {
          label: "Je legt uit dat bestaand los materiaal nog steeds kan worden verplaatst",
          passed:
            hasAny(["bestaand", "al los", "los materiaal", "puin"]) &&
            hasAny(["verplaatst", "meegenomen", "erosie", "wegspoel", "naar beneden"]),
        },
        {
          label: "Je maakt onderscheid tussen korte termijn en lange termijn",
          passed:
            hasAny(["korte termijn", "kort termijn", "op korte termijn"]) &&
            hasAny(["lange termijn", "lang termijn", "op lange termijn"]),
        },
      ];
    }

    const passedCount = results.filter((result) => result.passed).length;
    const score = Math.min(
      maxPoints,
      Math.round((passedCount / Math.max(results.length, 1)) * maxPoints)
    );

    return { score, results };
  };

  return (
    <div className="space-y-6">
      <Card title="Quiz 2HV">
        <p className="mb-4">
          Beantwoord de vragen. De app geeft een score-inschatting en laat zien
          welke onderdelen al in je antwoord staan.
        </p>

        <div className="space-y-4">
          {quizQuestions.map((q) => {
            const isOpen = !!revealed[q.id];
            const analysis = analyzeAnswer(answers[q.id] || "", q.id, q.points);

            return (
              <div
                key={q.id}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-slate-900">
                    {q.title}
                  </span>

                  <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
                    {q.level}
                  </span>

                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                    {q.points} punten
                  </span>
                </div>

                <p className="mb-3 text-sm leading-7 text-slate-800">
                  {q.question}
                </p>

                {q.hint && (
                  <div className="mb-3 rounded-2xl border border-sky-100 bg-sky-50 p-3 text-sm text-slate-700">
                    <span className="font-medium">Hint:</span> {q.hint}
                  </div>
                )}

                <textarea
                  value={answers[q.id] || ""}
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      [q.id]: e.target.value,
                    }))
                  }
                  placeholder="Typ hier je antwoord..."
                  className="min-h-[120px] w-full rounded-2xl border border-slate-200 p-3 text-sm"
                />

                <div className="mt-3 flex flex-wrap gap-3">
                  <button
                    onClick={() =>
                      setRevealed((prev) => ({
                        ...prev,
                        [q.id]: true,
                      }))
                    }
                    className="rounded-2xl bg-slate-950 px-4 py-2 text-white transition hover:-translate-y-1 hover:bg-sky-900"
                  >
                    Bekijk feedback en voorbeeldantwoord
                  </button>

                  <button
                    onClick={() => {
                      setAnswers((prev) => ({ ...prev, [q.id]: "" }));
                      setRevealed((prev) => ({ ...prev, [q.id]: false }));
                    }}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-slate-700"
                  >
                    Wis antwoord
                  </button>
                </div>

                {isOpen && (
                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-900">
                      <strong>Score-inschatting:</strong>{" "}
                      {analysis.score} / {q.points} punten
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm">
                      <div className="mb-2 font-bold text-slate-900">
                        Inhoudelijke check:
                      </div>

                      <div className="grid gap-2 md:grid-cols-2">
                        {analysis.results.map((result) => {
  const wrongLabel = result.label
    .replace(" correct ", " NIET correct ")
    .replace("Je legt uit dat", "Je legt NIET uit dat")
    .replace("Je gebruikt", "Je gebruikt NIET")
    .replace("Je noemt", "Je noemt NIET");

  return (
    <div
      key={result.label}
      className={`rounded-xl px-3 py-2 ${
        result.passed
          ? "bg-emerald-50 text-emerald-800"
          : "bg-red-50 text-red-800"
      }`}
    >
      {result.passed
        ? `✓ ${result.label}`
        : `✗ ${wrongLabel}`}
    </div>
  );
})}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900">
                      Je antwoord hoeft niet exact hetzelfde te zijn als het
                      voorbeeldantwoord. Kijk vooral welke onderdelen je al hebt
                      genoemd en wat je nog kunt aanvullen.
                    </div>

                    <div className="rounded-2xl border border-violet-200 bg-violet-50 p-3 text-sm text-violet-900">
                      {q.modelAnswer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

function QuizVmboScreen() {
  const [mc, setMc] = React.useState<Record<number, number | null>>({});
  const [open, setOpen] = React.useState<Record<number, string>>({});
  const [show, setShow] = React.useState<Record<number, boolean>>({});

  const check = (id: number) => setShow((p) => ({ ...p, [id]: true }));

  const question4Correct =
    open[41] === "veel" &&
    open[42] === "erosie" &&
    open[43] === "weinig" &&
    open[44] === "sedimentatie" &&
    open[45] === "bovenloop" &&
    open[46] === "snel" &&
    open[47] === "benedenloop" &&
    open[48] === "langzaam";

  const question2Correct = open[21] === "verwering" && open[22] === "erosie";

  const question4Feedback = () => {
    const issues: string[] = [];

    if (open[41] !== "veel") issues.push("Bij snelle stroming hoort veel energie.");
    if (open[42] !== "erosie") issues.push("Bij snelle stroming past erosie, omdat krachtig water materiaal kan meenemen.");
    if (open[43] !== "weinig") issues.push("Bij langzame stroming hoort weinig energie.");
    if (open[44] !== "sedimentatie") issues.push("Bij langzame stroming past sedimentatie, omdat materiaal dan blijft liggen.");
    if (open[45] !== "bovenloop") issues.push("Erosie past in een rivier vooral bij de bovenloop.");
    if (open[46] !== "snel") issues.push("In de bovenloop stroomt het water meestal snel.");
    if (open[47] !== "benedenloop") issues.push("Sedimentatie past in een rivier vooral bij de benedenloop.");
    if (open[48] !== "langzaam") issues.push("In de benedenloop stroomt het water meestal langzamer.");

    if (issues.length === 0) {
      return "Sterk! Je koppelt snelheid, energie én plek in de rivier correct aan erosie en sedimentatie.";
    }

    return `Bijna. ${issues.slice(0, 3).join(" ")} Tip: denk aan de regel snel = veel energie = erosie, langzaam = weinig energie = sedimentatie.`;
  };

  return (
    <div className="space-y-6">
     <Card title="Quiz 2VMBO">
        <div className="space-y-5">
          <div className="rounded-2xl border p-4">
            <div className="mb-2 font-semibold text-slate-900">1. Wat is het verschil tussen verwering en erosie?</div>
            {["Verwering = verplaatsen, erosie = afbreken", "Verwering = afbreken op plek, erosie = verplaatsen", "Beide betekenen hetzelfde"].map((opt, i) => (
              <button key={i} onClick={() => setMc((p) => ({ ...p, 1: i }))} className={`mb-2 block w-full rounded-xl border px-3 py-2 text-left ${mc[1] === i ? "bg-slate-900 text-white" : "bg-white text-slate-700"}`}>
                {opt}
              </button>
            ))}
            {mc[1] != null && (
              <div className={`mt-2 rounded p-2 text-sm ${mc[1] === 1 ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-900"}`}>
                {mc[1] === 1 ? "Goed! Verwering is afbreken op dezelfde plek, erosie is verplaatsen." : mc[1] === 0 ? "Bijna. Je hebt afbreken en verplaatsen omgedraaid. Denk: eerst brokkelt iets af, daarna kan het worden meegenomen." : "Nee, deze begrippen betekenen niet hetzelfde. Verwering breekt af, erosie verplaatst."}
              </div>
            )}
          </div>

          <div className="rounded-2xl border p-4">
            <div className="mb-2 font-semibold text-slate-900">2. Maak de zin af (kies de juiste woorden):</div>
            <div className="mb-2 text-sm">Omdat <strong>...</strong> het losse materiaal levert, wat door <strong>...</strong> verplaatst wordt.</div>
            <div className="flex flex-wrap items-center gap-3">
              <select value={open[21] || ""} onChange={(e) => setOpen((p) => ({ ...p, 21: e.target.value }))} className="rounded border p-2 text-slate-900"><option value="">kies...</option><option value="verwering">verwering</option><option value="erosie">erosie</option></select>
              <span>levert het losse materiaal, wat door</span>
              <select value={open[22] || ""} onChange={(e) => setOpen((p) => ({ ...p, 22: e.target.value }))} className="rounded border p-2 text-slate-900"><option value="">kies...</option><option value="verwering">verwering</option><option value="erosie">erosie</option></select>
              <span>verplaatst wordt.</span>
            </div>
            <button onClick={() => check(2)} className="mt-3 rounded bg-slate-900 px-3 py-2 text-white">Check</button>
            {show[2] && (
              <div className={`mt-2 rounded p-2 text-sm ${question2Correct ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-900"}`}>
                {question2Correct ? "Goed! Verwering levert losse stukjes, erosie verplaatst ze." : open[21] === "erosie" && open[22] === "verwering" ? "Je hebt de volgorde omgedraaid. Eerst ontstaat los materiaal door verwering, daarna wordt het verplaatst door erosie." : !open[21] || !open[22] ? "Je hebt nog niet alles ingevuld. Kies bij beide open plekken een begrip." : "Bijna. Denk aan de volgorde: verwering maakt klein en los, erosie neemt daarna mee."}
              </div>
            )}
          </div>

          <div className="rounded-2xl border p-4">
            <div className="mb-2 font-semibold text-slate-900">3. Water bevriest in een scheur en zet uit. Wat gebeurt hier?</div>
            {["Chemische verwering", "Vorstverwering", "Erosie"].map((opt, i) => (
              <button key={i} onClick={() => setMc((p) => ({ ...p, 3: i }))} className={`mb-2 block w-full rounded-xl border px-3 py-2 text-left ${mc[3] === i ? "bg-slate-900 text-white" : "bg-white text-slate-700"}`}>
                {opt}
              </button>
            ))}
            {mc[3] != null && (
              <div className={`mt-2 rounded p-2 text-sm ${mc[3] === 1 ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-900"}`}>
                {mc[3] === 1 ? "Goed! Dit is vorstverwering. Bevriezend water zet uit en duwt de scheur verder open." : mc[3] === 0 ? "Niet helemaal. Hier verandert de steen niet door een stofje, maar door bevriezen en uitzetten van water." : "Nee. Hier wordt nog niets verplaatst. Het gaat om afbreken door vorst: vorstverwering."}
              </div>
            )}
          </div>

          <div className="rounded-2xl border p-4">
            <div className="mb-2 font-semibold text-slate-900">4. Maak de zinnen af (kies de juiste woorden):</div>
            <div className="space-y-3 text-base">
              <div className="flex flex-wrap items-center gap-2"><span>Bij snelle stroming is er</span><select value={open[41] || ""} onChange={(e) => setOpen((p) => ({ ...p, 41: e.target.value }))} className="rounded border p-2 text-slate-900"><option value="">kies...</option><option value="veel">veel</option><option value="weinig">weinig</option></select><span>energie en ontstaat</span><select value={open[42] || ""} onChange={(e) => setOpen((p) => ({ ...p, 42: e.target.value }))} className="rounded border p-2 text-slate-900"><option value="">kies...</option><option value="erosie">erosie</option><option value="sedimentatie">sedimentatie</option></select><span>.</span></div>
              <div className="flex flex-wrap items-center gap-2"><span>Bij langzame stroming is er</span><select value={open[43] || ""} onChange={(e) => setOpen((p) => ({ ...p, 43: e.target.value }))} className="rounded border p-2 text-slate-900"><option value="">kies...</option><option value="veel">veel</option><option value="weinig">weinig</option></select><span>energie en ontstaat</span><select value={open[44] || ""} onChange={(e) => setOpen((p) => ({ ...p, 44: e.target.value }))} className="rounded border p-2 text-slate-900"><option value="">kies...</option><option value="erosie">erosie</option><option value="sedimentatie">sedimentatie</option></select><span>.</span></div>
            </div>
            <div className="mt-3 border-t pt-3">
              <div className="mb-2 font-medium text-slate-900">Toepassing in een rivier:</div>
              <div className="flex flex-wrap items-center gap-2"><span>Een voorbeeld van erosie vind je in de</span><select value={open[45] || ""} onChange={(e) => setOpen((p) => ({ ...p, 45: e.target.value }))} className="rounded border p-2 text-slate-900"><option value="">kies...</option><option value="bovenloop">bovenloop</option><option value="benedenloop">benedenloop</option></select><span>, omdat het water hier</span><select value={open[46] || ""} onChange={(e) => setOpen((p) => ({ ...p, 46: e.target.value }))} className="rounded border p-2 text-slate-900"><option value="">kies...</option><option value="snel">snel</option><option value="langzaam">langzaam</option></select><span>stroomt.</span></div>
              <div className="mt-2 flex flex-wrap items-center gap-2"><span>Een voorbeeld van sedimentatie vind je in de</span><select value={open[47] || ""} onChange={(e) => setOpen((p) => ({ ...p, 47: e.target.value }))} className="rounded border p-2 text-slate-900"><option value="">kies...</option><option value="bovenloop">bovenloop</option><option value="benedenloop">benedenloop</option></select><span>, omdat het water hier</span><select value={open[48] || ""} onChange={(e) => setOpen((p) => ({ ...p, 48: e.target.value }))} className="rounded border p-2 text-slate-900"><option value="">kies...</option><option value="snel">snel</option><option value="langzaam">langzaam</option></select><span>stroomt.</span></div>
            </div>
            <button onClick={() => check(4)} className="mt-3 rounded bg-slate-900 px-3 py-2 text-white">Check</button>
            {show[4] && <div className={`mt-2 rounded p-2 text-sm ${question4Correct ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-900"}`}>{question4Feedback()}</div>}
          </div>
        </div>
      </Card>
    </div>
  );
}

function KaartScreen() {
  return (
    <div className="space-y-4">
      <Card title="Eindopdracht">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-base text-slate-800">
          Nu je de uitleg en de vragen hebt doorlopen, is het tijd om te kijken welke effecten verwering, erosie en sedimentatie hebben in het landschap. Maak hiervoor de eindopdracht Landschapsvorming (zie document Itslearning)
        </div>
      </Card>
    </div>
  );
}
export default function App() {
  const screens: Screen[] = ["start", "theorie", "animatie", "quiz", "quizvmbo", "kaart"];
  const [currentScreen, setCurrentScreen] = React.useState<Screen>("start");
  const screenIndex = screens.indexOf(currentScreen);

  const navButtonClass = (screen: Screen) =>
    `rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ${
      currentScreen === screen
        ? "bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-lg shadow-sky-200 scale-105 hover:-translate-y-1"
        : "border border-slate-200 bg-white text-slate-700 hover:-translate-y-1 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-800"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-slate-50 to-emerald-50 px-4 py-6 text-slate-900 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-950 via-sky-900 to-emerald-800 p-8 text-white shadow-2xl shadow-slate-300">
          <h1 className="mb-3 text-4xl font-black tracking-tight md:text-5xl">
            Verwering, Erosie, Transport &amp; Sedimentatie
          </h1>

          <p className="max-w-2xl text-base leading-7 text-slate-200/90">
            Eenvoudige demo-webapp met navigatie, animatie, quiz en eindopdracht.
          </p>
        </header>

        <nav className="mb-6 rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-xl shadow-slate-200/70 backdrop-blur">
          <div className="flex flex-wrap justify-center gap-3">
            {screens.map((screen) => (
              <button
                key={screen}
                className={navButtonClass(screen)}
                onClick={() => setCurrentScreen(screen)}
              >
                {screen === "kaart"
                  ? "Eindopdracht"
                  : screen === "quiz"
                    ? "Quiz 2HV"
                    : screen === "quizvmbo"
                      ? "Quiz 2VMBO"
                      : screen.charAt(0).toUpperCase() + screen.slice(1)}
              </button>
            ))}
          </div>
        </nav>

        <main className="min-h-[420px] rounded-[2rem] border border-white/80 bg-white/90 p-6 text-slate-900 shadow-xl shadow-slate-200 backdrop-blur md:p-8">
          {currentScreen === "start" && (
            <StartScreen onStart={() => setCurrentScreen("theorie")} />
          )}

          {currentScreen === "theorie" && <TheorieScreen />}
          {currentScreen === "animatie" && <AnimatieScreen />}
          {currentScreen === "quiz" && <QuizScreen />}
          {currentScreen === "quizvmbo" && <QuizVmboScreen />}
          {currentScreen === "kaart" && <KaartScreen />}
        </main>

        <footer className="mt-6 flex items-center justify-between gap-3 rounded-[2rem] border border-white/80 bg-white/70 p-4 shadow-lg shadow-slate-200/60 backdrop-blur">
          <button
            onClick={() =>
              screenIndex > 0 && setCurrentScreen(screens[screenIndex - 1])
            }
            disabled={screenIndex === 0}
            className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-40"
          >
            Vorige
          </button>

          <div className="text-sm font-semibold text-slate-600">
            Scherm {screenIndex + 1} van {screens.length}
          </div>

          {currentScreen === "start" ? (
            <button
              onClick={() => setCurrentScreen("theorie")}
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-sky-900"
            >
              Volgende
            </button>
          ) : (
            <div className="w-[104px]" />
          )}
        </footer>
      </div>
    </div>
  );
}


