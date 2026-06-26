const BBC_LINK = "https://www.bbc.co.uk/bitesize/subjects/z4882hv";

const topics = {
  cells: {
    title: "Cells",
    cognito: {
      label: "Open Cognito cells lesson",
      url: "https://cognitoedu.org/coursesubtopic/b1-ks3-default_iTRySzZY",
      text: "Use this Cognito lesson to revise cells after reading the organiser."
    },
    vocabulary: [
      ["Cell membrane", "Controls what enters and leaves the cell."],
      ["Cytoplasm", "Jelly-like substance where many reactions happen."],
      ["Nucleus", "Contains genetic information and controls cell activities."],
      ["Mitochondria", "Where respiration happens and energy is released."],
      ["Ribosome", "Tiny structure where proteins are made."],
      ["Vacuole", "A fluid-filled space that helps support plant cells."],
      ["Cell wall", "A strong plant cell structure made of cellulose."],
      ["Chloroplast", "Contains chlorophyll and absorbs light for photosynthesis."],
      ["Specialised cell", "A cell adapted to do a particular job."],
      ["Diffusion", "Movement of particles from high to low concentration."]
    ],
    questions: [
      q("Which cell part controls what enters and leaves a cell?", ["Cell membrane", "Nucleus", "Ribosome", "Cell wall"], 0),
      q("Where is genetic information found in most animal and plant cells?", ["Cytoplasm", "Nucleus", "Vacuole", "Cell membrane"], 1),
      q("Which structure is found in plant cells but not animal cells?", ["Cytoplasm", "Cell membrane", "Chloroplast", "Mitochondria"], 2),
      q("What is the main job of mitochondria?", ["Store water", "Make glucose", "Control the cell", "Release energy by respiration"], 3),
      q("Which cell part is where many chemical reactions happen?", ["Cytoplasm", "Cell wall", "Chloroplast", "Nucleus"], 0),
      q("What is a specialised cell?", ["A dead cell", "A cell adapted for a job", "A cell with no nucleus", "A cell found only in plants"], 1),
      q("Which cell is adapted to carry impulses?", ["Root hair cell", "Red blood cell", "Nerve cell", "Sperm cell"], 2),
      q("What is the job of a root hair cell?", ["Carry oxygen", "Make sperm", "Contract muscles", "Absorb water and minerals"], 3),
      q("Which part of a plant cell contains cell sap?", ["Vacuole", "Ribosome", "Mitochondrion", "Nucleus"], 0),
      q("Which substance in chloroplasts absorbs light?", ["Cellulose", "Chlorophyll", "Oxygen", "Starch"], 1),
      q("Which word equation describes photosynthesis?", ["Glucose + oxygen -> carbon dioxide + water", "Water + oxygen -> glucose", "Carbon dioxide + water -> glucose + oxygen", "Glucose -> carbon dioxide + oxygen"], 2),
      q("Where does photosynthesis happen in plant cells?", ["Nucleus", "Mitochondria", "Vacuole", "Chloroplasts"], 3),
      q("What gas do plants take in for photosynthesis?", ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], 0),
      q("What gas is released during photosynthesis?", ["Carbon dioxide", "Oxygen", "Methane", "Nitrogen"], 1),
      q("Which organelle is labelled in both plant and animal cells?", ["Cell wall", "Chloroplast", "Nucleus", "Large vacuole"], 2),
      q("What is diffusion?", ["Particles being destroyed", "Particles only moving in solids", "Particles moving from low to high concentration", "Particles spreading from high to low concentration"], 3),
      q("In diffusion, particles move from...", ["High to low concentration", "Low to high concentration", "Cold to hot only", "Plant to animal cells only"], 0),
      q("Which cell has a tail to help it swim?", ["Muscle cell", "Sperm cell", "Root hair cell", "Nerve cell"], 1),
      q("Which cell has long fibres to contract?", ["Nerve cell", "Sperm cell", "Muscle cell", "Root hair cell"], 2),
      q("What does the cell wall do in a plant cell?", ["Controls reactions", "Stores DNA", "Makes proteins", "Supports and strengthens the cell"], 3),
      q("What is the function of ribosomes?", ["Make proteins", "Store water", "Make light", "Absorb minerals"], 0),
      q("Which structure helps a leaf reduce water loss?", ["Nucleus", "Waxy cuticle", "Mitochondrion", "Ribosome"], 1),
      q("Which layer of a leaf contains many chloroplasts?", ["Lower epidermis", "Waxy cuticle", "Palisade mesophyll", "Air space"], 2),
      q("What are stomata?", ["Tiny roots", "Cell walls", "Leaf veins", "Small pores in leaves"], 3),
      q("What is transpiration?", ["Water evaporating from leaves", "Glucose being made", "Oxygen entering roots", "Cells dividing"], 0),
      q("Which cell structure is in animal cells?", ["Chloroplast", "Cell membrane", "Cell wall", "Large permanent vacuole"], 1),
      q("What is glucose used for in plants?", ["Only to make water", "Only to make oxygen", "Respiration and growth", "To destroy chloroplasts"], 2),
      q("Which process releases energy from glucose?", ["Photosynthesis", "Diffusion", "Transpiration", "Respiration"], 3),
      q("What does a microscope help scientists do?", ["See cells in detail", "Make cells bigger permanently", "Kill bacteria only", "Make oxygen"], 0),
      q("Which feature increases the surface area of a root hair cell?", ["Large nucleus", "Long hair-like extension", "Thick waxy cuticle", "Tail"], 1)
    ]
  },
  cellSystems: {
    title: "Cell Systems",
    cognito: {
      label: "Open Cognito cell systems lesson",
      url: "https://cognitoedu.org/coursesubtopic/b1-ks3-default_TfygDZkL",
      text: "Use this Cognito lesson to revise cell systems after reading the organiser."
    },
    vocabulary: [
      ["Cell", "The basic unit of living organisms."],
      ["Tissue", "A group of similar cells working together."],
      ["Organ", "A structure made of tissues that carries out a job."],
      ["Organ system", "Organs working together to carry out a life process."],
      ["Organism", "A complete living thing."],
      ["Enzyme", "A biological catalyst that speeds up reactions."],
      ["Alveolus", "Tiny air sac where gas exchange happens."],
      ["Capillary", "Tiny blood vessel with thin walls."],
      ["Artery", "Blood vessel that carries blood away from the heart."],
      ["Vein", "Blood vessel that carries blood back to the heart."]
    ],
    questions: [
      q("Which order is correct from smallest to largest?", ["Cell, tissue, organ, organ system, organism", "Organism, organ, cell, tissue", "Tissue, cell, organ, organism", "Organ, cell, tissue, system"], 0),
      q("What is a tissue?", ["A complete living thing", "A group of similar cells", "A single organ", "A blood vessel"], 1),
      q("Which is an organ?", ["Red blood cell", "Muscle tissue", "Stomach", "Digestive system"], 2),
      q("Which is an organ system?", ["Heart", "Blood cell", "Epithelial tissue", "Digestive system"], 3),
      q("What does the heart do?", ["Pumps blood around the body", "Breaks down starch", "Exchanges gases", "Makes bile"], 0),
      q("Which blood vessel carries blood away from the heart?", ["Vein", "Artery", "Capillary", "Alveolus"], 1),
      q("Which blood vessel carries blood back to the heart?", ["Artery", "Capillary", "Vein", "Trachea"], 2),
      q("What is the job of capillaries?", ["Chew food", "Pump blood", "Store oxygen", "Allow exchange with tissues"], 3),
      q("Which blood cells carry oxygen?", ["Red blood cells", "White blood cells", "Platelets", "Plasma"], 0),
      q("Which part of blood fights infection?", ["Plasma", "White blood cells", "Platelets", "Red blood cells"], 1),
      q("What does plasma carry?", ["Only oxygen", "Only bones", "Dissolved substances", "Only muscles"], 2),
      q("What do platelets help with?", ["Breathing", "Digestion", "Making glucose", "Blood clotting"], 3),
      q("Where does gas exchange happen in the lungs?", ["Alveoli", "Mouth", "Stomach", "Large intestine"], 0),
      q("Which gas diffuses from alveoli into blood?", ["Carbon dioxide", "Oxygen", "Nitrogen", "Water vapour"], 1),
      q("Which gas diffuses from blood into the alveoli?", ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], 2),
      q("Why are alveoli good for gas exchange?", ["They are thick", "They contain acid", "They are made of bone", "They have a large surface area"], 3),
      q("What does the mouth do in digestion?", ["Chews food and starts digestion", "Absorbs all water", "Pumps blood", "Exchanges oxygen"], 0),
      q("Where is acid found in the digestive system?", ["Small intestine", "Stomach", "Large intestine", "Mouth only"], 1),
      q("Where are most digested food molecules absorbed?", ["Stomach", "Mouth", "Small intestine", "Large intestine"], 2),
      q("What does the large intestine absorb?", ["Oxygen", "Glucose only", "Proteins only", "Water"], 3),
      q("What do enzymes do?", ["Speed up reactions", "Become organs", "Carry oxygen", "Make blood red"], 0),
      q("Which enzyme breaks down starch?", ["Lipase", "Amylase", "Protease", "Insulin"], 1),
      q("Which enzyme breaks down proteins?", ["Amylase", "Lipase", "Protease", "Bile"], 2),
      q("Which enzyme breaks down fats?", ["Amylase", "Protease", "Acid", "Lipase"], 3),
      q("What is produced when starch is broken down?", ["Sugars", "Amino acids", "Fatty acids", "Oxygen"], 0),
      q("What are proteins broken into?", ["Sugars", "Amino acids", "Water", "Glucose only"], 1),
      q("What are fats broken into?", ["Sugars only", "Amino acids", "Fatty acids and glycerol", "Carbon dioxide"], 2),
      q("What is the trachea?", ["A blood cell", "An enzyme", "A food molecule", "The windpipe carrying air"], 3),
      q("Which system includes the heart, blood and blood vessels?", ["Circulatory system", "Digestive system", "Respiratory system", "Nervous system"], 0),
      q("Which system includes the mouth, stomach and intestines?", ["Respiratory system", "Digestive system", "Circulatory system", "Skeletal system"], 1)
    ]
  },
  fertilisation: {
    title: "Fertilisation and Implantation",
    cognito: {
      label: "Open Cognito fertilisation lesson",
      url: "https://cognitoedu.org/coursesubtopic/b1-ks3-default_xRvZZltU",
      text: "Use this Cognito lesson to revise fertilisation and implantation after reading the organiser."
    },
    vocabulary: [
      ["Fertilisation", "When a sperm cell joins with an egg cell."],
      ["Sperm", "Male sex cell."],
      ["Egg", "Female sex cell, also called an ovum."],
      ["Zygote", "The first cell formed after fertilisation."],
      ["Embryo", "Early stage of development after cell division."],
      ["Implantation", "When an embryo attaches to the uterus lining."],
      ["Uterus", "Organ where an embryo develops."],
      ["Menstrual cycle", "Monthly cycle that prepares the uterus for pregnancy."],
      ["Contraception", "Methods used to prevent pregnancy."],
      ["Inherited", "Passed from parents to offspring through genes."]
    ],
    questions: [
      q("What is fertilisation?", ["A sperm cell joining with an egg cell", "The uterus lining breaking down", "A seed blowing away", "A clone forming"], 0),
      q("Where does fertilisation usually happen in humans?", ["Uterus", "Fallopian tube", "Vagina", "Ovary surface"], 1),
      q("What is the male sex cell called?", ["Egg", "Zygote", "Sperm", "Embryo"], 2),
      q("What is the female sex cell called?", ["Sperm", "Zygote", "Embryo", "Egg"], 3),
      q("What is a zygote?", ["The cell formed after fertilisation", "A contraceptive method", "A seed", "A blood cell"], 0),
      q("What is an embryo?", ["A type of enzyme", "An early developing organism", "A sperm tail", "A plant root"], 1),
      q("What is implantation?", ["Ovulation", "Menstruation", "An embryo attaching to the uterus lining", "Making a clone"], 2),
      q("What happens if fertilisation does not occur?", ["The egg becomes a sperm", "The uterus disappears", "The embryo implants", "The uterus lining breaks down"], 3),
      q("About how long is the menstrual cycle shown on the organiser?", ["28 days", "7 days", "90 days", "1 day"], 0),
      q("What is ovulation?", ["Menstruation", "Release of an egg", "Fertilisation", "Implantation"], 1),
      q("What happens during menstruation?", ["Sperm are made", "Eggs are fertilised", "The uterus lining breaks down", "Seeds disperse"], 2),
      q("What is contraception used for?", ["Increasing photosynthesis", "Making enzymes", "Growing roots", "Preventing pregnancy"], 3),
      q("Which method blocks sperm from reaching the egg?", ["Condom", "Photosynthesis", "Diffusion", "Vacuole"], 0),
      q("Which method contains hormones to stop ovulation?", ["Diaphragm", "Pill", "Condom", "Sterilisation"], 1),
      q("Which method is a surgical way to prevent sperm or eggs meeting?", ["Condom", "Coil", "Sterilisation", "Injection"], 2),
      q("Which is an example of asexual reproduction in plants?", ["Fertilisation", "Menstruation", "Implantation", "Runners in strawberry plants"], 3),
      q("What does asexual reproduction involve?", ["One parent only", "Two parents always", "Only sperm cells", "Only animals"], 0),
      q("What are clones?", ["Cells with no DNA", "Genetically identical copies", "Only seeds", "Only eggs"], 1),
      q("Which animal is named as a cloning example on the organiser?", ["A rabbit", "A horse", "Dolly the sheep", "A duck"], 2),
      q("What is seed dispersal?", ["Seeds being destroyed", "Seeds being fertilised", "Seeds making blood", "Seeds moving away from the parent plant"], 3),
      q("Which is a wind-dispersed seed example?", ["Dandelion", "Coconut", "Strawberry runner", "Potato tuber"], 0),
      q("Which is a water-dispersed seed example?", ["Dandelion", "Coconut", "Berries", "Burdock burr"], 1),
      q("Which is an animal-dispersed seed example?", ["Coconut only", "Water lily only", "Berries", "Onion bulb"], 2),
      q("How are inherited characteristics passed on?", ["By breathing", "By digestion", "By exercise only", "Through genes"], 3),
      q("Which is an inherited characteristic?", ["Eye colour", "A temporary scar", "A learned language", "A hairstyle only"], 0),
      q("Which structure carries genetic information?", ["Water", "DNA", "Stomach acid", "Bile"], 1),
      q("Which is not a human reproductive cell?", ["Sperm", "Egg", "Red blood cell", "Ovum"], 2),
      q("What is the uterus?", ["A seed", "A blood vessel", "An enzyme", "Organ where an embryo develops"], 3),
      q("What does the coil shown on the organiser help prevent?", ["Implantation", "Photosynthesis", "Respiration", "Diffusion"], 0),
      q("What is sexual reproduction?", ["One parent making clones", "Two sex cells joining", "Only plants using runners", "A cell wall forming"], 1)
    ]
  },
  variation: {
    title: "Variation and Natural Selection",
    cognito: {
      label: "Open Cognito variation lesson",
      url: "https://cognitoedu.org/coursesubtopic/b1-ks3-default_ZLlVKVws",
      text: "Use this Cognito lesson to revise variation and natural selection after reading the organiser."
    },
    vocabulary: [
      ["Variation", "Differences between individuals of the same species."],
      ["Adaptation", "A feature that helps an organism survive."],
      ["Competition", "When organisms need the same limited resource."],
      ["Resource", "Something organisms need, such as food, water, light or space."],
      ["Survival", "Staying alive."],
      ["Natural selection", "Better adapted organisms are more likely to survive and reproduce."],
      ["Environment", "The surroundings an organism lives in."],
      ["Biotic factor", "A living factor in an ecosystem."],
      ["Abiotic factor", "A non-living factor in an ecosystem."],
      ["Biodiversity", "The variety of living things in an area."]
    ],
    questions: [
      q("What is variation?", ["Differences between individuals", "All organisms being identical", "A type of organ", "A gas exchange surface"], 0),
      q("Variation can be caused by genes and...", ["Only oxygen", "The environment", "Only enzymes", "Only capillaries"], 1),
      q("What is an adaptation?", ["A waste product", "A type of seed", "A feature that helps survival", "A blood vessel"], 2),
      q("Which adaptation helps a polar bear survive in the cold?", ["Webbed feet only", "No fur", "Thin body", "Thick fur"], 3),
      q("Which adaptation helps a cactus reduce water loss?", ["Stores water", "Has large ears", "Has gills", "Makes milk"], 0),
      q("Why might a duck have webbed feet?", ["To photosynthesise", "To swim better", "To make enzymes", "To attract bacteria"], 1),
      q("What is camouflage?", ["A type of fertilisation", "A cell organelle", "Blending in with surroundings", "Breaking down food"], 2),
      q("What is competition?", ["Organisms always helping each other", "Cells dividing", "Oxygen leaving blood", "Organisms needing the same limited resources"], 3),
      q("Which resource do plants compete for?", ["Light", "Platelets", "Sperm", "Alveoli"], 0),
      q("Which resource do animals often compete for?", ["Chloroplasts", "Food", "Vacuoles", "Starch only"], 1),
      q("In natural selection, organisms best adapted are more likely to...", ["Have no offspring", "Become plants", "Survive and reproduce", "Lose all variation"], 2),
      q("What can happen over many generations through natural selection?", ["All organisms die immediately", "No features change", "Genes disappear from all life", "A population changes over time"], 3),
      q("What is a population?", ["A group of organisms of the same species in an area", "A single cell", "A type of enzyme", "A non-living factor"], 0),
      q("What is antibiotic resistance?", ["Antibiotics killing all bacteria instantly", "Some bacteria surviving antibiotics", "Plants making oxygen", "Animals losing adaptations"], 1),
      q("Why can resistant bacteria increase?", ["They cannot reproduce", "They are all killed first", "They survive and reproduce", "They become organs"], 2),
      q("Which is a living factor in an ecosystem?", ["Temperature", "Water", "Light", "Plants"], 3),
      q("Which is an abiotic factor?", ["Temperature", "Rabbits", "Bacteria", "Fungi"], 0),
      q("Which is a biotic factor?", ["Water", "Animals", "Air", "Rocks"], 1),
      q("What is an ecosystem?", ["Only one animal", "A single organ", "A community and non-living environment interacting", "A sperm cell"], 2),
      q("What is biodiversity?", ["Only one species in an area", "No living things", "A menstrual cycle", "The variety of living things"], 3),
      q("Which action helps maintain biodiversity?", ["Protect habitats", "Destroy forests", "Pollute rivers", "Overfish"], 0),
      q("Which action can reduce biodiversity?", ["Planting trees", "Overfishing", "Protecting habitats", "Reducing pollution"], 1),
      q("Why is higher plant density linked to more competition?", ["There are fewer plants", "There is more oxygen only", "More plants need the same resources", "Plants stop needing light"], 2),
      q("Which factor should be kept the same in a competition investigation?", ["Only the conclusion", "Only the title", "Only the drawings", "Control variables such as plant species"], 3),
      q("What should scientists measure in the plant competition investigation?", ["Growth", "Blood type", "Heart rate", "Fertilisation"], 0),
      q("What does survival of the fittest mean in science?", ["The strongest always wins", "The best adapted are more likely to survive", "Only the biggest survive", "All organisms survive equally"], 1),
      q("Which feature is inherited?", ["A cut from falling", "A learned song", "Genes for eye colour", "A temporary tan only"], 2),
      q("What is an environment?", ["A cell membrane", "A chromosome only", "A single blood cell", "The surroundings an organism lives in"], 3),
      q("What does reproduction allow helpful adaptations to do?", ["Be passed to offspring", "Disappear immediately", "Stop organisms surviving", "Turn into organs"], 0),
      q("Which phrase best describes natural selection?", ["Random choices by animals", "Better adapted organisms leave more offspring", "Organs becoming tissues", "Cells becoming atoms"], 1)
    ]
  }
};

function q(question, options, answer) {
  return { question, options, answer };
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderTopicInfo(topic) {
  const target = document.querySelector("[data-topic-info]");
  if (!target) return;

  const disabled = topic.cognito.url.startsWith("#");
  target.innerHTML = `
    <h2>Cognito Lesson/Video</h2>
    <p>${topic.cognito.text}</p>
    <div class="button-row">
      <a class="button ${disabled ? "secondary" : "primary"}" href="${topic.cognito.url}" ${disabled ? "" : "target=\"_blank\" rel=\"noopener\""}>${topic.cognito.label}</a>
      <a class="button secondary" href="${BBC_LINK}" target="_blank" rel="noopener">BBC Bitesize</a>
    </div>
  `;
}

function renderVocabulary(topic) {
  const target = document.querySelector("[data-vocabulary]");
  if (!target) return;

  target.innerHTML = `
    <h2>Key Vocabulary</h2>
    <p>Hover or tap a word to reveal its definition.</p>
    <div class="vocab-grid">
      ${topic.vocabulary.map(([term, definition]) => `
        <button class="vocab-card" type="button">
          <strong>${term}</strong>
          <span class="definition">${definition}</span>
        </button>
      `).join("")}
    </div>
  `;

  target.querySelectorAll(".vocab-card").forEach((card) => {
    card.addEventListener("click", () => card.classList.toggle("open"));
  });
}

function renderQuiz(topic) {
  const target = document.querySelector("[data-quiz]");
  if (!target) return;

  let selected = [];
  let current = 0;
  let score = 0;
  let answered = false;
  let studentName = "";

  function start() {
    selected = shuffle(topic.questions).slice(0, 10);
    current = 0;
    score = 0;
    answered = false;
    showQuestion();
  }

  function showQuestion() {
    const item = selected[current];
    target.innerHTML = `
      <h2>Multiple-Choice Quiz</h2>
      <p class="question-count">Question ${current + 1} of 10</p>
      <h3>${item.question}</h3>
      <div class="quiz-options">
        ${item.options.map((option, index) => `
          <button class="quiz-option" type="button" data-index="${index}">
            ${String.fromCharCode(65 + index)}. ${option}
          </button>
        `).join("")}
      </div>
      <p class="feedback" aria-live="polite"></p>
      <button class="try-again hidden" type="button">Try Again</button>
    `;

    target.querySelectorAll(".quiz-option").forEach((button) => {
      button.addEventListener("click", () => answerQuestion(Number(button.dataset.index)));
    });
  }

  function answerQuestion(index) {
    if (answered) return;
    answered = true;

    const item = selected[current];
    const options = target.querySelectorAll(".quiz-option");
    const feedback = target.querySelector(".feedback");
    const correct = index === item.answer;

    if (correct) score += 1;

    options.forEach((button) => {
      const buttonIndex = Number(button.dataset.index);
      button.disabled = true;
      if (buttonIndex === item.answer) button.classList.add("correct");
      if (buttonIndex === index && !correct) button.classList.add("wrong");
    });

    feedback.textContent = correct ? "Correct." : `Not quite. Correct answer: ${item.options[item.answer]}.`;
    feedback.style.color = correct ? "var(--correct)" : "var(--wrong)";

    window.setTimeout(() => {
      current += 1;
      answered = false;
      if (current < selected.length) {
        showQuestion();
      } else {
        showScore();
      }
    }, 950);
  }

  function showScore() {
    const totalScore = window.ScoreUtils && studentName ? window.ScoreUtils.addScore(studentName, score) : score;
    target.innerHTML = `
      <h2>Multiple-Choice Quiz</h2>
      <div class="score-box">Final score: ${score} out of 10</div>
      <p>${studentName ? `${window.ScoreUtils ? window.ScoreUtils.escapeHtml(studentName) : studentName}'s total correct answers: ${totalScore}.` : ""}</p>
      <p>${score >= 8 ? "Excellent revision." : score >= 5 ? "Good effort. Revisit the organiser, then try again." : "Keep going. Read the organiser carefully, then try another set."}</p>
      <button class="try-again" type="button">Try Again</button>
    `;

    target.querySelector(".try-again").addEventListener("click", start);
  }

  if (window.ScoreUtils) {
    window.ScoreUtils.requireStudentName(target, (name) => {
      studentName = name;
      start();
    });
  } else {
    start();
  }
}

const topicKey = document.body.dataset.topic;
if (topicKey && topics[topicKey]) {
  const topic = topics[topicKey];
  renderTopicInfo(topic);
  renderVocabulary(topic);
  renderQuiz(topic);
}
