document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const result = document.getElementById("result");
    const textMedia = document.getElementById("text_media");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obter os valores das notas
        const nota1 = parseFloat(document.getElementById("primeira_nota").value);
        const nota2 = parseFloat(document.getElementById("segunda_nota").value);
        const nota3 = parseFloat(document.getElementById("terceira_nota").value);

        // Verificar se as notas são números válidos
        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            alert("Por favor, insira valores numéricos para as notas.");
            return;
        }

        // Calcular a média
        const media = (nota1 + nota2 + nota3) / 3;

        // Exibir o resultado
        textMedia.textContent = `Sua média é: ${media.toFixed(2)}`;
        result.classList.remove("hidden");

        // Determinar se o aluno está aprovado ou reprovado
        const status = media >= 6 ? "Aprovado" : "Reprovado";

        // Exibir mensagem de aprovação ou reprovação
        const apElement = document.querySelector(".ap");
        const repElement = document.querySelector(".rep");
        const apdElement = document.querySelector(".apd");
        const rpdElement = document.querySelector(".rpd");

        if (status === "Aprovado") {
            apElement.style.display = "block";
            apdElement.style.display = "block"
            repElement.style.display = "none";
            rpdElement.style.display = "none";
        } else {
            apElement.style.display = "none";
            apdElement.style.display = "none"
            repElement.style.display = "block";
            rpdElement.style.display = "block";
        }
    });
});