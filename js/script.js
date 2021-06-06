document.getElementById("gen").addEventListener("click",function(){
    // alert("button genera");

    // var sconto = document.getElementById("sconto").innerHTML;
    //-----------input--------------
    var nome = document.getElementById("nome").value; //nome passeggero
    console.log(nome);

    var distanza = parseInt(document.getElementById("km").value); //nome passeggero
    console.log(distanza); //no output ,da usare per calcolo costo biglietto

    var anni = document.getElementById("età").value;
    anni = anni.toLowerCase();
    console.log(anni);

    var prezzo = distanza * 0.21 ; // calcolo prezzo biblietto 
    console.log(prezzo);
    //calcolo sconto su prezzo biglietto
    if(anni=="minorenne"){
        prezzo = prezzo - (prezzo * 0.2);
        document.getElementById("sconto").innerHTML="Sconto Minorenne";
    }
    else if(anni=="over65"){
             prezzo = prezzo - (prezzo * 0.4);
             document.getElementById("sconto").innerHTML="Sconto Over 65";

            }
         else{
             document.getElementById("sconto").innerHTML="niente sconti";
         }
    // console.log("prezzo scontato" + prezzo);
    
    //genero numCarrozza
    var numCarrozza = Math.floor(Math.random() * 9  + 1);  //numero random 1 <= x <= 9
    //genero codCP
    var codCP = Math.floor(Math.random() * 10000 + 90000); // numero random 90k <= x <= 100k
    console.log(codCP);

    //-----------------output-----------------
    document.getElementById("nomeP").innerHTML = nome; //scrittura in output del nome
    document.getElementById("costo").innerHTML= prezzo.toFixed(2) + "€";
    document.getElementById("carrozza").innerHTML=numCarrozza;
    document.getElementById("codCP").innerHTML=codCP;
});




// if(età < 18){
//     prezzo = prezzo - (prezzo * 0.2); //sconto del 20%  prezzo -= prezzo * 0.2 --> forma abbreviata
//     document.getElementById("sconto").innerHTML="sconto 20%";
// }
// else if(età > 65){
//             prezzo = prezzo - (prezzo * 0.4); //sconto del 40%
//             document.getElementById("sconto").innerHTML="sconto 40%";
//         }
//      else{
//          document.getElementById("sconto").innerHTML="niente sconto per te ....hahahah";
//      }
