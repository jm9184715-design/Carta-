const surpriseButton = document.querySelector("#surpriseButton");
const surpriseMessage = document.querySelector("#surpriseMessage");

surpriseButton.addEventListener("click", () => {
    const isVisible = surpriseMessage.classList.toggle("is-visible");
    surpriseButton.setAttribute("aria-expanded", String(isVisible));
    surpriseButton.innerHTML = isVisible
        ? "<span>💛</span> Te lo digo otra vez"
        : "<span>💛</span> Tengo algo más que decirte";
});
