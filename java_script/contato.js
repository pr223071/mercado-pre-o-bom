document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (!form) {
    console.error("Erro: O formulário HTML não foi encontrado!");
    return;
  }

  // Adiciona o listener de envio do formulário
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário vazio
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg").value;

    const telefone = "5548991149054";

    // Monta a mensagem
    const texto = `*Contato pelo site*\n
*Nome:* ${nome}
*Email:* ${email}
*Mensagem:* ${msg}`;

    // monta a URL do WhatsApp
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    // Abre o WhatsApp em uma nova aba
    window.open(url, "_blank");
  });
});
