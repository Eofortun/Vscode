/*-=-=-=-=-=-=-=-=-=RANDOMIZAÇÃO=-=-=-=-=-=-=-=-=-=*/
function ObterNumeroRandon(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
let Img0,Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9
let Images = [Img0,Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9]

for(let x = 0; x < Images.length;x++){
    Images[x] = document.querySelectorAll(".Images_get")[x]
}
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
let AmpliButton = document.getElementById("botão")
let Click_count = document.getElementById("counter")
let Nivel = document.getElementById("Amplifier_nivel")
let Selos = document.getElementById("Sing_counter")

AmpliButton.addEventListener("click", Ampli)
AmpliButton.addEventListener("click", Valor_calculo)
let Contador = 0
let Sing_num = 0
let Dupli = 1

/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
let Gold = 12345
let Valor = 200//15*10

let Ouro = document.getElementById("Ouro") //Meu ouro
let Custo = document.getElementById("Custo") //Custo do ampli

Ouro.innerText = `Ouro:${Gold}`
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

function Ampli(){ 
    
    let Try = ObterNumeroRandon(0,Dupli)
    console.log(Try)
    if(Contador <= 9 && Try == Contador || Contador == 0){
        Sing_num++
        Images[Contador].src = "imgs/star_yellow.png"
        Contador++
        Dupli = Dupli*2
        Click_count.innerText = `Clicks:${Contador}`
        Nivel.innerText = `${Contador}`
        console.log(`Item amplificado para +${Contador} no selo: ${Sing_num}`)
        
    }else if(Try =! Contador){
        console.log("Não amplificado!")
        Sing_num++
    }else if(Contador > 9 ){
        console.log("Item amplificado ao maximo!")
    }
    Selos.innerText = `Selos:${Sing_num}`
}
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
let Calculo = Gold-(Dupli+Valor)
function Valor_calculo(){

    if(Calculo < 0){
        alert("Gold insulficiente!")
    }else{
        Ouro.innerText = `Ouro:${Calculo}`
        Custo.innerText = `Custo:${Dupli+Valor}`
        
    }
    Calculo -= Dupli+Valor
    Sing_num++
}
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/



/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/