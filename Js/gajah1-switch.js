// todo - membuat function yang mengeluarkan nilai (gajah, semut, manusia)

function random() {
    return Math.round(Math.random() * 10);
}

function computer() {
    let comp = random();
    let hasil;

    if (comp <= 3) {
        hasil = "gajah";
    } else if (comp >= 4 && comp <= 6) {
        hasil = "manusia";
    } else {
        hasil = "semut"
    }

    return hasil;
}

function game() {
    let comp = computer();
    let user = prompt("Masukkan pilihan kamu (Gajah, Manusia, Semut)  : ");
    let hasil;

    if (user === "semut" && comp === "gajah") {
        hasil = "menang";
    } else if (user === "gajah" && comp === "semut") {
        hasil = "kalah";
    } else if (user === "gajah" && comp === "manusia") {
        hasil = "menang";
    } else if (user === "manusia" && comp === "gajah") {
        hasil = "kalah";
    } else if (user === "manusia" && comp === "semut") {
        hasil = "menang";
    } else if (user === "semut" && comp === "manusia") {
        hasil = "kalah";
    } else {
        hasil = "seri";
    }
    return hasil;
}
alert(game());