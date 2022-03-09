const btn = document.querySelector(".btn");
const resultado = document.querySelector(".resultado");

btn.addEventListener("click", palindromo);

function palindromo() {
 
    const palavra = document.querySelector(".input-text").value;

    //tamanho da palavra
    let len = palavra.length;

    //Recupera a metade inicial da palavra
    let start = palavra.substring(0, Math.floor(len/2)).toLowerCase();
 
    //Recupera a metade final da palavra
    let end = palavra.substring(len - Math.floor(len/2)).toLowerCase();

    //Inverte a parte final da palavra
    //let flip = end.split("").reverse().join("");
    let flip = [...end].reverse().join("");//outra forma de inversão

    //verificar se a metade inicial é igual a parte final
    if(start==flip){
        resultado.innerHTML = `${palavra.toUpperCase()} é um palindromo.`;
    }else{
        resultado.innerHTML = `${palavra.toUpperCase()} NÃO é um palindromo.`;
    }

}
