// function to hide output__decoded
function esconderOutput__decoded() {
  let elemento = document.getElementsByClassName("output__decoded")[0];
  elemento.style.display = "none";
}

esconderOutput__decoded();

function mostrarOutput__decoded() {
    let elemento = document.getElementsByClassName("output__decoded")[0];
    elemento.style.display = "flex";
}


function esconderOutput() {
  let elemento = document.getElementsByClassName("output")[0];
  elemento.style.display = "none";
}

// funcao que le o texto do HTML e substitui pelo texto passado como parametro
function lerTextoNaTela(ClassName, texto) {
  let elemento = document.getElementsByClassName(ClassName)[0];
  elemento.innerHTML = texto;
}

function exibirMensagemInicial() {
  lerTextoNaTela("output__title", `Nenhuma mensagem encontrada`);
  lerTextoNaTela(
    "output__paragraph",
    `Digite um texto que você deseja criptografar ou descriptografar.`
  );
}

exibirMensagemInicial();

function criptografarTexto() {
  let texto = document.querySelector("input").value;

  if (texto.includes("e", "i", "o", "u", "a")) {
    let textoCriptografado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat")
      .replace(/a/g, "ai");

    esconderOutput();
    mostrarOutput__decoded();
    lerTextoNaTela(
      "output__decoded",
      textoCriptografado
    );
  } else {
    lerTextoNaTela("output__decoded", texto);
  }
}

// escrever texto no input

// ler texto no input

// criptografar texto

// exibir texto criptografado no output

// copiar texto criptografado

// escrever texto criptgrafado no input

// ler texto criptografado no input

// descriptografar texto
