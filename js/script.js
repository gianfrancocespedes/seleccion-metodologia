let xValues = ["RUP", "Scrumban", "TDD", "Waterfall", "Scrum", "XP"];
let yValues = [0, 0, 0, 0, 0, 0];
let barColors = ["red", "green","blue","orange","brown", "yellow"];

const calcular = () => {
    let acumulado = [0, 0, 0, 0, 0, 0];
    let total = 0;
    //console.log("-----------------------");
    //console.log(document.getElementById("prediccion_agilidad").value);
    //console.log(document.getElementById("participacion_proyecto").value);
    //console.log("-----------------------");
    if(document.getElementById("prediccion_agilidad").value.length > 1 || 
        document.getElementById("frecuencia_flujos").value.length > 1 ||
        document.getElementById("definicion_practicas").value.length > 1 ||
        document.getElementById("definicion_entregables").value.length > 1 ||
        document.getElementById("tamaño_proyecto").value.length > 1 ||
        document.getElementById("comunicacion_integrantes").value.length > 1 ||
        document.getElementById("cambio_integrantes").value.length > 1 ||
        document.getElementById("participacion_proyecto").value.length > 1 ||
        document.getElementById("criticidad_proyectos").value.length > 1 ||
        document.getElementById("manejo_contratos").value.length > 1){
        return;
    }
    if(document.getElementById("prediccion_agilidad").value == 'C'){    //1
        acumulado[0]++;
    }else{
        acumulado[1]++;        acumulado[2]++;      acumulado[3]++;
        acumulado[4]++;        acumulado[5]++;
    }
    if(document.getElementById("frecuencia_flujos").value == 'P'){  //2
        acumulado[0]++;        acumulado[1]++;
        acumulado[2]++;        acumulado[4]++;
    }else{
        acumulado[3]++;        acumulado[5]++;
    }
    if(document.getElementById("definicion_practicas").value == 'P'){  //3
        acumulado[0]++;        acumulado[1]++;
        acumulado[2]++;
    }else{
        acumulado[3]++;        acumulado[4]++;
        acumulado[5]++;        
    }
    if(document.getElementById("definicion_entregables").value == 'A'){  //4
        acumulado[0]++;        acumulado[2]++;
    }else if(document.getElementById("definicion_entregables").value == 'M'){
        acumulado[3]++;
    }else{
        acumulado[1]++;        acumulado[4]++;
        acumulado[5]++; 
    }
    if(document.getElementById("tamaño_proyecto").value == 'G'){  //5
        acumulado[0]++;        acumulado[2]++;
        acumulado[3]++;        acumulado[5]++;
    }else{
        acumulado[1]++;        acumulado[4]++;
    }
    if(document.getElementById("comunicacion_integrantes").value == 'D'){  //6
        acumulado[1]++;        acumulado[4]++;
        acumulado[5]++;
    }else{
        acumulado[0]++;        acumulado[2]++;
        acumulado[3]++;
    }
    if(document.getElementById("cambio_integrantes").value == 'I'){  //7
        acumulado[2]++;        acumulado[3]++;
        acumulado[5]++;
    }else{
        acumulado[0]++;        acumulado[1]++;
        acumulado[4]++;
    }
    if(document.getElementById("participacion_proyecto").value == 'P'){ //8
        acumulado[0]++;        acumulado[2]++;
    }else{
        acumulado[1]++;        acumulado[3]++;
        acumulado[4]++;        acumulado[5]++;
    }
    if(document.getElementById("criticidad_proyectos").value == 'T'){  //9
        acumulado[2]++;        acumulado[3]++;
    }else{
        acumulado[0]++;        acumulado[1]++;
        acumulado[4]++;        acumulado[5]++;
    }
    if(document.getElementById("manejo_contratos").value == 'F'){  //10
        acumulado[0]++;        acumulado[3]++;
    }else{
        acumulado[1]++;        acumulado[2]++;
        acumulado[4]++;        acumulado[5]++;
    }
    //console.log(acumulado);
    for(let i of acumulado) total+=i;
    //console.log(total);
    /*console.log(((acumulado[0]/total)*100).toFixed(0));
    console.log(((acumulado[1]/total)*100).toFixed(0));
    console.log(((acumulado[2]/total)*100).toFixed(0));
    console.log(((acumulado[3]/total)*100).toFixed(0));
    console.log(((acumulado[4]/total)*100).toFixed(0));
    console.log(((acumulado[5]/total)*100).toFixed(0));
    console.log("======");*/
    yValues[0] = ((acumulado[0]/total)*100).toFixed(0);
    yValues[1] = ((acumulado[1]/total)*100).toFixed(0);
    yValues[2] = ((acumulado[2]/total)*100).toFixed(0);
    yValues[3] = ((acumulado[3]/total)*100).toFixed(0);
    yValues[4] = ((acumulado[4]/total)*100).toFixed(0);
    yValues[5] = ((acumulado[5]/total)*100).toFixed(0);
    new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "Metodologías ágiles seleccionables"
            }
        }
    });
}