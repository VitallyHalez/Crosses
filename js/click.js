let i = 1;
let game = new Set();

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("box")) {
        event.target.innerText = "x";
        game.add(event.target.id);

        if(checkWinner()){
            result.innerText="Winner player: " + i;
        }

        if (i == 1) {
            temp.innerText += "Clicked " + i + ":" + event.target.id + "\n";
            i = 2;
            return;
        }

        if (i == 2) {
            temp.innerText += "Clicked " + i + ":" + event.target.id + "\n";
            i = 1;
            return;
        }
    }
});