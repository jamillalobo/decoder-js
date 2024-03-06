// function to hide output__decoded
function hideOutputDecoded() {
  let element = document.getElementsByClassName("output__decoded")[0];
  element.style.display = "none";
}

hideOutputDecoded();

function showOutput__decoded() {
  let element = document.getElementsByClassName("output__decoded")[0];
  element.style.display = "flex";
}

function hideOutput() {
  let element = document.getElementsByClassName("output")[0];
  element.style.display = "none";
}


function readText(ClassName, text) {
  let element = document.getElementsByClassName(ClassName)[0];
  element.innerHTML = text;
}

function showInitialMessage() {
  readText("output__title", `Nenhuma mensagem encontrada`);
  readText(
    "output__paragraph",
    `Digite um texto que você deseja criptografar ou descriptografar.`
  );
}

showInitialMessage();

function encriptText() {
  let text = document.querySelector("input").value;

  if (/e|i|a|o|u/.test(text)) {
    let encriptedText = text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    hideOutput();
    showOutput__decoded();
    readText(
      "output__decoded__text",
      encriptedText
    );
  } else {
    readText("output__decoded__text", text);
  }
}

function decriptText() {
  let text = document.querySelector("input").value;

  if (/enter|imes|ai|ober|ufat/.test(text)) {
    let decriptedText = text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    hideOutput();
    showOutput__decoded();
    readText(
      "output__decoded__text",
      decriptedText
    );
  } else {
    readText("output__decoded__text", text);
  }
}

function copyText() {
  let outputText = document.getElementsByClassName("output__decoded__text")[0].innerHTML;
  navigator.clipboard.writeText(outputText);
}

