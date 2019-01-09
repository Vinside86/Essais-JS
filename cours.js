/*var a=document.getElementById("langages").innerHTML ='';
console.log(a);*/


function modifHTML (){
    document.getElementById("langages").insertAdjacentHTML("afterEnd",'<p>En voici une<a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation"> liste </a>plus exhaustive</p>');

}

var titreElt =document.querySelector("h1");

titreElt.classList.remove("debut");
titreElt.classList.add("titre");



