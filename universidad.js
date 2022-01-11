function promedioUniversidad(){
    array = document.getElementsByClassName("field_wrapper")[0];
    let i=0;
    let totalCreditos=0;
    let promedio=0;
    while (true){

        if (array[i]){
            promedio+= parseFloat(array[i+1].value)*parseInt(array[i+2].value);
            totalCreditos+=parseInt(array[i+2].value);
        }
        else{
            break;
        }
        i = i+3;
     
    }

    return promedio/totalCreditos;
}


function calcularPromedioUniversidad(){
    const averageUniversity = promedioUniversidad()
    const ResultAverageUniversity = document.getElementById("ResultAverageUniversity");
    ResultAverageUniversity.innerHTML=`<p class="alert alert-danger" >The university average is: ${averageUniversity}</p>`;

    
  };