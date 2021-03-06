function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(darkMode); // classList acessa as classes do css
    h1.classList.toggle(darkMode);
    body.classList.toggle(darkMode);
    footer.classList.toggle(darkMode);
}

function changeText() {
    const lightMode = "Light Mode";
    const darkModeT = "Dark Mode";

    if (body.classList.contains(darkMode)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkModeT + " ON";
        return;
    }
    button.innerHTML = darkModeT;
    h1.innerHTML = lightMode + " ON";
}

const darkMode = 'dark-mode'
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener("click", changeMode);