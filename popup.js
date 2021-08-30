const colorChange = document.getElementById("colorChange");
const buttonOptions = document.getElementById("buttonDiv");
const selectedClassName = "current";
const buttonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

chrome.storage.sync.get("color", ({ color }) => {
    colorChange.style.backgroundColor = color; 
});

function handleButtonClick(e) {
    const current = e.target.parentElement.querySelector(`.${selectedClassName}`);
    if (current && current !== e.target) {
        current.classList.remove(selectedClassName);
    }
    const color = e.target.dataset.color;
    e.target.classList.add(selectedClassName);
    chrome.storage.sync.set({ set });
    changeColor.style.backgroundColor = color;
};

function constructOptions(buttonColors) {
    chrome.storage.sync.get("color", (data) => {
        const currentColor = data.color;
        for (let btc of buttonColors) {
            const button = document.createElement("button");
            button.dataset.color = btc;
            button.style.backgroundColor = btc;

            if (btc === currentColor) {
                button.classList.add(selectedClassName);
            }
            button.addEventListener("click", handleButtonClick);
            buttonOptions.appendChild(button);
        }
    });
};

constructOptions(buttonColors);