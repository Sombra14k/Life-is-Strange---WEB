let currentSelectedChar = null;

const characters = {
  max: {
    title: "Max Caulfield (Ocultista)",
    sub: "A Observadora",
    img: "img/Icon-Max.jpeg",
    bg: "img/1.jpeg",
    desc: "Max é a consciência do grupo. Suas perícias refletem sua capacidade de notar o que os outros ignoram, seja através da lente de sua câmera ou de suas viagens temporais.",
    attr: "AG 1 | FOR 1 | INT 3 | PRE 3 | VIG 1",
    pv: 14, san: 16,
    password: "Shutter_Rewind_10x8",
    hint: "— 'O momento congelado se dobra sobre si mesmo dez vezes, mas a moldura ainda é a de um pequeno espelho de 8 polegadas.'",
    pericias: ["<b>Percepção</b>", "<b>Investigação</b>", "<b>Vontade</b>"],
    personalidade: "Introvertida, gentil e observadora.",
    gostos: "Fotografia analógica e música indie.",
    interesses: "Proteger seus amigos."
  },
  chloe: {
    title: "Chloe Price (Combatente)",
    sub: "A Rebelde",
    img: "img/Icon-Cloe.jpeg",
    bg: "img/2.jpeg",
    desc: "Chloe é a força motriz e o caos. Vive à margem das regras e não tem medo de sujar as mãos.",
    attr: "AG 3 | FOR 3 | INT 1 | PRE 1 | VIG 2",
    pv: 24, san: 10,
    password: "B3ll_Pr1c3_1994",
    hint: "— 'O som de um badalo anuncia o custo da liberdade, nascido sob o signo da borboleta no final do século passado.'",
    pericias: ["<b>Intimidação</b>", "<b>Crime</b>", "<b>Pilotagem</b>"],
    personalidade: "Rebelde e leal.",
    gostos: "Punk-rock e tatuagens.",
    interesses: "Justiça e liberdade."
  },
  warren: {
    title: "Warren Graham (Especialista)",
    sub: "O Especialista",
    img: "img/Icon-Warren.jpeg",
    bg: "img/3.jpeg",
    desc: "Warren fornece a base técnica e científica. O braço direito para qualquer necessidade digital.",
    attr: "AG 2 | FOR 1 | INT 4 | PRE 1 | VIG 1",
    pv: 10, san: 12,
    password: "Go_Ape_At_Li7_H2O",
    hint: "— 'Um convite primata para a tela grande, temperado com o elemento número 3 e o solvente universal.'",
    pericias: ["<b>Ciências</b>", "<b>Tecnologia</b>", "<b>Atualidades</b>"],
    personalidade: "Geek de bom coração.",
    gostos: "Ficção científica e química.",
    interesses: "Apoiar o grupo.",
    amor: "Max Caulfield"
  }
};

// Abre o modal de senha
function askPassword(charKey) {
  currentSelectedChar = charKey;
  const modal = document.getElementById('password-modal');
  const hintEl = document.getElementById('modal-hint');
  const inputEl = document.getElementById('pass-input');
  
  hintEl.innerText = characters[charKey].hint;
  inputEl.value = ""; // Limpa o input
  modal.style.display = 'flex';
  inputEl.focus();
}

// Fecha o modal
function closeModal() {
  document.getElementById('password-modal').style.display = 'none';
}

// Confirma a senha
function confirmPassword() {
  const input = document.getElementById('pass-input').value;
  const char = characters[currentSelectedChar];

  if (input === char.password) {
    closeModal();
    renderSheetContent(currentSelectedChar);
  } else {
    alert("Código Inválido. A realidade é imutável para os despreparados.");
    document.getElementById('pass-input').value = "";
  }
}

// Renderiza a ficha
function renderSheetContent(charKey) {
  const char = characters[charKey];
  const container = document.getElementById('char-sheet');
  const amorHtml = char.amor ? `<div class="amor-box"><strong>💕 Interesse Amoroso:</strong> ${char.amor}</div>` : '';

  const content = `
    <div class="sheet-layout">
      <div class="stats-box">
        <img src="${char.img}" class="profile-img-sheet">
        <h1>${char.title}</h1>
        <div class="attributes">${char.attr}</div>
        <div class="vital-stats"><p>❤️ Vida: ${char.pv} | 🧠 Sanidade: ${char.san}</p></div>
        <button class="expand-btn" onclick="toggleDetails()">Ver Perfil Detalhado ↓</button>
        <div id="extra-details" class="details-content" style="display: none;">
          <p><strong>🧠 Personalidade:</strong> ${char.personalidade}</p>
          <p><strong>⭐ Gostos:</strong> ${char.gostos}</p>
          <p><strong>🎯 Interesses:</strong> ${char.interesses}</p>
          ${amorHtml}
        </div>
      </div>
      <div class="description-box">
        <h2>${char.sub}</h2>
        <p>${char.desc}</p>
        <h2>Perícias Primárias</h2>
        <ul class="pericias-list">${char.pericias.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
    </div>`;
  
  container.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('${char.bg}')`;
  document.getElementById('sheet-content').innerHTML = content;
  document.getElementById('selection-screen').style.display = 'none';
  container.style.display = 'block';
}

function toggleDetails() {
  const det = document.getElementById('extra-details');
  det.style.display = (det.style.display === 'none') ? 'block' : 'none';
}

function closeSheet() {
  document.getElementById('selection-screen').style.display = 'flex';
  document.getElementById('char-sheet').style.display = 'none';
}