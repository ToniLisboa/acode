document.addEventListener("DOMContentLoaded", function () { const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
    });
    
    card.addEventListener("mouseout", () => {
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });
});

// Botão de rolagem para o topo
const scrollTopBtn = document.createElement("button");
scrollTopBtn.textContent = "↑ Topo";
scrollTopBtn.classList.add("scroll-top-btn");
document.body.appendChild(scrollTopBtn);

scrollTopBtn.style.position = "fixed";
scrollTopBtn.style.bottom = "20px";
scrollTopBtn.style.right = "20px";
scrollTopBtn.style.padding = "10px 15px";
scrollTopBtn.style.backgroundColor = "#007bff";
scrollTopBtn.style.color = "white";
scrollTopBtn.style.border = "none";
scrollTopBtn.style.borderRadius = "5px";
scrollTopBtn.style.cursor = "pointer";
scrollTopBtn.style.display = "none";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

});

