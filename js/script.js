window.onload = function () {

//affichage dynamique des hobbies
function createHobbie(nb){
    var myHobby = hobbiesData[nb];

    //creation d'une div pour un hobby
    var hobby = document.createElement('div');
    hobby.className = "hobby";
    hobby.id = `${nb}-hobby`;

    //creation de l'image
    var image = document.createElement('img');
    image.src = myHobby.image;
    image.alt = myHobby.title;
        // creation de la div pour l'image
        var img = document.createElement('div');
        img.className = "img";
        img.appendChild(image);

    //creation du titre
    var title = document.createElement('h3');
    title.innerHTML = myHobby.title;

    //creation du bouton detail
    var btnDetail = document.createElement('button');
    btnDetail.className = "btnHobby";
    btnDetail.id = `${nb}-detail`;
    btnDetail.innerHTML = "Afficher Détail";

    //creation du bouton addTop
    var btnAddTop = document.createElement('button');
    btnAddTop.className = "btnHobby";
    btnAddTop.id = `${nb}-addTop`;
    btnAddTop.innerHTML = "Ajouter à mon Top";

    hobby.appendChild(img);
    hobby.appendChild(title);
    hobby.appendChild(btnDetail);
    hobby.appendChild(btnAddTop);
    document.getElementById("hobbiesList").appendChild(hobby);
}

for (let index = 0; index < hobbiesData.length; index++) {
    createHobbie(index) 
}

// gestion barre de recherche



}