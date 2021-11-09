/*http://embuscadocodigo.com/codigos/javascript/somar-valores-de-input.html*/
//https://www.w3schools.com/css/css_positioning.asp


function horamoeda() {
    var diahora = 24
    var semanadia = 7
    var mesdia = 30
    var meshora = 720
    var i = document.querySelector("#p2-p-hora").value
    var phora1 = document.querySelector("#p1-p-hora").value
    var pmoeda1 = document.querySelector("#p1-p-moeda").value
    var custop1 = document.querySelector("#p1-p-custo").value 
    var q1 = document.querySelector("#p1-p-qt").value 
    
    
    //calculos
    var resultadohora = parseInt(pmoeda1) / parseInt(phora1)//72/250 3,47222
    for var resmesdia = parseInt("#p2-p-hora") * parseInt(diahora)//h*24  83,333
    var resmes = parseInt(resultadohora) * parseInt(meshora)//((72/250)*720horas 2500
    var resmesbruto = parseInt(q1) * parseInt(resmes)//((72/250)*24)*30)*("qantidade de planta")
    var totmesplant = parseInt(phora1) / parseInt(meshora)//hora polanta/30hplanta por mes 10
    var rescustobrutomes = parseInt(resmes) - parseInt(custop1) //((72/250)720horas - (custo*troca)1500

    var plantabrutames = parseInt(rescustobrutomes)
    var plantabrutahora = parseInt(plantabrutames)/ parseInt(meshora)
    var plantabrutadia = parseInt(plantabrutahora) * parseInt(diahora)
    
    

    document.getElementById("p2-p-hora").value = resultadohora
    document.getElementById("p3-p-hora").value = resmesdia.toFixed(3)
    document.getElementById("p4-p-hora").value = resmes
        
	<html>
<body>
<h2>JavaScript Iterables</h2>
<p>Iterate over a Map:</p><br>
<input type="button"onclick="varias()"><br>
<input id="as"type="text"><br>
<input id="bs"type="text"><br>
<input id="cs"type="text"><br>
<input id="demo"type="text"></p>

<script>
// Create a Map

function varias() {
var a = document.querySelector("#as").value
var b = 24
var b = 30
const fruits = ([
  [ b * a]
])
const fruitsb = ([
  [ b - a]
])

var aprint = fruits
var bprint = fruitsb
document.getElementById("demo").value = aprint;
document.getElementById("bs").value = bprint;
document.getElementById("cs").value = bprint;
}
</script>
</body>
</html>
    
       /* var dia1 = document.querySelector("#p1-mes").value
        
        var resultadosemana = document.querySelector("#p1-dia").value
        var resultadosemana1 = parseInt(resultadosemana) * parseInt(semana)
        
        .replace(",", ".") // subistitui , por .
        .toFixed(2)        // fixa as casas decimais

        var demorap = document.querySelector("#p1-p-hora").value;
        var despdemo1 =  parseInt(demorap) / parseInt(dia)       
        var despdemo1total = despdemo1
        document.querySelector("#p1-troca").value = despdemo1total
        var mes = document.querySelector("#p1-mes").value = (((horamoeda1.replace(",", ".") *dia)*mes)*q1)- (custop1*despdemo1total)/*hora mes*/
      
       /* document.querySelector("#p1-semana").value =  resultadosemana1/*hora semana*/
     
   }

/*function horahora(){
      const diadia = 1
    var resultado2 = (parseInt(pmoedadia.replace(",", ".")) )
     document.querySelector("#p1-dia").value = resultado2.toFixed(2)
    
    var resultado3 = 
      parseInt(pmoedas1) * 7
      document.querySelector("#p1-semana").value = resultado3;
    var resultado4 = 
      parseInt(pmoedam1) * 30
      document.querySelector("#p1-mes").value = resultado4;}
     /* var resultado2 =
      parseInt(num3) 
      parseInt(num4) +
      parseInt(num5) +
      parseInt(num6)
    
}*/
/*
function horamoeda2() {
  const message = document.getElementById("erromes")
  message.innerHTML = ""
  let p2phora = document.getElementById("p2-p-hora").value
  try {
    
    if(isNaN(p2phora)) throw "não é um Número, a tabela só aceita números!"
    
    p2phora = Number(p2phora)
    if(p2phora < 24) throw "valor muito baixo no campo ( Hora Planta 2)"
    
    if(p2phora > 720) throw "valor muito alto no campo ( Hora Planta 2)"
    
  }
  catch(err) {
    message.innerHTML = "Corriga o erro: " + err
    document.getElementById("p2-p-hora").value=""
  }
}
function horamoeda3() {
  const message = document.getElementById("erromes")
  message.innerHTML = ""
  let p3phora = document.getElementById("p3-p-hora").value
  try {
    

    if(isNaN(p3phora)) throw "não é um Número, a tabela só aceita números!"
    
    p3phora = Number(p3phora)
    if(p3phora < 24) throw "valor muito baixo no campo ( Hora Planta 3)"
    
    if(p3phora > 720) throw "valor muito alto no campo ( Hora Planta 3)"
    
  }
  catch(err) {
    message.innerHTML = "Corriga o erro: " + err
    document.getElementById("p3-p-hora").value=""
  }
}

function horamoeda4() {
  const message = document.getElementById("erromes")
  message.innerHTML = ""
  let p4phora = document.getElementById("p4-p-hora").value
  try {
    
    if(isNaN(p4phora)) throw "não é um Número, a tabela só aceita números!"
    
    p4phora = Number(p4phora)
    if(p4phora < 24) throw "valor muito baixo no campo ( Hora Planta 4)"
    
    if(p4phora > 720) throw "valor muito alto no campo ( Hora Planta 4)"
    
  }
  catch(err) {
    message.innerHTML = "Corriga o erro: " + err
    document.getElementById("p4-p-hora").value=""
  }
}

function horamoeda5() {
  const message = document.getElementById("erromes")
  message.innerHTML = ""
  let p5phora = document.getElementById("p5-p-hora").value
  try {
    

    if(isNaN(p5phora)) throw "não é um Número, a tabela só aceita números!"
    
    p5phora = Number(p5phora)
    if(p5phora < 24) throw "valor muito baixo no campo ( Hora Planta 5)"
    
    if(p5phora > 720) throw "valor muito alto no campo ( Hora Planta 5)"
    
  }
  catch(err) {
    message.innerHTML = "Corriga o erro: " + err
    document.getElementById("p5-p-hora").value=""
  }
}

function horamoeda6() {
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
  }*/
/**********************************************************************************************************/
/*function horamoeda() {
  const message = document.getElementById("erromes")
  message.innerHTML = ""
  let p1phora = document.getElementById("p1-p-hora").value
  try {
    if(p1phora == "") throw "digite quantas horas a planta leva para crescer!"
		
    if(isNaN(p1phora)) throw "não é um Número, a tabela só aceita números!"
    
    p1phora = Number(p1phora)
    if(p1phora < 24) throw "valor muito baixo no campo ( Hora Planta 1)"
    
    if(p1phora > 720) throw "valor muito alto no campo ( Hora Planta 1)"
    
  }
  catch(err) {
    message.innerHTML = "Corriga o erro: " + err
    document.getElementById("p1-p-hora").value=""
  }
}
function horamoeda2() {
  const message = document.getElementById("erromes")
  message.innerHTML = ""
  let p2phora = document.getElementById("p2-p-hora").value
  try {
    
    if(isNaN(p2phora)) throw "não é um Número, a tabela só aceita números!"
    
    p2phora = Number(p2phora)
    if(p2phora < 24) throw "valor muito baixo no campo ( Hora Planta 2)"
    
    if(p2phora > 720) throw "valor muito alto no campo ( Hora Planta 2)"
    
  }
  catch(err) {
    message.innerHTML = "Corriga o erro: " + err
    document.getElementById("p2-p-hora").value=""
  }
}
function horamoeda3() {
  const message = document.getElementById("erromes")
  message.innerHTML = ""
  let p3phora = document.getElementById("p3-p-hora").value
  try {
    

    if(isNaN(p3phora)) throw "não é um Número, a tabela só aceita números!"
    
    p3phora = Number(p3phora)
    if(p3phora < 24) throw "valor muito baixo no campo ( Hora Planta 3)"
    
    if(p3phora > 720) throw "valor muito alto no campo ( Hora Planta 3)"
    
  }
  catch(err) {
    message.innerHTML = "Corriga o erro: " + err
    document.getElementById("p3-p-hora").value=""
  }
}

function horamoeda4() {
  const message = document.getElementById("erromes")
  message.innerHTML = ""
  let p4phora = document.getElementById("p4-p-hora").value
  try {
    
    if(isNaN(p4phora)) throw "não é um Número, a tabela só aceita números!"
    
    p4phora = Number(p4phora)
    if(p4phora < 24) throw "valor muito baixo no campo ( Hora Planta 4)"
    
    if(p4phora > 720) throw "valor muito alto no campo ( Hora Planta 4)"
    
  }
  catch(err) {
    message.innerHTML = "Corriga o erro: " + err
    document.getElementById("p4-p-hora").value=""
  }
}

function horamoeda5() {
  const message = document.getElementById("erromes")
  message.innerHTML = ""
  let p5phora = document.getElementById("p5-p-hora").value
  try {
    

    if(isNaN(p5phora)) throw "não é um Número, a tabela só aceita números!"
    
    p5phora = Number(p5phora)
    if(p5phora < 24) throw "valor muito baixo no campo ( Hora Planta 5)"
    
    if(p5phora > 720) throw "valor muito alto no campo ( Hora Planta 5)"
    
  }
  catch(err) {
    message.innerHTML = "Corriga o erro: " + err
    document.getElementById("p5-p-hora").value=""
  }
}

function horamoeda6() {
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
  }*/