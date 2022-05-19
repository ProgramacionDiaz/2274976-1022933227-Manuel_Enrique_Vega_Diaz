var z = aleatorio(10, 20);
document.write(z);

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(math.random() * (maxi - min + 1)) + min;
    return resultado;
}