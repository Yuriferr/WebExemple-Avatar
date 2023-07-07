let cards = document.getElementById('cards');
var dataWater = {};
var arrayData = [];

function getWater(){
    fetch('http://avatarapi.pythonanywhere.com').then((res)=>{
        return res.json();
    }
    ).then((data)=>{
        dataWater = data[0];
        arrayData = dataWater.personagens;
        arrayData.forEach(element => {
            cards.innerHTML += `
                <div class="col-md-4 col-lg-3">
                    <div class="card mb-4 shadow-sm">
                        <img src="${element.imagem}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${element.nome}</h5>
                        </div>
                    </div>
                </div>
            `
        }
        );
    })
    .catch((err)=>{
        console.log(err);
    }
    )
}

getWater();