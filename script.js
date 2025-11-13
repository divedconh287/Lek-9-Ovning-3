let slumptal =parseInt(Math.random()*7);

const lander = ["Holland", "Belgien", "Italien", "Rumänien", "Albanien",
"Tjeckien", "Polen", "Österrike"];
const städer = ["Amsterdam", "Bryssel", "Rom", "Bukarest", "Tirana","Prag",
"Warzawa", "Österrike"];

let p_fråga=document.querySelector("#fråga");
let input_svar=document.querySelector("#svar");
let p_resultat=document.querySelector("#resultat");

function fraga(){
    // Skapa slumptal
    slumptal=parseInt(Math.random()*7);
    // Hämta landet som vi ska använda i frågan
    let fråga = länder[slumptal]
    // Visa frågan för användaren
    p_fråga.textContent="Ange huvudstad för "+fråga
}

function ange_svar(){

    // Hämta användarens svar och spara det
    let svar = input_svar.value ;
    // Skriv ut det rätta svaret till användaren.
    p_resultat.textContent="Rätt svar: "+ städer[slumptal];
    // Rensa input-fältet så att det är  tomt
    input_svar.value="";
}