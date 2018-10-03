let player = 1;
let game = new Set();

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("box")) {
        game.add(event.target.id);
        game.forEach( function(item) {
            box = document.querySelector(`#${item}`)
            box.innerText = "x";
        });

        if(checkWinner()){
            result.innerText="Winner player: " + player;
        }

        if (i == 1) {
            
            temp.innerText += "Clicked " + i + ":" + event.target.id + "\n";
            i = 2;
            return;
        }
///
        if (player == 2) {
            player = 1;
            return;
        }
    }
});