function getAllCars(){
    
    // Definição de qual será o endpoint, onde as informações serão buscadas
    const endpoint = "http://localhost:8080/cars";

    // Constante que define qual o método será usado na função
    const config = {
        method: "GET"
    }

    // Fetch: busca o endpoint com o método definido
        //Pra funcionar, precisa instalar e habilitar o cors no back
    fetch(endpoint, config)
        .then((res) => res.json())
        .then((cars) => {
            document.querySelector("tbody").innerHTML = 
                cars.map((car, index) => {
                    return `  <tr>
                                <th scope="row">${car.id}</th>
                                <td>${car.plate}</td>
                                <td>${car.model}</td>
                                <td>${car.brand}</td>
                                <td>${car.year}</td>
                                </tr>`
                }).join(" ");
        })
        .catch(() => console.error("erro :("));
}

getAllCars();