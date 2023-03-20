let ulang;

const handphone = function () {
    alert("handphone")
    ulang = confirm("Yakin ye?")
}
const laptop = function () {
    alert("laptop")
    ulang = confirm("Yakin ye?")
}
const computer = function () {
    alert("computer")
    ulang = confirm("Yakin ye?")
}
const samsudin = function () {
    alert("hooh tenann")
    ulang = confirm("Yakin ye?")
}

const program = function (pilihan) {
    switch (parseInt(pilihan)) {
        case 1:
            handphone();
            break;
        case 2:
            laptop();
            break;
        case 3:
            computer();
            break;
        case 4 :
            samsudin();
            break;
        default:
            alert("Renek njay");
            break;
    }
}

do {
    program(prompt("Pilih Nomer Berapa?"));
} while (ulang);