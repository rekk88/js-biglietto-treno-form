var nomePasseggero = document.getElementById("nomeP");
var sconto = document.getElementById("sconto");
var costo = document.getElementById("costo");
var carrozza = document.getElementById("carrozza");
var codice = document.getElementById("codCP");
var distanzaType = false;
var nomeType = false;

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
    console.log(distanza);
    if(typeof(distanza) == "number" && distanza > 0 ){
       distanzaType = true;
    }
    else{
       distanzaType = false;
    }
    if(nome.length > 3){
        nomeType = true;
    }
    else{
        nomeType=false;
    }
    console.log(distanzaType);
    console.log(nomeType);

    if(distanzaType && nomeType){
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
        nomePasseggero.innerHTML = nome; //scrittura in output del nome
        costo.innerHTML= prezzo.toFixed(2) + "€";
        carrozza.innerHTML=numCarrozza;
        codice.innerHTML=codCP;
    
        document.getElementById("biglietto").className = "display";
    
    }
    else{
        alert("dati errati");
    }
    
});

document.getElementById("annulla").addEventListener("click",function(){
    // alert("annulla");

    //svuoto tutti i campi di testo 
    nomePasseggero.innerHTML = "";
    sconto.innerHTML= "";
    costo.innerHTML="";
    carrozza.innerHTML="";
    codice.innerHTML="";

    document.getElementById("biglietto").className = "display_none";

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
