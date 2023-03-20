// todo - membuat function yang mengeluarkan nilai (gajah, semut, manusia)

function computer(random) {
    let comp = random;
    if (comp <= 3) {
        return "gajah";
    } else if (comp >= 4 && comp <= 6) {
        return "manusia";
    } else {
        return "semut"
    }
}

let comp = computer(Math.round(Math.random() * 10));
let user = prompt("Masukkan pilihan kamu (Gajah, Manusia, Semut)  : ");
function game(comp, user) {
    if (user === "semut" && comp === "gajah") {
        return "menang";
    } else if (user === "gajah" && comp === "semut") {
        return "kalah";
    } else if (user === "gajah" && comp === "manusia") {
        return "menang";
    } else if (user === "manusia" && comp === "gajah") {
        return "kalah";
    } else if (user === "manusia" && comp === "semut") {
        return "menang";
    } else if (user === "semut" && comp === "manusia") {
        return "kalah";
    } else {
        return "seri";
    }
}

function resultSelect(compResult, userResult, result) {
    alert(`komputer memilih ${compResult} dan kamu memilih ${userResult} maka hasil permainan adalah ${result}`);
}
resultSelect(comp, user, game(comp, user));