function moda(lista1){

  const lista1Count = {};
  
  lista1.map(
    function (elemento) {
      if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
      } else {
        lista1Count[elemento] = 1;
      }
    }
  );
  const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
  const moda = lista1Array[lista1Array.length - 1];
  return moda
};

function calcularModa(){
  const inputList = document.getElementById("inputModaMedianaMedia");
  const inputStringListValues =  inputList.value.split(';');
  const inputNumberListValues = inputStringListValues.map(value=> { return parseFloat(value)} )
  const mode = moda(inputNumberListValues)
  const ResultMode = document.getElementById("ResultMode");

  ResultMode.innerHTML=`<p class="alert alert-danger" >The mode is: ${mode[0]}</p>`;
    
  
}
  
