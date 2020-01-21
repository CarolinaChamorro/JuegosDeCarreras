class Dado {
    constructor(img = []) {
        this.img = img;
        img.push("1.png");
        img.push('2.png');
        img.push('3.png');
        img.push('4.png');
        img.push('5.png');
        img.push('6.png');

    }
    lanzar() {
        var aleatorio = Math.floor(Math.random() * this.img.length);
        let casilla = document.getElementById("imagenDado").src = "img/" + this.img[aleatorio];
        return casilla;

    }

}
let dada = new Dado();

//json
document.getElementById("click").addEventListener("click", function () {

    function loadJson(callback) {
        var datos = new XMLHttpRequest();
        datos.overrideMimeType("application/json");
        datos.open('Get', 'question.json', true);
        datos.onreadystatechange = function () {
            if (datos.readyState == 4 && datos.status == "200") {
                callback(datos.responseText);
            }
        }
        datos.send(null);
    }

    var x = [];
    loadJson(function (response) {
        jsonresponde = JSON.parse(response);
        x = (jsonresponde);

        let si = "Correcto!!";
        let no = "Incorrecto!!";
        let numPre = Math.floor(Math.random() * (12 - 1)) + 1;
        console.log(x[numPre]['P']);
        document.getElementById("pregunta").innerHTML = x[numPre]['P'];
        console.log(x[numPre]['R']);
        document.getElementById("a").value = x[numPre]["R"][0][1];
        document.getElementById("b").value = x[numPre]["R"][1][2];
        document.getElementById("c").value = x[numPre]["R"][2][3];
        document.getElementById("d").value = x[numPre]["R"][3][4];
        document.getElementById("botones").style.visibility = "visible";
        document.getElementById("respPregunta").innerHTML = "";
        document.getElementById("respPregunta").style.color = "";
        document.getElementById("a").addEventListener("click", function () {
            if (x[numPre]["R"][0].valor === true) {
                document.getElementById("respPregunta").innerHTML = si;
                document.getElementById("respPregunta").style.color = " chartreuse";
                avanzarYo();
            } else {
                document.getElementById("respPregunta").innerHTML = no;
                document.getElementById("respPregunta").style.color = "  rgba(241, 24, 9, 0.753)";
                avanzarRobot();
            }

        })
        document.getElementById("b").addEventListener("click", function () {
            if (x[numPre]["R"][1].valor === true) {
                document.getElementById("respPregunta").innerHTML = si;
                document.getElementById("respPregunta").style.color = " chartreuse";
                avanzarYo();
            } else {
                document.getElementById("respPregunta").innerHTML = no;
                document.getElementById("respPregunta").style.color = "  rgba(241, 24, 9, 0.753)";
                avanzarRobot();
            }
        })
        document.getElementById("c").addEventListener("click", function () {
            if (x[numPre]["R"][2].valor === true) {
                document.getElementById("respPregunta").innerHTML = si;
                document.getElementById("respPregunta").style.color = " chartreuse";
                avanzarYo();
            } else {
                document.getElementById("respPregunta").innerHTML = no;
                document.getElementById("respPregunta").style.color = "  rgba(241, 24, 9, 0.753)";
                avanzarRobot();
            }
        })
        document.getElementById("d").addEventListener("click", function () {
            if (x[numPre]["R"][3].valor === true) {
                document.getElementById("respPregunta").innerHTML = si;
                document.getElementById("respPregunta").style.color = " chartreuse";
                avanzarYo();
            } else {
                document.getElementById("respPregunta").innerHTML = no;
                document.getElementById("respPregunta").style.color = "  rgba(241, 24, 9, 0.753)";
                avanzarRobot();
            }
        })
    })

    //pista

    let carroYo = ["a1A", "a1B", "a1C", "a1D", "a1E", "a1F", "a1G", "a1H", "a1I", "a1J", "a1K"];
    let carroRobot = ["a2A", "a2B", "a2C", "a2D", "a2E", "a2F", "a2G", "a2H", "a2I", "a2J", "a2K"];
    let dado = dada.img;
    // comparar inicio
    let ver = document.getElementById("imagenDado").getAttribute("src");
    let compararDado;
    let saveNumberDado;
    for (var k = 0; k < dado.length; k++) {
        if (compararDado = "img/" + dado[k] == ver) {
            console.log("ver contenido del array" + compararDado);
            console.log("ver contenido de imagen" + ver);
            saveNumberDado =k+1;

        }
    }
    console.log("El numero entero del lado del dado es: "+saveNumberDado);
    //comparar fin

    let yoPosicion = [];
    let robotPosicion = [];
    let contYo=0;
    let contRobot=0;

    function avanzarYo() {
        if (contYo<11) {

            for (var i = 0; i < saveNumberDado; i++) {
                document.getElementById(carroYo[i + 1]).style.visibility = "visible";
                yoPosicion.push(carroYo[i + 1]);
                console.log("El numero del dado " + saveNumberDado);
            }
            console.log("la posicion ultima"+carroYo[i]);
            console.log("la posicion del carro"+carroYo[yoPosicion.length]);
            contYo=i;
            console.log("el numero del dado sumado: "+contYo);
            if(carroYo[yoPosicion.length]===carroYo[i]){
                for(var y=yoPosicion.length;y<saveNumberDado;y++){
                    document.getElementById(carroYo[y + 1]).style.visibility = "visible";
                    yoPosicion.push(carroYo[y + 1]);  
                    console.log("suma de numeros: "+contYo);
                }
                contYo+=y;
            }
        }else{
            carroYo[10]
            alert("ganaste");
        }
    
        console.log(carroYo[y]+"ultima posicion");
        console.log(yoPosicion+"el numero de espacios recorridos es: "+yoPosicion.length);
        
    }
    //robot
    function avanzarRobot() {
        if (contRobot<11) {
            for (var j = 0; j < saveNumberDado; j++) {
                document.getElementById(carroRobot[j + 1]).style.visibility = "visible";
                robotPosicion.push(carroRobot[j + 1]);
                console.log("El numero del dado " + saveNumberDado);
                
            }
            contRobot=robotPosicion.length;
            console.log("el numero del dado de contRobot: "+contRobot);
            console.log("robotPosicion.length "+robotPosicion.length );
            if (carroRobot[robotPosicion.length]==carroRobot[j]) {
                for(var r=robotPosicion.length;r<saveNumberDado;r++){
                    document.getElementById(carroRobot[r+1]).style.visibility = "visible";
                    robotPosicion.push(carroRobot[r+1]);  
                }
                
                console.log(robotPosicion+"el numero de espacios recorridos es: "+robotPosicion.length);
                console.log("el numero del dado sumado: "+contRobot);
            } 

        }else{
            carroRobot[10]
            alert("perdiste");
        }
        
    }


})
