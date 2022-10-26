let xValues = ["Scrum", "RUP", "XP", "Crystal", "Lean Soft. Dev."];
let yValues = [0, 0, 0, 0, 0];
let barColors = ["red", "green","blue","orange","brown"];

const calcular = () => {
    let acumulado = [0, 0, 0, 0, 0];
    let total = 0;
    //console.log("-----------------------");
    //console.log(document.getElementById("prediccion_agilidad").value);
    //console.log(document.getElementById("participacion_proyecto").value);
    //console.log("-----------------------");
    if(document.getElementById("prediccion_agilidad").value.length > 1 || 
        document.getElementById("participacion_proyecto").value.length > 1 ||
        document.getElementById("frecuencia_flujos").value.length > 1){
        return;
    }
    if(document.getElementById("prediccion_agilidad").value == 'E'){
        acumulado[1]++;
    }else{
        acumulado[0]++;        acumulado[2]++;
        acumulado[3]++;        acumulado[4]++;
    }
    if(document.getElementById("frecuencia_flujos").value == 'P'){
        acumulado[1]++;
    }else{
        acumulado[0]++;        acumulado[2]++;
        acumulado[3]++;        acumulado[4]++;
    }
    if(document.getElementById("participacion_proyecto").value == 'P'){
        acumulado[1]++;        acumulado[3]++;
    }else{
        acumulado[0]++;        acumulado[2]++;
        acumulado[4]++;
    }
    console.log(acumulado);
    for(let i of acumulado) total+=i;
    console.log(total);
    console.log(((acumulado[0]/total)*100).toFixed(0));
    console.log(((acumulado[1]/total)*100).toFixed(0));
    console.log(((acumulado[2]/total)*100).toFixed(0));
    console.log(((acumulado[3]/total)*100).toFixed(0));
    console.log(((acumulado[4]/total)*100).toFixed(0));
    console.log("======");
    yValues[0] = ((acumulado[0]/total)*100).toFixed(0);
    yValues[1] = ((acumulado[1]/total)*100).toFixed(0);
    yValues[2] = ((acumulado[2]/total)*100).toFixed(0);
    yValues[3] = ((acumulado[3]/total)*100).toFixed(0);
    yValues[4] = ((acumulado[4]/total)*100).toFixed(0);
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