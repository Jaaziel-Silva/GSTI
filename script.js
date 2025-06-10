// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Botão de ação
  const buttons = document.querySelectorAll(".btn-warning");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Você será redirecionado para configurar seu plano. (Simulação)");
    });
  });

  // Ativação de abas manual (opcional)
  const linuxTab = document.getElementById("linux-tab");
  const windowsTab = document.getElementById("windows-tab");

  linuxTab.addEventListener("click", () => {
    linuxTab.classList.add("active");
    windowsTab.classList.remove("active");
  });

  windowsTab.addEventListener("click", () => {
    windowsTab.classList.add("active");
    linuxTab.classList.remove("active");
  });
});
