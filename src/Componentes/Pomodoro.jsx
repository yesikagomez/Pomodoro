import React, { useState } from 'react';

const Pomodoro= () =>{
    const [parar,Romper] = useState(5);
    const [minutos,Session]=useState(25);
    const [cronometro,Temporizador]=useState(25);
    const [numero,Calcular]=useState(0);
    const [time,Detener]=useState();
    
    let reta = (minutos-parar);
    let contador=numero;
    let tiempo = cronometro;
    var audio = document.getElementById("audio"); 

    if(parar|| minutos)
    {
        if(parar>60)
        {
            Romper(60);
        }else if(parar<1)
        {
            Romper(1)
        }
        if(minutos>60)
        {
            Session(60);
        }else if(minutos<1)
        {
            Session(1);
        }
    }

    function aumentar(){
        Session(minutos +1);
        Temporizador(minutos+1);

    }

    function disminuir(){
        Session(minutos - 1);
        Temporizador(minutos-1);
    }
    function start(){
         if(contador==0){
            tiempo=tiempo-1;
            Temporizador(tiempo);
                contador=60;
                Calcular(contador);
            }
            
            if (tiempo==reta && contador==1){
                contador=contador-1;
                Calcular(contador);
                audio.play(); 
             }else{
           Detener(setTimeout((e)=>start() ,1000)); 
            contador=contador-1;
            
            Calcular(contador);
            }
        }
    function update()
    {
        Romper(5);
        Session(25);
        Calcular(0);
        Temporizador(25);
    }

    function stop() {
            clearTimeout(time);
        }
    
        return (
<div className="container justify-content-center">
    <section className="hero is-primary">
        <div className="hero-body">
            <p className="title">
                25 + 5 clock
            </p>
        </div>
    </section>
    <section classclassName="section has-background-warning" id="contenedor">
        <div className="container ">
            <div className=" is-multiline is-mobile" >
                <div className="level is-mobile mx-6">
                    <div className=" is-12 py-5">
                        <h3 className="has-text-weight-bold is-size-1 is-family-code">Break Length</h3>
                        <button className="mx-6 mt-4 icon is-medium button is-dark is-small" onClick={(e)=>Romper(parar -1)} ><i class="fas fa-arrow-circle-down"></i></button>
                        <label className="has-text-weight-bold is-size-2 is-family-code">{parar}</label>
                        <button className="mx-6 mt-4 icon is-medium button is-dark is-small" onClick={(e)=>Romper(parar + 1)}><i class="fas fa-arrow-circle-up"></i></button> 
                    </div> 
                    <div className=" is-12 py-5" id="seguir">
                        <h3 className="has-text-weight-bold is-size-1 is-family-code">Session Length</h3>
                        <button className="mx-6 mt-4 icon is-medium button is-dark is-small" onClick={(e)=>disminuir()} ><i class="fas fa-arrow-circle-down"></i></button>
                        <label className="has-text-weight-bold is-size-2 is-family-code">{minutos}</label>
                        <button className="mx-6 mt-4 icon is-medium button is-dark is-small" onClick={(e)=>aumentar()}><i class="fas fa-arrow-circle-up"></i></button> 
                    </div>
                </div> 
                <div className=" p-3 ml-3 hero is-size-2 has-text-weight-bold">
                    <div id="reloj" className="has-text-centered is-family-code">    
                        <h2 className="has-text-centered is-family-code has-text-weight-bold is-size-2">Session</h2>
                          {cronometro} : {contador.toString().padStart(2,'0')} 
                    </div>
                </div>
                <div classNam="icon" id="icon">
                    <button className="mx-2 icon is-medium button is-dark"  onClick={(e)=>start()}><i class="fas fa-play-circle"></i></button>
                    <button className="mx-2 button icon is-medium is-dark" onClick={(e)=>stop()} ><i class="fas fa-pause-circle"></i></button>
                    <button className="mx-2 button icon is-medium is-dark" onClick={(e)=>update()} ><i class="fas fa-sync-alt"></i></button>
                </div>
            </div>
        </div> 
        <div>
        <audio
          id="audio"
          preload="auto"
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" 
        />
      </div>      
    </section>
</div>
        )
}

export default Pomodoro;
