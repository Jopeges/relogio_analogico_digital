let digitalRelogio = document.querySelector(".digital");
let sPonteiro = document.querySelector(".p_s");
let mPonteiro = document.querySelector(".p_m");
let hPonteiro = document.querySelector(".p_h");
 
function atualizacaoRelogio(){
    let agora = new Date();
    let hora = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();


    digitalRelogio.innerHTML = `${fixarZero(hora)}:${fixarZero(minutos)}:${fixarZero(segundos)}`;
    
    let sGrau = ((360 / 60) * segundos) - 90;
    let mGrau = ((360 / 60) * minutos) - 90;
    let hGrau = ((360 / 12) * hora) - 90;

    sPonteiro.style.transform = `rotate(${sGrau}deg)`;
    mPonteiro.style.transform = `rotate(${mGrau}deg)`;
    hPonteiro.style.transform = `rotate(${hGrau}deg)`;
}

function fixarZero(time){
   return time < 10 ? `0${time}` : time;

}

setInterval(atualizacaoRelogio, 1000);
atualizacaoRelogio();