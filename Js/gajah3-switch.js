let ulang;
do {
    // todo - menampilkan teks pada popup
    alert("Gajah, Manusia, Semut");
    
    // todo - menampung data pengguna
    const user = prompt("Masukkan pilihan kamu (Gajah, Manusia, Semut)  : ");
    
    // todo - membuat random pilihan komputer
    const random = Math.round(Math.random() * 10);
    
    // todo - membuat pengkondisian dari random komputer
    let comp;
    switch (random) {
        case 1:
        case 2:
        case 3:
            comp = "gajah";
            break;
        case 4:
        case 5:
        case 6:
            comp = "manusia";
            break;
        default:
            comp = "semut";
            break;
    }
    console.log(comp);
    
    const userString = user.toLocaleLowerCase();
    const compString = comp.toLocaleLowerCase();
    
    // todo - membuat kondisi pertemuan kedua pilihan
    if (userString === "semut" && compString === "gajah") {
        alert(`Komputer memilih ${compString} dan kamu memilih ${userString} jadi komputer KALAH dan kamu MENANG`);
    } else if (userString === "gajah" && compString === "semut") {
        alert(`Komputer memilih ${compString} dan kamu memilih ${userString} jadi komputer MENANG dan kamu KALAH`);
    } else if (userString === "gajah" && compString === "manusia") {
        alert(`Komputer memilih ${compString} dan kamu memilih ${userString} jadi komputer KALAH dan kamu MENANG`);
    } else if (userString === "manusia" && compString === "gajah") {
        alert(`Komputer memilih ${compString} dan kamu memilih ${userString} jadi komputer MENANG dan kamu KALAH`);
    } else if (userString === "manusia" && compString === "semut") {
        alert(`Komputer memilih ${compString} dan kamu memilih ${userString} jadi komputer KALAH dan kamu MENANG`);
    } else if (userString === "semut" && compString === "manusia") {
        alert(`Komputer memilih ${compString} dan kamu memilih ${userString} jadi komputer MENANG dan kamu KALAH`);
    } else if (userString === compString) {
        alert(`Komputer memilih ${compString} dan kamu memilih ${userString} jadi hasilnya SERI`);
    } else {
        alert("Input yang kamu masukkan tidak sesuai")
    }

    ulang = prompt("Apakah kamu ingin bermain lagi?");
} while (ulang === "y");
if (ulang === "n") {
    alert("Arigatto sudah bermain")
}