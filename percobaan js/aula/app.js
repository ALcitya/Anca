const input = document.getElementsByClassName("inpt")[0]
const button = document.getElementsByClassName("btninput")[0]
const aula = document.querySelector(".pe")
const jumlah = document.querySelector(".jumlah")
let hitung = 0

button.addEventListener('click', () => {
    let pengunjung = document.createElement("p")
    pengunjung.classList.add("people")
    pengunjung.innerHTML = input.value 
    aula.appendChild(pengunjung)

    hitung = hitung + 1
    jumlah.innerHTML = hitung
})