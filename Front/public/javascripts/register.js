const btn = document.querySelector("button");

// Função que define o que será realizado quando o botão receber um click
btn.onclick = () => {
    const fields = document.querySelectorAll("input");
    const data = {};

    // Loop para percorrer os valores que foram colocados no forms e, com eles, criar os objetos da const data
    fields.forEach((field) => {
        console.log(field.id, field.value)
        data[field.id] = field.value;
    });

    console.log(data);

    // Criação do endpoint, para onde as informações irão
    const endpoint = "http://localhost:8080/cars";

    // Definição do método a ser usado, do que acontecerá com as informações no body e de como irá o cabeçalho
    const config = {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
            "content-type": "application/json"
        })
    }

    fetch(endpoint, config)
        .then((res) => {
            if (res.ok) {
                location.href = "/cars";
            }
        })
        .catch(() => console.error("erro ao cadastrar"));
} 