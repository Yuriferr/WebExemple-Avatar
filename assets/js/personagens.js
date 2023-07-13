let cards = document.getElementById('cards');
var dataWater = {};
var arrayData = [];

function getPersonagens() {
    fetch('http://avatarapi.pythonanywhere.com/personagens').then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        arrayData = data;
        arrayData.forEach(element => {
            cards.innerHTML += `
                <div class="col-md-3 col-lg-2">
                    <div class="card mb-4 shadow-sm">
                        <img src="${element.imagem}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${element.nome}</h5>
                        </div>
                    </div>
                </div>
            `
        });
    }).catch((err) => {
        console.log(err);
    }
    )
}

getPersonagens();
