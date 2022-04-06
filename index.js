function critto() {
    var alfabeto = "abcdefghijklmnopqrstuvwxyz"
    var testochiaro = document.getElementById("testochiaro").value;
    var testocifrato = "";
    var testodecifrato = "";
    var chiave = document.getElementById("chiave").value;

    console.log(testochiaro);
    console.log(posizione);

    for (var i = 0; i < testochiaro.length; i++)
        var poszione = alfabeto.indexOf(testochiaro[i]);
    testodecifrato += alfabeto[(posizione + parseInt(chiave)) % 26];

    document.getElementById("testo").innerHTML = testocifrato;

    for (var i = 0; i < testochiaro.length; i++) {
        var posizione = alfabeto.indexOf(testodecifrato[i])
        testodecifrato += alfabeto[(posizione - chiave) % 26];
    }
    document.getElementById("testo").innerHTML = testodecifrato;

}