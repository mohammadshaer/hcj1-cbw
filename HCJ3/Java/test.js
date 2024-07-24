
function ergebnis() {
    var noten = document.getElementById('schulnoten').value;
switch (noten) {
    case 1: 
    console.log('Sehr gut')
        break;
    case 2: 
    console.log('gut')
        break;
    case 3: 
    console.log('Befriedigend')
        break;
    default: 
    console.log('nicht bestanden')
        break;
    }
}




