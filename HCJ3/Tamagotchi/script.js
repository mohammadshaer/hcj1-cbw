const tamagotchi = {
    name: 'Tommy',
    hunger: 5,
    happiness: 5,
    feed() {
        if (this.hunger > 0) {
            this.hunger--;
            updateStatus();
        } else {
            alert(`${this.name} is not hungry.`);
        }
    },
    play() {
        if (this.happiness < 10) {
            this.happiness++;
            updateStatus();
        } else {
            alert(`${this.name} is already very happy!`);
        }
    },
    checkStatus() {
        alert(`Hunger: ${this.hunger}\nHappiness: ${this.happiness}`);
    }
};

function feed() {
    tamagotchi.feed();
}

function play() {
    tamagotchi.play();
}

function checkStatus() {
    tamagotchi.checkStatus();
}

function updateStatus() {
    document.getElementById('hunger').innerText = tamagotchi.hunger;
    document.getElementById('happiness').innerText = tamagotchi.happiness;
}

window.onload = function() {
    document.getElementById('name').innerText = tamagotchi.name;
    updateStatus();
};