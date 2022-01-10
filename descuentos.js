function calcularPrecioConDescuento(precio, descuento) 
{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
}
  
function onClickButtonPriceDiscount() 
{
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const ResultDiscount = document.getElementById("ResultDiscount");
    ResultDiscount.innerHTML=`<p class="alert alert-danger" >The discounted price is: ${precioConDescuento}</p>`;

}