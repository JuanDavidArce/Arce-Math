
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
  }

  function calcularMedia(){
    const inputList = document.getElementById("inputModaMedianaMedia");
    const inputStringListValues =  inputList.value.split(';');
    const inputNumberListValues = inputStringListValues.map(value=> { return parseFloat(value)} )
    const mean = calcularMediaAritmetica(inputNumberListValues)
    const ResultMean = document.getElementById("ResultMean");
    if (!mean){
      ResultMean.innerHTML=`<p class="alert alert-danger" >Ops an error has occurred, check the data entered</p>`;
    }
    else{
      ResultMean.innerHTML=`<p class="alert alert-danger" >The mean is: ${mean}</p>`;

    };
  };