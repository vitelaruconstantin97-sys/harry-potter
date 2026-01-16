const API_URL = "https://wizard-world-api.herokuapp.com/Spells";

async function genereazaVraja() {
  console.log("Generare vrajă inițiată");

  try {
    console.log("Se trimite cererea către API...");
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Eroare la răspunsul API");
    }

    const spells = await response.json();
    console.log("Date primite:", spells);

    const randomIndex = Math.floor(Math.random() * spells.length);
    const spell = spells[randomIndex];

    console.log("Vraja aleasă:", spell);

    // Fallback-uri pentru valori null
    const incantation = spell.incantation || "Incantație necunoscută";
    const effect = spell.effect || "Efect necunoscut";
    const type = spell.type || "Tip necunoscut";

    document.getElementById("vraja").innerHTML = `
      <div style="text-align:center; line-height:1.6;">
        <span style="
          display:block;
          font-size:20px;
          font-weight:700;
          color:#3b2f1a;
          margin-bottom:6px;
        ">
          ${spell.name}
        </span>

        <span style="
          display:block;
          font-size:16px;
          font-style:italic;
          color:#6b4f1d;
          margin-bottom:10px;
        ">
          ${incantation}
        </span>

        <span style="
          display:block;
          font-size:14px;
          color:#555;
        ">
          ✨ ${effect}
        </span>

        <span style="
          display:inline-block;
          margin-top:8px;
          padding:4px 10px;
          border-radius:12px;
          background:#ece6da;
          font-size:12px;
          color:#3a2f1d;
        ">
          ${type}
        </span>
      </div>
    `;
  } catch (error) {
    console.error("Eroare:", error);
    document.getElementById("vraja").textContent =
      "Nu s-a putut genera vraja. Verifică conexiunea sau API-ul.";
  }
}
