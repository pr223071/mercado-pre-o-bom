// Aguarda o carregamento do hmtl
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o container principal
  const carrossel = document.querySelector("#carrossel");

  if (!carrossel) {
    // erro
    console.error(
      "Erro JS: Elemento do carrossel com ID '#carrossel' não encontrado!"
    );
    return;
  }

  //avancar
  function showNextSlide() {
    const slidesList = carrossel.querySelector(".listas");

    // busca slide ativo
    const activeSlide = slidesList.querySelector(".imagem[data-active]");

    // Pega todas as imagens
    const slides = [...slidesList.querySelectorAll(".imagem")];

    let newIndex = slides.indexOf(activeSlide) + 1;

    if (newIndex >= slides.length) {
      newIndex = 0;
    }

    // Troca o slide ativo
    delete activeSlide.dataset.active;
    slides[newIndex].dataset.active = true;
  }

  setInterval(showNextSlide, 5000);
});
