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
      const messagep1 = document.getElementById("erromesqt")
           messagep1.innerHTML = "" 
            let pp1qt = document.getElementById("p1-p-qt").value
            try {
              
              if(isNaN(pp1qt)) throw "não é um número"
              
              pp1qt = Number(pp1qt)
              if(pp1qt < 1) throw "é menor  que 1"
             
              if(pp1qt > 6) throw "é maior que 6"
           }
          ////estilização ********************************************************************************
            catch(errp1) {
              messagep1.innerHTML = "A quantidade "+ errp1 +"<br>pressione novamente para calcular sobre (planta 1)"
              document.getElementById("p1-p-qt").value= 1 //.style=blue//+ //.style=background:red// apaga a mensangem
              document.getElementById("p1-p-qt").style.backgroundColor="yellow"
              document.getElementById("erromesqt").style.color="red"
              setTimeout(myTimerp1, 9000);

                  function myTimerp1() {
                    
                    document.getElementById("p1-p-qt").style.backgroundColor=""
                    document.getElementById("erromesqt").style.color="white"
                  }
            }
          //-----------------------------hora---------------------------------------
          
          const messagep1h = document.getElementById("erromesh")
            messagep1h.innerHTML = "" 
            let pp1h = document.getElementById("p1-p-hora").value
            try {
              
              if(isNaN(pp1h)) throw "não é um número"
              
              pp1h = Number(pp1h)
              if(pp1h < 24) throw "é menor que 24hrs"
             
              if(pp1h > 720) throw " é maior que 720hrs"
           }
           ///estilização ********************************************************************************
            catch(errp1h) {
              messagep1.innerHTML = "O Valor "+ errp1h +"<br>pressione novamente para calcular sobre (planta 1)"
              document.getElementById("p1-p-hora").value = 24 //.style=blue//+ //.style=background:red// apaga a mensangem
              document.getElementById("p1-p-hora").style.backgroundColor="yellow"
              document.getElementById("erromesh").style.color="red"
              setTimeout(myTimerp1h, 9000);

                  function myTimerp1h() {
                    
                    document.getElementById("p1-p-hora").style.backgroundColor=""
                    document.getElementById("erromesh").style.color="white"
                  }
            }
            //---------------------------------moeda------------------------------------------
          
          const messagep1m = document.getElementById("erromesm")
            messagep1m.innerHTML = "" 
            let pp1m = document.getElementById("p1-p-moeda").value
            try {
              
              if(isNaN(pp1m)) throw "não é um numero "
              
              pp1m = Number(pp1m)
              if(pp1m < 1) throw " da moeda é menor que 1"
          }
           ///estilização ********************************************************************************
            catch(errp1m) {
              messagep1m.innerHTML = "O valor "+ errp1m +"<br>pressione novamente para calcular sobre (planta 1)"
              document.getElementById("p1-p-moeda").value= 250 //.style=blue//+ //.style=background:red// apaga a mensangem
              document.getElementById("p1-p-moeda").style.backgroundColor="yellow"
              document.getElementById("erromesm").style.color="red"
              setTimeout(myTimerp1m, 9000);

                  function myTimerp1m() {
                    
                    document.getElementById("p1-p-moeda").style.backgroundColor=""
                    document.getElementById("erromesm").style.color="white"
                  }
            }
            //------------------------------custo---------------------------------------------------
          
          const messagep1c = document.getElementById("erromesc")
          	messagep1c.innerHTML = "" 
            let pp1c = document.getElementById("p1-p-custo").value
            try {
              
              if(isNaN(pp1c)) throw "não é um numero "
              
              pp1c = Number(pp1c)
              if(pp1c < 1) throw "é menor  que 1 "
           }
           ///estilização ********************************************************************************
            catch(errp1c) {
              messagep1c.innerHTML = "o valor de custo , "+ errp1c +"<br>não foi inserida, <br>para calcular insira um valor, <br> ou calcule somente a planta sem custo."
              document.getElementById("p1-p-custo").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem
              document.getElementById("p1-p-custo").style.backgroundColor="yellow"
              document.getElementById("erromesc").style.color="red"
              setTimeout(myTimerp1c, 9000);
              setTimeout(myTimerp1cd, 9000);

                  function myTimerp1c() {
                    
                    document.getElementById("p1-p-custo").style.backgroundColor=""
                    document.getElementById("erromesc").style.color="white"
                    setTimeout(myTimerp1cd, 900);
                  }
                  function myTimerp1cd() {
                    document.getElementById("erromesc").innerHTML=""
                  }
            }
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
       //-------------------------------código verificação de uso-------------------------------------		
		        const messagep2L = document.getElementById("erromesh")	
		            messagep2L.innerHTML = "" 		
		            let pp2L = document.getElementById("p2-p-hora").value 		
		            try {		
		              		
		              if(isNaN(pp2L)) throw "não é um número"		
		              		
		              pp2L = Number(pp2L)		
		          	  
		          	  if(pp2L < 1) throw 	""
		           }		
 		///estilização ********************************************************************************		
		            catch(errp2L) {		
		              messagep2L.innerHTML = ""		
		              document.getElementById("p2-p-hora").value//.style=blue//+ //.style=background:red// apaga a mensangem		
		              setTimeout(myTimerp2L, 10);		
				
		                  function myTimerp2L() {		
		                    		
		                    document.getElementById("p2-hora").value=""		
		                    document.getElementById("p2-dia").value=""		
		                    document.getElementById("p2-semana").value=""	
		                    document.getElementById("p2-mes").value=""		
		                    document.getElementById("p2-troca").value=""
		                    document.getElementById("p2-p-qt").style.backgroundColor=""
		                    document.getElementById("p2-p-hora").style.backgroundColor=""
		                    document.getElementById("p2-p-moeda").style.backgroundColor=""
		                    document.getElementById("p2-p-custo").style.backgroundColor=""		
		                }		
		            }	
		//-------------------------------final código verificação de uso-------------------------------------		
          		

		//********************erros*************************************	
				      const messagep2 = document.getElementById("erromesqt")	
				           messagep2.innerHTML = "" 	
				            let pp2qt = document.getElementById("p2-p-qt").value	
				            try {	
				              	
				              if(isNaN(pp2qt)) throw "não é um número"	
				              	
				              pp2qt = Number(pp2qt)	
				              if(pp2qt < 1) throw "é menor  que 1"	
				             	
				              if(pp2qt > 6) throw "é maior que 6"	
				           }	
          ////estilização ********************************************************************************	
			            catch(errp2) {	
			              messagep2.innerHTML = "A quantidade "+ errp2 +"<br>pressione novamente para calcular sobre (planta 1)"	
			              document.getElementById("p2-p-qt").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem	
			              document.getElementById("p2-p-qt").style.backgroundColor="yellow"	
			              document.getElementById("erromesqt").style.color="red"	
			              setTimeout(myTimerp2, 9000);	
				
			                  function myTimerp2() {	
			                    	
			                    document.getElementById("p2-p-qt").style.backgroundColor=""	
			                    document.getElementById("erromesqt").style.color="white"	
			                  }	
			            }	
          //-----------------------------hora---------------------------------------	
          	
			          const messagep2h = document.getElementById("erromesh")	
			            messagep2h.innerHTML = "" 	
			            let pp2h = document.getElementById("p2-p-hora").value	
			            try {	
			              	
			              if(isNaN(pp2h)) throw "não é um número"	
			              	
			              pp2h = Number(pp2h)	
			              if(pp2h < 24) throw "é menor que 24hrs"	
			             	
			              if(pp2h > 720) throw " é maior que 720hrs"	
			           }	
           ///estilização ********************************************************************************	
			            catch(errp2h) {	
			              messagep2.innerHTML = "O Valor "+ errp2h +"<br>pressione novamente para calcular sobre (planta 2)"	
			              document.getElementById("p2-p-hora").value = ""//.style=blue//+ //.style=background:red// apaga a mensangem	
			              document.getElementById("p2-p-hora").style.backgroundColor="yellow"	
			              document.getElementById("erromesh").style.color="red"	
			              setTimeout(myTimerp2h, 9000);	
				
			                  function myTimerp2h() {	
			                    	
			                    document.getElementById("p2-p-hora").style.backgroundColor=""	
			                    document.getElementById("erromesh").style.color="white"	
			                  }	
			            }	
            //---------------------------------moeda------------------------------------------	
          	
			          const messagep2m = document.getElementById("erromesm")	
			            messagep2m.innerHTML = "" 	
			            let pp2m = document.getElementById("p2-p-moeda").value	
			            try {	
			              	
			              if(isNaN(pp2m)) throw "não é um numero "	
			              	
			              pp2m = Number(pp2m)	
			              if(pp2m < 1) throw " da moeda é menor que 1"	
			          }	
           ///estilização ********************************************************************************	
			            catch(errp2m) {	
			              messagep2m.innerHTML = "O valor "+ errp2m +"<br>pressione novamente para calcular sobre (planta 2)"	
			              document.getElementById("p2-p-moeda").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem	
			              document.getElementById("p2-p-moeda").style.backgroundColor="yellow"	
			              document.getElementById("erromesm").style.color="red"	
			              setTimeout(myTimerp2m, 9000);	
				
			                  function myTimerp2m() {	
			                    	
			                    document.getElementById("p2-p-moeda").style.backgroundColor=""	
			                    document.getElementById("erromesm").style.color="white"	
			                  }	
			            }	
            //------------------------------custo---------------------------------------------------	
          			const messagep2c = document.getElementById("erromesc")	
			          	messagep2c.innerHTML = "" 
			            let pp2c = document.getElementById("p2-p-custo").value	
			            try {	
			              	
			              if(isNaN(pp2c)) throw "não é um numero "	
			              	
			              pp2c = Number(pp2c)	
			              if(pp2c < 1) throw "é menor  que 1 "	
			           }	
           ///estilização ********************************************************************************	
            catch(errp2c) {	
              messagep2c.innerHTML = "o valor de custo , "+ errp2c +"<br>não foi inserida, <br>para calcular insira um valor, <br> ou calcule somente a planta sem custo."	
              document.getElementById("p2-p-custo").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem	
              document.getElementById("p2-p-custo").style.backgroundColor="yellow"	
              document.getElementById("erromesc").style.color="red"	
              setTimeout(myTimerp2c, 9000);	
              setTimeout(myTimerp2cd, 9000);	

				 function myTimerp2c() {	
                    	
                    document.getElementById("p2-p-custo").style.backgroundColor=""	
                    document.getElementById("erromesc").style.color="white"	
                    setTimeout(myTimerp2cd, 900);	
                  }	
                  function myTimerp2cd() {	
                    document.getElementById("erromesc").innerHTML=""	
                  }	
            	}	
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
         }

//******************************************************planta 4********************************************************

//******************************************************planta 5********************************************************

//******************************************************planta 6********************************************************

       


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
