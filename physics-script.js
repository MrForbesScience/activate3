const BBC_LINK = "https://www.bbc.co.uk/bitesize/subjects/zh2xsbk";

const topics = {
  forces: {
    title: "Forces and Motion",
    cognito: {
      label: "Open Cognito forces and motion lesson",
      url: "https://cognitoedu.org/coursesubtopic/p1-ks3-default_urCMRZeE",
      text: "Use this Cognito lesson to revise forces and motion after reading the organiser."
    },
    vocabulary: [
      ["Force", "A push or pull that can change motion or shape."],
      ["Contact force", "A force that needs physical contact."],
      ["Non-contact force", "A force that acts at a distance."],
      ["Mass", "The amount of matter in an object, measured in kg."],
      ["Weight", "The force of gravity on an object, measured in N."],
      ["Resultant force", "The overall force after forces are combined."],
      ["Balanced forces", "Forces that result in no change in motion."],
      ["Speed", "Distance travelled per unit time."],
      ["Acceleration", "Change in speed per unit time."],
      ["Gravitational field strength", "Force per kilogram in a gravitational field."]
    ],
    questions: [
      q("What is a force?", ["A push or pull", "A store of energy", "A type of wave", "A unit of mass"], 0),
      q("Which is a contact force?", ["Gravity", "Friction", "Magnetism", "Electrostatic force"], 1),
      q("Which is a non-contact force?", ["Friction", "Air resistance", "Magnetic force", "Normal contact force"], 2),
      q("What unit is force measured in?", ["Kilogram", "Metre", "Second", "Newton"], 3),
      q("What is mass?", ["Amount of matter", "Force of gravity", "Distance per time", "Change in speed"], 0),
      q("What is weight?", ["Amount of matter", "Force due to gravity", "Speed of an object", "Distance travelled"], 1),
      q("What is the equation for weight?", ["W = m + g", "W = m / g", "W = m x g", "W = g / m"], 2),
      q("If mass is 2 kg and g is 9.8 N/kg, weight is...", ["4.9 N", "11.8 N", "7.8 N", "19.6 N"], 3),
      q("What do balanced forces cause?", ["No change in motion", "Always acceleration", "Mass to disappear", "A change of state"], 0),
      q("What do unbalanced forces cause?", ["No movement ever", "A change in speed or direction", "No resultant force", "A wave"], 1),
      q("What is resultant force?", ["Only gravity", "Only friction", "The single overall force", "Mass divided by time"], 2),
      q("Two forces of 100 N act in opposite directions. Resultant force is...", ["200 N", "100 N", "50 N", "0 N"], 3),
      q("A 50 N force right and 30 N force left give a resultant of...", ["20 N right", "80 N left", "30 N right", "50 N left"], 0),
      q("What is speed?", ["Time divided by distance", "Distance divided by time", "Mass times gravity", "Force divided by area"], 1),
      q("Which is the speed equation?", ["v = t / s", "v = s + t", "v = s / t", "v = s x t"], 2),
      q("A car travels 100 m in 5 s. Its speed is...", ["5 m/s", "10 m/s", "15 m/s", "20 m/s"], 3),
      q("What does a steeper distance-time graph mean?", ["Higher speed", "Lower mass", "No movement", "Lower force"], 0),
      q("What does a horizontal distance-time graph show?", ["Acceleration", "Stationary", "Changing direction always", "Increasing mass"], 1),
      q("What does a curved distance-time graph show?", ["Constant speed", "Stationary", "Changing speed", "No distance"], 2),
      q("Acceleration means...", ["Change in mass", "Change in distance only", "Change in weight", "Change in speed per time"], 3),
      q("Which equation gives acceleration?", ["a = change in speed / time", "a = speed x distance", "a = mass x g", "a = force + time"], 0),
      q("A speed-time graph sloping upwards shows...", ["Deceleration", "Acceleration", "Constant speed", "Stationary"], 1),
      q("A horizontal speed-time graph shows...", ["No speed", "Increasing speed", "Constant speed", "Mass increasing"], 2),
      q("A speed-time graph sloping downwards shows...", ["Acceleration", "Constant speed", "Stationary", "Deceleration"], 3),
      q("Which force opposes motion through air?", ["Air resistance", "Weight", "Magnetism", "Electrostatic force"], 0),
      q("Which force pulls objects towards Earth?", ["Friction", "Gravity", "Upthrust", "Normal contact force"], 1),
      q("Which is an example of magnetic force?", ["Book on table", "Rubbing hands", "Magnet attracting a paperclip", "Water boiling"], 2),
      q("What is field strength measured in?", ["m/s", "kg", "J", "N/kg"], 3),
      q("If forces act in the same direction, you usually...", ["Add them", "Subtract both from mass", "Ignore them", "Divide by time"], 0),
      q("If forces act in opposite directions, you usually...", ["Add only", "Subtract smaller from larger", "Multiply both", "Divide by mass"], 1)
    ]
  },
  energy: {
    title: "Energy",
    cognito: {
      label: "Open Cognito energy lesson",
      url: "https://cognitoedu.org/coursesubtopic/p1-ks3-default_EpxonVGS",
      text: "Use this Cognito lesson to revise energy after reading the organiser."
    },
    vocabulary: [
      ["Energy store", "A way energy is stored in an object or system."],
      ["Kinetic store", "Energy store of a moving object."],
      ["Gravitational potential store", "Energy store of an object raised up."],
      ["Elastic potential store", "Energy store of a stretched or compressed object."],
      ["Thermal store", "Energy store related to temperature."],
      ["Dissipation", "Energy spreading out to less useful stores."],
      ["Work done", "Energy transferred by a force moving an object."],
      ["Power", "Rate of energy transfer."],
      ["Efficiency", "Useful output energy divided by input energy."],
      ["Renewable", "An energy resource that will not run out quickly."]
    ],
    questions: [
      q("Which energy store does a moving object have?", ["Kinetic", "Nuclear", "Chemical only", "Elastic only"], 0),
      q("Which store does food have?", ["Kinetic", "Chemical", "Gravitational", "Magnetic"], 1),
      q("Which store increases when an object is lifted?", ["Thermal", "Elastic", "Gravitational potential", "Chemical"], 2),
      q("Which store is in a stretched spring?", ["Kinetic", "Nuclear", "Chemical", "Elastic potential"], 3),
      q("Energy can be transferred by heating and...", ["Mechanical work", "Mass only", "Colour only", "Shape only"], 0),
      q("Which is an energy transfer pathway?", ["Weight", "Electrical work", "Distance", "Density"], 1),
      q("What happens to energy in real transfers?", ["It is destroyed", "It is created", "Some is dissipated", "It becomes mass"], 2),
      q("Dissipated energy is usually transferred to...", ["Nothing", "Useful output only", "Nuclear store only", "Thermal energy of surroundings"], 3),
      q("What does conservation of energy mean?", ["Energy cannot be created or destroyed", "Energy always disappears", "Energy is only kinetic", "Energy has no units"], 0),
      q("Which is renewable?", ["Coal", "Wind", "Oil", "Gas"], 1),
      q("Which is non-renewable?", ["Solar", "Wind", "Coal", "Hydro"], 2),
      q("Which fuel is nuclear?", ["Coal", "Oil", "Biomass", "Uranium"], 3),
      q("Which resource uses moving air?", ["Wind", "Geothermal", "Nuclear", "Fossil fuels"], 0),
      q("Which resource uses sunlight?", ["Hydro", "Solar", "Wave", "Coal"], 1),
      q("What is work done?", ["Energy stored in food", "Power divided by time", "Energy transferred when a force moves an object", "Temperature rise only"], 2),
      q("Which equation is work done?", ["W = P / t", "W = m x g", "W = v x f", "W = force x distance"], 3),
      q("What unit is work done measured in?", ["Joule", "Newton", "Watt", "Volt"], 0),
      q("Power is...", ["Energy stored", "Work done divided by time", "Mass times gravity", "Force per area"], 1),
      q("What unit is power measured in?", ["Joule", "Newton", "Watt", "Metre"], 2),
      q("Which equation gives power?", ["P = W x t", "P = t / W", "P = F x d", "P = W / t"], 3),
      q("Efficiency is useful output divided by...", ["Input energy", "Wasted energy", "Power", "Mass"], 0),
      q("Efficiency is often multiplied by...", ["10", "100", "1000", "0"], 1),
      q("Why is efficiency always less than 100% in real systems?", ["Energy is created", "There is no input", "Some energy is wasted", "Output is always zero"], 2),
      q("Which store does a hot object have more of?", ["Elastic", "Nuclear", "Magnetic", "Thermal"], 3),
      q("Which store is in atomic nuclei?", ["Nuclear", "Chemical", "Kinetic", "Elastic"], 0),
      q("A falling ball transfers energy from gravitational potential to...", ["Chemical", "Kinetic", "Nuclear", "Elastic"], 1),
      q("A battery mainly stores energy in which store?", ["Kinetic", "Thermal", "Chemical", "Gravitational"], 2),
      q("Hooke's law links force and...", ["Mass", "Time", "Temperature", "Extension"], 3),
      q("What is the equation for Hooke's law?", ["F = k x e", "P = W / t", "W = m x g", "v = s / t"], 0),
      q("Which resource will run out?", ["Solar", "Oil", "Wind", "Wave"], 1)
    ]
  },
  waves: {
    title: "Waves, Sound and Light",
    cognito: {
      label: "Open Cognito waves lesson",
      url: "https://cognitoedu.org/coursesubtopic/p1-ks3-default_zyIYsPCl",
      text: "Use this Cognito lesson to revise waves, sound and light after reading the organiser."
    },
    vocabulary: [
      ["Amplitude", "Maximum displacement from the rest position."],
      ["Wavelength", "Distance between matching points on a wave."],
      ["Frequency", "Number of waves passing a point each second."],
      ["Period", "Time for one wave."],
      ["Wave speed", "Speed at which a wave travels."],
      ["Reflection", "A wave bouncing off a surface."],
      ["Refraction", "A wave changing direction when entering a new medium."],
      ["Longitudinal wave", "Vibrations are parallel to direction of travel."],
      ["Electromagnetic wave", "A wave that can travel through a vacuum."],
      ["Spectrum", "A range of waves or colours."]
    ],
    questions: [
      q("What is amplitude?", ["Maximum displacement from rest", "Distance per time", "Number of waves per second", "A type of mirror"], 0),
      q("What is wavelength?", ["Wave height", "Distance between matching points", "Time for one wave", "Sound loudness only"], 1),
      q("What is frequency?", ["Wave length", "Wave height", "Number of waves per second", "Distance travelled"], 2),
      q("What is period?", ["Number of waves per second", "Wave height", "Light speed", "Time for one wave"], 3),
      q("What is the wave speed equation?", ["v = f x wavelength", "v = f / wavelength", "v = wavelength / f", "v = m x g"], 0),
      q("Sound is a...", ["Transverse wave only", "Longitudinal wave", "Gamma ray", "Vacuum wave"], 1),
      q("Sound needs...", ["No medium", "Only a vacuum", "A medium to travel", "Only light"], 2),
      q("Sound cannot travel through...", ["Water", "Air", "Solids", "A vacuum"], 3),
      q("Reflection is when a wave...", ["Bounces off a surface", "Is absorbed only", "Disappears", "Turns into mass"], 0),
      q("The angle of incidence equals...", ["The wavelength", "The angle of reflection", "The frequency", "The amplitude"], 1),
      q("Refraction happens when a wave...", ["Stops moving", "Reflects only", "Changes direction entering a new medium", "Becomes sound"], 2),
      q("Which object uses reflection?", ["A battery", "A spring", "A resistor", "A mirror"], 3),
      q("Which object uses refraction?", ["Lens", "Magnet", "Battery", "Switch"], 0),
      q("White light is made of...", ["Only red", "A range of colours", "Only blue", "Only green"], 1),
      q("Which colours are primary colours of light?", ["Red, yellow, blue", "Black, white, grey", "Red, green, blue", "Orange, green, purple"], 2),
      q("Objects appear coloured because they...", ["Make gravity", "Have mass only", "Make sound", "Reflect some colours and absorb others"], 3),
      q("Electromagnetic waves travel at...", ["The speed of light", "The speed of sound", "Different speed in a vacuum for every wave", "0 m/s"], 0),
      q("Which has the longest wavelength?", ["Gamma rays", "Radio waves", "X-rays", "Ultraviolet"], 1),
      q("Which has the shortest wavelength?", ["Radio waves", "Microwaves", "Gamma rays", "Infrared"], 2),
      q("Which EM wave is used for cooking?", ["Visible light", "Radio", "Gamma", "Microwaves"], 3),
      q("Which EM wave is used in remote controls?", ["Infrared", "X-rays", "Gamma rays", "Radio only"], 0),
      q("Which EM wave is used for medical imaging of bones?", ["Microwaves", "X-rays", "Radio", "Visible"], 1),
      q("Which EM wave can cause sunburn?", ["Radio", "Microwave", "Ultraviolet", "Infrared"], 2),
      q("Which EM wave can treat cancer?", ["Radio", "Infrared", "Visible", "Gamma rays"], 3),
      q("What does a larger amplitude usually mean for sound?", ["Louder sound", "Lower speed", "No medium", "Shorter period only"], 0),
      q("What does higher frequency usually mean for sound?", ["Quieter sound", "Higher pitch", "Lower speed", "More mass"], 1),
      q("In a transverse wave, vibrations are...", ["Parallel to travel", "No vibrations", "At right angles to travel", "Always circular"], 2),
      q("Which is an application of ultrasound?", ["Cooking food", "Radio broadcast", "Electric circuits", "Medical scanning"], 3),
      q("What is normal line in ray diagrams?", ["A line at 90 degrees to the surface", "The wave itself", "The reflected ray only", "The source of light"], 0),
      q("Which wave behaviour lets lenses focus light?", ["Absorption only", "Refraction", "Diffusion", "Magnetism"], 1)
    ]
  },
  electricity: {
    title: "Electricity and Magnetism",
    cognito: {
      label: "Open Cognito electricity lesson",
      url: "https://cognitoedu.org/coursesubtopic/p1-ks3-default_OohnAJcf",
      text: "Use this Cognito lesson to revise electricity and magnetism after reading the organiser."
    },
    vocabulary: [
      ["Charge", "A property of matter measured in coulombs."],
      ["Current", "Rate of flow of charge."],
      ["Potential difference", "Energy transferred per coulomb of charge."],
      ["Resistance", "Opposition to current."],
      ["Series circuit", "Circuit with one loop for current."],
      ["Parallel circuit", "Circuit with more than one branch."],
      ["Magnetic field", "Region where magnetic materials feel a force."],
      ["Electromagnet", "Magnet made using current in a coil."],
      ["Induction", "Producing a potential difference with changing magnetic field."],
      ["Transformer", "Device that changes AC voltage."]
    ],
    questions: [
      q("What is current?", ["Rate of flow of charge", "Energy per second", "Force per mass", "A magnetic pole"], 0),
      q("What unit is current measured in?", ["Volt", "Ampere", "Ohm", "Coulomb"], 1),
      q("What is potential difference measured in?", ["Ampere", "Ohm", "Volt", "Tesla"], 2),
      q("What is resistance measured in?", ["Volt", "Ampere", "Coulomb", "Ohm"], 3),
      q("What is charge measured in?", ["Coulomb", "Watt", "Newton", "Metre"], 0),
      q("Ohm's law is...", ["Q = I x t", "V = I x R", "P = V x I", "E = P x t"], 1),
      q("Which equation links charge, current and time?", ["V = I x R", "P = V x I", "Q = I x t", "F = k x e"], 2),
      q("Which equation links power, voltage and current?", ["E = P x t", "V = I x R", "Q = I x t", "P = V x I"], 3),
      q("In a series circuit, current is...", ["The same everywhere", "Split between branches", "Zero everywhere", "Only in the battery"], 0),
      q("In a parallel circuit, potential difference is...", ["Always zero", "The same across branches", "Only in one branch", "Not measurable"], 1),
      q("In series, total resistance is found by...", ["Dividing all resistors", "Ignoring resistors", "Adding resistances", "Subtracting from voltage"], 2),
      q("Like electric charges...", ["Attract", "Do nothing", "Become neutral instantly", "Repel"], 3),
      q("Opposite electric charges...", ["Attract", "Repel", "Disappear", "Become magnets"], 0),
      q("Static electricity can be made by...", ["Cooling only", "Friction", "Boiling water", "Using a compass"], 1),
      q("Charge is conserved means charge is...", ["Destroyed", "Created", "Not created or destroyed", "Only positive"], 2),
      q("A magnet has...", ["Only a north pole", "Only a south pole", "No poles", "North and south poles"], 3),
      q("Like magnetic poles...", ["Repel", "Attract", "Disappear", "Make current"], 0),
      q("Unlike magnetic poles...", ["Repel", "Attract", "Have no force", "Become electric charges"], 1),
      q("Magnetic field lines go from...", ["South to north outside the magnet", "Centre to edge", "North to south outside the magnet", "Left to right only"], 2),
      q("A current in a coil creates...", ["No field", "Only gravity", "Only heat", "A magnetic field"], 3),
      q("How can an electromagnet be made stronger?", ["Add more turns to the coil", "Remove the core", "Lower current", "Use plastic instead of iron"], 0),
      q("Another way to strengthen an electromagnet is to...", ["Use less current", "Increase current", "Cut the coil", "Remove all wire"], 1),
      q("What is electromagnetic induction?", ["Static charge building", "Current stopping", "Changing magnetic field inducing p.d.", "Melting a magnet"], 2),
      q("What do generators use?", ["Only static electricity", "Only chemical energy", "Only lenses", "Electromagnetic induction"], 3),
      q("What is AC?", ["Current that changes direction", "Current in one direction", "No current", "A type of resistor only"], 0),
      q("Transformers change...", ["Charge into mass", "AC voltage", "DC into gravity", "Resistance into light"], 1),
      q("The National Grid uses high voltage to...", ["Make homes unsafe", "Stop current completely", "Improve efficient transmission", "Remove energy"], 2),
      q("Which unit measures magnetic field?", ["Coulomb", "Ohm", "Joule", "Tesla"], 3),
      q("Which unit measures potential difference?", ["Volt", "Ampere", "Ohm", "Coulomb"], 0),
      q("Which component provides energy to charges in a circuit?", ["Resistor", "Cell", "Switch only", "Ammeter"], 1)
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
