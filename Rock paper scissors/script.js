function startgame() {
  const intro = document.querySelector(".intro");
  const gioco = document.querySelector(".gioco");
  const giocoBtn = document.querySelector(".intro button");

  //   console.log(intro);
  //   console.log(gioco);
  //   console.log(giocoBtn);
  giocoBtn.addEventListener("click", () => {
    intro.classList.add("fadeOut");
    gioco.classList.add("fadeIn");
  });
}

function gioca() {
  const scelteBtn = document.querySelectorAll(".scelta button");
  const playerImg = document.querySelector(".sceltaGiocatore");
  const computerImg = document.querySelector(".sceltaComputer");
  const mani = document.querySelectorAll(".mani img");

  mani.forEach((mano) => {
    mano.addEventListener("animationend", function () {
      this.style.animation = "";
    });
  });

  scelteBtn.forEach((scelta) => {
    scelta.addEventListener("click", () => {
      let sceltaComputer = Math.floor(Math.random() * 3);
      const ArraySceltaComputer = ["sasso", "carta", "forbici"];

      playerImg.style.animation = "shakePlayer 2s ease";
      computerImg.style.animation = "shakeComputer 2s ease";

      setTimeout(() => {
        playerImg.src = `./source/${scelta.textContent}.png`;
        computerImg.src = `./source/${ArraySceltaComputer[sceltaComputer]}.png`;

        check(scelta.textContent, ArraySceltaComputer[sceltaComputer]);

        const playerPunteggio = document.querySelector(".pGiocatore");
        const computerPunteggio = document.querySelector(".pComputer");
        playerPunteggio.textContent = pScore;
        computerPunteggio.textContent = cScore;
      }, 2000);
    });
  });
}

function check(sceltaGiocatore, sceltaComputer) {
  console.log(`SceltaGiocatore: ${sceltaGiocatore}`);
  console.log(`sceltaComputer: ${sceltaComputer}`);

  const winner = document.querySelector(".titolo");
  if (sceltaGiocatore === sceltaComputer) {
    winner.textContent = "Pareggio";
    return;
  }

  if (sceltaGiocatore === "sasso") {
    if (sceltaComputer === "forbici") {
      winner.textContent = "Hai vinto!";
      pScore++;
      return;
    } else {
      winner.textContent = "Computer win!";
      cScore++;
      return;
    }
  }

  if (sceltaGiocatore === "forbici") {
    if (sceltaComputer === "carta") {
      winner.textContent = "Hai vinto!";
      pScore++;
      return;
    } else {
      winner.textContent = "Computer win!";
      cScore++;
      return;
    }
  }

  if (sceltaGiocatore === "carta") {
    if (sceltaComputer === "sasso") {
      winner.textContent = "Hai vinto!";
      pScore++;
      return;
    } else {
      winner.textContent = "Computer win!";
      cScore++;
      return;
    }
  }
}

let pScore = 0;
let cScore = 0;
startgame();
gioca();
