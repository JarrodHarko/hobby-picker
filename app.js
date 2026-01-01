// ===== Expanded Hobby Picker Framework (v2) + Browse Tab =====

const questions = [
  {
    section: "Lifestyle & Constraints",
    question: "Where will this hobby usually happen?",
    help: "Pick the setting you imagine most often.",
    layout: "two",
    answers: [
      { text: "Indoors", desc: "Home, studio, gym, indoor spaces", tags: { indoor: 2 } },
      { text: "Outdoors", desc: "Outside, fresh air, weather permitting", tags: { outdoor: 2 } },
      { text: "Both", desc: "Flexible / mix of environments", tags: { indoor: 1, outdoor: 1 } },
    ],
  },
  {
    section: "Lifestyle & Constraints",
    question: "Does weather dependence bother you?",
    help: "How important is consistency?",
    layout: "two",
    answers: [
      { text: "Yes — I want consistency", desc: "Prefer reliable indoor-ish hobbies", tags: { weatherSensitive: 2 } },
      { text: "No — I like adapting", desc: "Happy with outdoor variability", tags: { weatherOK: 2 } },
      { text: "Doesn’t matter", desc: "I’ll work with whatever", tags: { weatherOK: 1, weatherSensitive: 1 } },
    ],
  },
  {
    section: "Lifestyle & Constraints",
    question: "How often do you realistically want to do it?",
    help: "Choose the pace that suits your life right now.",
    layout: "two",
    answers: [
      { text: "Daily / quick sessions", desc: "10–30 mins, little friction", tags: { frequent: 2, lowFriction: 1 } },
      { text: "Weekly blocks", desc: "A few hours once or twice a week", tags: { weekly: 2 } },
      { text: "Occasional deep sessions", desc: "Project marathons", tags: { deepSessions: 2 } },
    ],
  },
  {
    section: "Energy & Effort",
    question: "How should this hobby feel after doing it?",
    help: "What kind of reward are you chasing?",
    layout: "two",
    answers: [
      { text: "Relaxed / grounded", desc: "Calm, soothing, restorative", tags: { calm: 2 } },
      { text: "Mentally stimulated", desc: "Focused, curious, brainy", tags: { mental: 2 } },
      { text: "Physically exhausted", desc: "Sweaty, worked, strong", tags: { physical: 2 } },
      { text: "Proud / accomplished", desc: "A finished thing or clear progress", tags: { accomplishment: 2 } },
    ],
  },
  {
    section: "Energy & Effort",
    question: "What level of friction is acceptable?",
    help: "How much setup are you willing to tolerate?",
    layout: "two",
    answers: [
      { text: "Start immediately", desc: "Low friction, minimal setup", tags: { lowFriction: 2 } },
      { text: "Some setup is fine", desc: "I can tolerate a few steps", tags: { mediumFriction: 2 } },
      { text: "I enjoy setup & prep", desc: "Gear, process, rituals", tags: { highFriction: 2, gear: 1 } },
    ],
  },
  {
    section: "Output & Motivation",
    question: "Is producing a tangible result important?",
    help: "Do you want something to show at the end?",
    layout: "two",
    answers: [
      { text: "Yes, I want something to show", desc: "A track, a photo, a thing, a result", tags: { tangible: 2 } },
      { text: "Sometimes", desc: "Not always, but it’s nice", tags: { tangible: 1 } },
      { text: "Not really", desc: "I’m in it for the experience", tags: { experiential: 2 } },
    ],
  },
  {
    section: "Output & Motivation",
    question: "Which motivates you more?",
    help: "This helps pick the vibe of hobby.",
    layout: "two",
    answers: [
      { text: "Self-expression", desc: "Make something that feels like ‘me’", tags: { creative: 2 } },
      { text: "Skill mastery", desc: "Practice, improve, get good", tags: { mastery: 2 } },
      { text: "Competition / challenge", desc: "Goals, difficulty, wins", tags: { competitive: 2 } },
      { text: "Exploration / novelty", desc: "Try new things, discover", tags: { exploratory: 2 } },
    ],
  },
  {
    section: "Social Dimension",
    question: "Ideal social mode:",
    help: "How social should it be, ideally?",
    layout: "two",
    answers: [
      { text: "Fully solo", desc: "Just me and the hobby", tags: { solo: 2 } },
      { text: "Solo, but share results", desc: "Mostly alone, share outcomes", tags: { solo: 1, share: 2 } },
      { text: "Small groups", desc: "A couple of friends / club vibe", tags: { socialSmall: 2 } },
      { text: "Large community", desc: "Public / meet lots of people", tags: { socialLarge: 2 } },
    ],
  },
  {
    section: "Social Dimension",
    question: "How do you feel about learning from others?",
    help: "This can push toward classes/coaching vs self-paced hobbies.",
    layout: "two",
    answers: [
      { text: "Prefer self-teaching", desc: "Tutorials, trial & error", tags: { selfTeach: 2 } },
      { text: "Classes/tutorials are good", desc: "Structured learning is nice", tags: { classFriendly: 2 } },
      { text: "Mentor/coach preferred", desc: "I like guidance & feedback", tags: { coach: 2 } },
    ],
  },
  {
    section: "Practicalities",
    question: "Budget comfort (initial):",
    help: "Roughly what feels reasonable to start?",
    layout: "two",
    answers: [
      { text: "$0–50", desc: "Minimal spend", tags: { budgetLow: 2 } },
      { text: "$50–200", desc: "Some spend is okay", tags: { budgetMid: 2 } },
      { text: "$200–500", desc: "I’ll invest if I like it", tags: { budgetHigh: 2 } },
      { text: "$500+ if compelling", desc: "Happy to go big", tags: { budgetVeryHigh: 2 } },
    ],
  },
  {
    section: "Practicalities",
    question: "Space requirements:",
    help: "What kind of space can you realistically use?",
    layout: "two",
    answers: [
      { text: "Desk-sized", desc: "Laptop / small tools", tags: { spaceSmall: 2 } },
      { text: "Room-sized", desc: "Dedicated corner / gear", tags: { spaceMedium: 2 } },
      { text: "Needs external space", desc: "Parks, roads, mountains, workshops", tags: { spaceLarge: 2 } },
    ],
  },
];

// Hobby definitions
const hobbies = [
  {
    id: "music_production",
    name: "🎧 Music Production",
    meta: "Indoors • Creative + technical • Mostly solo • Deep skill ceiling",
    why: "If you like building something from nothing, getting into flow, and tinkering with sound—this is a rabbit hole in the best way.",
    weights: { indoor: 2, creative: 3, mental: 2, mastery: 2, solo: 2, gear: 1, tangible: 2, deepSessions: 2, spaceSmall: 2, selfTeach: 1, classFriendly: 1, budgetMid: 1, budgetHigh: 1 }
  },
  {
    id: "sound_design",
    name: "🌀 Sound Design (Synths / FX)",
    meta: "Indoors • Exploratory • Tinker-friendly • Solo-friendly",
    why: "More experimental than music production: design weird textures, effects, and synth patches. Great if you like discovery and tinkering.",
    weights: { indoor: 2, exploratory: 3, mental: 2, solo: 2, gear: 2, tangible: 1, deepSessions: 2, spaceSmall: 2, selfTeach: 2, budgetLow: 1, budgetMid: 2 }
  },
  {
    id: "photography",
    name: "📸 Photography",
    meta: "Outdoors/Indoors • Creative + technical • Shareable results",
    why: "Fun immediately, endless depth. Go casual (phone) or obsessive (lenses).",
    weights: { outdoor: 2, indoor: 1, creative: 2, mental: 1, mastery: 2, share: 2, solo: 1, tangible: 2, exploratory: 2, weatherOK: 1, budgetLow: 1, budgetMid: 2, budgetHigh: 2 }
  },
  {
    id: "video_editing",
    name: "🎬 Video Editing / Short Films",
    meta: "Indoors • Creative • Project-based • Shareable",
    why: "Storytelling + polishing. Huge satisfaction when you finish a piece.",
    weights: { indoor: 2, creative: 3, tangible: 2, deepSessions: 2, mental: 2, share: 2, solo: 1, mastery: 2, spaceSmall: 2, mediumFriction: 1, highFriction: 1, budgetLow: 1, budgetMid: 2 }
  },
  {
    id: "drawing",
    name: "✏️ Drawing / Illustration",
    meta: "Indoors • Low cost • Skill progression • Calm",
    why: "One of the best ‘start today’ hobbies. Small daily practice leads to visible improvement fast.",
    weights: { indoor: 2, creative: 3, calm: 2, mastery: 2, frequent: 2, lowFriction: 2, solo: 2, tangible: 2, spaceSmall: 2, budgetLow: 2, selfTeach: 2 }
  },
  {
    id: "woodworking",
    name: "🪵 Woodworking (Small Projects)",
    meta: "Hands-on • Tangible output • Proud/accomplished",
    why: "If you want to *make real things* and feel that ‘I built this’ pride, woodworking is unbeatable.",
    weights: { tangible: 3, accomplishment: 3, mastery: 2, mediumFriction: 2, highFriction: 1, spaceMedium: 2, budgetMid: 2, budgetHigh: 2, solo: 1, classFriendly: 1 }
  },
  {
    id: "3d_printing",
    name: "🧩 3D Printing & Design",
    meta: "Technical + creative • Tinker-friendly • Tangible output",
    why: "Design something, print it, refine it. Great if you like iterating and problem-solving.",
    weights: { indoor: 2, mental: 2, mastery: 2, tangible: 3, mediumFriction: 2, gear: 2, spaceSmall: 1, spaceMedium: 2, budgetHigh: 2, budgetMid: 1, selfTeach: 2 }
  },
  {
    id: "chess",
    name: "♟️ Chess / Strategy Games",
    meta: "Mentally stimulating • Low cost • Solo or competitive",
    why: "Infinite depth, easy to start, hard to master. Great for daily sessions.",
    weights: { indoor: 2, mental: 3, mastery: 3, competitive: 2, frequent: 2, lowFriction: 2, solo: 2, budgetLow: 2, spaceSmall: 2 }
  },
  {
    id: "language",
    name: "🗣️ Language Learning",
    meta: "Daily micro-sessions • Mental • Travel / social payoff",
    why: "A great ‘small daily’ hobby. Rewarding quickly and opens doors socially and culturally.",
    weights: { indoor: 2, mental: 2, frequent: 2, lowFriction: 2, mastery: 2, exploratory: 1, share: 1, socialSmall: 1, budgetLow: 2, spaceSmall: 2, selfTeach: 1, classFriendly: 2 }
  },
  {
    id: "writing",
    name: "✍️ Creative Writing",
    meta: "Solo • Calm • Self-expression • Very low barrier",
    why: "If you want something private, expressive, and flexible—writing is always available.",
    weights: { indoor: 2, creative: 2, calm: 2, solo: 2, lowFriction: 2, tangible: 1, frequent: 2, budgetLow: 2, spaceSmall: 2, selfTeach: 2 }
  },
  {
    id: "rock_climbing",
    name: "🧗 Rock Climbing (Gym or Outdoor)",
    meta: "Physical + problem-solving • Social gym vibe • Clear progression",
    why: "Movement + puzzles. Great community and very addictive progression.",
    weights: { physical: 3, mastery: 2, competitive: 1, socialSmall: 2, outdoor: 1, indoor: 1, accomplishment: 2, mediumFriction: 2, weatherOK: 1, budgetMid: 2, spaceLarge: 1, coach: 1, classFriendly: 1 }
  },
  {
    id: "cycling",
    name: "🚴 Cycling / Trail Riding",
    meta: "Outdoors • Energising • Solo or group • Scales with commitment",
    why: "Exploration + fitness and the option to go solo or join rides.",
    weights: { outdoor: 3, physical: 2, exploratory: 2, weatherOK: 2, socialSmall: 1, solo: 1, accomplishment: 1, weekly: 2, spaceLarge: 2, budgetMid: 1, budgetHigh: 2 }
  },
  {
    id: "martial_arts",
    name: "🥋 Martial Arts",
    meta: "Physical • Structured learning • Strong community",
    why: "If you like discipline, clear progression, and coaching—this is a great fit.",
    weights: { physical: 3, mastery: 2, coach: 2, classFriendly: 2, socialSmall: 2, accomplishment: 2, weekly: 2, budgetMid: 2, indoor: 1 }
  },
  {
    id: "electronics",
    name: "🔧 Electronics / Arduino Projects",
    meta: "Tinkering • Problem-solving • Build things that do stuff",
    why: "Ideal if you love experimenting and making practical gadgets. Very satisfying when it works.",
    weights: { indoor: 2, mental: 3, mastery: 2, tangible: 2, exploratory: 2, mediumFriction: 2, gear: 1, spaceSmall: 1, spaceMedium: 1, budgetLow: 1, budgetMid: 2, selfTeach: 2 }
  },
  {
    id: "coffee",
    name: "☕ Specialty Coffee",
    meta: "Process + ritual • Shareable • Gear-friendly",
    why: "A great ‘ritual hobby’—refine a process and share the results.",
    weights: { indoor: 2, calm: 1, mastery: 2, tangible: 2, share: 2, gear: 2, mediumFriction: 2, budgetMid: 2, spaceSmall: 1, spaceMedium: 1 }
  },
  {
    id: "gardening",
    name: "🪴 Gardening (Indoor or Outdoor)",
    meta: "Calm • Slow rewards • Surprisingly addictive",
    why: "Grounding and rewarding. Great if you like caring for something and seeing progress over time.",
    weights: { calm: 3, tangible: 2, outdoor: 2, indoor: 1, weatherOK: 1, frequent: 1, weekly: 2, lowFriction: 1, mediumFriction: 2, budgetLow: 1, budgetMid: 2, spaceMedium: 1, spaceLarge: 2 }
  },
  {
    id: "board_games",
    name: "🎲 Modern Board Games",
    meta: "Social • Structured fun • Mentally stimulating",
    why: "If you want a hobby that naturally creates hangouts, this is an easy win.",
    weights: { indoor: 2, socialSmall: 3, mental: 2, lowFriction: 1, mediumFriction: 1, competitive: 1, share: 1, budgetLow: 1, budgetMid: 2 }
  },
  {
    id: "djing",
    name: "🎛️ DJing",
    meta: "Creative + technical • Shareable • Can be solo or social",
    why: "A high-identity hobby: build taste, learn skills, share with friends or at events.",
    weights: { indoor: 2, creative: 2, mental: 1, mastery: 2, share: 3, solo: 1, socialSmall: 1, gear: 3, mediumFriction: 2, highFriction: 1, budgetHigh: 2, budgetVeryHigh: 2, tangible: 1 }
  },
];

// -------- State (quiz) --------
let index = -1; // -1 means intro
let history = [];
let userTags = {};

// -------- DOM --------
const content = document.getElementById("content");
const progressWrap = document.getElementById("progressWrap");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const tabQuiz = document.getElementById("tabQuiz");
const tabBrowse = document.getElementById("tabBrowse");

let currentView = "quiz"; // "quiz" | "browse"

// ---------- Tabs ----------
function setActiveTab(view) {
  currentView = view;
  tabQuiz.classList.toggle("active", view === "quiz");
  tabBrowse.classList.toggle("active", view === "browse");

  // progress only makes sense in quiz
  progressWrap.style.display = view === "quiz" ? "flex" : "none";

  if (view === "quiz") renderIntro();
  else renderBrowse();
}

tabQuiz.addEventListener("click", () => setActiveTab("quiz"));
tabBrowse.addEventListener("click", () => setActiveTab("browse"));

// ---------- Quiz helpers ----------
function setProgress() {
  const total = questions.length;
  const answered = Math.max(0, index);
  const pct = Math.round((answered / total) * 100);
  progressFill.style.width = `${pct}%`;
  progressText.textContent = `${pct}%`;
}

function addTags(tagsObj) {
  for (const [k, v] of Object.entries(tagsObj)) {
    userTags[k] = (userTags[k] || 0) + v;
  }
}

function removeTags(tagsObj) {
  for (const [k, v] of Object.entries(tagsObj)) {
    userTags[k] = (userTags[k] || 0) - v;
    if (userTags[k] <= 0) delete userTags[k];
  }
}

function renderIntro() {
  index = -1;
  history = [];
  userTags = {};
  setProgress();

  content.innerHTML = `
    <div class="section-title">How it works</div>
    <div class="question">Answer 11 quick questions.</div>
    <p class="help">We score your preferences against a pool of hobbies, then show your best match + close runners-up.</p>

    <div class="answers">
      <button class="btn" id="startBtn" type="button">
        <span class="label">Start</span>
        <span class="desc">2 minutes, no wrong answers.</span>
      </button>
    </div>
  `;

  document.getElementById("startBtn").addEventListener("click", () => {
    index = 0;
    renderQuestion();
  });
}

function renderQuestion() {
  setProgress();
  const q = questions[index];
  const twoCol = q.layout === "two";

  content.innerHTML = `
    <div class="section-title">${q.section}</div>
    <div class="question">${q.question}</div>
    <p class="help">${q.help || ""}</p>

    <div class="answers ${twoCol ? "two-col" : ""}">
      ${q.answers.map((a, i) => `
        <button class="btn" data-ans="${i}" type="button">
          <span class="label">${a.text}</span>
          ${a.desc ? `<span class="desc">${a.desc}</span>` : ""}
        </button>
      `).join("")}
    </div>

    <div class="controls">
      <button class="smallbtn" id="backBtn" type="button" ${history.length === 0 ? "disabled" : ""}>← Back</button>
      <button class="smallbtn" id="restartBtn" type="button">Restart</button>
    </div>
  `;

  document.querySelectorAll("[data-ans]").forEach(btn => {
    btn.addEventListener("click", () => {
      const ansIndex = Number(btn.getAttribute("data-ans"));
      const chosen = q.answers[ansIndex];

      history.push({ qIndex: index, tags: chosen.tags });
      addTags(chosen.tags);

      index += 1;
      if (index >= questions.length) renderResults();
      else renderQuestion();
    });
  });

  document.getElementById("backBtn").addEventListener("click", () => {
    if (history.length === 0) return;
    const last = history.pop();
    removeTags(last.tags);
    index = last.qIndex;
    renderQuestion();
  });

  document.getElementById("restartBtn").addEventListener("click", () => {
    renderIntro();
  });
}

function computeScores() {
  const results = hobbies.map(h => {
    let score = 0;
    for (const [tag, val] of Object.entries(userTags)) {
      const w = h.weights[tag] || 0;
      score += val * w;
    }
    // tiny overlap tie-breaker
    let overlap = 0;
    for (const tag of Object.keys(userTags)) if ((h.weights[tag] || 0) > 0) overlap += 1;
    score += overlap * 0.05;

    return { hobby: h, score };
  });

  results.sort((a, b) => b.score - a.score);
  return results;
}

function renderResults() {
  progressFill.style.width = `100%`;
  progressText.textContent = `100%`;

  const scores = computeScores();
  const top = scores[0];
  const runner1 = scores[1];
  const runner2 = scores[2];

  const topScore = top.score || 1;
  const percent = (s) => Math.max(0, Math.min(100, Math.round((s / topScore) * 100)));

  content.innerHTML = `
    <div class="section-title">Results</div>
    <div class="result-title">Your best match:</div>

    <div class="result-top">
      <div class="hobby-name">${top.hobby.name} <span style="opacity:.85;font-size:14px">(${percent(top.score)}% fit)</span></div>
      <div class="hobby-meta">${top.hobby.meta}</div>
      <div class="hobby-why">${top.hobby.why}</div>
    </div>

    <div class="section-title" style="margin-top:14px">Close matches</div>
    <div class="runnerups">
      ${[runner1, runner2].map(r => `
        <div class="runner">
          <strong>${r.hobby.name} <span style="opacity:.75;font-weight:600">(${percent(r.score)}% fit)</span></strong>
          <div class="hobby-meta">${r.hobby.meta}</div>
        </div>
      `).join("")}
    </div>

    <div class="controls">
      <button class="smallbtn" id="tryAgainBtn" type="button">Try again</button>
      <button class="smallbtn" id="showTagsBtn" type="button">Show my picks</button>
      <button class="smallbtn" id="browseBtn" type="button">Browse all hobbies</button>
    </div>

    <div id="tagsPanel" style="display:none; margin-top:10px; padding:12px 14px; border:1px solid var(--border); border-radius:14px; background: rgba(255,255,255,0.03);">
      <div class="section-title" style="margin-top:0">Your preference signals</div>
      <div style="color:var(--muted); font-size:13px; line-height:1.55">
        ${Object.entries(userTags).sort((a,b)=>b[1]-a[1]).map(([k,v]) => `${k}: <strong>${v}</strong>`).join("<br/>")}
      </div>
    </div>
  `;

  document.getElementById("tryAgainBtn").addEventListener("click", renderIntro);
  document.getElementById("showTagsBtn").addEventListener("click", () => {
    const panel = document.getElementById("tagsPanel");
    panel.style.display = panel.style.display === "none" ? "block" : "none";
  });
  document.getElementById("browseBtn").addEventListener("click", () => setActiveTab("browse"));
}

// ---------- Browse view ----------
function renderBrowse(searchTerm = "") {
  const term = searchTerm.trim().toLowerCase();

  const filtered = hobbies
    .slice()
    .sort((a,b) => a.name.localeCompare(b.name))
    .filter(h => {
      if (!term) return true;
      return (
        h.name.toLowerCase().includes(term) ||
        h.meta.toLowerCase().includes(term) ||
        h.why.toLowerCase().includes(term)
      );
    });

  content.innerHTML = `
    <div class="section-title">Browse all hobbies</div>
    <div class="question">Explore options without taking the quiz</div>
    <p class="help">Search by keyword (e.g. “outdoors”, “creative”, “solo”, “gear”, “fitness”).</p>

    <div class="browse-top">
      <input class="search" id="searchBox" type="search" placeholder="Search hobbies…" value="${escapeHtml(searchTerm)}" />
      <div class="count-pill">${filtered.length} shown</div>
      <button class="smallbtn" id="clearBtn" type="button">Clear</button>
    </div>

    <div class="hobby-grid">
      ${filtered.map(h => `
        <div class="hobby-card">
          <div class="topline">
            <div class="name">${h.name}</div>
            <div class="tag">ID: ${h.id}</div>
          </div>
          <div class="meta">${h.meta}</div>
          <div class="why">${h.why}</div>
        </div>
      `).join("")}
    </div>

    <div class="controls">
      <button class="smallbtn" id="goQuizBtn" type="button">← Back to quiz</button>
    </div>
  `;

  const box = document.getElementById("searchBox");
  box.addEventListener("input", (e) => renderBrowse(e.target.value));
  document.getElementById("clearBtn").addEventListener("click", () => renderBrowse(""));
  document.getElementById("goQuizBtn").addEventListener("click", () => setActiveTab("quiz"));
}

// small helper to avoid breaking HTML when pre-filling search box
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Start in quiz view
setActiveTab("quiz");
