function askUserPermission() {
    const userResponse = confirm("Podemos usar a sua localização?");
    if (userResponse === true) {
        //Geolocation API ativa e pega os dados da cidade do usuário
    } else {
        //Abre um form pedindo os dados 
        insertZipCode();

    }
}

function insertZipCode() {
    let screenSelector = document.querySelector("main");

    screenSelector.innerHTML =
        `<div class="box-zipcode "> 
        <div class="box-answer">
            <input type = "text" placeholder = "Digite a sua cidade" >
            <button type = "submit" > Enviar </button> 
            </div> 
            </div>`
}