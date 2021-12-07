/*
https://www.w3schools.com/jsref/event_key_which.asp

<input id="resp"type="text" size="50" onkeypress="myFunction(event)"> 

https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_which2 //identificar tecla
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_which //identificar tecla 2
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup //passar teclas para maiusculo
<script>*/

	function myFunction(event) {

		var x1 = event.which;//1 tecla 1
		var x2 = event.which;//2 tecla 2
		var x3 = event.which;//3 tecla 3
		var x4 = event.which;//4 tecla 4
		var x5 = event.which;//5 tecla 5
		var x6 = event.which;//6 tecla 6
		var x7 = event.which;//7 tecla 7
		var x8 = event.which;//8 tecla 8
		var x9 = event.which;//9 tecla 9
		var x0 = event.which;//10 tecla 0
		//var xdel = event.which;//11 tecla delete / limpar //passada para outra função.
		var xraiz = event.which;//12 tecla raiz
		var xporc = event.which;//13 tecla %
		var xdiv = event.which;//14 tecla /
		var xvez = event.which;//15 tecla *
		var xmenos = event.which;//16 tecla -
		var xmais = event.which;//17 tecla +
		var xigual = event.which;//18 tecla =
		var xvir = event.which;//19 tecla ,

		if (x1a == 49) {//1 tecla 1
			alert ("Yodu pressed tswshe Escape keydd!"+x1);
			x1a = "1"
		}
		if (x2 == 50) {//2 tecla 2
			//alert ("Yodu pressed tswshe Escape keydd!"+x2);
			x2 = 2
		}
		if (x3 == 51) {//3 tecla 3
			//alert ("Yodu pressed tswshe Escape keydd!"+x3);
			x3 = 3
		}
		if (x4 == 52) {//4 tecla 4
			//alert ("Yodu pressed tswshe Escape keydd!"+x4);
			x4 = 4
		}
		if (x5 == 53) {//5 tecla 5
			//alert ("Yodu pressed tswshe Escape keydd!"+x5);
			x5 = 5
		}
		if (x6 == 54) {//6 tecla 6
			//alert ("Yodu pressed tswshe Escape keydd!"+x6);
			x6 = 6
		}
		if (x7 == 55) {//7 tecla 7
			//alert ("Yodu pressed tswshe Escape keydd!"+x7);
			x7 = 7
		}
		if (x8 == 56) {//8 tecla 8
			//alert ("Yodu pressed tswshe Escape keydd!"+x8);
			x8 = 8
		}
		if (x9 == 57) {//9 tecla 9
			//alert ("Yodu pressed tswshe Escape keydd!"+x9);
			x9 = 9
		}
		if (x0 == 48) {//10 tecla 0
			//alert ("Yodu pressed tswshe Escape keydd!"+x0);
			x0 = 0
		}
			//if (xdel == 49) {//11 tecla delete / limpar 	necessita outra função//passada para outra função.
			//	alert ("Yodu pressed tswshe Escape keydd!"+x1);
			//}
		if (xraiz== 46) {//12 tecla raiz será usada a tecla de ponto"." 
						//pois a mais proxima seria o acento circunflexo.
						// mas fica fora da area de digitação para o projeto
			//alert ("Yodu pressed tswshe Escape keydd!"+x2);
			xrais == "/"///////////
		}
		if (xporc == 37) {//13 tecla %
			//alert ("Yodu pressed tswshe Escape keydd!"+x3);
			xporc = "%"
		}
		if (xdiv == 47) {//14 tecla dividir
			//alert ("Yodu pressed tswshe Escape keydd!"+x4);
			xdiv = "/"
		}
		if (xvez == 42) {//15 tecla vezes
			//alert ("Yodu pressed tswshe Escape keydd!"+x5);
			xvez= "*"
		}
		if (xmenos == 45) {//16 tecla menos
			//alert ("Yodu pressed tswshe Escape keydd!"+x6);
			xmenos = "-"
		}
		if (xmais == 43) {//17 tecla mais
			//alert ("Yodu pressed tswshe Escape keydd!"+x7);
			xmais = "+"
		}
		if (xigual == 13) {//18 tecla resultado ou igual
			//alert ("Yodu pressed tswshe Escape keydd!"+x8);
			//xigual
		}
		if (xvir == 44) {//19 tecla ","" virgula
			//alert ("Yodu pressed tswshe Escape keydd!"+x9);
			x= "."
		}
	}
		function uniKeyCode(event) {
			var key = event.which || event.keyCode
			if (key== 46) {//19 tecla ","" virgula
				alert ("Yodu pressed tswshe Escape keydd!"+key)
			document.getElementById("resultado").value =  "resultadoa" + x1
			}
		}

		function total(){
			//teste para pegar sequencia digitada
			
			var resultado = document.getElementById("resultado").value
			var resultadof= resultado
			document.getElementById("resultado").value = resultadof + "a"
			document.getElementById("resultado").style.fontWeight = "bold"
			
			//teste para gerar teclas com valores recebidos

			//var x1 = x1a
			//var resultadoa = x1 // + xmais + x2
			var xb = 1;
			var xc = "+";
			var xd = 2;
			var xe = xb + xc + xd;
			
			document.getElementById("resultado").value =  "resultadoa" + xe
			//alert ("Yodu pressed tswshe Escape keydd!"+resultadoa)
		}

/*

https://www.w3schools.com/js/js_cookies.asp  //cokies utilização
https://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username  //cokies apresentação
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}*/

	//https://www.luiztools.com.br/post/como-usar-nodejs-mysql/