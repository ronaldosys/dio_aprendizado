function changeMode(){
    changeClasses();
    changeText();

}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    
    if(body.classList.contains(darkModeClass)){
        h1.innerHTML = darkMode + " ON";
        button.innerHTML = lightMode;
        return;
    }
        h1.innerHTML = lightMode + " ON";
        button.innerHTML = darkMode ;
        
         
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

console.log(body);

button.addEventListener('click', changeMode)