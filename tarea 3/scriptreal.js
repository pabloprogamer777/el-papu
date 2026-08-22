let ultimoElemento = null;
let TotalDeCompra = 0;

function Comprar(Productname) {
  ultimoElemento = Productname;
  TotalDeCompra++;
  document.getElementById('ContadorDelCarro').textContent = TotalDeCompra;
}
function VerUltimaCompra(){
  if(ultimoElemento == null){
    alert('Agregue algo al carrito para ver su último artículo,');
  } else {
    alert('Su último artículo añadido al carrito es: ' +ultimoElemento);
  }
}
