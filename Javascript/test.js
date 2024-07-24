// let zustand = "";
// if (alter > 30 && alter < 70) {
//     zustand = "Arbeiter, jeden Tag";
// } else {
//     zustand = "Rentner";
// }
let alter = 50 ;
let alter1 = (alter > 30 && alter < 70 )? "Arbeiter, jeden Tag" : "Rentner" ;
console.log(alter1);
// function getMotivationMessage(level) {
//     switch(level) {
//         case 1:
//             return "Super motiviert! Du kannst alles erreichen!";
//         case 2:
//             return "Motiviert! Du bist auf dem richtigen Weg!";
//         case 3:
//             return "Neutral. Vielleicht eine Pause einlegen?";
//         case 4:
//             return "Müde. Zeit für etwas Entspannung.";
//         case 5:
//             return "Erschöpft. Erholung ist jetzt wichtig!";
//         default:
//             return "Unbekanntes Motivationslevel. Bitte gib eine Zahl zwischen 1 und 5 ein.";
//     }
// }


// // Beispielhafte Verwendung des Switch-Case
// let motivationsLevel = 3; // Hier kannst du den Motivationslevel ändern
// let message = getMotivationMessage(motivationsLevel);
// console.log(message);
 let Motivation = 3;
 switch (Motivation) {
    case 1 :
        console.log ("Super motiviert! Du kannst alles erreichen!");
        break;
    case 2 :
       console.log ("Motiviert! Du bist auf dem richtigen Weg!");
        break;
    case 3 :
        console.log ("Neutral. Vielleicht eine Pause einlegen?");
        break;
    case 4 :
        console.log ("Müde. Zeit für etwas Entspannung.");
        break;
    case 5 :
        console.log ("Erschöpft. Erholung ist jetzt wichtig!");
         break;
    default:
        console.log ("Unbekanntes Motivationslevel. Bitte gib eine Zahl zwischen 1 und 5 ein.");
 }
 for (let i = 1; i <= 10; i++) {
    console.log( i * i);
}
let result = '';
for (let x = 1; x <= 50;) {
    result+=(x * x) + ' ';
    x += 2
}
console.log(result);


// let output = "";
// for (let x = 1; x <= 50; x+=2){
//         square = x**2;
//         output += square + "  ";      
// }
// console.log(output);

for (let i = 1;; i++) {
    let square = i * i;
    if (square > 10) {
        break;
    }
    console.log(square);
}
for (let i = 1; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log( i * i);
}
let table = ""
// i --> rows und j --> cols
for(let i = 1; i <= 10; i++) {
    
    for(let j = 1; j <= 10; j++) {
        table = table + (i*j) + " ";
        }
        table = table + ('\n');
}
console.log(table)