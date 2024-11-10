function calcularErrores() {
    const valorReal = parseFloat(document.getElementById("valor_real").value);
    const valorAproximado = parseFloat(document.getElementById("valor_aproximado").value);
    
    if (isNaN(valorReal) || isNaN(valorAproximado)) {
        alert("Por favor, ingresa ambos valores.");
        return;
    }

    // Cálculo de errores
    const errorAbsoluto = Math.abs(valorReal - valorAproximado);
    const errorRelativo = errorAbsoluto / Math.abs(valorReal);
    const errorPorcentual = errorRelativo * 100;

    // Mostrar resultados
    document.getElementById("error_absoluto").textContent = `Error Absoluto: ${errorAbsoluto.toFixed(5)}`;
    document.getElementById("error_relativo").textContent = `Error Relativo: ${errorRelativo.toFixed(5)}`;
    document.getElementById("error_porcentual").textContent = `Error Porcentual: ${errorPorcentual.toFixed(2)}%`;
}
