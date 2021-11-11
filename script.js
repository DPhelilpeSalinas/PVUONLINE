/*http://embuscadocodigo.com/codigos/javascript/somar-valores-de-input.html*/
//https://www.w3schools.com/css/css_positioning.asp
//https://www.w3schools.com/js/tryit.asp?filename=tryjs_iterate_map
//https://www.w3schools.com/js/js_timing.asp  tempo funções de tempo

function horamoeda() {
  //planta 1
    var diahora = 24
    var semanadia = 7
    var mesdia = 30
    var semhora = 168
    var meshora = 720

    var horapp1 = document.querySelector("#p1-p-hora").value.valueOf()
    var moedapp1 = document.querySelector("#p1-p-moeda").value.valueOf()
    var qtp1 = document.querySelector("#p1-p-qt").value.valueOf()
    var csp1 = document.querySelector("#p1-p-custo").value.valueOf()
    //calculos
      //sem custo ou quantidade
      const resmoedahorap1 =  moedapp1 / horapp1
      const resmesdiap1 =  resmoedahorap1 * diahora
      const ressemp1 =  resmoedahorap1 * semhora
      const resmesp1 =  resmoedahorap1 * meshora
      const restrocap1 = meshora / horapp1
      //quantidade
      //********************erros*************************************
      const messagep1 = document.getElementById("erromes")
            messagep1.innerHTML = "" 
            let pp1qt = document.getElementById("p1-p-qt").value
            try {
              
              if(isNaN(pp1qt)) throw "não é um numero Planta 1"
              
              pp1qt = Number(pp1qt)
              if(pp1qt < 1) throw "é menor  que 1 Planta 1"
             
              if(pp1qt > 6) throw "é maior que 6 Planta 1"
           }
          ////estilização ********************************************************************************
            catch(errp1) {
              messagep1.innerHTML = "A informação "+ errp1 +"<br>pressione novamente para calcular sobre planta 1"
              document.getElementById("p1-p-qt").value= 1 //.style=blue//+ //.style=background:red// apaga a mensangem
              document.getElementById("p1-p-qt").style.backgroundColor="yellow"
              document.getElementById("erromes").style.color="red"
              setTimeout(myTimerp1, 9000);

                  function myTimerp1() {
                    
                    document.getElementById("p1-p-qt").style.backgroundColor=""
                    document.getElementById("erromes").style.color="white"
                  }
            }
          //-----------------------------hora---------------------------------------
          /*
          const messagep1 = document.getElementById("erromes")
            messagep1.innerHTML = "" 
            let pp1h = document.getElementById("p1-p-hora").value
            try {
              
              if(isNaN(pp1qt)) throw "não é um numero Planta 1"
              
              pp1qt = Number(pp1qt)
              if(pp1qt < 1) throw "é menor  que 1 Planta 1"
             
              if(pp1qt > 6) throw "é maior que 6 Planta 1"
           }
           ///estilização ********************************************************************************
            catch(errp1) {
              messagep1.innerHTML = "A informação "+ errp1 +"<br>pressione novamente para calcular sobre planta 1"
              document.getElementById("p1-p-qt").value= 1 //.style=blue//+ //.style=background:red// apaga a mensangem
              document.getElementById("p1-p-qt").style.backgroundColor="yellow"
              document.getElementById("erromes").style.color="red"
              setTimeout(myTimerp1, 9000);

                  function myTimerp1() {
                    
                    document.getElementById("p1-p-qt").style.backgroundColor=""
                    document.getElementById("erromes").style.color="white"
                  }
            }*/
            //---------------------------------moeda------------------------------------------
          /*
          const messagep1 = document.getElementById("erromes")
            messagep1.innerHTML = "" 
            let pp1h = document.getElementById("p1-p-hora").value
            try {
              
              if(isNaN(pp1qt)) throw "não é um numero Planta 1"
              
              pp1qt = Number(pp1qt)
              if(pp1qt < 1) throw "é menor  que 1 Planta 1"
             
              if(pp1qt > 6) throw "é maior que 6 Planta 1"
           }
           ///estilização ********************************************************************************
            catch(errp1) {
              messagep1.innerHTML = "A informação "+ errp1 +"<br>pressione novamente para calcular sobre planta 1"
              document.getElementById("p1-p-qt").value= 1 //.style=blue//+ //.style=background:red// apaga a mensangem
              document.getElementById("p1-p-qt").style.backgroundColor="yellow"
              document.getElementById("erromes").style.color="red"
              setTimeout(myTimerp1, 9000);

                  function myTimerp1() {
                    
                    document.getElementById("p1-p-qt").style.backgroundColor=""
                    document.getElementById("erromes").style.color="white"
                  }
            }*/
            //------------------------------custo---------------------------------------------------
          /*/*
          const messagep1 = document.getElementById("erromes")
            messagep1.innerHTML = "" 
            let pp1h = document.getElementById("p1-p-hora").value
            try {
              
              if(isNaN(pp1qt)) throw "não é um numero Planta 1"
              
              pp1qt = Number(pp1qt)
              if(pp1qt < 1) throw "é menor  que 1 Planta 1"
             
              if(pp1qt > 6) throw "é maior que 6 Planta 1"
           }
           ///estilização ********************************************************************************
            catch(errp1) {
              messagep1.innerHTML = "A informação "+ errp1 +"<br>pressione novamente para calcular sobre planta 1"
              document.getElementById("p1-p-qt").value= 1 //.style=blue//+ //.style=background:red// apaga a mensangem
              document.getElementById("p1-p-qt").style.backgroundColor="yellow"
              document.getElementById("erromes").style.color="red"
              setTimeout(myTimerp1, 9000);

                  function myTimerp1() {
                    
                    document.getElementById("p1-p-qt").style.backgroundColor=""
                    document.getElementById("erromes").style.color="white"
                  }
            }*/
          const totmhp1 =  resmoedahorap1 * qtp1
          const totdp1 =  resmesdiap1 * qtp1
          const totsp1 =  ressemp1 * qtp1
          const totmp1 =  resmesp1 * qtp1
          const tottrp1 =  restrocap1 * qtp1
          // custo
          const customp1 =  totmp1 - csp1
          const custodp1 =  customp1 / mesdia
          const custosp1 =  custodp1 * semanadia
          const custohp1 =  custodp1 / diahora
          

          var printhmp1 = custohp1
          var printdp1 = custodp1
          var printsp1 = custosp1
          var printmp1 = customp1
          var printtrp1 = tottrp1
        
             document.getElementById("p1-hora").value = printhmp1.toFixed(2).replace(".",",")
             document.getElementById("p1-dia").value = printdp1.toFixed(2).replace(".",",")
             document.getElementById("p1-semana").value = printsp1.toFixed(2).replace(".",",")
             document.getElementById("p1-mes").value = printmp1.toFixed(2).replace(".",",")
             document.getElementById("p1-troca").value = printtrp1.toFixed(0).replace(".",",")

      //planta 2*********************************************************************************************************************************************
   var horapp2 = document.querySelector("#p2-p-hora").value.valueOf()
    var moedapp2 = document.querySelector("#p2-p-moeda").value.valueOf()
    var qtp2 = document.querySelector("#p2-p-qt").value.valueOf()
    var csp2 = document.querySelector("#p2-p-custo").value.valueOf()
    //calculos
      //sem custo ou quantidade
      const resmoedahorap2 =  moedapp2 / horapp2
      const resmesdiap2 =  resmoedahorap2 * diahora
      const ressemp2 =  resmoedahorap2 * semhora
      const resmesp2 =  resmoedahorap2 * meshora
      const restrocap2 = meshora / horapp2
      //quantidade
      //********************erros*************************************
      const messagep2 = document.getElementById("erromes")
            //messagep2.innerHTML = "" 
            let pp2qt = document.getElementById("p2-p-qt").value
            //let pp2qt = document.getElementById("pp2-p-qt").style="background:red"
            try {
              
              if(isNaN(pp2qt)) throw "não é um numero Planta 2"
              
              pp2qt = Number(pp2qt)              
             
              if(pp2qt > 6) throw "é maior que 6 Planta 2"
              
            }
          ////estilização ********************************************************************************
            catch(errp2) {
              messagep2.innerHTML = "A informação "+ errp2 +"<br>pressione novamente para calcular sobre planta 2"
             
              document.getElementById("p2-p-qt").style.backgroundColor="yellow"
              document.getElementById("p2-p-hora").style.backgroundColor="yellow"
              document.getElementById("p2-p-moeda").style.backgroundColor="yellow"
              document.getElementById("erromes").style.color="red"
              setTimeout(myTimerp2, 9000);

                  function myTimerp2() {
                    
                    document.getElementById("p2-p-qt").style.backgroundColor=""
                    document.getElementById("p2-p-hora").style.backgroundColor=""
                    document.getElementById("p2-p-moeda").style.backgroundColor=""
                    document.getElementById("erromes").style.color="white"
                  }
            }
/*
           //+++++++++++++++++++++++++++++++++++++++++++planta hora++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                const messagep2h = document.getElementById("erromes")
            messagep2h.innerHTML = "" 
            let pp2hora = document.getElementById("p2-p-hora").value
            //let pp2qt = document.getElementById("pp2-p-qt").style="background:red"
            try {
              
              if(isNaN(pp2hora)) throw "não é um numero "
              
              pp2hora = Number(pp2hora)              
             
              if(pp2hora > 720) throw "é maior que 6 "
              
            }
          ////estilização ********************************************************************************
            catch(errp2h) {
              messagep2h.innerHTML = "A informação "+ errp2h +"<br>pressione novamente para calcular sobre planta 2"
             
              
              document.getElementById("p2-p-hora").style.backgroundColor="yellow"
              
              document.getElementById("erromes").style.color="red"
              setTimeout(myTimerp2h, 9000);

                  function myTimerp2h() {
                    
                    document.getElementById("p2-p-hora").style.backgroundColor="white"
                    document.getElementById("erromes").style.color="white"
                  }
            }
            //*********************************final planta hora estilização e erros****************************************************
            //*********************************zerar calculo planta 2 quando nao usado**************************************************
                  const messagep2u = document.getElementById("p2-p-moeda")
            messagep2u.innerHTML = "" 
            let pp2u = document.getElementById("p2-p-moeda").value
            //let pp2qt = document.getElementById("pp2-p-qt").style="background:red"
            try {
              
              
              
              pp2u = Number(pp2u)              
             
              if(pp2u <1) throw "é maior que 6 "
              
            }
          ////estilização ********************************************************************************
            catch(errp2u) {
              messagep2u.innerHTML = ""
              setTimeout(myTimerp2u, 1000);

                  function myTimerp2u() {
                    
                    
                    document.getElementById("p2-hora").value=""
                    document.getElementById("p2-dia").value=""
                    document.getElementById("p2-semana").value=""
                    document.getElementById("p2-mes").value=""
                    document.getElementById("p2-troca").value=""
                    

 
                  }

                }*/
            //*************************************final zerar calculo planta 2 quando não é usado
          const totmhp2 =  resmoedahorap2 * qtp2
          const totdp2 =  resmesdiap2 * qtp2
          const totsp2 =  ressemp2 * qtp2
          const totmp2 =  resmesp2 * qtp2
          const tottrp2 =  restrocap2 * qtp2
          // custo
          const customp2 =  totmp2 - csp2
          const custodp2 =  customp2 / mesdia
          const custosp2 =  custodp2 * semanadia
          const custohp2 =  custodp2 / diahora
          

          var printhmp2 = custohp2
          var printdp2 = custodp2
          var printsp2 = custosp2
          var printmp2 = customp2
          var printtrp2 = tottrp2
        
             document.getElementById("p2-hora").value = printhmp2.toFixed(2).replace(".",",")
             document.getElementById("p2-dia").value = printdp2.toFixed(2).replace(".",",")
             document.getElementById("p2-semana").value = printsp2.toFixed(2).replace(".",",")
             document.getElementById("p2-mes").value = printmp2.toFixed(2).replace(".",",")
             document.getElementById("p2-troca").value = printtrp2.toFixed(0).replace(".",",")

//******************************************************planta 4********************************************************

//******************************************************planta 5********************************************************

//******************************************************planta 6********************************************************

      } 


/**********************************************************************************************************/

function limparmes() {
  const message = document.getElementById("erromes")
  message.innerHTML = ""
  let p6phora = document.getElementById("p6-p-hora").value
  try {
    

    if(isNaN(p6phora)) throw "não é um Número, a tabela só aceita números!"
    
    p6phora = Number(p6phora)
    if(p6phora < 24) throw "valor muito baixo no campo ( Hora Planta 6)"
    
    if(p6phora > 720) throw "valor muito alto no campo ( Hora Planta 6)"
    
  }
  catch(err) {
    message.innerHTML = "Corriga o erro: " + err
    document.getElementById("p2-p-hora").value=""
    document.getElementById("p2-p-hora").value=""
}
}
