const menuButton = document.getElementById("menu-button");
const menuContent = document.getElementById("menu-content");
menuButton.addEventListener("click", function() {
    if (menuContent.classList.contains("hidden")) {
        menuContent.classList.remove("hidden");
        setTimeout(()=>{
            menuContent.classList.remove("max-h-0", "opacity-0", "-translate-y-4");
            menuContent.classList.add("max-h-screen", "opacity-100", "translate-y-0");
        }, 50) // Espera un momento para asegurarte de que la clase `hidden` se ha aplicado
        ;
    } else {
        menuContent.classList.remove("max-h-screen", "opacity-100", "translate-y-0");
        menuContent.classList.add("max-h-0", "opacity-0", "-translate-y-4");
        setTimeout(()=>{
            menuContent.classList.add("hidden");
        }, 300) // Espera el tiempo de duración de la transición para ocultar
        ;
    }
});

//# sourceMappingURL=index.b55f75e8.js.map
