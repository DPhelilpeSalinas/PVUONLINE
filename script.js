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
           //messagep1.innerHTML = "" 
            let pp1qt = document.getElementById("p1-p-qt").value
            try {
              
              if(isNaN(pp1qt)) throw "não é um número"
              
              pp1qt = Number(pp1qt)
              if(pp1qt < 1) throw "é menor  que 1"
             
              if(pp1qt > 6) throw "é maior que 6"
           }
          ////estilização ********************************************************************************
            catch(errp1) {
              messagep1.innerHTML = "A quantidade "+ errp1 +"<br>pressione novamente para calcular sobre <br>(planta 1)"
              document.getElementById("p1-p-qt").value= 1 //.style=blue//+ //.style=background:red// apaga a mensangem
              document.getElementById("p1-p-qt").style.backgroundColor="yellow"
              document.getElementById("erromesqt").style.color="red"
              setTimeout(myTimerp1, 9000);
              setTimeout(myTimerp1Lqt, 12000);

                  function myTimerp1() {
                    
                    document.getElementById("p1-p-qt").style.backgroundColor=""
                    document.getElementById("erromesqt").style.color="white"
                  }
                  function myTimerp1Lqt() {
                    
                    document.getElementById("erromesqt").value=""
                  }
            }
          //-----------------------------hora---------------------------------------
          
          const messagep1h = document.getElementById("erromesh")
            //messagep1h.innerHTML = "" 
            let pp1h = document.getElementById("p1-p-hora").value
            try {
              
              if(isNaN(pp1h)) throw "não é um número"
              
              pp1h = Number(pp1h)
              if(pp1h < 24) throw "é menor que 24hrs"
             
              if(pp1h > 720) throw " é maior que 720hrs"
           }
           ///estilização ********************************************************************************
            catch(errp1h) {
              messagep1.innerHTML = "O Valor "+ errp1h +"<br>pressione novamente para calcular sobre <br>(planta 1)"
              document.getElementById("p1-p-hora").value = 72 //.style=blue//+ //.style=background:red// apaga a mensangem
              document.getElementById("p1-p-hora").style.backgroundColor="yellow"
              document.getElementById("erromesh").style.color="red"
              setTimeout(myTimerp1h, 9000);
              setTimeout(myTimerp1h, 12000);

                  function myTimerp1h() {
                    
                    document.getElementById("p1-p-hora").style.backgroundColor=""
                    document.getElementById("erromesh").style.color="white"
                  }
                  function myTimerp1hL() {
                    
                    document.getElementById("erromesm").value=""
                  }
            }
            //---------------------------------moeda------------------------------------------
          
          const messagep1m = document.getElementById("erromesm")
            //messagep1m.innerHTML = "" 
            let pp1m = document.getElementById("p1-p-moeda").value
            try {
              
              if(isNaN(pp1m)) throw "não é um numero "
              
              pp1m = Number(pp1m)
              if(pp1m < 1) throw " da moeda é menor que 1"
          }
           ///estilização ********************************************************************************
            catch(errp1m) {
              messagep1m.innerHTML = "O valor "+ errp1m +"<br>pressione novamente para calcular sobre<br> (planta 1)"
              document.getElementById("p1-p-moeda").value= 250 //.style=blue//+ //.style=background:red// apaga a mensangem
              document.getElementById("p1-p-moeda").style.backgroundColor="yellow"
              document.getElementById("erromesm").style.color="red"
              setTimeout(myTimerp1m, 9000);
              setTimeout(myTimerp1mL, 12000);
              setTimeout(myTimerp1mLL, 12);

                  function myTimerp1m() {
                    
                    document.getElementById("p1-p-moeda").style.backgroundColor=""
                    document.getElementById("erromesm").style.color="white"
                  }
                  function myTimerp1mL() {
                    
                    document.getElementById("erromesm").value=""
                  }
                  function myTimerp1mLL() {
                    
                    document.getElementById("p1-hora").value=""
                    document.getElementById("p1-dia").value=""
                    document.getElementById("p1-semana").value=""
                    document.getElementById("p1-mes").value=""
                    document.getElementById("p1-troca").value=""
                  }
            }
            //------------------------------custo---------------------------------------------------
          
          const messagep1c = document.getElementById("erromesc")
          	//messagep1c.innerHTML = "" 
            let pp1c = document.getElementById("p1-p-custo").value
            try {
              
              if(isNaN(pp1c)) throw "não é um numero "
              
              pp1c = Number(pp1c)
              if(pp1c < 1) throw "é menor  que 1 "
           }
           ///estilização ********************************************************************************
            catch(errp1c) {
              messagep1c.innerHTML = "o valor de custo , "+ errp1c +"<br>não foi inserida, <br>para calcular insira um valor, <br> ou calcule somente a planta sem custo.<br>(Planta 1)"
              document.getElementById("p1-p-custo").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem
              document.getElementById("p1-p-custo").style.backgroundColor="yellow"
              document.getElementById("erromesc").style.color="red"
              setTimeout(myTimerp1c, 9000);
              setTimeout(myTimerp1cd, 12000);

                  function myTimerp1c() {
                    
                    document.getElementById("p1-p-custo").style.backgroundColor=""
                    document.getElementById("erromesc").style.color="white"
                    
                  }
                  function myTimerp1cd() {
                    document.getElementById("erromesqt").innerHTML=""
                    document.getElementById("erromesh").innerHTML=""
                    document.getElementById("erromesm").innerHTML=""
                    document.getElementById("erromesc").innerHTML=""

                    document.getElementById("erromesqtp2").innerHTML=""
                    document.getElementById("erromeshp2").innerHTML=""
                    document.getElementById("erromesmp2").innerHTML=""
                    document.getElementById("erromescp2").innerHTML=""
                    document.getElementById("erromesup2").innerHTML=""

                    document.getElementById("erromesqtp3").innerHTML=""
                    document.getElementById("erromeshp3").innerHTML=""
                    document.getElementById("erromesmp3").innerHTML=""
                    document.getElementById("erromescp3").innerHTML=""
					document.getElementById("erromesup3").innerHTML=""

                    document.getElementById("erromesqtp4").innerHTML=""
                    document.getElementById("erromeshp4").innerHTML=""
                    document.getElementById("erromesmp4").innerHTML=""
                    document.getElementById("erromescp4").innerHTML=""
                    document.getElementById("erromesup4").innerHTML=""

                    document.getElementById("erromesqtp5").innerHTML=""
                    document.getElementById("erromeshp5").innerHTML=""
                    document.getElementById("erromesmp5").innerHTML=""
                    document.getElementById("erromescp5").innerHTML=""
                    document.getElementById("erromesup5").innerHTML=""

                    document.getElementById("erromesqtp6").innerHTML=""
                    document.getElementById("erromeshp6").innerHTML=""
                    document.getElementById("erromesmp6").innerHTML=""
                    document.getElementById("erromescp6").innerHTML=""
                    document.getElementById("erromesqtp6").innerHTML=""
                    document.getElementById("erromeshp6").innerHTML=""
                    document.getElementById("erromesmp6").innerHTML=""
                    document.getElementById("erromescp6").innerHTML=""
                    document.getElementById("erromesup6").innerHTML=""
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
	       	var diahorap2 = 24
		    var semanadiap2 = 7
		    var mesdiap2 = 30
		    var semhorap2 = 168
		    var meshorap2 = 720
	       	var horapp2 = document.querySelector("#p2-p-hora").value.valueOf()	
		    var moedapp2 = document.querySelector("#p2-p-moeda").value.valueOf()	
		    var qtp2 = document.querySelector("#p2-p-qt").value.valueOf()	
		    var csp2 = document.querySelector("#p2-p-custo").value.valueOf()	
	    //calculos	
	      //sem custo ou quantidade	
		      const resmoedahorap2 =  moedapp2 / horapp2	
		      const resmesdiap2 =  resmoedahorap2 * diahorap2	
		      const ressemp2 =  resmoedahorap2 * semhorap2	
		      const resmesp2 =  resmoedahorap2 * meshorap2	
		      const restrocap2 = meshorap2 / horapp2	
      			//quantidade	
       //-------------------------------código verificação de uso-------------------------------------		
		       const messagep2L = document.getElementById("erromesup2")	
		            //messagep2L.innerHTML = "" 		
		            let pp2L = document.getElementById("p2-p-hora").value 		
		            try {		
		              		
		              if(isNaN(pp2L)) throw "não é um número"		
		              		
		              pp2L = Number(pp2L)		
		          	  
		          	  if(pp2L < 1) throw 	""
		           }		
 		///estilização ********************************************************************************		
		            catch(errp2L) {		
		             // messagep2L.innerHTML = ""		
		              document.getElementById("p2-p-hora").value//.style=blue//+ //.style=background:red// apaga a mensangem		
		              setTimeout(myTimerp2L, 100);		
				
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
          		const messagep2us = document.getElementById("erromesqt")	
				           //messagep2.innerHTML = "" 	
				            let pp2qtus = document.getElementById("p2-p-qt").value	
				            try {	
				              	
				              if(isNaN(pp2qtus)) throw "não é um número"	
				              	
				              pp2qtus = Number(pp2qtus)	
				              if(pp2qtus >= 1) throw "é menor  que 1"	
				             	
				              
				           }	
        ////estilização ********************************************************************************	
			            catch(errp2us) {	//chave nao carregada 1

		//********************erros*************************************	
				      const messagep2 = document.getElementById("erromesqt")	
				           //messagep2.innerHTML = "" 	
				            let pp2qt = document.getElementById("p2-p-qt").value	
				            try {	
				              	
				              if(isNaN(pp2qt)) throw "não é um número"	
				              	
				              pp2qt = Number(pp2qt)	
				              if(pp2qt < 1) throw "é menor  que 1"	
				             	
				              if(pp2qt > 6) throw "é maior que 6"	
				           }	
          ////estilização ********************************************************************************	
			            catch(errp2) {	
			              messagep2.innerHTML = "A quantidade "+ errp2 +"<br>pressione novamente para calcular sobre (planta 2)"	
			              document.getElementById("p2-p-qt").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem	
			              document.getElementById("p2-p-qt").style.backgroundColor="yellow"	
			              document.getElementById("erromesqt").style.color="red"	
			              setTimeout(myTimerp2, 9000);	
				
			                  function myTimerp2() {	
			                    	
			                    document.getElementById("p2-p-qt").style.backgroundColor=""	
			                    document.getElementById("erromesqt").style.color="white"	
			                  }	
			            }
			        }
          //-----------------------------hora---------------------------------------	
          	
			          const messagep2h = document.getElementById("erromeshp2")	
			            //messagep2h.innerHTML = "" 	
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
			              document.getElementById("erromeshp2").style.color="red"	
			              setTimeout(myTimerp2h, 9000);	
				
			                  function myTimerp2h() {	
			                    	
			                    document.getElementById("p2-p-hora").style.backgroundColor=""	
			                    document.getElementById("erromeshp2").style.color="white"	
			                  }	
			            }	
            //---------------------------------moeda------------------------------------------	
          	
			          const messagep2m = document.getElementById("erromesmp2")	
			            //messagep2m.innerHTML = "" 	
			            let pp2m = document.getElementById("p2-p-moeda").value	
			            try {	
			              	
			              if(isNaN(pp2m)) throw "não é um numero "	
			              	
			              pp2m = Number(pp2m)	
			              if(pp2m < 1) throw " da moeda é menor que 1"	
			          }	
           ///estilização ********************************************************************************	
			            catch(errp2m) {	
			              messagep2m.innerHTML = "O valor "+ errp2m +"<br>pressione novamente para calcular sobre (planta 2)"	
			              //.style=blue//+ //.style=background:red// apaga a mensangem	
			              document.getElementById("p2-p-moeda").style.backgroundColor="yellow"	
			              document.getElementById("erromesmp2").style.color="red"	
			              setTimeout(myTimerp2m, 9000);	
				
			                  function myTimerp2m() {	
			                    	
			                    document.getElementById("p2-p-moeda").style.backgroundColor=""	
			                    document.getElementById("erromesmp2").style.color="white"	
			                  }	
			            }	
            //------------------------------custo---------------------------------------------------	
          			const messagep2c = document.getElementById("erromescp2")	
			          	//messagep2c.innerHTML = "" 
			            let pp2c = document.getElementById("p2-p-custo").value	
			            try {	
			              	
			              if(isNaN(pp2c)) throw "não é um numero "	
			              	
			              pp2c = Number(pp2c)	
			             if(pp2c < 1) throw "é menor  que 1 "	
			           }	
           ///estilização ********************************************************************************	
            catch(errp2c) {	
              messagep2c.innerHTML = "o valor de custo , "+ errp2c +"<br>não foi inserida, <br>para calcular insira um valor, <br> ou calcule somente a planta sem custo.(planta 2)"	
              document.getElementById("p2-p-custo").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem	
              document.getElementById("p2-p-custo").style.backgroundColor="yellow"	
              document.getElementById("erromescp2").style.color="red"	
              setTimeout(myTimerp2c, 9000);	
              	

				 function myTimerp2c() {	
                    	
                    document.getElementById("p2-p-custo").style.backgroundColor=""	
                    document.getElementById("erromescp2").style.color="white"	
                    
                  }	
            	}	
            
            
		          const totmhp2 =  resmoedahorap2 * qtp2	
		          const totdp2 =  resmesdiap2 * qtp2	
		          const totsp2 =  ressemp2 * qtp2	
		          const totmp2 =  resmesp2 * qtp2	
		          const tottrp2 =  restrocap2 * qtp2	
		          // custo	
		          const customp2 =  totmp2 - csp2	
		          const custodp2 =  customp2 / mesdiap2	
		          const custosp2 =  custodp2 * semanadiap2	
		          const custohp2 =  custodp2 / diahorap2	
          
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
         }//chave nao carregada 1
     
//------------------------------------------------------planta 3-----------------------------------------
//Planta 3*********************************************************************************************************************************************					
/*	       	var horapp3 = document.querySelector("#p3-p-hora").value.valueOf()			
		    var moedapp3 = document.querySelector("#p3-p-moeda").value.valueOf()			
		    var qtp3 = document.querySelector("#p3-p-qt").value.valueOf()			
		    var csp3 = document.querySelector("#p3-p-custo").value.valueOf()			
	    //calculos				
	      //sem custo ou quantidade				
		      const resmoedahorap3 =  moedapp3 / horapp3			
		      const resmesdiap3 =  resmoedahorap3 * diahora			
		      const ressemp3 =  resmoedahorap3 * semhora			
		      const resmesp3 =  resmoedahorap3 * meshora			
		      const restrocap3 = meshora / horapp3			
      			//quantidade		
       //-------------------------------código verificação de uso-------------------------------------					
		        const messagep3L = document.getElementById("erromesup3")			
		            //messagep3L.innerHTML = "" 			
		            let pp3L = document.getElementById("p3-p-hora").value 			
		            try {			
		              			
		              if(isNaN(pp3L)) throw "não é um número"			
		              			
		              pp3L = Number(pp3L)			
		          	  		
		          	  if(pp3L < 1) throw 		
		           }		
 		///estilização ********************************************************************************			
		            catch(errp3L) {			
		             // messagep3L.innerHTML = ""			
		              document.getElementById("p3-p-hora").value//.style=blue//+ //.style=background:red// apaga a mensangem			
		              setTimeout(myTimerp3L, 10);			
					
		                  function myTimerp3L() {			
		                    			
		                    document.getElementById("p3-hora").value=""			
		                    document.getElementById("p3-dia").value=""			
		                    document.getElementById("p3-semana").value=""			
		                    document.getElementById("p3-mes").value=""			
		                    document.getElementById("p3-troca").value=""			
					
		                    document.getElementById("p3-p-qt").style.backgroundColor=""			
		                    document.getElementById("p3-p-hora").style.backgroundColor=""			
		                    document.getElementById("p3-p-moeda").style.backgroundColor=""			
		                    document.getElementById("p3-p-custo").style.backgroundColor=""			
		                }			
		            }			
		//-------------------------------final código verificação de uso-------------------------------------			
          		const messagep3us = document.getElementById("erromesqt")			
				           //messagep3.innerHTML = "" 	
				            let pp3qtus = document.getElementById("p3-p-qt").value	
				            try {	
				              	
				              if(isNaN(pp3qtus)) throw "não é um número"	
				              	
				              pp3qtus = Number(pp3qtus)	
				              if(pp3qtus >= 1) throw "é menor  que 1"	
				             	
				              	
				           }	
          ////estilização ********************************************************************************					
			            catch(errp3us) {		
					
		//********************erros*************************************			
				      const messagep3 = document.getElementById("erromesqt")	
				           //messagep3.innerHTML = "" 	
				            let pp3qt = document.getElementById("p3-p-qt").value	
				            try {	
				              	
				              if(isNaN(pp3qt)) throw "não é um número"	
				              	
				              pp3qt = Number(pp3qt)	
				              if(pp3qt < 1) throw "é menor  que 1"	
				             	
				              if(pp3qt > 6) throw "é maior que 6"	
				           }	
          ////estilização ********************************************************************************					
			            catch(errp3) {		
			              messagep3.innerHTML = "A quantidade "+ errp3 +"<br>pressione novamente para calcular sobre (Planta 3)"		
			              document.getElementById("p3-p-qt").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem		
			              document.getElementById("p3-p-qt").style.backgroundColor="yellow"		
			              document.getElementById("erromesqt").style.color="red"		
			              setTimeout(myTimerp3, 9000);		
					
			                  function myTimerp3() {		
			                    		
			                    document.getElementById("p3-p-qt").style.backgroundColor=""		
			                    document.getElementById("erromesqt").style.color="white"		
			                  }		
			            }		
          //-----------------------------hora---------------------------------------					
          					
			          const messagep3h = document.getElementById("erromeshp3")		
			            //messagep3h.innerHTML = "" 		
			            let pp3h = document.getElementById("p3-p-hora").value		
			            try {		
			              		
			              if(isNaN(pp3h)) throw "não é um número"		
			              		
			              pp3h = Number(pp3h)		
			              if(pp3h < 24) throw "é menor que 24hrs"		
			             		
			              if(pp3h > 720) throw " é maior que 720hrs"		
			           }		
           ///estilização ********************************************************************************					
			            catch(errp3h) {		
			              messagep3.innerHTML = "O Valor "+ errp3h +"<br>pressione novamente para calcular sobre (Planta 3)"		
			              document.getElementById("p3-p-hora").value = ""//.style=blue//+ //.style=background:red// apaga a mensangem		
			              document.getElementById("p3-p-hora").style.backgroundColor="yellow"		
			              document.getElementById("erromeshp3").style.color="red"		
			              setTimeout(myTimerp3h, 9000);		
					
			                  function myTimerp3h() {		
			                    		
			                    document.getElementById("p3-p-hora").style.backgroundColor=""		
			                    document.getElementById("erromeshp3").style.color="white"		
			                  }		
			            }		
            //---------------------------------moeda------------------------------------------					
          					
			          const messagep3m = document.getElementById("erromesmp3")		
			            //messagep3m.innerHTML = "" 		
			            let pp3m = document.getElementById("p3-p-moeda").value		
			            try {		
			              		
			              if(isNaN(pp3m)) throw "não é um numero "		
			              		
			              pp3m = Number(pp3m)		
			              if(pp3m < 1) throw " da moeda é menor que 1"		
			          }		
           ///estilização ********************************************************************************					
			            catch(errp3m) {		
			              messagep3m.innerHTML = "O valor "+ errp3m +"<br>pressione novamente para calcular sobre (Planta 3)"		
			              document.getElementById("p3-p-moeda").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem		
			              document.getElementById("p3-p-moeda").style.backgroundColor="yellow"		
			              document.getElementById("erromesmp3").style.color="red"		
			              setTimeout(myTimerp3m, 9000);		
					
			                  function myTimerp3m() {		
			                    		
			                    document.getElementById("p3-p-moeda").style.backgroundColor=""		
			                    document.getElementById("erromesmp3").style.color="white"		
			                  }		
			            }		
            //------------------------------custo---------------------------------------------------					
          			const messagep3c = document.getElementById("erromescp3")		
			          	//messagep3c.innerHTML = "" 	
			            let pp3c = document.getElementById("p3-p-custo").value		
			            try {		
			              		
			              if(isNaN(pp3c)) throw "não é um numero "		
			              		
			              pp3c = Number(pp3c)		
			             if(pp3c < 1) throw "é menor  que 1 "		
			           }		
           ///estilização ********************************************************************************					
            catch(errp3c) {					
              messagep3c.innerHTML = "o valor de custo , "+ errp3c +"<br>não foi inserida, <br>para calcular insira um valor, <br> ou calcule somente a planta sem custo.(Planta 3)"					
              document.getElementById("p3-p-custo").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem					
              document.getElementById("p3-p-custo").style.backgroundColor="yellow"					
              document.getElementById("erromescp3").style.color="red"					
              setTimeout(myTimerp3c, 9000);					
              setTimeout(myTimerp3cd, 12000);					
					
				 function myTimerp3c() {	
                    					
                    document.getElementById("p3-p-custo").style.backgroundColor=""					
                    document.getElementById("erromescp3").style.color="white"					
                    					
                  }					
            	}				
            					
		          const totmhp3 =  resmoedahorap3 * qtp3			
		          const totdp3 =  resmesdiap3 * qtp3			
		          const totsp3 =  ressemp3 * qtp3			
		          const totmp3 =  resmesp3 * qtp3			
		          const tottrp3 =  restrocap3 * qtp3			
		          // custo			
		          const customp3 =  totmp3 - csp3			
		          const custodp3 =  customp3 / mesdia			
		          const custosp3 =  custodp3 * semanadia			
		          const custohp3 =  custodp3 / diahora			
          					
		          var printhmp3 = custohp3			
		          var printdp3 = custodp3			
		          var printsp3 = custosp3			
		          var printmp3 = customp3			
		          var printtrp3 = tottrp3			
        					
	             document.getElementById("p3-hora").value = printhmp3.toFixed(2).replace(".",",")				
	             document.getElementById("p3-dia").value = printdp3.toFixed(2).replace(".",",")				
	             document.getElementById("p3-semana").value = printsp3.toFixed(2).replace(".",",")				
	             document.getElementById("p3-mes").value = printmp3.toFixed(2).replace(".",",")				
	             document.getElementById("p3-troca").value = printtrp3.toFixed(0).replace(".",",")				
         				

*/

//******************************************************planta 4********************************************************
      //Planta 4*********************************************************************************************************************************************					
	    /*   	var horapp4 = document.querySelector("#p4-p-hora").value.valueOf()			
		    var moedapp4 = document.querySelector("#p4-p-moeda").value.valueOf()			
		    var qtp4 = document.querySelector("#p4-p-qt").value.valueOf()			
		    var csp4 = document.querySelector("#p4-p-custo").value.valueOf()			
	    //calculos				
	      //sem custo ou quantidade				
		      const resmoedahorap4 =  moedapp4 / horapp4			
		      const resmesdiap4 =  resmoedahorap4 * diahora			
		      const ressemp4 =  resmoedahorap4 * semhora			
		      const resmesp4 =  resmoedahorap4 * meshora			
		      const restrocap4 = meshora / horapp4			
      			//quantidade		
       //-------------------------------código verificação de uso-------------------------------------					
		        const messagep4L = document.getElementById("erromesup4")			
		            //messagep4L.innerHTML = "" 			
		            let pp4L = document.getElementById("p4-p-hora").value 			
		            try {			
		              			
		              if(isNaN(pp4L)) throw "não é um número"			
		              			
		              pp4L = Number(pp4L)			
		          	  		
		          	  if(pp4L < 1) throw 		
		           }			
 		///estilização ********************************************************************************			
		            catch(errp4L) {			
		             // messagep4L.innerHTML = ""			
		              document.getElementById("p4-p-hora").value//.style=blue//+ //.style=background:red// apaga a mensangem			
		              setTimeout(myTimerp4L, 10);			
					
		                  function myTimerp4L() {			
		                    			
		                    document.getElementById("p4-hora").value=""			
		                    document.getElementById("p4-dia").value=""			
		                    document.getElementById("p4-semana").value=""			
		                    document.getElementById("p4-mes").value=""			
		                    document.getElementById("p4-troca").value=""			
					
		                    document.getElementById("p4-p-qt").style.backgroundColor=""			
		                    document.getElementById("p4-p-hora").style.backgroundColor=""			
		                    document.getElementById("p4-p-moeda").style.backgroundColor=""			
		                    document.getElementById("p4-p-custo").style.backgroundColor=""			
		                }			
		            }			
		//-------------------------------final código verificação de uso-------------------------------------			
          		const messagep4us = document.getElementById("erromesqt")			
				           //messagep4.innerHTML = "" 	
				            let pp4qtus = document.getElementById("p4-p-qt").value	
				            try {	
				              	
				              if(isNaN(pp4qtus)) throw "não é um número"	
				              	
				              pp4qtus = Number(pp4qtus)	
				              if(pp4qtus >= 1) throw "é menor  que 1"	
				             	
				              	
				           }	
          ////estilização ********************************************************************************					
			            catch(errp4us) {		
					
		//********************erros*************************************			
				      const messagep4 = document.getElementById("erromesqt")	
				           //messagep4.innerHTML = "" 	
				            let pp4qt = document.getElementById("p4-p-qt").value	
				            try {	
				              	
				              if(isNaN(pp4qt)) throw "não é um número"	
				              	
				              pp4qt = Number(pp4qt)	
				              if(pp4qt < 1) throw "é menor  que 1"	
				             	
				              if(pp4qt > 6) throw "é maior que 6"	
				           }	
          ////estilização ********************************************************************************					
			            catch(errp4) {		
			              messagep4.innerHTML = "A quantidade "+ errp4 +"<br>pressione novamente para calcular sobre (Planta 4)"		
			              document.getElementById("p4-p-qt").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem		
			              document.getElementById("p4-p-qt").style.backgroundColor="yellow"		
			              document.getElementById("erromesqt").style.color="red"		
			              setTimeout(myTimerp4, 9000);		
					
			                  function myTimerp4() {		
			                    		
			                    document.getElementById("p4-p-qt").style.backgroundColor=""		
			                    document.getElementById("erromesqt").style.color="white"		
			                  }		
			            }		
          //-----------------------------hora---------------------------------------					
          					
			          const messagep4h = document.getElementById("erromeshp4")		
			            //messagep4h.innerHTML = "" 		
			            let pp4h = document.getElementById("p4-p-hora").value		
			            try {		
			              		
			              if(isNaN(pp4h)) throw "não é um número"		
			              		
			              pp4h = Number(pp4h)		
			              if(pp4h < 24) throw "é menor que 24hrs"		
			             		
			              if(pp4h > 720) throw " é maior que 720hrs"		
			           }		
           ///estilização ********************************************************************************					
			            catch(errp4h) {		
			              messagep4.innerHTML = "O Valor "+ errp4h +"<br>pressione novamente para calcular sobre (Planta 4)"		
			              document.getElementById("p4-p-hora").value = ""//.style=blue//+ //.style=background:red// apaga a mensangem		
			              document.getElementById("p4-p-hora").style.backgroundColor="yellow"		
			              document.getElementById("erromeshp4").style.color="red"		
			              setTimeout(myTimerp4h, 9000);		
					
			                  function myTimerp4h() {		
			                    		
			                    document.getElementById("p4-p-hora").style.backgroundColor=""		
			                    document.getElementById("erromeshp4").style.color="white"		
			                  }		
			            }		
            //---------------------------------moeda------------------------------------------					
          					
			          const messagep4m = document.getElementById("erromesmp4")		
			            //messagep4m.innerHTML = "" 		
			            let pp4m = document.getElementById("p4-p-moeda").value		
			            try {		
			              		
			              if(isNaN(pp4m)) throw "não é um numero "		
			              		
			              pp4m = Number(pp4m)		
			              if(pp4m < 1) throw " da moeda é menor que 1"		
			          }		
           ///estilização ********************************************************************************					
			            catch(errp4m) {		
			              messagep4m.innerHTML = "O valor "+ errp4m +"<br>pressione novamente para calcular sobre (Planta 4)"		
			              document.getElementById("p4-p-moeda").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem		
			              document.getElementById("p4-p-moeda").style.backgroundColor="yellow"		
			              document.getElementById("erromesmp4").style.color="red"		
			              setTimeout(myTimerp4m, 9000);		
					
			                  function myTimerp4m() {		
			                    		
			                    document.getElementById("p4-p-moeda").style.backgroundColor=""		
			                    document.getElementById("erromesmp4").style.color="white"		
			                  }		
			            }		
            //------------------------------custo---------------------------------------------------					
          			const messagep4c = document.getElementById("erromescp4")		
			          	//messagep4c.innerHTML = "" 	
			            let pp4c = document.getElementById("p4-p-custo").value		
			            try {		
			              		
			              if(isNaN(pp4c)) throw "não é um numero "		
			              		
			              pp4c = Number(pp4c)		
			             if(pp4c < 1) throw "é menor  que 1 "		
			           }		
           ///estilização ********************************************************************************					
            catch(errp4c) {					
              messagep4c.innerHTML = "o valor de custo , "+ errp4c +"<br>não foi inserida, <br>para calcular insira um valor, <br> ou calcule somente a planta sem custo.(Planta 4)"					
              document.getElementById("p4-p-custo").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem					
              document.getElementById("p4-p-custo").style.backgroundColor="yellow"					
              document.getElementById("erromescp4").style.color="red"					
              setTimeout(myTimerp4c, 9000);					
              setTimeout(myTimerp4cd, 12000);					
					
				 function myTimerp4c() {	
                    					
                    document.getElementById("p4-p-custo").style.backgroundColor=""					
                    document.getElementById("erromescp4").style.color="white"					
                    					
                  }					
            	}				
            }					
		          const totmhp4 =  resmoedahorap4 * qtp4			
		          const totdp4 =  resmesdiap4 * qtp4			
		          const totsp4 =  ressemp4 * qtp4			
		          const totmp4 =  resmesp4 * qtp4			
		          const tottrp4 =  restrocap4 * qtp4			
		          // custo			
		          const customp4 =  totmp4 - csp4			
		          const custodp4 =  customp4 / mesdia			
		          const custosp4 =  custodp4 * semanadia			
		          const custohp4 =  custodp4 / diahora			
          					
		          var printhmp4 = custohp4			
		          var printdp4 = custodp4			
		          var printsp4 = custosp4			
		          var printmp4 = customp4			
		          var printtrp4 = tottrp4			
        					
	             document.getElementById("p4-hora").value = printhmp4.toFixed(2).replace(".",",")				
	             document.getElementById("p4-dia").value = printdp4.toFixed(2).replace(".",",")				
	             document.getElementById("p4-semana").value = printsp4.toFixed(2).replace(".",",")				
	             document.getElementById("p4-mes").value = printmp4.toFixed(2).replace(".",",")				
	             document.getElementById("p4-troca").value = printtrp4.toFixed(0).replace(".",",")				
         				

//******************************************************planta 5********************************************************
      //Planta 5*********************************************************************************************************************************************					
	       	var horapp5 = document.querySelector("#p5-p-hora").value.valueOf()			
		    var moedapp5 = document.querySelector("#p5-p-moeda").value.valueOf()			
		    var qtp5 = document.querySelector("#p5-p-qt").value.valueOf()			
		    var csp5 = document.querySelector("#p5-p-custo").value.valueOf()			
	    //calculos				
	      //sem custo ou quantidade				
		      const resmoedahorap5 =  moedapp5 / horapp5			
		      const resmesdiap5 =  resmoedahorap5 * diahora			
		      const ressemp5 =  resmoedahorap5 * semhora			
		      const resmesp5 =  resmoedahorap5 * meshora			
		      const restrocap5 = meshora / horapp5			
      			//quantidade		
       //-------------------------------código verificação de uso-------------------------------------					
		        const messagep5L = document.getElementById("erromesup5")			
		            //messagep5L.innerHTML = "" 			
		            let pp5L = document.getElementById("p5-p-hora").value 			
		            try {			
		              			
		              if(isNaN(pp5L)) throw "não é um número"			
		              			
		              pp5L = Number(pp5L)			
		          	  		
		          	  if(pp5L < 1) throw 		
		           }			
 		///estilização ********************************************************************************			
		            catch(errp5L) {			
		             // messagep5L.innerHTML = ""			
		              document.getElementById("p5-p-hora").value//.style=blue//+ //.style=background:red// apaga a mensangem			
		              setTimeout(myTimerp5L, 10);			
					
		                  function myTimerp5L() {			
		                    			
		                    document.getElementById("p5-hora").value=""			
		                    document.getElementById("p5-dia").value=""			
		                    document.getElementById("p5-semana").value=""			
		                    document.getElementById("p5-mes").value=""			
		                    document.getElementById("p5-troca").value=""			
					
		                    document.getElementById("p5-p-qt").style.backgroundColor=""			
		                    document.getElementById("p5-p-hora").style.backgroundColor=""			
		                    document.getElementById("p5-p-moeda").style.backgroundColor=""			
		                    document.getElementById("p5-p-custo").style.backgroundColor=""			
		                }			
		            }			
		//-------------------------------final código verificação de uso-------------------------------------			
          		const messagep5us = document.getElementById("erromesqt")			
				           //messagep5.innerHTML = "" 	
				            let pp5qtus = document.getElementById("p5-p-qt").value	
				            try {	
				              	
				              if(isNaN(pp5qtus)) throw "não é um número"	
				              	
				              pp5qtus = Number(pp5qtus)	
				              if(pp5qtus >= 1) throw "é menor  que 1"	
				             	
				              	
				           }	
          ////estilização ********************************************************************************					
			            catch(errp5us) {		
					
		//********************erros*************************************			
				      const messagep5 = document.getElementById("erromesqt")	
				           //messagep5.innerHTML = "" 	
				            let pp5qt = document.getElementById("p5-p-qt").value	
				            try {	
				              	
				              if(isNaN(pp5qt)) throw "não é um número"	
				              	
				              pp5qt = Number(pp5qt)	
				              if(pp5qt < 1) throw "é menor  que 1"	
				             	
				              if(pp5qt > 6) throw "é maior que 6"	
				           }	
          ////estilização ********************************************************************************					
			            catch(errp5) {		
			              messagep5.innerHTML = "A quantidade "+ errp5 +"<br>pressione novamente para calcular sobre (Planta 5)"		
			              document.getElementById("p5-p-qt").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem		
			              document.getElementById("p5-p-qt").style.backgroundColor="yellow"		
			              document.getElementById("erromesqt").style.color="red"		
			              setTimeout(myTimerp5, 9000);		
					
			                  function myTimerp5() {		
			                    		
			                    document.getElementById("p5-p-qt").style.backgroundColor=""		
			                    document.getElementById("erromesqt").style.color="white"		
			                  }		
			            }		
          //-----------------------------hora---------------------------------------					
          					
			          const messagep5h = document.getElementById("erromeshp5")		
			            //messagep5h.innerHTML = "" 		
			            let pp5h = document.getElementById("p5-p-hora").value		
			            try {		
			              		
			              if(isNaN(pp5h)) throw "não é um número"		
			              		
			              pp5h = Number(pp5h)		
			              if(pp5h < 24) throw "é menor que 24hrs"		
			             		
			              if(pp5h > 720) throw " é maior que 720hrs"		
			           }		
           ///estilização ********************************************************************************					
			            catch(errp5h) {		
			              messagep5.innerHTML = "O Valor "+ errp5h +"<br>pressione novamente para calcular sobre (Planta 5)"		
			              document.getElementById("p5-p-hora").value = ""//.style=blue//+ //.style=background:red// apaga a mensangem		
			              document.getElementById("p5-p-hora").style.backgroundColor="yellow"		
			              document.getElementById("erromeshp5").style.color="red"		
			              setTimeout(myTimerp5h, 9000);		
					
			                  function myTimerp5h() {		
			                    		
			                    document.getElementById("p5-p-hora").style.backgroundColor=""		
			                    document.getElementById("erromeshp5").style.color="white"		
			                  }		
			            }		
            //---------------------------------moeda------------------------------------------					
          					
			          const messagep5m = document.getElementById("erromesmp5")		
			            //messagep5m.innerHTML = "" 		
			            let pp5m = document.getElementById("p5-p-moeda").value		
			            try {		
			              		
			              if(isNaN(pp5m)) throw "não é um numero "		
			              		
			              pp5m = Number(pp5m)		
			              if(pp5m < 1) throw " da moeda é menor que 1"		
			          }		
           ///estilização ********************************************************************************					
			            catch(errp5m) {		
			              messagep5m.innerHTML = "O valor "+ errp5m +"<br>pressione novamente para calcular sobre (Planta 5)"		
			              document.getElementById("p5-p-moeda").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem		
			              document.getElementById("p5-p-moeda").style.backgroundColor="yellow"		
			              document.getElementById("erromesmp5").style.color="red"		
			              setTimeout(myTimerp5m, 9000);		
					
			                  function myTimerp5m() {		
			                    		
			                    document.getElementById("p5-p-moeda").style.backgroundColor=""		
			                    document.getElementById("erromesmp5").style.color="white"		
			                  }		
			            }		
            //------------------------------custo---------------------------------------------------					
          			const messagep5c = document.getElementById("erromescp5")		
			          	//messagep5c.innerHTML = "" 	
			            let pp5c = document.getElementById("p5-p-custo").value		
			            try {		
			              		
			              if(isNaN(pp5c)) throw "não é um numero "		
			              		
			              pp5c = Number(pp5c)		
			             if(pp5c < 1) throw "é menor  que 1 "		
			           }		
           ///estilização ********************************************************************************					
            catch(errp5c) {					
              messagep5c.innerHTML = "o valor de custo , "+ errp5c +"<br>não foi inserida, <br>para calcular insira um valor, <br> ou calcule somente a planta sem custo.(Planta 5)"					
              document.getElementById("p5-p-custo").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem					
              document.getElementById("p5-p-custo").style.backgroundColor="yellow"					
              document.getElementById("erromescp5").style.color="red"					
              setTimeout(myTimerp5c, 9000);					
              setTimeout(myTimerp5cd, 12000);					
					
				 function myTimerp5c() {	
                    					
                    document.getElementById("p5-p-custo").style.backgroundColor=""					
                    document.getElementById("erromescp5").style.color="white"					
                    					
                  }					
            	}				
            }					
		          const totmhp5 =  resmoedahorap5 * qtp5			
		          const totdp5 =  resmesdiap5 * qtp5			
		          const totsp5 =  ressemp5 * qtp5			
		          const totmp5 =  resmesp5 * qtp5			
		          const tottrp5 =  restrocap5 * qtp5			
		          // custo			
		          const customp5 =  totmp5 - csp5			
		          const custodp5 =  customp5 / mesdia			
		          const custosp5 =  custodp5 * semanadia			
		          const custohp5 =  custodp5 / diahora			
          					
		          var printhmp5 = custohp5			
		          var printdp5 = custodp5			
		          var printsp5 = custosp5			
		          var printmp5 = customp5			
		          var printtrp5 = tottrp5			
        					
	             document.getElementById("p5-hora").value = printhmp5.toFixed(2).replace(".",",")				
	             document.getElementById("p5-dia").value = printdp5.toFixed(2).replace(".",",")				
	             document.getElementById("p5-semana").value = printsp5.toFixed(2).replace(".",",")				
	             document.getElementById("p5-mes").value = printmp5.toFixed(2).replace(".",",")				
	             document.getElementById("p5-troca").value = printtrp5.toFixed(0).replace(".",",")				
         
//******************************************************planta 6********************************************************
//Planta 6*********************************************************************************************************************************************					
	       	var horapp6 = document.querySelector("#p6-p-hora").value.valueOf()			
		    var moedapp6 = document.querySelector("#p6-p-moeda").value.valueOf()			
		    var qtp6 = document.querySelector("#p6-p-qt").value.valueOf()			
		    var csp6 = document.querySelector("#p6-p-custo").value.valueOf()			
	    //calculos				
	      //sem custo ou quantidade				
		      const resmoedahorap6 =  moedapp6 / horapp6			
		      const resmesdiap6 =  resmoedahorap6 * diahora			
		      const ressemp6 =  resmoedahorap6 * semhora			
		      const resmesp6 =  resmoedahorap6 * meshora			
		      const restrocap6 = meshora / horapp6			
      			//quantidade		
       //-------------------------------código verificação de uso-------------------------------------					
		        const messagep6L = document.getElementById("erromesup6")			
		            //messagep6L.innerHTML = "" 			
		            let pp6L = document.getElementById("p6-p-hora").value 			
		            try {			
		              			
		              if(isNaN(pp6L)) throw "não é um número"			
		              			
		              pp6L = Number(pp6L)			
		          	  		
		          	  if(pp6L < 1) throw 		
		           }			
 		///estilização ********************************************************************************			
		            catch(errp6L) {			
		             // messagep6L.innerHTML = ""			
		              document.getElementById("p6-p-hora").value//.style=blue//+ //.style=background:red// apaga a mensangem			
		              setTimeout(myTimerp6L, 10);			
					
		                  function myTimerp6L() {			
		                    			
		                    document.getElementById("p6-hora").value=""			
		                    document.getElementById("p6-dia").value=""			
		                    document.getElementById("p6-semana").value=""			
		                    document.getElementById("p6-mes").value=""			
		                    document.getElementById("p6-troca").value=""			
					
		                    document.getElementById("p6-p-qt").style.backgroundColor=""			
		                    document.getElementById("p6-p-hora").style.backgroundColor=""			
		                    document.getElementById("p6-p-moeda").style.backgroundColor=""			
		                    document.getElementById("p6-p-custo").style.backgroundColor=""			
		                }			
		            }			
		//-------------------------------final código verificação de uso-------------------------------------			
          		const messagep6us = document.getElementById("erromesqt")			
				           //messagep6.innerHTML = "" 	
				            let pp6qtus = document.getElementById("p6-p-qt").value	
				            try {	
				              	
				              if(isNaN(pp6qtus)) throw "não é um número"	
				              	
				              pp6qtus = Number(pp6qtus)	
				              if(pp6qtus >= 1) throw "é menor  que 1"	
				             	
				              	
				           }	
          ////estilização ********************************************************************************					
			            catch(errp6us) {		
					
		//********************erros*************************************			
				      const messagep6 = document.getElementById("erromesqt")	
				           //messagep6.innerHTML = "" 	
				            let pp6qt = document.getElementById("p6-p-qt").value	
				            try {	
				              	
				              if(isNaN(pp6qt)) throw "não é um número"	
				              	
				              pp6qt = Number(pp6qt)	
				              if(pp6qt < 1) throw "é menor  que 1"	
				             	
				              if(pp6qt > 6) throw "é maior que 6"	
				           }	
          ////estilização ********************************************************************************					
			            catch(errp6) {		
			              messagep6.innerHTML = "A quantidade "+ errp6 +"<br>pressione novamente para calcular sobre (Planta 6)"		
			              document.getElementById("p6-p-qt").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem		
			              document.getElementById("p6-p-qt").style.backgroundColor="yellow"		
			              document.getElementById("erromesqt").style.color="red"		
			              setTimeout(myTimerp6, 9000);		
					
			                  function myTimerp6() {		
			                    		
			                    document.getElementById("p6-p-qt").style.backgroundColor=""		
			                    document.getElementById("erromesqt").style.color="white"		
			                  }		
			            }		
          //-----------------------------hora---------------------------------------					
          					
			          const messagep6h = document.getElementById("erromeshp6")		
			            //messagep6h.innerHTML = "" 		
			            let pp6h = document.getElementById("p6-p-hora").value		
			            try {		
			              		
			              if(isNaN(pp6h)) throw "não é um número"		
			              		
			              pp6h = Number(pp6h)		
			              if(pp6h < 24) throw "é menor que 24hrs"		
			             		
			              if(pp6h > 720) throw " é maior que 720hrs"		
			           }		
           ///estilização ********************************************************************************					
			            catch(errp6h) {		
			              messagep6.innerHTML = "O Valor "+ errp6h +"<br>pressione novamente para calcular sobre (Planta 6)"		
			              document.getElementById("p6-p-hora").value = ""//.style=blue//+ //.style=background:red// apaga a mensangem		
			              document.getElementById("p6-p-hora").style.backgroundColor="yellow"		
			              document.getElementById("erromeshp6").style.color="red"		
			              setTimeout(myTimerp6h, 9000);		
					
			                  function myTimerp6h() {		
			                    		
			                    document.getElementById("p6-p-hora").style.backgroundColor=""		
			                    document.getElementById("erromeshp6").style.color="white"		
			                  }		
			            }		
            //---------------------------------moeda------------------------------------------					
          					
			          const messagep6m = document.getElementById("erromesmp6")		
			            //messagep6m.innerHTML = "" 		
			            let pp6m = document.getElementById("p6-p-moeda").value		
			            try {		
			              		
			              if(isNaN(pp6m)) throw "não é um numero "		
			              		
			              pp6m = Number(pp6m)		
			              if(pp6m < 1) throw " da moeda é menor que 1"		
			          }		
           ///estilização ********************************************************************************					
			            catch(errp6m) {		
			              messagep6m.innerHTML = "O valor "+ errp6m +"<br>pressione novamente para calcular sobre (Planta 6)"		
			              document.getElementById("p6-p-moeda").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem		
			              document.getElementById("p6-p-moeda").style.backgroundColor="yellow"		
			              document.getElementById("erromesmp6").style.color="red"		
			              setTimeout(myTimerp6m, 9000);		
					
			                  function myTimerp6m() {		
			                    		
			                    document.getElementById("p6-p-moeda").style.backgroundColor=""		
			                    document.getElementById("erromesmp6").style.color="white"		
			                  }		
			            }		
            //------------------------------custo---------------------------------------------------					
          			const messagep6c = document.getElementById("erromescp6")		
			          	//messagep6c.innerHTML = "" 	
			            let pp6c = document.getElementById("p6-p-custo").value		
			            try {		
			              		
			              if(isNaN(pp6c)) throw "não é um numero "		
			              		
			              pp6c = Number(pp6c)		
			             if(pp6c < 1) throw "é menor  que 1 "		
			           }		
           ///estilização ********************************************************************************					
            catch(errp6c) {					
              messagep6c.innerHTML = "o valor de custo , "+ errp6c +"<br>não foi inserida, <br>para calcular insira um valor, <br> ou calcule somente a planta sem custo.(Planta 6)"					
              document.getElementById("p6-p-custo").value= "" //.style=blue//+ //.style=background:red// apaga a mensangem					
              document.getElementById("p6-p-custo").style.backgroundColor="yellow"					
              document.getElementById("erromescp6").style.color="red"					
              setTimeout(myTimerp6c, 9000);					
              setTimeout(myTimerp6cd, 12000);					
					
				 function myTimerp6c() {	
                    					
                    document.getElementById("p6-p-custo").style.backgroundColor=""					
                    document.getElementById("erromescp6").style.color="white"					
                    					
                  }					
            	}				
            					
		          const totmhp6 =  resmoedahorap6 * qtp6			
		          const totdp6 =  resmesdiap6 * qtp6			
		          const totsp6 =  ressemp6 * qtp6			
		          const totmp6 =  resmesp6 * qtp6			
		          const tottrp6 =  restrocap6 * qtp6			
		          // custo			
		          const customp6 =  totmp6 - csp6			
		          const custodp6 =  customp6 / mesdia			
		          const custosp6 =  custodp6 * semanadia			
		          const custohp6 =  custodp6 / diahora			
          					
		          var printhmp6 = custohp6			
		          var printdp6 = custodp6			
		          var printsp6 = custosp6			
		          var printmp6 = customp6			
		          var printtrp6 = tottrp6			
        					
	             document.getElementById("p6-hora").value = printhmp6.toFixed(2).replace(".",",")				
	             document.getElementById("p6-dia").value = printdp6.toFixed(2).replace(".",",")				
	             document.getElementById("p6-semana").value = printsp6.toFixed(2).replace(".",",")				
	             document.getElementById("p6-mes").value = printmp6.toFixed(2).replace(".",",")				
	             document.getElementById("p6-troca").value = printtrp6.toFixed(0).replace(".",",")				
		}*/
/**********************************************************************************************************/
/*
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
		}*/
