let CompraFinal = null;
let TotalDeCompra = 0;

function Comprar(Productname) {
  ultimoElemento = Productname;
  TotalDeCompra++;
  document.getElementByID('ContadorDelCarro').textContent = TotalDeCompra;
}
