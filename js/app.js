var calculadora = {

	visor: document.getElementById("display"),
	valorVisor: "0",
	operacion: "",
	primerValor: 0,
	segundoValor: 0,
	ultimoValor: 0,
	resultado: 0,
	auxTeclaIgual: false,

	init: (function(){
		this.asignarEventosdeBotones();
		this.asignarEventosaFuncion();
	}),

	asignarEventosdeBotones: function(){

	document.getElementById("on").addEventListener("click", function(){
		  document.getElementById("on").style.transform="scale(0.9,0.9) "
		  setTimeout(function(){document.getElementById("on").style.transform="scale(1,1)" }, 100);
		  });
	document.getElementById("sign").addEventListener("click", function(){
			document.getElementById("sign").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("sign").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("raiz").addEventListener("click", function(){
			document.getElementById("raiz").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("raiz").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("dividido").addEventListener("click", function(){
			document.getElementById("dividido").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("dividido").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("7").addEventListener("click", function(){
			document.getElementById("7").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("7").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("8").addEventListener("click", function(){
			document.getElementById("8").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("8").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("9").addEventListener("click", function(){
			document.getElementById("9").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("9").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("por").addEventListener("click", function(){
			document.getElementById("por").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("por").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("4").addEventListener("click", function(){
			document.getElementById("4").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("4").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("5").addEventListener("click", function(){
			document.getElementById("5").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("5").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("6").addEventListener("click", function(){
			document.getElementById("6").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("6").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("menos").addEventListener("click", function(){
			document.getElementById("menos").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("menos").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("1").addEventListener("click", function(){
			document.getElementById("1").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("1").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("2").addEventListener("click", function(){
			document.getElementById("2").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("2").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("3").addEventListener("click", function(){
			document.getElementById("3").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("3").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("0").addEventListener("click", function(){
			document.getElementById("0").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("0").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("punto").addEventListener("click", function(){
			document.getElementById("punto").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("punto").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("igual").addEventListener("click", function(){
			document.getElementById("igual").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("igual").style.transform="scale(1,1)" }, 100);
			});
	document.getElementById("mas").addEventListener("click", function(){
			document.getElementById("mas").style.transform="scale(0.9,0.9) "
			setTimeout(function(){document.getElementById("mas").style.transform="scale(1,1)" }, 100);
			});
	},

	asignarEventosaFuncion: function(){
		document.getElementById("0").addEventListener("click", function() {calculadora.ingresoNumero("0");});
		document.getElementById("1").addEventListener("click", function() {calculadora.ingresoNumero("1");});
		document.getElementById("2").addEventListener("click", function() {calculadora.ingresoNumero("2");});
		document.getElementById("3").addEventListener("click", function() {calculadora.ingresoNumero("3");});
		document.getElementById("4").addEventListener("click", function() {calculadora.ingresoNumero("4");});
		document.getElementById("5").addEventListener("click", function() {calculadora.ingresoNumero("5");});
		document.getElementById("6").addEventListener("click", function() {calculadora.ingresoNumero("6");});
		document.getElementById("7").addEventListener("click", function() {calculadora.ingresoNumero("7");});
		document.getElementById("8").addEventListener("click", function() {calculadora.ingresoNumero("8");});
		document.getElementById("9").addEventListener("click", function() {calculadora.ingresoNumero("9");});
		document.getElementById("on").addEventListener("click", function() {calculadora.borrarVisor();});
		document.getElementById("sign").addEventListener("click", function() {calculadora.cambiarSigno();});
		document.getElementById("punto").addEventListener("click", function() {calculadora.ingresoDecimal();});
		document.getElementById("igual").addEventListener("click", function() {calculadora.verResultado();});
		document.getElementById("raiz").addEventListener("click", function() {calculadora.ingresoOperacion("raiz");});
		document.getElementById("dividido").addEventListener("click", function() {calculadora.ingresoOperacion("/");});
		document.getElementById("por").addEventListener("click", function() {calculadora.ingresoOperacion("*");});
		document.getElementById("menos").addEventListener("click", function() {calculadora.ingresoOperacion("-");});
		document.getElementById("mas").addEventListener("click", function() {calculadora.ingresoOperacion("+");});
	},

	borrarVisor: function(){

	    this.valorVisor = "0";
		this.operacion = "";
		this.primerValor = 0;
		this.segundoValor = 0;
		this.resultado = 0;
		this.Operación = "";
		this.auxTeclaIgual = false;
		this.ultimoValor = 0;
		this.updateVisor();
	},

	cambiarSigno: function(){
		if (this.valorVisor !="0") {
			var aux;
			if (this.valorVisor.charAt(0)=="-") {
				aux = this.valorVisor.slice(1);
			}	else {
				aux = "-" + this.valorVisor;
			}
		this.valorVisor = "";
		this.valorVisor = aux;
		this.updateVisor();
		}
	},

	ingresoDecimal: function(){
		if (this.valorVisor.indexOf(".")== -1) {
			if (this.valorVisor == ""){
				this.valorVisor = this.valorVisor + "0.";
			} else {
				this.valorVisor = this.valorVisor + ".";
			}
			this.updateVisor();
		}
	},

	ingresoNumero: function(valor){
		if (this.valorVisor.length < 8) {

			if (this.valorVisor=="0") {
				this.valorVisor = "";
				this.valorVisor = this.valorVisor + valor;
			} else {
				this.valorVisor = this.valorVisor + valor;
			}
		this.updateVisor();
		}
	},

	ingresoOperacion: function(oper){
		this.primerValor = parseFloat(this.valorVisor);
		this.valorVisor = "";
		this.operacion = oper;
		this.auxTeclaIgual = false;
		this.updateVisor();
	},

	verResultado: function(){

		if(!this.auxTeclaIgual){
			this.segundoValor = parseFloat(this.valorVisor);
			this.ultimoValor = this.segundoValor;
			this.realizarOperacion(this.primerValor, this.segundoValor, this.operacion);

		} else {
			this.realizarOperacion(this.primerValor, this.ultimoValor, this.operacion);
		}

		this.primerValor = this.resultado;
		this.valorVisor = "";

		if (this.resultado.toString().length < 9){
			this.valorVisor = this.resultado.toString();
		} else {
			this.valorVisor = this.resultado.toString().slice(0,8) + "...";
		}

		this.auxTeclaIgual = true;
		this.updateVisor();

	},

	realizarOperacion: function(primerValor, segundoValor, operacion){
		switch(operacion){
			case "+":
				this.resultado = eval(primerValor + segundoValor);
			break;
			case "-":
				this.resultado = eval(primerValor - segundoValor);
			break;
			case "*":
				this.resultado = eval(primerValor * segundoValor);
			break;
			case "/":
				this.resultado = eval(primerValor / segundoValor);
			break;
			case "raiz":
				this.resultado = eval(Math.sqrt(primerValor));
		}
	},

	updateVisor: function(){
		this.visor.innerHTML = this.valorVisor;
	}

};

calculadora.init();
