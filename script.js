
		//Links--------------------------------------------------------------------------------------------------
			/*http://embuscadocodigo.com/codigos/javascript/somar-valores-de-input.html*/
			//https://www.w3schools.com/css/css_positioning.asp
			//https://www.w3schools.com/js/tryit.asp?filename=tryjs_iterate_map
			//https://www.w3schools.com/js/js_timing.asp  tempo funções de tempo
		//Testes-------------------------------------------------------------------------------------------------
						/*<!DOCTYPE html>
						<html>
						<body>
						<h2>JavaScript if .. else</h2>

						<p>A time-based greeting:</p>
						<input id="a1">
						<input id="a">
						<input id="b">
						<button Type="button"  onclick="cs()" >Calcular</button>


						<script>
						function cs() {
						const hour = document.getElementById("a").value; //onde sera avaliado
						let greeting= document.getElementById("b"); //onde sera a resposta

						if (hour < 2) {
						  greeting = 1
						} else {
						  greeting  = "asdf"
						}
						var a0 = document.getElementById("a1").value
						var ar=a0
						var br=greeting;
						var cr = a0 + greeting
						document.getElementById("b").value = cr
						}
						</script>

						</body>
						</html>*/
		//Cálculos-----------------------------------------------------------------------------------------------
				function horamoeda(){
					setTimeout(p1, 10)
					}
		//Planta 1 dados básicos---------------------------------------------------------------------------------
				function p1() {
				//Teste p1---------------------------------------------------------------------------------------
					document.getElementById("p1-p-qt").value=1
					document.getElementById("p1-p-hora").value=72
					document.getElementById("p1-p-moeda").value=250
					document.getElementById("p1-p-custo").value=150
					// document.getElementById("erromesqtp2").innerHTML="asdfasdf"
				//Teste p2---------------------------------------------------------------------------------------
					document.getElementById("p2-p-qt").value=1
					document.getElementById("p2-p-hora").value=72
					document.getElementById("p2-p-moeda").value=250
					document.getElementById("p2-p-custo").value=150
				/* //Teste p3------------------------------------------------------------------------------------
					document.getElementById("p3-p-qt").value=1
					document.getElementById("p3-p-hora").value=72
					document.getElementById("p3-p-moeda").value=250
					document.getElementById("p3-p-custo").value=150
				//Teste p4---------------------------------------------------------------------------------------
					document.getElementById("p4-p-qt").value=1
					document.getElementById("p4-p-hora").value=72
					document.getElementById("p4-p-moeda").value=250
					document.getElementById("p4-p-custo").value=150
				//Teste p5---------------------------------------------------------------------------------------					document.getElementById("p5-p-qt").value=1
					document.getElementById("p5-p-hora").value=72
					document.getElementById("p5-p-moeda").value=250
					document.getElementById("p5-p-custo").value=150
				//Teste p6---------------------------------------------------------------------------------------
					document.getElementById("p6-p-qt").value=1
					document.getElementById("p6-p-hora").value=72
					document.getElementById("p6-p-moeda").value=250
					document.getElementById("p6-p-custo").value=150*/
				//Chamar função----------------------------------------------------------------------------------
					setTimeout(calculos, 10)
						function calculos(){
						//Valores básicos----------------------------------------------------------------------
							var diahora = 24
							var semanadia = 7
							var mesdia = 30
							var semhora = 168
							var meshora = 720
						//Captura de valores-------------------------------------------------------------------
							var horapp1 = document.querySelector("#p1-p-hora").value.valueOf()
							var moedapp1 = document.querySelector("#p1-p-moeda").value.valueOf()
							var qtp1 = document.querySelector("#p1-p-qt").value.valueOf()
							var csp1 = document.querySelector("#p1-p-custo").value.valueOf()
						//Custo / quantidade--------------------------------------------------------------
							const resmoedahorap1 =  moedapp1 / horapp1
							const resmesdiap1 =  resmoedahorap1 * diahora
							const ressemp1 =  resmoedahorap1 * semhora
							const resmesp1 =  resmoedahorap1 * meshora
							const restrocap1 = meshora / horapp1
						//Quantidade---------------------------------------------------------------------------
							const totmhp1 =  resmoedahorap1 * qtp1
							const totdp1 =  resmesdiap1 * qtp1
							const totsp1 =  ressemp1 * qtp1
							const totmp1 =  resmesp1 * qtp1
							const tottrp1 =  restrocap1 * qtp1
						//Custo--------------------------------------------------------------------------------
							const customp1 =  totmp1 - csp1
							const custodp1 =  customp1 / mesdia
							const custosp1 =  custodp1 * semanadia
							const custohp1 =  custodp1 / diahora
						//Impressão----------------------------------------------------------------------------
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
						//Erros--------------------------------------------------------------------------------
							setTimeout(aerrosp1, 10)
							setTimeout(erroshorap1, 10)
							setTimeout(errosmoedap1, 10)
							setTimeout(erroscustop1, 10)
							setTimeout(myTimerp1cd, 12000)
							setTimeout(ptotal, 10)
							setTimeout(p2, 10)
							setTimeout(p3, 10)
							setTimeout(p4, 10)
							setTimeout(p5, 10)
							setTimeout(p6, 10)
							}
						//Limpar avisos------------------------------------------------------------------------
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
						//Erros horas--------------------------------------------------------------------------
								function aerrosp1(){
									const messagep1 = document.getElementById("erromesqt")
									let pp1qt = document.getElementById("p1-p-qt").value
									try {
									if(isNaN(pp1qt)) throw "não é um número"
									pp1qt = Number(pp1qt)
									if(pp1qt < 1) throw "é menor  que 1"
									if(pp1qt > 6) throw "é maior que 6"
									}
									catch(errp1) {
									messagep1.innerHTML = "A quantidade "+ errp1 +
									"<br>pressione novamente para calcular sobre <br>(planta 1)"
									document.getElementById("p1-p-qt")// apaga a mensangem
									document.getElementById("p1-p-qt").style.backgroundColor="yellow"
									document.getElementById("erromesqt").style.color="red"
									setTimeout(myTimerp1, 9000)
									setTimeout(myTimerp1Lqt, 12000)
								//Pós Função-------------------------------------------------------------------
										function myTimerp1() {
											document.getElementById("p1-p-qt").style.backgroundColor=""
											document.getElementById("erromesqt").style.color="white"
											}
										function myTimerp1Lqt() {
											document.getElementById("erromesqt").value=""
											}
									}
								} 
						//Hora---------------------------------------------------------------------------------
							function erroshorap1(){
								const messagep1h = document.getElementById("erromesh")
								let pp1h = document.getElementById("p1-p-hora").value
								try {
								if(isNaN(pp1h)) throw "não é um número"
								pp1h = Number(pp1h)
								if(pp1h < 24) throw "é menor que 24hrs"
								if(pp1h > 720) throw " é maior que 720hrs"
								}
								catch(errp1h) {
								messagep1h.innerHTML = "O Valor "+ errp1h 
								+"<br>pressione novamente para calcular sobre <br>(planta 1)"
								document.getElementById("p1-p-hora").value// apaga a mensangem
								document.getElementById("p1-p-hora").style.backgroundColor="yellow"
								document.getElementById("erromesh").style.color="red"
								setTimeout(myTimerp1h, 9000);
								setTimeout(myTimerp1hL, 12000);
							//Pós Função-----------------------------------------------------------------------
								function myTimerp1h() {
									document.getElementById("p1-p-hora").style.backgroundColor=""
									document.getElementById("erromesh").style.color="white"
									}
								function myTimerp1hL() {
									document.getElementById("erromesm").value=""
									}
								}
								}
						//Moeda--------------------------------------------------------------------------------
								function errosmoedap1(){
									const messagep1m = document.getElementById("erromesm")
									let pp1m = document.getElementById("p1-p-moeda").value
									try {
									if(isNaN(pp1m)) throw "não é um numero "
									pp1m = Number(pp1m)
									if(pp1m < 1) throw " da moeda é menor que 1"
									}
									catch(errp1m) {
									messagep1m.innerHTML = "O valor "+ errp1m 
									+"<br>pressione novamente para calcular sobre<br> (planta 1)"
									document.getElementById("p1-p-moeda").value// apaga a mensangem
									document.getElementById("p1-p-moeda").style.backgroundColor="yellow"
									document.getElementById("erromesm").style.color="red"
									setTimeout(myTimerp1m, 9000);
									setTimeout(myTimerp1mL, 12000);
									setTimeout(myTimerp1mLL, 12);
								//Pós Função-------------------------------------------------------------------
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
								}
						//Custo--------------------------------------------------------------------------------
								function erroscustop1(){
									const messagep1c = document.getElementById("erromesc")
									let pp1c = document.getElementById("p1-p-custo").value
									try {
									if(isNaN(pp1c)) throw "não é um numero "
									pp1c = Number(pp1c)
									if(pp1c < 1) throw "é menor  que 1 "
									}
									catch(errp1c) {
									messagep1c.innerHTML = "o valor de custo , "+ errp1c 
									+"<br>não foi inserida, <br>para calcular insira um valor, <br>"
									+" ou calcule somente a planta sem custo.<br>(Planta 1)"
									document.getElementById("p1-p-custo").value= ""// apaga a mensangem
									document.getElementById("p1-p-custo").style.backgroundColor="yellow"
									document.getElementById("erromesc").style.color="red"
									setTimeout(myTimerp1c, 9000)
								//Pos Função------------- -----------------------------------------------------
									function myTimerp1c() {
										document.getElementById("p1-p-custo").style.backgroundColor=""
										document.getElementById("erromesc").style.color="white"
										}
									}
								}
		//planta 2-----------------------------------------------------------------------------------------------
				function p2() {
					var diahorap2 = 24
					var semanadiap2 = 7
					var mesdiap2 = 30
					var semhorap2 = 168
					var meshorap2 = 720
					var horapp2 = document.querySelector("#p2-p-hora").value.valueOf()
					var moedapp2 = document.querySelector("#p2-p-moeda").value.valueOf()
					var qtp2 = document.querySelector("#p2-p-qt").value.valueOf()
					var csp2 = document.querySelector("#p2-p-custo").value.valueOf()
				//Cálculos---------------------------------------------------------------------------------------
					const resmoedahorap2 =  moedapp2 / horapp2
					const resmesdiap2 =  resmoedahorap2 * diahorap2
					const ressemp2 =  resmoedahorap2 * semhorap2
					const resmesp2 =  resmoedahorap2 * meshorap2
					const restrocap2 = meshorap2 / horapp2
				//Quantidade-------------------------------------------------------------------------------------
					const totmhp2 =  resmoedahorap2 * qtp2
					const totdp2 =  resmesdiap2 * qtp2
					const totsp2 =  ressemp2 * qtp2
					const totmp2 =  resmesp2 * qtp2
					const tottrp2 =  restrocap2 * qtp2
				//Custo-----------------------------------------------------------------------------------------
					const customp2 =  totmp2 - csp2
					const custodp2 =  customp2 / mesdiap2
					const custosp2 =  custodp2 * semanadiap2
					const custohp2 =  custodp2 / diahorap2
				//Pré imprimir--------------------------------------------------------------------------------------
					var printhmp2 = custohp2
					var printdp2 = custodp2
					var printsp2 = custosp2
					var printmp2 = customp2
					var printtrp2 = tottrp2
				//Imprimir------------------------------------------------------------------------------------------
					document.getElementById("p2-hora").value = printhmp2.toFixed(2).replace(".",",")
					document.getElementById("p2-dia").value = printdp2.toFixed(2).replace(".",",")
					document.getElementById("p2-semana").value = printsp2.toFixed(2).replace(".",",")
					document.getElementById("p2-mes").value = printmp2.toFixed(2).replace(".",",")
					document.getElementById("p2-troca").value = printtrp2.toFixed(0).replace(".",",")
				//Erros------------------------------------------------------------------------------------------
					setTimeout(errosusop2, 10)
					setTimeout(aerrosp2, 10)
					setTimeout(erroshorap2, 10)
					setTimeout(errosmoedap2, 10)
					setTimeout(erroscustop2, 10)
				//Código verificação de uso----------------------------------------------------------------------
					function errosusop2(){
							const messageqtp2 = document.getElementById("erromesup2").innerHTML
							let usop2 = document.getElementById("p2-p-hora").value
							try {
								if(usop2 < 0.5) throw ""
							}
							catch(errsuop2) {
								document.getElementById("p2-p-hora").value// apaga a mensangem
								setTimeout(myTimerp2L, 100)
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
					}
				//Quantidade-------------------------------------------------------------------------------------
					function aerrosp2(){
						const messagep2 = document.getElementById("erromesqtp2")
						let pp2qt = document.getElementById("p2-p-qt").value
						let pp2hqt = document.getElementById("p2-p-hora").value
								try {
								if(isNaN(pp2qt)) throw "não é um número"
								pp2qt = Number(pp2qt)
									  if(pp2qt > 6) throw "é maior que 6"
									 if (pp2hqt >= 0.9  && pp2qt <= 0.99) throw "da quantidade esta vazio"
								}
								catch(errp2) {
									messagep2.innerHTML = "A quantidade "+ errp2 
									+"<br>pressione novamente para calcular sobre <br>(Planta 2)"
									document.getElementById("p2-p-qt").style.backgroundColor="yellow"
									document.getElementById("p2-p-qt").value=""
									document.getElementById("erromesqtp2").style.color="red"
									setTimeout(myTimerp2, 9000)
									setTimeout(myTimerp2Lqt, 12000)
									function myTimerp2() {
									document.getElementById("p2-p-qt").style.backgroundColor=""
									document.getElementById("erromesqtp2").style.color="white"
									}
									function myTimerp2Lqt() {
										document.getElementById("erromesqtp2").innerHTML=""
									}
								}
					}
				//Hora-------------------------------------------------------------------------------------------
					function erroshorap2(){
						const messagep2h = document.getElementById("erromeshp2")
						let pp2h = document.getElementById("p2-p-hora").value
							try {
								if(isNaN(pp2h)) throw "não é um número"
								pp2h = Number(pp2h)
								if(pp2h >0 & pp2h < 1) throw "é menor que 24hrs"
								if(pp2h > 720) throw " é maior que 720hrs"
							}
 							catch(errp2h) {
								messagep2h.innerHTML = "O Valor "+ errp2h 
								+"<br>pressione novamente para calcular sobre <br>(Planta 2)"
								document.getElementById("p2-p-hora").value = ""// apaga a mensangem
								document.getElementById("p2-p-hora").style.backgroundColor="yellow"
								document.getElementById("erromeshp2").style.color="red"
								setTimeout(myTimerp2h, 9000)
								setTimeout(myTimerp2hL, 12000)
									function myTimerp2h() {
										document.getElementById("p2-p-hora").style.backgroundColor=""
										document.getElementById("erromeshp2").style.color="white"
									}
										function myTimerp2hL() {
										document.getElementById("erromeshp2").value=""
									}
							}
					}
				//Moeda------------------------------------------------------------------------------------------
					function errosmoedap2(){
						const messagep2m = document.getElementById("erromesmp2")
						let pp2m = document.getElementById("p2-p-moeda").value
						let pp2hqt = document.getElementById("p2-p-hora").value
						let pp2qt = document.getElementById("p2-p-qt").value
							try {
								if(isNaN(pp2m)) throw "não é um numero "
									pp2m = Number(pp2m)
								if (pp2hqt > 0.99  & pp2qt < 0.99) throw " da moeda é menor que 1"
								}
							catch(errp2m) {
								messagep2m.innerHTML = "O valor "+ errp2m
								 +"<br>pressione novamente para calcular sobre<br> (Planta 2)"
								document.getElementById("p2-p-moeda").style.backgroundColor="yellow"
								document.getElementById("erromesmp2").style.color="red"
								setTimeout(myTimerp2m, 9000)
								setTimeout(myTimerp2mL, 12000)
								setTimeout(myTimerp2mLL, 12)
								function myTimerp2m() {
									document.getElementById("p2-p-moeda").style.backgroundColor=""
									document.getElementById("erromesmp2").style.color="white"
									}
								function myTimerp2mL() {
									document.getElementById("erromesmp2").value=""
								}
								function myTimerp2mLL() {
									document.getElementById("p2-hora").value=""
									document.getElementById("p2-dia").value=""
									document.getElementById("p2-semana").value=""
									document.getElementById("p2-mes").value=""
									document.getElementById("p2-troca").value=""
									}
								}
					}
				//Custo------------------------------------------------------------------------------------------
					function erroscustop2(){
						const messagep2c = document.getElementById("erromescp2")
						let pp2c = document.getElementById("p2-p-custo").value
						let pp2hc = document.getElementById("p2-p-hora").value
						let pp2qtc = document.getElementById("p2-p-qt").value
							try {
								if(isNaN(pp2c)) throw "o valor de custo, não é um numero<br>(Planta 2) "
									pp2c = Number(pp2c)
								if(pp2hc >1 & pp2c < 1) throw "o valor de custo, <br>é menor  que 1 (planta 2)"
							}
							catch(errp2c) {
								messagep2c.innerHTML = errp2c
								document.getElementById("p2-p-custo").value= "" // apaga a mensangem
								document.getElementById("p2-p-custo").style.backgroundColor="yellow"
								document.getElementById("erromescp2").style.color="red"
								setTimeout(myTimerp2c, 9000)
								function myTimerp2c() {
									document.getElementById("p2-p-custo").style.backgroundColor=""
									document.getElementById("erromescp2").style.color="white"
								}
							}
						}
				}
		//Planta 3-----------------------------------------------------------------------------------------------
				function p3() {
					var diahorap3 = 24
					var semanadiap3 = 7
					var mesdiap3 = 30
					var semhorap3 = 168
					var meshorap3 = 720
					var horapp3 = document.querySelector("#p3-p-hora").value.valueOf()
					var moedapp3 = document.querySelector("#p3-p-moeda").value.valueOf()
					var qtp3 = document.querySelector("#p3-p-qt").value.valueOf()
					var csp3 = document.querySelector("#p3-p-custo").value.valueOf()
				//Cálculos
					const resmoedahorap3 =  moedapp3 / horapp3
					const resmesdiap3 =  resmoedahorap3 * diahorap3
					const ressemp3 =  resmoedahorap3 * semhorap3
					const resmesp3 =  resmoedahorap3 * meshorap3
					const restrocap3 = meshorap3 / horapp3
				//Quantidade
					const totmhp3 =  resmoedahorap3 * qtp3
					const totdp3 =  resmesdiap3 * qtp3
					const totsp3 =  ressemp3 * qtp3
					const totmp3 =  resmesp3 * qtp3
					const tottrp3 =  restrocap3 * qtp3
				//Custo
					const customp3 =  totmp3 - csp3
					const custodp3 =  customp3 / mesdiap3
					const custosp3 =  custodp3 * semanadiap3
					const custohp3 =  custodp3 / diahorap3
				//Pré imprimir
					var printhmp3 = custohp3
					var printdp3 = custodp3
					var printsp3 = custosp3
					var printmp3 = customp3
					var printtrp3 = tottrp3
				//Ajuste para imprimir
					document.getElementById("p3-hora").value = printhmp3.toFixed(2).replace(".",",")
					document.getElementById("p3-dia").value = printdp3.toFixed(2).replace(".",",")
					document.getElementById("p3-semana").value = printsp3.toFixed(2).replace(".",",")
					document.getElementById("p3-mes").value = printmp3.toFixed(2).replace(".",",")
					document.getElementById("p3-troca").value = printtrp3.toFixed(0).replace(".",",")
				//Erros
					setTimeout(errosusop3, 10)
					setTimeout(aerrosp3, 10)
					setTimeout(erroshorap3, 10)
					setTimeout(errosmoedap3, 10)
					setTimeout(erroscustop3, 10)
				//Código verificação de uso
					function errosusop3(){
							const messageqtp3 = document.getElementById("erromesup3").innerHTML
							let usop3 = document.getElementById("p3-p-hora").value
							try {
								if(usop3 < 0.5) throw ""
							}
							//estilização
							catch(errsuop3) {
								document.getElementById("p3-p-hora").value// apaga a mensangem
								setTimeout(myTimerp3L, 100)
								//Pós Função
									function myTimerp3L() {
										//valores
										document.getElementById("p3-hora").value=""
										document.getElementById("p3-dia").value=""
										document.getElementById("p3-semana").value=""
										document.getElementById("p3-mes").value=""
										document.getElementById("p3-troca").value=""
										//cor
										document.getElementById("p3-p-qt").style.backgroundColor=""
										document.getElementById("p3-p-hora").style.backgroundColor=""
										document.getElementById("p3-p-moeda").style.backgroundColor=""
										document.getElementById("p3-p-custo").style.backgroundColor=""
									}
							}
					}
				//Quantidade
					function aerrosp3(){
						const messagep3 = document.getElementById("erromesqtp3")
						let pp3qt = document.getElementById("p3-p-qt").value
						let pp3hqt = document.getElementById("p3-p-hora").value
								try {
								if(isNaN(pp3qt)) throw "não é um número"
								pp3qt = Number(pp3qt)
									  if(pp3qt > 6) throw "é maior que 6"
									 if (pp3hqt >= 0.9  && pp3qt <= 0.99) throw "da quantidade esta vazio"
								}
								//estilização
								catch(errp3) {
									messagep3.innerHTML = "A quantidade "+ errp3 
									+"<br>pressione novamente para calcular sobre <br>(Planta 3)"
									document.getElementById("p3-p-qt").style.backgroundColor="yellow"
									document.getElementById("p3-p-qt").value=""
									document.getElementById("erromesqtp3").style.color="red"
									setTimeout(myTimerp3, 9000)
									setTimeout(myTimerp3Lqt, 12000)
									function myTimerp3() {
									document.getElementById("p3-p-qt").style.backgroundColor=""
									document.getElementById("erromesqtp3").style.color="white"
									}
									function myTimerp3Lqt() {
										document.getElementById("erromesqtp3").innerHTML=""
									}
								}
					}
				//Hora
					function erroshorap3(){
						const messagep3h = document.getElementById("erromeshp3")
						let pp3h = document.getElementById("p3-p-hora").value
							try {
								if(isNaN(pp3h)) throw "não é um número"
								pp3h = Number(pp3h)
								if(pp3h >0 & pp3h < 1) throw "é menor que 24hrs"
								if(pp3h > 720) throw " é maior que 720hrs"
							}
 							//Estilização
							catch(errp3h) {
								messagep3h.innerHTML = "O Valor "+ errp3h 
								+"<br>pressione novamente para calcular sobre <br>(Planta 3)"
								document.getElementById("p3-p-hora").value = ""// apaga a mensangem
								document.getElementById("p3-p-hora").style.backgroundColor="yellow"
								document.getElementById("erromeshp3").style.color="red"
								setTimeout(myTimerp3h, 9000)
								setTimeout(myTimerp3hL, 12000)
									function myTimerp3h() {
										document.getElementById("p3-p-hora").style.backgroundColor=""
										document.getElementById("erromeshp3").style.color="white"
									}
										function myTimerp3hL() {
										document.getElementById("erromeshp3").value=""
									}
							}
					}
				//Moeda
					function errosmoedap3(){
						const messagep3m = document.getElementById("erromesmp3")
						let pp3m = document.getElementById("p3-p-moeda").value
						let pp3hqt = document.getElementById("p3-p-hora").value
						let pp3qt = document.getElementById("p3-p-qt").value
							try {
								if(isNaN(pp3m)) throw "não é um numero "
									pp3m = Number(pp3m)
								if (pp3hqt > 0.99  & pp3m < 1) throw " da moeda é menor que 1"
								}
							//Estilização
							catch(errp3m) {
								messagep3m.innerHTML = "O valor "+ errp3m 
								+"<br>pressione novamente para calcular sobre<br> (Planta 3)"
								document.getElementById("p3-p-moeda").style.backgroundColor="yellow"
								document.getElementById("p3-p-moeda").value=""
								document.getElementById("erromesmp3").style.color="red"
								setTimeout(myTimerp3m, 9000)
								setTimeout(myTimerp3mL, 12000)
								setTimeout(myTimerp3mLL, 12)
								function myTimerp3m() {
									document.getElementById("p3-p-moeda").style.backgroundColor=""
									document.getElementById("erromesmp3").style.color="white"
									}
								function myTimerp3mL() {
									document.getElementById("erromesmp3").value=""
								}
								function myTimerp3mLL() {
									document.getElementById("p3-hora").value=""
									document.getElementById("p3-dia").value=""
									document.getElementById("p3-semana").value=""
									document.getElementById("p3-mes").value=""
									document.getElementById("p3-troca").value=""
									}
							}
					}
				//Custo
					function erroscustop3(){
						const messagep3c = document.getElementById("erromescp3")
						let pp3c = document.getElementById("p3-p-custo").value
						let pp3hc = document.getElementById("p3-p-hora").value
						let pp3qtc = document.getElementById("p3-p-qt").value
							try {
								if(isNaN(pp3c)) throw "o valor de custo, não é um numero<br>(Planta 3) "
									pp3c = Number(pp3c)

								if(pp3hc >1 & pp3c < 1) throw "o valor de custo, <br>é menor  que 1 (planta 3)"
							}
							catch(errp3c) {
								messagep3c.innerHTML = errp3c
								document.getElementById("p3-p-custo").value= ""// apaga a mensangem
								document.getElementById("p3-p-custo").style.backgroundColor="yellow"
								document.getElementById("erromescp3").style.color="red"
								setTimeout(myTimerp3c, 9000)

								function myTimerp3c() {
									document.getElementById("p3-p-custo").style.backgroundColor=""
									document.getElementById("erromescp3").style.color="white"
								}
							}
					}
				}
		//Planta 4-----------------------------------------------------------------------------------------------
				function p4() {
					var diahorap4 = 24
					var semanadiap4 = 7
					var mesdiap4 = 30
					var semhorap4 = 168
					var meshorap4 = 720
					var horapp4 = document.querySelector("#p4-p-hora").value.valueOf()
					var moedapp4 = document.querySelector("#p4-p-moeda").value.valueOf()
					var qtp4 = document.querySelector("#p4-p-qt").value.valueOf()
					var csp4 = document.querySelector("#p4-p-custo").value.valueOf()
				//Custo ou quantidade
					const resmoedahorap4 =  moedapp4 / horapp4
					const resmesdiap4 =  resmoedahorap4 * diahorap4
					const ressemp4 =  resmoedahorap4 * semhorap4
					const resmesp4 =  resmoedahorap4 * meshorap4
					const restrocap4 = meshorap4 / horapp4
				//Quantidade
					const totmhp4 =  resmoedahorap4 * qtp4
					const totdp4 =  resmesdiap4 * qtp4
					const totsp4 =  ressemp4 * qtp4
					const totmp4 =  resmesp4 * qtp4
					const tottrp4 =  restrocap4 * qtp4
				//Custo
					const customp4 =  totmp4 - csp4
					const custodp4 =  customp4 / mesdiap4
					const custosp4 =  custodp4 * semanadiap4
					const custohp4 =  custodp4 / diahorap4
				//Pré imprimir
					var printhmp4 = custohp4
					var printdp4 = custodp4
					var printsp4 = custosp4
					var printmp4 = customp4
					var printtrp4 = tottrp4
				//Preparação para imprimir
					document.getElementById("p4-hora").value = printhmp4.toFixed(2).replace(".",",")
					document.getElementById("p4-dia").value = printdp4.toFixed(2).replace(".",",")
					document.getElementById("p4-semana").value = printsp4.toFixed(2).replace(".",",")
					document.getElementById("p4-mes").value = printmp4.toFixed(2).replace(".",",")
					document.getElementById("p4-troca").value = printtrp4.toFixed(0).replace(".",",")
				//Erros
					setTimeout(errosusop4, 10)
					setTimeout(aerrosp4, 10)
					setTimeout(erroshorap4, 10)
					setTimeout(errosmoedap4, 10)
					setTimeout(erroscustop4, 10)
				//Código verificação de uso
					function errosusop4(){
							const messageqtp4 = document.getElementById("erromesup4").innerHTML
							let usop4 = document.getElementById("p4-p-hora").value
							try {
								if(usop4 < 0.5) throw ""
							}
							//Estilização
							catch(errsuop4) {
								document.getElementById("p4-p-hora").value// apaga a mensangem
								setTimeout(myTimerp4L, 100)
									//Pós Função
									function myTimerp4L() {
										//valor
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
					}
				//Quantidade
					function aerrosp4(){
						const messagep4 = document.getElementById("erromesqtp4")
						let pp4qt = document.getElementById("p4-p-qt").value
						let pp4hqt = document.getElementById("p4-p-hora").value
								try {
								if(isNaN(pp4qt)) throw "não é um número"
								pp4qt = Number(pp4qt)
									  if(pp4qt > 6) throw "é maior que 6"
									 if (pp4hqt >= 0.9  && pp4qt <= 0.99) throw "da quantidade esta vazio"
								}
								//Estilização
								catch(errp4) {
									messagep4.innerHTML = "A quantidade "+ errp4 
									+"<br>pressione novamente para calcular sobre <br>(Planta 4)"
									document.getElementById("p4-p-qt").style.backgroundColor="yellow"
									document.getElementById("p4-p-qt").value=""
									document.getElementById("erromesqtp4").style.color="red"
									setTimeout(myTimerp4, 9000)
									setTimeout(myTimerp4Lqt, 12000)
								//Pós Função
									function myTimerp4() {
									document.getElementById("p4-p-qt").style.backgroundColor=""
									document.getElementById("erromesqtp4").style.color="white"
									}
									function myTimerp4Lqt() {
										//Valor
										document.getElementById("erromesqtp4").innerHTML=""
									}
								}
					}
				//Hora
					function erroshorap4(){
						const messagep4h = document.getElementById("erromeshp4")
						let pp4h = document.getElementById("p4-p-hora").value
							try {
								if(isNaN(pp4h)) throw "não é um número"
								pp4h = Number(pp4h)
								if(pp4h >0 & pp4h < 1) throw "é menor que 24hrs"
								if(pp4h > 720) throw " é maior que 720hrs"
							}
 							//Estilização
							catch(errp4h) {
								messagep4h.innerHTML = "O Valor "+ errp4h
								+"<br>pressione novamente para calcular sobre <br>(Planta 4)"
								document.getElementById("p4-p-hora").value = ""// apaga a mensangem
								document.getElementById("p4-p-hora").style.backgroundColor="yellow"
								document.getElementById("erromeshp4").style.color="red"
								setTimeout(myTimerp4h, 9000)
								setTimeout(myTimerp4hL, 12000)
									//Pós Função
									function myTimerp4h() {
										document.getElementById("p4-p-hora").style.backgroundColor=""
										document.getElementById("erromeshp4").style.color="white"
									}
										function myTimerp4hL() {
											//valor
										document.getElementById("erromeshp4").value=""
									}
							}
					}
				//Moeda
					function errosmoedap4(){
						const messagep4m = document.getElementById("erromesmp4")
						let pp4m = document.getElementById("p4-p-moeda").value
						let pp4hqt = document.getElementById("p4-p-hora").value
						let pp4qt = document.getElementById("p4-p-qt").value
							try {
								if(isNaN(pp4m)) throw "não é um numero "
									pp4m = Number(pp4m)
								if (pp4hqt > 0.99  & pp4m < 1) throw " da moeda é menor que 1"
								}
							//Estilização
							catch(errp4m) {
								messagep4m.innerHTML = "O valor "+ errp4m
								+"<br>pressione novamente para calcular sobre<br> (Planta 4)"
								document.getElementById("p4-p-moeda").style.backgroundColor="yellow"
								document.getElementById("p4-p-moeda").value=""
								document.getElementById("erromesmp4").style.color="red"
								setTimeout(myTimerp4m, 9000)
								setTimeout(myTimerp4mL, 12000)
								setTimeout(myTimerp4mLL, 12)
								//Pós Função
								function myTimerp4m() {
									document.getElementById("p4-p-moeda").style.backgroundColor=""
									document.getElementById("erromesmp4").style.color="white"
									}
								function myTimerp4mL() {
									//Valor aviso limpar
									document.getElementById("erromesmp4").value=""
								}
								function myTimerp4mLL() {
									//Valor dados limpar
									document.getElementById("p4-hora").value=""
									document.getElementById("p4-dia").value=""
									document.getElementById("p4-semana").value=""
									document.getElementById("p4-mes").value=""
									document.getElementById("p4-troca").value=""
									}
							}
					}
				//Custo
					function erroscustop4(){	
						const messagep4c = document.getElementById("erromescp4")
						let pp4c = document.getElementById("p4-p-custo").value
						let pp4hc = document.getElementById("p4-p-hora").value
						let pp4qtc = document.getElementById("p4-p-qt").value
							try {
								if(isNaN(pp4c)) throw "o valor de custo, não é um numero<br>(Planta 4) "
									pp4c = Number(pp4c)
								if(pp4hc >1 & pp4c < 1) throw "o valor de custo, <br>é menor  que 1 (Planta 4)"
							}				
							catch(errp4c) {
								messagep4c.innerHTML = errp4c
								document.getElementById("p4-p-custo").value= ""// apaga a mensangem
								document.getElementById("p4-p-custo").style.backgroundColor="yellow"
								document.getElementById("erromescp4").style.color="red"
								setTimeout(myTimerp4c, 9000)
								//Pós Função
								function myTimerp4c() {
									document.getElementById("p4-p-custo").style.backgroundColor=""
									document.getElementById("erromescp4").style.color="white"
								}
							}
					}
				}
		//Planta 5-----------------------------------------------------------------------------------------------
				function p5() {
					var diahorap5 = 24
					var semanadiap5 = 7
					var mesdiap5 = 30
					var semhorap5 = 168
					var meshorap5 = 720
					var horapp5 = document.querySelector("#p5-p-hora").value.valueOf()
					var moedapp5 = document.querySelector("#p5-p-moeda").value.valueOf()
					var qtp5 = document.querySelector("#p5-p-qt").value.valueOf()
					var csp5 = document.querySelector("#p5-p-custo").value.valueOf()
				//Cálculos
					const resmoedahorap5 =  moedapp5 / horapp5
					const resmesdiap5 =  resmoedahorap5 * diahorap5
					const ressemp5 =  resmoedahorap5 * semhorap5
					const resmesp5 =  resmoedahorap5 * meshorap5
					const restrocap5 = meshorap5 / horapp5
				//Quantidade
					const totmhp5 =  resmoedahorap5 * qtp5
					const totdp5 =  resmesdiap5 * qtp5
					const totsp5 =  ressemp5 * qtp5
					const totmp5 =  resmesp5 * qtp5
					const tottrp5 =  restrocap5 * qtp5
				//Custo
					const customp5 =  totmp5 - csp5
					const custodp5 =  customp5 / mesdiap5
					const custosp5 =  custodp5 * semanadiap5
					const custohp5 =  custodp5 / diahorap5
				//Pré imprimir
					var printhmp5 = custohp5
					var printdp5 = custodp5
					var printsp5 = custosp5
					var printmp5 = customp5
					var printtrp5 = tottrp5
				//Preparação para imprimir
					document.getElementById("p5-hora").value = printhmp5.toFixed(2).replace(".",",")
					document.getElementById("p5-dia").value = printdp5.toFixed(2).replace(".",",")
					document.getElementById("p5-semana").value = printsp5.toFixed(2).replace(".",",")
					document.getElementById("p5-mes").value = printmp5.toFixed(2).replace(".",",")
					document.getElementById("p5-troca").value = printtrp5.toFixed(0).replace(".",",")
				//Erros
					setTimeout(errosusop5, 10)
					setTimeout(aerrosp5, 10)
					setTimeout(erroshorap5, 10)
					setTimeout(errosmoedap5, 10)
					setTimeout(erroscustop5, 10)
				//Código verificação de uso
					function errosusop5(){
							const messageqtp5 = document.getElementById("erromesup5").innerHTML
							let usop5 = document.getElementById("p5-p-hora").value
							try {
								if(usop5 < 0.5) throw ""
							}
				//Estilização
							catch(errsuop5) {
								document.getElementById("p5-p-hora").value// apaga a mensangem
								setTimeout(myTimerp5L, 100)
				//Pós Função
									function myTimerp5L() {
				//Valor
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
					}
				//Quantidade
					function aerrosp5(){
						const messagep5 = document.getElementById("erromesqtp5")
						let pp5qt = document.getElementById("p5-p-qt").value
						let pp5hqt = document.getElementById("p5-p-hora").value
								try {
								if(isNaN(pp5qt)) throw "não é um número"
								pp5qt = Number(pp5qt)
									  if(pp5qt > 6) throw "é maior que 6"
									 if (pp5hqt >= 0.9  && pp5qt <= 0.99) throw "da quantidade esta vazio"
								}
				//Estilização
								catch(errp5) {
									messagep5.innerHTML = "A quantidade "+ errp5
									+"<br>pressione novamente para calcular sobre <br>(Planta 5)"
									document.getElementById("p5-p-qt").style.backgroundColor="yellow"
									document.getElementById("p5-p-qt").value=""
									document.getElementById("erromesqtp5").style.color="red"
									setTimeout(myTimerp5, 9000)
									setTimeout(myTimerp5Lqt, 12000)
				//Pós Função
									function myTimerp5() {
									document.getElementById("p5-p-qt").style.backgroundColor=""
									document.getElementById("erromesqtp5").style.color="white"
									}
									function myTimerp5Lqt() {
										//valor
										document.getElementById("erromesqtp5").innerHTML=""
									}
								}
					}
				//Hora
					function erroshorap5(){
						const messagep5h = document.getElementById("erromeshp5")
						let pp5h = document.getElementById("p5-p-hora").value
							try {
								if(isNaN(pp5h)) throw "não é um número"
								pp5h = Number(pp5h)
								if(pp5h >0 & pp5h < 1) throw "é menor que 24hrs"
								if(pp5h > 720) throw " é maior que 720hrs"
							}
 				//Estilização
							catch(errp5h) {
								messagep5h.innerHTML = "O Valor "+ errp5h
								+"<br>pressione novamente para calcular sobre <br>(Planta 5)"
								document.getElementById("p5-p-hora").value = ""// apaga a mensangem
								document.getElementById("p5-p-hora").style.backgroundColor="yellow"
								document.getElementById("erromeshp5").style.color="red"
								setTimeout(myTimerp5h, 9000)
								setTimeout(myTimerp5hL, 12000)
				//Pós Função
									function myTimerp5h() {
										document.getElementById("p5-p-hora").style.backgroundColor=""
										document.getElementById("erromeshp5").style.color="white"
									}
										function myTimerp5hL() {
				//Valor
										document.getElementById("erromeshp5").value=""
									}
							}
					}
				//Moeda
					function errosmoedap5(){
						const messagep5m = document.getElementById("erromesmp5")
						let pp5m = document.getElementById("p5-p-moeda").value
						let pp5hqt = document.getElementById("p5-p-hora").value
						let pp5qt = document.getElementById("p5-p-qt").value
							try {
								if(isNaN(pp5m)) throw "não é um numero "
									pp5m = Number(pp5m)
								if (pp5hqt > 0.99  & pp5m < 1) throw " da moeda é menor que 1"
								}
						//Estilização
							catch(errp5m) {
								messagep5m.innerHTML = "O valor "+ errp5m
								+"<br>pressione novamente para calcular sobre<br> (Planta 5)"
								document.getElementById("p5-p-moeda").style.backgroundColor="yellow"
								document.getElementById("p5-p-moeda").value=""
								document.getElementById("erromesmp5").style.color="red"
								setTimeout(myTimerp5m, 9000)
								setTimeout(myTimerp5mL, 12000)
								setTimeout(myTimerp5mLL, 12)
								//Pós Função
								function myTimerp5m() {
									document.getElementById("p5-p-moeda").style.backgroundColor=""
									document.getElementById("erromesmp5").style.color="white"
									}
								function myTimerp5mL() {
											//valor
									document.getElementById("erromesmp5").value=""
								}
								function myTimerp5mLL() {
											//valor
									document.getElementById("p5-hora").value=""
									document.getElementById("p5-dia").value=""
									document.getElementById("p5-semana").value=""
									document.getElementById("p5-mes").value=""
									document.getElementById("p5-troca").value=""
									}
							}
					}
				//Custo
					function erroscustop5(){
						const messagep5c = document.getElementById("erromescp5")
						let pp5c = document.getElementById("p5-p-custo").value
						let pp5hc = document.getElementById("p5-p-hora").value
						let pp5qtc = document.getElementById("p5-p-qt").value
							try {
								if(isNaN(pp5c)) throw "o valor de custo, não é um numero<br>(Planta 5) "
									pp5c = Number(pp5c)
								if(pp5hc >1 & pp5c < 1) throw "o valor de custo, <br>é menor  que 1 (Planta 5)"
							}
							catch(errp5c) {
								messagep5c.innerHTML = errp5c
								document.getElementById("p5-p-custo").value= ""// apaga a mensangem
								document.getElementById("p5-p-custo").style.backgroundColor="yellow"
								document.getElementById("erromescp5").style.color="red"
								setTimeout(myTimerp5c, 9000)
							//Pós Função
								function myTimerp5c() {
									document.getElementById("p5-p-custo").style.backgroundColor=""
									document.getElementById("erromescp5").style.color="white"
								}
							}
					}
				}
		//Planta 6-----------------------------------------------------------------------------------------------
				function p6() {
					var diahorap6 = 24
					var semanadiap6 = 7
					var mesdiap6 = 30
					var semhorap6 = 168
					var meshorap6 = 720
					var horapp6 = document.querySelector("#p6-p-hora").value.valueOf()
					var moedapp6 = document.querySelector("#p6-p-moeda").value.valueOf()
					var qtp6 = document.querySelector("#p6-p-qt").value.valueOf()
					var csp6 = document.querySelector("#p6-p-custo").value.valueOf()
				//Cálculos---------------------------------------------------------------------------------------
				//Custo------------------------------------------------------------------------------------------
					const resmoedahorap6 =  moedapp6 / horapp6
					const resmesdiap6 =  resmoedahorap6 * diahorap6
					const ressemp6 =  resmoedahorap6 * semhorap6
					const resmesp6 =  resmoedahorap6 * meshorap6
					const restrocap6 = meshorap6 / horapp6
				//Quantidade-------------------------------------------------------------------------------------
					const totmhp6 =  resmoedahorap6 * qtp6
					const totdp6 =  resmesdiap6 * qtp6
					const totsp6 =  ressemp6 * qtp6
					const totmp6 =  resmesp6 * qtp6
					const tottrp6 =  restrocap6 * qtp6
				//Custo------------------------------------------------------------------------------------------
					const customp6 =  totmp6 - csp6
					const custodp6 =  customp6 / mesdiap6
					const custosp6 =  custodp6 * semanadiap6
					const custohp6 =  custodp6 / diahorap6
				//Preparação para imprimir-----------------------------------------------------------------------
					var printhmp6 = custohp6
					var printdp6 = custodp6
					var printsp6 = custosp6
					var printmp6 = customp6
					var printtrp6 = tottrp6
				//Conversão para imprimir------------------------------------------------------------------------
					document.getElementById("p6-hora").value = printhmp6.toFixed(2).replace(".",",")
					document.getElementById("p6-dia").value = printdp6.toFixed(2).replace(".",",")
					document.getElementById("p6-semana").value = printsp6.toFixed(2).replace(".",",")
					document.getElementById("p6-mes").value = printmp6.toFixed(2).replace(".",",")
					document.getElementById("p6-troca").value = printtrp6.toFixed(0).replace(".",",")
				//Erros------------------------------------------------------------------------------------------
					setTimeout(errosusop6, 10)
					setTimeout(aerrosp6, 10)
					setTimeout(erroshorap6, 10)
					setTimeout(errosmoedap6, 10)
					setTimeout(erroscustop6, 10)
				//Código verificação de uso----------------------------------------------------------------------
					function errosusop6(){
						const messageqtp6 = document.getElementById("erromesup6").innerHTML
						let usop6 = document.getElementById("p6-p-hora").value
						try {
						if(usop6 < 0.5) throw ""
						}
				//Estilização------------------------------------------------------------------------------------
						catch(errsuop6) {
							document.getElementById("p6-p-hora").value// apaga a mensangem
							setTimeout(myTimerp6L, 100)
				//Pós Função-------------------------------------------------------------------------------------
							function myTimerp6L() {
				//Valor------------------------------------------------------------------------------------------
								document.getElementById("p6-hora").value=""
								document.getElementById("p6-dia").value=""
								document.getElementById("p6-semana").value=""
								document.getElementById("p6-mes").value=""
								document.getElementById("p6-troca").value=""
				//Cor--------------------------------------------------------------------------------------------
								document.getElementById("p6-p-qt").style.backgroundColor=""
								document.getElementById("p6-p-hora").style.backgroundColor=""
								document.getElementById("p6-p-moeda").style.backgroundColor=""
								document.getElementById("p6-p-custo").style.backgroundColor=""
								}
							}
						}
				//Quantidade-------------------------------------------------------------------------------------
					function aerrosp6(){
						const messagep6 = document.getElementById("erromesqtp6")
						let pp6qt = document.getElementById("p6-p-qt").value
						let pp6hqt = document.getElementById("p6-p-hora").value
						try {
						if(isNaN(pp6qt)) throw "não é um número"
						pp6qt = Number(pp6qt)
						if(pp6qt > 6) throw "é maior que 6"
						if (pp6hqt >= 0.9  && pp6qt <= 0.99) throw "da quantidade esta vazio"
						}
				//Estilização------------------------------------------------------------------------------------
						catch(errp6) {
							messagep6.innerHTML = "A quantidade "+ errp6
							+"<br>pressione novamente para calcular sobre <br>(Planta 6)"
							document.getElementById("p6-p-qt").style.backgroundColor="yellow"
							document.getElementById("p6-p-qt").value=""
							document.getElementById("erromesqtp6").style.color="red"
							setTimeout(myTimerp6, 9000)
							setTimeout(myTimerp6Lqt, 12000)
				//Pós Função-------------------------------------------------------------------------------------
								function myTimerp6() {
									document.getElementById("p6-p-qt").style.backgroundColor=""
									document.getElementById("erromesqtp6").style.color="white"
									}
								function myTimerp6Lqt() {
									document.getElementById("erromesqtp6").innerHTML=""
									}
							}
						}
				//Hora-------------------------------------------------------------------------------------------
					function erroshorap6(){
						const messagep6h = document.getElementById("erromeshp6")
						let pp6h = document.getElementById("p6-p-hora").value
						try {
						if(isNaN(pp6h)) throw "não é um número"
						pp6h = Number(pp6h)
						if(pp6h >0 & pp6h < 1) throw "é menor que 24hrs"
						if(pp6h > 720) throw " é maior que 720hrs"
						}
						catch(errp6h) {
							messagep6h.innerHTML = "O Valor "+ errp6h
							+"<br>pressione novamente para calcular sobre <br>(Planta 6)"
							document.getElementById("p6-p-hora").value = ""// apaga a mensangem
							document.getElementById("p6-p-hora").style.backgroundColor="yellow"
							document.getElementById("erromeshp6").style.color="red"
							setTimeout(myTimerp6h, 9000)
							setTimeout(myTimerp6hL, 12000)
								function myTimerp6h() {
									document.getElementById("p6-p-hora").style.backgroundColor=""
									document.getElementById("erromeshp6").style.color="white"
								}
								function myTimerp6hL() {
									document.getElementById("erromeshp6").value=""
								}
							}
						}
				//Moeda------------------------------------------------------------------------------------------
					function errosmoedap6(){
						const messagep6m = document.getElementById("erromesmp6")
						let pp6m = document.getElementById("p6-p-moeda").value
						let pp6hqt = document.getElementById("p6-p-hora").value
						let pp6qt = document.getElementById("p6-p-qt").value
						try {
						if(isNaN(pp6m)) throw "não é um numero "
						pp6m = Number(pp6m)
						if (pp6hqt > 0.99  & pp6m < 1) throw " da moeda é menor que 1"
						}
						catch(errp6m) {
						messagep6m.innerHTML = "O valor "+ errp6m
						+"<br>pressione novamente para calcular sobre<br> (Planta 6)"
						document.getElementById("p6-p-moeda").style.backgroundColor="yellow"
						document.getElementById("p6-p-moeda").value=""
						document.getElementById("erromesmp6").style.color="red"
						setTimeout(myTimerp6m, 9000)
						setTimeout(myTimerp6mL, 12000)
						setTimeout(myTimerp6mLL, 12)
							function myTimerp6m() {
								document.getElementById("p6-p-moeda").style.backgroundColor=""
								document.getElementById("erromesmp6").style.color="white"
							}
							function myTimerp6mL() {
								document.getElementById("erromesmp6").value=""
							}
							function myTimerp6mLL() {
								document.getElementById("p6-hora").value=""
								document.getElementById("p6-dia").value=""
								document.getElementById("p6-semana").value=""
								document.getElementById("p6-mes").value=""
								document.getElementById("p6-troca").value=""
								}
							}
						}
				//Custo------------------------------------------------------------------------------------------
					function erroscustop6(){
						const messagep6c = document.getElementById("erromescp6")
						let pp6c = document.getElementById("p6-p-custo").value
						let pp6hc = document.getElementById("p6-p-hora").value
						let pp6qtc = document.getElementById("p6-p-qt").value
						try {
						if(isNaN(pp6c)) throw "o valor de custo, não é um numero<br>(Planta 6) "
						pp6c = Number(pp6c)
						if(pp6hc >1 & pp6c < 1) throw "o valor de custo, <br>é menor  que 1 (Planta 6)"
						}
						catch(errp6c) {
						messagep6c.innerHTML = errp6c
						document.getElementById("p6-p-custo").value= ""// apaga a mensangem
						document.getElementById("p6-p-custo").style.backgroundColor="yellow"
						document.getElementById("erromescp6").style.color="red"
						setTimeout(myTimerp6c, 9000)
							function myTimerp6c() {
								document.getElementById("p6-p-custo").style.backgroundColor=""
								document.getElementById("erromescp6").style.color="white"
								}
							}
						}
					}
		//Totais-------------------------------------------------------------------------------------------------
			function ptotal() {
				/*funções*/
		//Avisos erros ------------------------------------------------------------------------------------------
			setTimeout(qttotal, 10)
			setTimeout(aerrosptotal, 10)
			setTimeout(erroshoraptotal, 10)
			setTimeout(errosmoedaptotal, 10)
			setTimeout(erroscustoptotal, 10)
		//Total plantas------------------------------------------------------------------------------------------
			function qttotal(){
			setTimeout(totalplantas, 10)
			setTimeout(totalhplantas, 10)
			setTimeout(totalplantasmm, 10)
			setTimeout(totalplantasmc, 10)
			setTimeout(totalplantasmh, 10)
			setTimeout(totalplantasmd, 10)
			setTimeout(totalplantasms, 10)
			setTimeout(totalplantasmM, 10)
			setTimeout(totalplantastm, 10)
		//Total quantidade---------------------------------------------------------------------------------------
			function totalplantas(){
			//Planta 1-------------------------------------------------------------------------------------------
				const pl1tot = document.getElementById("p1-p-qt").value //onde sera avaliado
				let planta1= document.getElementById("p-qt-total") //onde sera a resposta
				if (pl1tot > 0) {
				planta1 = pl1tot
				} else {
				planta1  = "0"
				}
			//Planta 2-------------------------------------------------------------------------------------------
				const pl2tot = document.getElementById("p2-p-qt").value //onde sera avaliado
				let planta2 = document.getElementById("p-qt-total") //onde sera a resposta
				if (pl2tot > 0) {
				planta2 = pl2tot
				} else {
				planta2  = "0"
				}
			//Planta 3-------------------------------------------------------------------------------------------
				const pl3tot = document.getElementById("p3-p-qt").value //onde sera avaliado
				let planta3 = document.getElementById("p-qt-total") //onde sera a resposta
				if (pl3tot > 0) {
				planta3 = pl3tot
				} else {
				planta3  = "0"
				}
			//Planta 4-------------------------------------------------------------------------------------------
				const pl4tot = document.getElementById("p4-p-qt").value //onde sera avaliado
				let planta4 = document.getElementById("p-qt-total") //onde sera a resposta
				if (pl4tot > 0) {
				planta4 = pl4tot
				} else {
				planta4  = "0"
				}
			//Planta 5-------------------------------------------------------------------------------------------
				const pl5tot = document.getElementById("p5-p-qt").value //onde sera avaliado
				let planta5 = document.getElementById("p-qt-total") //onde sera a resposta
				if (pl5tot > 0) {
				planta5 = pl5tot
				} else {
				planta5  = "0"
				}
			//Planta 6-------------------------------------------------------------------------------------------
				const pl6tot = document.getElementById("p6-p-qt").value //onde sera avaliado
				let planta6 = document.getElementById("p-qt-total") //onde sera a resposta
				if (pl6tot > 0) {
				planta6 = pl6tot
				} else {
				planta6  = "0"
				}
			//Cálculos e imprimir--------------------------------------------------------------------------------
				var tp1=parseInt(planta1)
				var tp2=parseInt(planta2)
				var tp3=parseInt(planta3)
				var tp4=parseInt(planta4)
				var tp5=parseInt(planta5)
				var tp6=parseInt(planta6)
				var tp = tp1 + tp2 + tp3 + tp4 + tp5 + tp6
				document.getElementById("p-qt-total").value = tp
				document.getElementById("p-qt-total").style.fontWeight = "bold"
				}
				}
		//Total hora---------------------------------------------------------------------------------------------
			function totalhplantas(){
			//Planta 1-------------------------------------------------------------------------------------------
				const pl1htot = document.getElementById("p1-p-hora").value //onde sera avaliado
				let planta1h= document.getElementById("p-h-total") //onde sera a resposta
				if (pl1htot > 0) {
				planta1h = pl1htot
				} else {
				planta1h  = "0"
				}
			//Planta 2-------------------------------------------------------------------------------------------
				const pl2htot = document.getElementById("p2-p-hora").value //onde sera avaliado
				let planta2h = document.getElementById("p-h-total") //onde sera a resposta
				if (pl2htot > 0) {
				planta2h = pl2htot
				} else {
				planta2h  = "0"
				}
			//Planta 3-------------------------------------------------------------------------------------------
				const pl3htot = document.getElementById("p3-p-hora").value //onde sera avaliado
				let planta3h = document.getElementById("p-h-total") //onde sera a resposta
				if (pl3htot > 0) {
				planta3h = pl3htot
				} else {
				planta3h  = "0"
				}
			//Planta 4-------------------------------------------------------------------------------------------
				const pl4htot = document.getElementById("p4-p-hora").value //onde sera avaliado
				let planta4h = document.getElementById("p-h-total") //onde sera a resposta
				if (pl4htot > 0) {
				planta4h = pl4htot
				} else {
				planta4h  = "0"
				}
			//Planta 5-------------------------------------------------------------------------------------------
				const pl5htot = document.getElementById("p5-p-hora").value //onde sera avaliado
				let planta5h = document.getElementById("p-h-total") //onde sera a resposta
				if (pl5htot > 0) {
				planta5h = pl5htot
				} else {
				planta5h  = "0"
				}
			//Planta 6-------------------------------------------------------------------------------------------
				const pl6htot = document.getElementById("p6-p-hora").value //onde sera avaliado
				let planta6h = document.getElementById("p-h-total") //onde sera a resposta
				if (pl6htot > 0) {
				planta6h = pl6htot
				} else {
				planta6h  = "0"
				}
			//Cálculos e impressão-------------------------------------------------------------------------------
				var tp1h=parseInt(planta1h)
				var tp2h=parseInt(planta2h)
				var tp3h=parseInt(planta3h)
				var tp4h=parseInt(planta4h)
				var tp5h=parseInt(planta5h)
				var tp6h=parseInt(planta6h)
				var tph = tp1h + tp2h + tp3h + tp4h + tp5h + tp6h
				document.getElementById("p-h-total").value = tph 
				document.getElementById("p-h-total").style.fontWeight = "bold"
				}
		//Total moeda--------------------------------------------------------------------------------------------
			function totalplantasmm(){
			//Planta 1-------------------------------------------------------------------------------------------
				const pl1totmm = document.getElementById("p1-p-moeda").value //onde sera avaliado
				let planta1mm= document.getElementById("p-m-total") //onde sera a resposta
				if (pl1totmm > 0) {
				planta1mm = pl1totmm
				} else {
				planta1mm  = "0"
				}
			//Planta 2-------------------------------------------------------------------------------------------
				const pl2totmm = document.getElementById("p2-p-moeda").value //onde sera avaliado
				let planta2mm = document.getElementById("p-m-total") //onde sera a resposta
				if (pl2totmm > 0) {
				planta2mm = pl2totmm
				} else {
				planta2mm  = "0"
				}
			//Planta 3-------------------------------------------------------------------------------------------
				const pl3totmm = document.getElementById("p3-p-moeda").value //onde sera avaliado
				let planta3mm = document.getElementById("p-m-total") //onde sera a resposta
				if (pl3totmm > 0) {
				planta3mm = pl3totmm
				} else {
				planta3mm  = "0"
				}
			//Planta 4-------------------------------------------------------------------------------------------
				const pl4totmm = document.getElementById("p4-p-moeda").value //onde sera avaliado
				let planta4mm = document.getElementById("p-m-total") //onde sera a resposta
				if (pl4totmm > 0) {
				planta4mm = pl4totmm
				} else {
				planta4mm  = "0"
				}
			//Planta 5-------------------------------------------------------------------------------------------
				const pl5totmm = document.getElementById("p5-p-moeda").value //onde sera avaliado
				let planta5mm = document.getElementById("p-m-total") //onde sera a resposta
				if (pl5totmm > 0) {
				planta5mm = pl5totmm
				} else {
				planta5mm  = "0"
				}
			//Planta 6-------------------------------------------------------------------------------------------
				const pl6totmm = document.getElementById("p6-p-moeda").value //onde sera avaliado
				let planta6mm = document.getElementById("p-m-total") //onde sera a resposta
				if (pl6totmm > 0) {
				planta6mm = pl6totmm
				} else {
				planta6mm  = "0"
				}
			//Cálculos e impressão-------------------------------------------------------------------------------
				var tp1mm=parseInt(planta1mm)
				var tp2mm=parseInt(planta2mm)
				var tp3mm=parseInt(planta3mm)
				var tp4mm=parseInt(planta4mm)
				var tp5mm=parseInt(planta5mm)
				var tp6mm=parseInt(planta6mm)
				var tpmm = tp1mm + tp2mm + tp3mm + tp4mm + tp5mm + tp6mm
				document.getElementById("p-m-total").value = tpmm 
				document.getElementById("p-m-total").style.fontWeight = "bold"
				}
		//Total custo--------------------------------------------------------------------------------------------
			function totalplantasmc() {
			//Planta 1-------------------------------------------------------------------------------------------
				const pl1totmc = document.getElementById("p1-p-custo").value //onde sera avaliado
				let planta1mc= document.getElementById("p-c-total") //onde sera a resposta
				if (pl1totmc > 0) {
				planta1mc = pl1totmc
				} else {
				planta1mc  = "0"
				}
			//Planta 2-------------------------------------------------------------------------------------------
				const pl2totmc = document.getElementById("p2-p-custo").value //onde sera avaliado
				let planta2mc = document.getElementById("p-c-total") //onde sera a resposta
				if (pl2totmc > 0) {
				planta2mc = pl2totmc
				} else {
				planta2mc  = "0"
				}
			//Planta 3-------------------------------------------------------------------------------------------
				const pl3totmc = document.getElementById("p3-p-custo").value //onde sera avaliado
				let planta3mc = document.getElementById("p-c-total") //onde sera a resposta
				if (pl3totmc > 0) {
				planta3mc = pl3totmc
				} else {
				planta3mc  = "0"
				}
			//Planta 4-------------------------------------------------------------------------------------------
				const pl4totmc = document.getElementById("p4-p-custo").value //onde sera avaliado
				let planta4mc = document.getElementById("p-c-total") //onde sera a resposta
				if (pl4totmc > 0) {
				planta4mc = pl4totmc
				} else {
				planta4mc  = "0"
				}
			//Planta 5-------------------------------------------------------------------------------------------
				const pl5totmc = document.getElementById("p5-p-custo").value //onde sera avaliado
				let planta5mc = document.getElementById("p-c-total") //onde sera a resposta
				if (pl5totmc > 0) {
				planta5mc = pl5totmc
				} else {
				planta5mc  = "0"
				}
			//Planta 6-------------------------------------------------------------------------------------------
				const pl6totmc = document.getElementById("p6-p-custo").value //onde sera avaliado
				let planta6mc = document.getElementById("p-c-total") //onde sera a resposta
				if (pl6totmc > 0) {
				planta6mc = pl6totmc
				} else {
				planta6mc  = "0"
				}
			//Cálculos e impressão-------------------------------------------------------------------------------
				var tp1mc=parseInt(planta1mc)
				var tp2mc=parseInt(planta2mc)
				var tp3mc=parseInt(planta3mc)
				var tp4mc=parseInt(planta4mc)
				var tp5mc=parseInt(planta5mc)
				var tp6mc=parseInt(planta6mc)
				var tpmc = tp1mc + tp2mc + tp3mc + tp4mc + tp5mc + tp6mc
				document.getElementById("p-c-total").value = tpmc 
				document.getElementById("p-c-total").style.fontWeight = "bold"
				}
		//Total moeda/hora---------------------------------------------------------------------------------------
			function totalplantasmh() {
			//Planta 1-------------------------------------------------------------------------------------------
				var pl1totmh = document.getElementById("p1-hora").value.replace(",",".") //onde sera avaliado
				let planta1mh= document.getElementById("hora-total") //onde sera a resposta
				if (pl1totmh > 0) {
				planta1mh = pl1totmh
				} else {
				planta1mh  = "0"
				}
			//Planta 2-------------------------------------------------------------------------------------------
				const pl2totmh = document.getElementById("p2-hora").value.replace(",",".") //onde sera avaliado
				let planta2mh = document.getElementById("hora-total") //onde sera a resposta
				if (pl2totmh > 0) {
				planta2mh = pl2totmh
				} else {
				planta2mh  = "0"
				}
			//Planta 3-------------------------------------------------------------------------------------------
				const pl3totmh = document.getElementById("p3-hora").value.replace(",",".") //onde sera avaliado
				let planta3mh = document.getElementById("hora-total") //onde sera a resposta
				if (pl3totmh > 0) {
				planta3mh = pl3totmh
				} else {
				planta3mh  = "0"
				}
			//Planta 4-------------------------------------------------------------------------------------------
				const pl4totmh = document.getElementById("p4-hora").value.replace(",",".") //onde sera avaliado
				let planta4mh = document.getElementById("hora-total") //onde sera a resposta
				if (pl4totmh > 0) {
				planta4mh = pl4totmh
				} else {
				planta4mh  = "0"
				}
			//Planta 5-------------------------------------------------------------------------------------------
				const pl5totmh = document.getElementById("p5-hora").value.replace(",",".") //onde sera avaliado
				let planta5mh = document.getElementById("hora-total") //onde sera a resposta
				if (pl5totmh > 0) {
				planta5mh = pl5totmh
				} else {
				planta5mh  = "0"
				}
			//Planta 6-------------------------------------------------------------------------------------------
				const pl6totmh = document.getElementById("p6-hora").value.replace(",",".") //onde sera avaliado
				let planta6mh = document.getElementById("hora-total") //onde sera a resposta
				if (pl6totmh > 0) {
				planta6mh = pl6totmh
				} else {
				planta6mh  = "0"
				}
			//Cálculos e impressão-------------------------------------------------------------------------------
				var tp1mh=parseFloat(planta1mh)
				var tp2mh=parseFloat(planta2mh)
				var tp3mh=parseFloat(planta3mh)
				var tp4mh=parseFloat(planta4mh)
				var tp5mh=parseFloat(planta5mh)
				var tp6mh=parseFloat(planta6mh)
				var tpmh =
				tp1mh+
				tp2mh+
				tp3mh+
				tp4mh+
				tp5mh+
				tp6mh
				document.getElementById("hora-total").value =tpmh
				document.getElementById("hora-total").style.fontWeight = "bold"
				}
		//Total moeda/dia----------------------------------------------------------------------------------------
			function totalplantasmd() {
			//Planta 1-------------------------------------------------------------------------------------------
				var pl1totmd = document.getElementById("p1-dia").value.replace(",",".") //onde sera avaliado
				let planta1md= document.getElementById("dia-total") //onde sera a resposta
				if (pl1totmd > 0) {
				planta1md = pl1totmd
				} else {
				planta1md  = "0"
				}
			//Planta 2-------------------------------------------------------------------------------------------
				const pl2totmd = document.getElementById("p2-dia").value.replace(",",".") //onde sera avaliado
				let planta2md = document.getElementById("dia-total") //onde sera a resposta
				if (pl2totmd > 0) {
				planta2md = pl2totmd
				} else {
				planta2md  = "0"
				}
			//Planta 3-------------------------------------------------------------------------------------------
				const pl3totmd = document.getElementById("p3-dia").value.replace(",",".") //onde sera avaliado
				let planta3md = document.getElementById("dia-total") //onde sera a resposta
				if (pl3totmd > 0) {
				planta3md = pl3totmd
				} else {
				planta3md  = "0"
				}
			//Planta 4-------------------------------------------------------------------------------------------
				const pl4totmd = document.getElementById("p4-dia").value.replace(",",".") //onde sera avaliado
				let planta4md = document.getElementById("dia-total") //onde sera a resposta
				if (pl4totmd > 0) {
				planta4md = pl4totmd
				} else {
				planta4md  = "0"
				}
			//Planta 5-------------------------------------------------------------------------------------------
				const pl5totmd = document.getElementById("p5-dia").value.replace(",",".") //onde sera avaliado
				let planta5md = document.getElementById("dia-total") //onde sera a resposta
				if (pl5totmd> 0) {
				planta5md = pl5totmd
				} else {
				planta5md  = "0"
				}
			//Planta 6-------------------------------------------------------------------------------------------
				const pl6totmd = document.getElementById("p6-dia").value.replace(",",".") //onde sera avaliado
				let planta6md = document.getElementById("dia-total") //onde sera a resposta
				if (pl6totmd > 0) {
				planta6md = pl6totmd
				} else {
				planta6md  = "0"
				}
			//Cálculos e impressão-------------------------------------------------------------------------------
				var tp1md=parseFloat(planta1md)
				var tp2md=parseFloat(planta2md)
				var tp3md=parseFloat(planta3md)
				var tp4md=parseFloat(planta4md)
				var tp5md=parseFloat(planta5md)
				var tp6md=parseFloat(planta6md)
				var tpmd =
				tp1md+
				tp2md+
				tp3md+
				tp4md+
				tp5md+
				tp6md
				document.getElementById("dia-total").value =tpmd
				document.getElementById("dia-total").style.fontWeight = "bold"
				}
		//Total moeda/semana-------------------------------------------------------------------------------------
			function totalplantasms() {
			//Planta 1-------------------------------------------------------------------------------------------
				const pl1totms = document.getElementById("p1-semana").value.replace(",",".") //onde sera avaliado
				let planta1ms= document.getElementById("semana-total") //onde sera a resposta
				if (pl1totms > 0) {
				planta1ms = pl1totms
				} else {
				planta1ms  = "0"
				}
			//Planta 2-------------------------------------------------------------------------------------------
				const pl2totms = document.getElementById("p2-semana").value.replace(",",".") //onde sera avaliado
				let planta2ms = document.getElementById("semana-total") //onde sera a resposta
				if (pl2totms > 0) {
				planta2ms = pl2totms
				} else {
				planta2ms  = "0"
				}
			//Planta 3-------------------------------------------------------------------------------------------
				const pl3totms = document.getElementById("p3-semana").value.replace(",",".") //onde sera avaliado
				let planta3ms = document.getElementById("semana-total") //onde sera a resposta
				if (pl3totms > 0) {
				planta3ms = pl3totms
				} else {
				planta3ms  = "0"
				}
			//Planta 4-------------------------------------------------------------------------------------------
				const pl4totms = document.getElementById("p4-semana").value.replace(",",".") //onde sera avaliado
				let planta4ms = document.getElementById("semana-total") //onde sera a resposta
				if (pl4totms > 0) {
				planta4ms = pl4totms
				} else {
				planta4ms  = "0"
				}
			//Planta 5-------------------------------------------------------------------------------------------
				const pl5totms = document.getElementById("p5-semana").value.replace(",",".") //onde sera avaliado
				let planta5ms = document.getElementById("semana-total") //onde sera a resposta
				if (pl5totms> 0) {
				planta5ms = pl5totms
				} else {
				planta5ms  = "0"
				}
			//Planta 6-------------------------------------------------------------------------------------------
				const pl6totms = document.getElementById("p6-semana").value.replace(",",".") //onde sera avaliado
				let planta6ms = document.getElementById("semana-total") //onde sera a resposta
				if (pl6totms > 0) {
				planta6ms = pl6totms
				} else {
				planta6ms  = "0"
				}
			//Cálculos e impressão-------------------------------------------------------------------------------
				var tp1ms=parseFloat(planta1ms)
				var tp2ms=parseFloat(planta2ms)
				var tp3ms=parseFloat(planta3ms)
				var tp4ms=parseFloat(planta4ms)
				var tp5ms=parseFloat(planta5ms)
				var tp6ms=parseFloat(planta6ms)
				var tpms =
				tp1ms+
				tp2ms+
				tp3ms+
				tp4ms+
				tp5ms+
				tp6ms
				document.getElementById("semana-total").value =tpms
				document.getElementById("semana-total").style.fontWeight = "bold"//.style = font: bold///.style=background:red
				}
		//Total moeda/mês----------------------------------------------------------------------------------------
			function totalplantasmM() {
			//Planta 1-------------------------------------------------------------------------------------------
				const pl1totmM = document.getElementById("p1-mes").value.replace(",",".") //onde sera avaliado
				let planta1mM= document.getElementById("mes-total") //onde sera a resposta
				if (pl1totmM > 0) {
				planta1mM = pl1totmM
				} else {
				planta1mM  = "0"
				}
			//Planta 2-------------------------------------------------------------------------------------------
				const pl2totmM = document.getElementById("p2-mes").value.replace(",",".") //onde sera avaliado
				let planta2mM = document.getElementById("mes-total") //onde sera a resposta
				if (pl2totmM > 0) {
				planta2mM = pl2totmM
				} else {
				planta2mM  = "0"
				}
			//Planta 3-------------------------------------------------------------------------------------------
				const pl3totmM = document.getElementById("p3-mes").value.replace(",",".") //onde sera avaliado
				let planta3mM = document.getElementById("mes-total") //onde sera a resposta
				if (pl3totmM > 0) {
				planta3mM = pl3totmM
				} else {
				planta3mM  = "0"
				}
			//Planta 4-------------------------------------------------------------------------------------------
				const pl4totmM = document.getElementById("p4-mes").value.replace(",",".") //onde sera avaliado
				let planta4mM = document.getElementById("mes-total") //onde sera a resposta
				if (pl4totmM > 0) {
				planta4mM = pl4totmM
				} else {
				planta4mM  = "0"
				}
			//Planta 5-------------------------------------------------------------------------------------------
				const pl5totmM = document.getElementById("p5-mes").value.replace(",",".") //onde sera avaliado
				let planta5mM = document.getElementById("mes-total") //onde sera a resposta
				if (pl5totmM> 0) {
				planta5mM = pl5totmM
				} else {
				planta5mM  = "0"
				}
			//Planta 6-------------------------------------------------------------------------------------------
				const pl6totmM = document.getElementById("p6-mes").value.replace(",",".") //onde sera avaliado
				let planta6mM = document.getElementById("mes-total") //onde sera a resposta
				if (pl6totmM > 0) {
				planta6mM = pl6totmM
				} else {
				planta6mM  = "0"
				}
			//Cálculos e impressão-------------------------------------------------------------------------------
				var tp1mM=parseFloat(planta1mM)
				var tp2mM=parseFloat(planta2mM)
				var tp3mM=parseFloat(planta3mM)
				var tp4mM=parseFloat(planta4mM)
				var tp5mM=parseFloat(planta5mM)
				var tp6mM=parseFloat(planta6mM)
				var tpmM =
				tp1mM+
				tp2mM+
				tp3mM+
				tp4mM+
				tp5mM+
				tp6mM
				document.getElementById("mes-total").value =tpmM
				document.getElementById("mes-total").style.fontWeight = "bold"//.style = font: bold///.style=background:red
				}
		//Total planta/troca-------------------------------------------------------------------------------------
			function totalplantastm() {
			//Planta 1-------------------------------------------------------------------------------------------
				var pl1tottm = document.getElementById("p1-troca").value.replace(",",".") //onde sera avaliado
				let planta1tm= document.getElementById("troca-total") //onde sera a resposta
				if (pl1tottm > 0) {
				planta1tm = pl1tottm
				} else {
				planta1tm  = "0"
				}
			//Planta 2-------------------------------------------------------------------------------------------
				const pl2tottm = document.getElementById("p2-troca").value.replace(",",".") //onde sera avaliado
				let planta2tm = document.getElementById("troca-total") //onde sera a resposta
				if (pl2tottm > 0) {
				planta2tm = pl2tottm
				} else {
				planta2tm  = "0"
				}
			//Planta 3-------------------------------------------------------------------------------------------
				const pl3tottm = document.getElementById("p3-troca").value.replace(",",".") //onde sera avaliado
				let planta3tm = document.getElementById("troca-total") //onde sera a resposta
				if (pl3tottm > 0) {
				planta3tm = pl3tottm
				} else {
				planta3tm  = "0"
				}
			//Planta 4-------------------------------------------------------------------------------------------
				const pl4tottm = document.getElementById("p4-troca").value.replace(",",".") //onde sera avaliado
				let planta4tm = document.getElementById("troca-total") //onde sera a resposta
				if (pl4tottm > 0) {
				planta4tm = pl4tottm
				} else {
				planta4tm  = "0"
				}
			//Planta 5-------------------------------------------------------------------------------------------
				const pl5tottm = document.getElementById("p5-dia").value.replace(",",".") //onde sera avaliado
				let planta5tm = document.getElementById("dia-total") //onde sera a resposta
				if (pl5tottm> 0) {
				planta5tm = pl5tottm
				} else {
				planta5tm  = "0"
				}
			//Planta 6-------------------------------------------------------------------------------------------
				const pl6tottm = document.getElementById("p6-troca").value.replace(",",".") //onde sera avaliado
				let planta6tm = document.getElementById("troca-total") //onde sera a resposta
				if (pl6tottm > 0) {
				planta6tm = pl6tottm
				} else {
				planta6tm  = "0"
				}
			//Cálculos e impressão-------------------------------------------------------------------------------
				var tp1tm=parseFloat(planta1tm)
				var tp2tm=parseFloat(planta2tm)
				var tp3tm=parseFloat(planta3tm)
				var tp4tm=parseFloat(planta4tm)
				var tp5tm=parseFloat(planta5tm)
				var tp6tm=parseFloat(planta6tm)
				var tptm =
				tp1tm+
				tp2tm+
				tp3tm+
				tp4tm+
				tp5tm+
				tp6tm
				document.getElementById("troca-total").value =tptm
				document.getElementById("troca-total").style.fontWeight = "bold"
				}
				}
				}
//--finalizado para protugues
		//Limpar dados-------------------------------------------------------------------------------------------
				function limpardados(){
					//Quantidade---------------------------------------------------------------------------------
						document.getElementById("p1-p-qt").value=""
						document.getElementById("p2-p-qt").value=""
						document.getElementById("p3-p-qt").value=""
						document.getElementById("p4-p-qt").value=""
						document.getElementById("p5-p-qt").value=""
						document.getElementById("p6-p-qt").value=""
					//Hora---------------------------------------------------------------------------------------
						document.getElementById("p1-p-hora").value=""
						document.getElementById("p2-p-hora").value=""
						document.getElementById("p3-p-hora").value=""
						document.getElementById("p4-p-hora").value=""
						document.getElementById("p5-p-hora").value=""
						document.getElementById("p6-p-hora").value=""
					//Moeda--------------------------------------------------------------------------------------
						document.getElementById("p1-p-moeda").value=""
						document.getElementById("p2-p-moeda").value=""
						document.getElementById("p3-p-moeda").value=""
						document.getElementById("p4-p-moeda").value=""
						document.getElementById("p5-p-moeda").value=""
						document.getElementById("p6-p-moeda").value=""
					//Custo--------------------------------------------------------------------------------------
						document.getElementById("p1-p-custo").value=""
						document.getElementById("p2-p-custo").value=""
						document.getElementById("p3-p-custo").value=""
						document.getElementById("p4-p-custo").value=""
						document.getElementById("p5-p-custo").value=""
						document.getElementById("p6-p-custo").value=""
					//Hora/moeda---------------------------------------------------------------------------------
						document.getElementById("p1-hora").value=""
						document.getElementById("p2-hora").value=""
						document.getElementById("p3-hora").value=""
						document.getElementById("p4-hora").value=""
						document.getElementById("p5-hora").value=""
						document.getElementById("p6-hora").value=""
					//Dia/moeda----------------------------------------------------------------------------------
						document.getElementById("p1-dia").value=""
						document.getElementById("p2-dia").value=""
						document.getElementById("p3-dia").value=""
						document.getElementById("p4-dia").value=""
						document.getElementById("p5-dia").value=""
						document.getElementById("p6-dia").value=""
					//Semana/moeda-------------------------------------------------------------------------------
						document.getElementById("p1-semana").value=""
						document.getElementById("p2-semana").value=""
						document.getElementById("p3-semana").value=""
						document.getElementById("p4-semana").value=""
						document.getElementById("p5-semana").value=""
						document.getElementById("p6-semana").value=""
					//MÊs/moeda----------------------------------------------------------------------------------
						document.getElementById("p1-mes").value=""
						document.getElementById("p2-mes").value=""
						document.getElementById("p3-mes").value=""
						document.getElementById("p4-mes").value=""
						document.getElementById("p5-mes").value=""
						document.getElementById("p6-mes").value=""
					//Troca--------------------------------------------------------------------------------------
						document.getElementById("p2-troca").value=""
						document.getElementById("p1-troca").value=""
						document.getElementById("p3-troca").value=""
						document.getElementById("p4-troca").value=""
						document.getElementById("p5-troca").value=""
						document.getElementById("p6-troca").value=""
					//Totais-------------------------------------------------------------------------------------
						document.getElementById("p-qt-total").value=""
						document.getElementById("p-h-total").value=""
						document.getElementById("p-m-total").value=""
						document.getElementById("p-c-total").value=""
						document.getElementById("hora-total").value=""
						document.getElementById("dia-total").value=""
						document.getElementById("semana-total").value=""
						document.getElementById("mes-total").value=""
						document.getElementById("troca-total").value=""
					}
//finalizar------------------------------------------------------------------------------------------------------
  //teste
  /*asdfasdf*/