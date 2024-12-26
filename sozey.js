const b = document.querySelector('button.button--no')
const c = document.querySelector('button.button--yes')
b.addEventListener("mouseover", moveHover)

function moveHover(){
    const i=Math.floor(Math.random()*500)+1;
    const j=Math.floor(Math.random()*500)+1;

    b.style.right=i+"px"
    b.style.top=j+"px"
}

function addNewButton() {
    const newButton = document.createElement("button");
    newButton.textContent = "YES";
    newButton.classList.add("button--yes", "yes-button");

    const i = Math.floor(Math.random() * (window.innerWidth - newButton.offsetWidth));
    const j = Math.floor(Math.random() * (window.innerHeight - newButton.offsetHeight));
    newButton.style.right = i + "px";
    newButton.style.top = j + "px";

    newButton.addEventListener("mouseover", moveHover);
    newButton.addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/shorts/I-IgFbJGDOg?feature=share";
    });

    document.body.appendChild(newButton);
}

setInterval(addNewButton, 1000);