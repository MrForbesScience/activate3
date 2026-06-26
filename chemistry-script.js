const BBC_LINK = "https://www.bbc.co.uk/bitesize/subjects/znxtyrd";

const topics = {
  particles: {
    title: "Particle Model and State Change",
    cognito: {
      label: "Open Cognito particles and matter lesson",
      url: "https://cognitoedu.org/coursesubtopic/c1-ks3-default_lmRgIWHZ",
      text: "Use this Cognito lesson to revise particles and matter after reading the organiser."
    },
    vocabulary: [
      ["Particle", "A tiny piece of matter."],
      ["Solid", "A state of matter with fixed shape and fixed volume."],
      ["Liquid", "A state of matter with fixed volume but no fixed shape."],
      ["Gas", "A state of matter with no fixed shape or volume."],
      ["Melting", "Changing from solid to liquid."],
      ["Freezing", "Changing from liquid to solid."],
      ["Evaporation", "Changing from liquid to gas at the surface."],
      ["Condensation", "Changing from gas to liquid."],
      ["Sublimation", "Changing from solid directly to gas."],
      ["Endothermic", "A change or reaction that takes in energy."]
    ],
    questions: [
      q("What are all substances made from?", ["Particles", "Only liquids", "Only gases", "Cells"], 0),
      q("How do particles in a solid behave?", ["Move freely", "Vibrate on the spot", "Have no attraction", "Disappear"], 1),
      q("Which state has no fixed shape but has a fixed volume?", ["Solid", "Gas", "Liquid", "Plasma"], 2),
      q("Which state has no fixed shape and no fixed volume?", ["Solid", "Liquid", "Crystal", "Gas"], 3),
      q("What is melting?", ["Solid to liquid", "Liquid to solid", "Gas to liquid", "Solid to gas"], 0),
      q("What is freezing?", ["Gas to solid", "Liquid to solid", "Solid to liquid", "Liquid to gas"], 1),
      q("What is evaporation?", ["Gas to liquid", "Liquid to solid", "Liquid to gas", "Solid to liquid"], 2),
      q("What is condensation?", ["Liquid to gas", "Solid to liquid", "Solid to gas", "Gas to liquid"], 3),
      q("What is sublimation?", ["Solid directly to gas", "Gas to liquid", "Liquid to solid", "Liquid to gas"], 0),
      q("What is deposition?", ["Liquid to gas", "Gas directly to solid", "Solid to liquid", "Liquid to solid"], 1),
      q("Which change needs energy to be added?", ["Freezing", "Condensation", "Melting", "Deposition"], 2),
      q("Which change usually releases energy?", ["Boiling", "Melting", "Sublimation", "Freezing"], 3),
      q("In a gas, particles are usually...", ["Far apart and moving freely", "Fixed in rows", "Touching and vibrating only", "Not moving"], 0),
      q("In a liquid, particles can...", ["Only vibrate in place", "Slide past each other", "Never attract", "Keep a fixed shape"], 1),
      q("Why can gases be compressed?", ["They have strong bonds", "They are made of cells", "There are spaces between particles", "They have fixed volume"], 2),
      q("Why does a solid keep its shape?", ["Particles are far apart", "Particles move freely", "Particles do not exist", "Particles are held in fixed positions"], 3),
      q("What happens to particles during heating?", ["They gain energy", "They become bigger atoms", "They stop moving", "They turn into cells"], 0),
      q("What is an exothermic change?", ["Takes in energy", "Releases energy", "Makes no energy transfer", "Only happens in gases"], 1),
      q("Which example can show sublimation?", ["Ice melting", "Steam condensing", "Dry ice forming gas", "Water freezing"], 2),
      q("Which is a limitation of the particle model?", ["It shows particles", "It explains states", "It can model changes", "It does not show particle size accurately"], 3),
      q("What does boiling do?", ["Changes liquid to gas", "Changes gas to solid", "Changes solid to liquid", "Changes gas to liquid"], 0),
      q("What happens to attractions during melting?", ["They get stronger", "Particles overcome some attractions", "They disappear from all matter", "They turn into mass"], 1),
      q("Which particles are closest together?", ["Gas particles", "Liquid particles only", "Solid particles", "All are equally far apart"], 2),
      q("What is meant by fixed volume?", ["The substance has no particles", "The substance has no mass", "The substance is always hot", "The substance keeps the same amount of space"], 3),
      q("Which state can flow and take the shape of its container?", ["Liquid", "Solid", "Crystal", "Powder only"], 0),
      q("Which state has particles arranged regularly in many diagrams?", ["Gas", "Solid", "Liquid", "Mixture"], 1),
      q("Which process changes gas to liquid?", ["Melting", "Boiling", "Condensation", "Sublimation"], 2),
      q("Which process changes liquid to solid?", ["Evaporation", "Condensation", "Boiling", "Freezing"], 3),
      q("When particles lose energy, they usually...", ["Move less", "Move faster", "Spread further apart always", "Become electrons"], 0),
      q("The particle model is useful because it...", ["Shows actual colours exactly", "Helps explain state changes", "Shows all forces perfectly", "Shows exact particle shapes"], 1)
    ]
  },
  atoms: {
    title: "Atoms and Periodic Table",
    cognito: {
      label: "Open Cognito periodic table lesson",
      url: "https://cognitoedu.org/coursesubtopic/c1-ks3-default_RKmiqHDW",
      text: "Use this Cognito lesson to revise atoms and the periodic table after reading the organiser."
    },
    vocabulary: [
      ["Atom", "The smallest part of an element that can exist."],
      ["Element", "A substance made of one type of atom only."],
      ["Compound", "Two or more elements chemically joined."],
      ["Mixture", "Two or more substances not chemically joined."],
      ["Proton", "A positive particle in the nucleus."],
      ["Neutron", "A neutral particle in the nucleus."],
      ["Electron", "A negative particle in shells."],
      ["Group", "A vertical column in the periodic table."],
      ["Period", "A horizontal row in the periodic table."],
      ["Bonding", "How atoms are joined or held together."]
    ],
    questions: [
      q("What is an atom?", ["The smallest part of an element that can exist", "A mixture of organs", "Only a metal", "A type of cell"], 0),
      q("What is an element?", ["Two substances mixed", "One type of atom only", "Two elements joined", "A compound dissolved"], 1),
      q("What is a compound?", ["One atom only", "Two mixtures", "Two or more elements chemically joined", "Only non-metals"], 2),
      q("What is a mixture?", ["One type of atom", "A pure element", "Atoms with no electrons", "Substances not chemically joined"], 3),
      q("Which particle is positive?", ["Proton", "Neutron", "Electron", "Molecule"], 0),
      q("Which particle has no charge?", ["Proton", "Neutron", "Electron", "Ion"], 1),
      q("Which particle is negative?", ["Proton", "Neutron", "Electron", "Nucleus"], 2),
      q("Where are protons and neutrons found?", ["In shells", "Outside the atom", "In bonds only", "In the nucleus"], 3),
      q("Where are electrons found?", ["In shells", "Only in the nucleus", "In the periodic table", "In compounds only"], 0),
      q("Atomic number is the number of...", ["Neutrons", "Protons", "Electrons plus neutrons", "Shells"], 1),
      q("Mass number is...", ["Protons only", "Neutrons only", "Protons plus neutrons", "Electrons only"], 2),
      q("What does a group show in the periodic table?", ["A horizontal row", "An atom diagram", "A chemical reaction", "A vertical column"], 3),
      q("What does a period show?", ["A horizontal row", "A vertical column", "A compound", "An isotope only"], 0),
      q("Which group contains alkali metals?", ["Group 0", "Group 1", "Group 7", "Group 2 only"], 1),
      q("Which group contains halogens?", ["Group 0", "Group 1", "Group 7", "Transition metals"], 2),
      q("Which group contains noble gases?", ["Group 1", "Group 2", "Group 7", "Group 0"], 3),
      q("What is a property of many metals?", ["Shiny", "Brittle and dull", "Poor conductor", "Not malleable"], 0),
      q("What is a property of many non-metals?", ["Good conductor", "Dull", "Malleable", "Ductile"], 1),
      q("What does ionic bonding involve?", ["Sharing electrons only", "No electron changes", "Transfer of electrons", "Only neutrons moving"], 2),
      q("What does covalent bonding involve?", ["Melting atoms", "Losing neutrons", "Making cells", "Sharing electrons"], 3),
      q("What is metallic bonding?", ["Positive metal ions in delocalised electrons", "Two gases mixed", "Neutrons shared", "Only molecules in water"], 0),
      q("Why do elements in the same group have similar properties?", ["They have the same mass number", "They have the same number of outer shell electrons", "They are all gases", "They are all compounds"], 1),
      q("What does a full outer shell usually mean?", ["Very reactive", "No protons", "Stable", "A mixture"], 2),
      q("What is the electronic structure of sodium, Na, shown as?", ["2,6", "2,7", "2,8", "2,8,1"], 3),
      q("Which is an element?", ["Copper", "Water", "Air", "Salt water"], 0),
      q("Which is a compound?", ["Oxygen", "Water", "Air", "Soil"], 1),
      q("Which is a mixture?", ["Hydrogen", "Carbon dioxide", "Air", "Copper"], 2),
      q("Which scientist arranged elements by atomic number?", ["Dalton", "Mendeleev", "Bohr", "Moseley"], 3),
      q("What did Mendeleev arrange elements by?", ["Relative atomic mass and similar properties", "Alphabetical order only", "Colour", "Number of neutrons only"], 0),
      q("What is an electron shell?", ["A container for protons", "An energy level around the nucleus", "A type of mixture", "A metal group"], 1)
    ]
  },
  changes: {
    title: "Chemical Changes",
    cognito: {
      label: "Open Cognito chemical changes lesson",
      url: "https://cognitoedu.org/coursesubtopic/c1-ks3-default_HrEBCoOH",
      text: "Use this Cognito lesson to revise chemical changes after reading the organiser."
    },
    vocabulary: [
      ["Chemical change", "A change where new substances are formed."],
      ["Physical change", "A change where no new substance is formed."],
      ["Reactant", "A substance at the start of a reaction."],
      ["Product", "A substance formed in a reaction."],
      ["Conservation of mass", "Mass is not created or destroyed in a chemical reaction."],
      ["Word equation", "A reaction written using words."],
      ["Symbol equation", "A reaction written using chemical symbols."],
      ["Balanced equation", "An equation with the same number of each atom on both sides."],
      ["Exothermic", "Releases heat to the surroundings."],
      ["Endothermic", "Takes in heat from the surroundings."]
    ],
    questions: [
      q("What is a chemical change?", ["A change where new substances form", "A change of shape only", "Melting only", "Dissolving only"], 0),
      q("What is a physical change?", ["A new substance forms", "No new substance forms", "Gas is always produced", "Colour always changes"], 1),
      q("Which is evidence for a chemical reaction?", ["Only change of state", "Only crushing", "Gas produced", "Cutting paper"], 2),
      q("Which is usually a physical change?", ["Burning", "Rusting", "Cooking", "Melting"], 3),
      q("What is a reactant?", ["A starting substance", "A new product", "A type of balance", "Heat released"], 0),
      q("What is a product?", ["A starting substance", "A new substance formed", "An unchanged beaker", "A state change"], 1),
      q("What does conservation of mass mean?", ["Mass is created", "Mass disappears", "Mass is not created or destroyed", "Products always weigh less"], 2),
      q("In a closed reaction, total mass of reactants equals...", ["Zero", "Only gas mass", "The mass of the largest product", "Total mass of products"], 3),
      q("Which is a word equation?", ["Magnesium + oxygen -> magnesium oxide", "2Mg + O2 -> 2MgO", "MgO only", "A graph"], 0),
      q("Which is a symbol equation?", ["Magnesium plus oxygen", "2Mg + O2 -> 2MgO", "Reactants -> products", "Heat -> mass"], 1),
      q("What must be true in a balanced equation?", ["Different atoms on each side", "No products", "Same number of each atom on both sides", "No reactants"], 2),
      q("What is an exothermic reaction?", ["Takes in heat", "No energy transfer", "Only happens in solids", "Releases heat"], 3),
      q("What is an endothermic reaction?", ["Takes in heat", "Always explodes", "Always makes oxygen", "Releases heat"], 0),
      q("What might show an exothermic reaction?", ["Temperature decreases", "Temperature increases", "Mass disappears", "No change"], 1),
      q("What might show an endothermic reaction?", ["Temperature increases", "A flame always appears", "Temperature decreases", "Atoms vanish"], 2),
      q("Which is a sign of chemical change?", ["Changing container shape", "Freezing water", "Cutting a wire", "Precipitate formed"], 3),
      q("Which is not usually a sign of chemical reaction?", ["Change of state alone", "Gas produced", "Colour change", "Energy change"], 0),
      q("In magnesium + oxygen -> magnesium oxide, magnesium is...", ["A product", "A reactant", "A catalyst", "A precipitate"], 1),
      q("In magnesium + oxygen -> magnesium oxide, magnesium oxide is...", ["A reactant", "An element", "A product", "A mixture"], 2),
      q("What does a reaction profile diagram show?", ["Mass only", "Colour only", "Particle size only", "Energy change during a reaction"], 3),
      q("Which process forms a new substance?", ["Chemical change", "Physical change", "Melting ice", "Boiling water"], 0),
      q("Which process does not form a new substance?", ["Combustion", "Dissolving", "Rusting", "Neutralisation"], 1),
      q("Why can mass seem to decrease in an open reaction?", ["Atoms are destroyed", "Products vanish", "Gas escapes", "The balance is always wrong"], 2),
      q("Why can mass seem to increase in an open reaction?", ["Atoms appear from nowhere", "Water disappears", "Heat has mass", "A gas from air reacts"], 3),
      q("What does the arrow in a word equation mean?", ["Produces", "Is colder than", "Is heavier than", "Stops"], 0),
      q("What are products written on in a word equation?", ["Left side", "Right side", "Below the arrow", "Above the title"], 1),
      q("What are reactants written on in a word equation?", ["Right side", "Below the arrow", "Left side", "Nowhere"], 2),
      q("Which term means a substance changes but no new substance forms?", ["Reactant", "Product", "Chemical", "Physical"], 3),
      q("Which is a chemical change?", ["Burning fuel", "Melting chocolate", "Evaporating water", "Breaking glass"], 0),
      q("Which practical tool measures mass?", ["Thermometer", "Balance", "Ruler", "Stopwatch only"], 1)
    ]
  },
  reactions: {
    title: "Chemical Reactions",
    cognito: {
      label: "Open Cognito chemical reactions lesson",
      url: "https://cognitoedu.org/coursesubtopic/c1-ks3-default_nQfZXJZR",
      text: "Use this Cognito lesson to revise chemical reactions after reading the organiser."
    },
    vocabulary: [
      ["Reactivity series", "A list of metals from most reactive to least reactive."],
      ["Displacement", "A more reactive metal takes the place of a less reactive metal."],
      ["Catalyst", "Speeds up a reaction without being used up."],
      ["Extracting metals", "Removing metals from their compounds."],
      ["Relative atomic mass", "The weighted mean mass of an atom compared with carbon-12."],
      ["Relative formula mass", "The total of Ar values in a formula."],
      ["Yield", "The amount of product obtained."],
      ["Theoretical yield", "The maximum possible amount of product."],
      ["Actual yield", "The amount of product actually obtained."],
      ["Percentage yield", "Actual yield divided by theoretical yield times 100."]
    ],
    questions: [
      q("What does the reactivity series list?", ["Metals from most to least reactive", "States of matter", "Biological cells", "Only gases"], 0),
      q("Which metal is more reactive than copper?", ["Silver", "Zinc", "Gold", "Platinum"], 1),
      q("In a displacement reaction, a more reactive metal...", ["Does nothing", "Becomes a gas", "Takes the place of a less reactive metal", "Loses all mass"], 2),
      q("Which metal is often extracted by electrolysis because it is very reactive?", ["Copper", "Silver", "Gold", "Aluminium"], 3),
      q("What is a catalyst?", ["A substance that speeds up a reaction", "A product only", "A metal ore", "A type of particle"], 0),
      q("What happens to a catalyst during a reaction?", ["It is all used up", "It is not used up", "It becomes a metal", "It changes group"], 1),
      q("What does a catalyst do to activation energy?", ["Increases it", "Removes all energy", "Lowers it", "Turns it into mass"], 2),
      q("Which word means getting a metal from its compound?", ["Bonding", "Melting", "Filtering", "Extraction"], 3),
      q("Which metal is more reactive than iron?", ["Magnesium", "Copper", "Silver", "Gold"], 0),
      q("Which metal is less reactive than zinc?", ["Magnesium", "Copper", "Calcium", "Sodium"], 1),
      q("In Zn + CuSO4 -> ZnSO4 + Cu, zinc...", ["Is displaced by copper", "Does not react", "Displaces copper", "Is a catalyst"], 2),
      q("In a displacement reaction, the less reactive metal is...", ["Destroyed", "Always a gas", "Always the catalyst", "Displaced from its compound"], 3),
      q("What is relative atomic mass often shortened to?", ["Ar", "Mr", "pH", "Na"], 0),
      q("What is relative formula mass often shortened to?", ["Ar", "Mr", "O2", "Cu"], 1),
      q("What is Mr of H2O if Ar values are H = 1 and O = 16?", ["17", "19", "18", "16"], 2),
      q("What is Mr of CO2 if C = 12 and O = 16?", ["28", "32", "40", "44"], 3),
      q("What is percentage yield?", ["Actual yield / theoretical yield x 100", "Theoretical / actual x 10", "Mass number + atomic number", "Reactants + products"], 0),
      q("If actual yield is 8 g and theoretical yield is 10 g, percentage yield is...", ["60%", "80%", "100%", "125%"], 1),
      q("What is theoretical yield?", ["The product actually obtained", "The mass of catalyst", "Maximum possible product", "The metal ore"], 2),
      q("What is actual yield?", ["Maximum possible product", "Atomic mass", "A graph line", "Amount actually obtained"], 3),
      q("Which is the most reactive in this list?", ["Potassium", "Copper", "Silver", "Gold"], 0),
      q("Which is the least reactive in this list?", ["Potassium", "Gold", "Calcium", "Magnesium"], 1),
      q("What can electrolysis use to extract metals?", ["Heat only", "A sieve", "Electricity", "Paper"], 2),
      q("Why can carbon extract some metals?", ["Carbon is always unreactive", "Carbon is a noble gas", "Carbon is a catalyst only", "Carbon can remove oxygen from some metal oxides"], 3),
      q("What does a reaction profile with a lower peak show?", ["A catalyst has lowered activation energy", "No reaction happened", "Mass was destroyed", "Atoms disappeared"], 0),
      q("Which statement about catalysts is correct?", ["They slow every reaction", "They provide an alternative route", "They become products", "They remove reactants"], 1),
      q("What does displacement show about metals?", ["Their colour only", "Their state only", "Their relative reactivity", "Their exact mass"], 2),
      q("What is a metal ore?", ["A finished pure metal only", "A catalyst", "A gas in air", "A rock containing a metal compound"], 3),
      q("Which metal is below hydrogen in many reactivity series?", ["Copper", "Potassium", "Sodium", "Calcium"], 0),
      q("Why is percentage yield often less than 100%?", ["Products are always theoretical", "Product can be lost during the practical", "Atoms are destroyed", "Reactants have no mass"], 1)
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
