const selector = document.querySelector(".selector");
const body = document.body;
const currentTheme = localStorage.getItem("theme");
if (!currentTheme) {
    let activeState = "auto";
    localStorage.setItem("theme", "auto");
} else {
    body.className = currentTheme;
}

selector.addEventListener("change", setState);

function setState(event) {
    activeState = event.target.value;
    localStorage.setItem("theme", activeState);
    toggleTheme(activeState);
}

function toggleTheme() {
    body.className = activeState;
    console.log(activeState);
}