window.onload = function () {

//1-affichage dynamique des hobbies
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
    btnDetail.className = "btnHobbyDetail";
    btnDetail.id = `${nb}-detail`;
    btnDetail.innerHTML = "Afficher Détail";

    //creation du bouton addTop
    var btnAddTop = document.createElement('button');
    btnAddTop.className = "btnHobbyAdd";
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

// 2-gestion de la barre de recherche

var search = document.getElementById("filter");
search.addEventListener("keyup", searchHobby);

function searchHobby(event){
    var searchValue = event.target.value;
    //console.log(searchValue)
        searchValue = searchValue.toLowerCase();

    if(searchValue !== ""){
        for (let index = 0; index < hobbiesData.length; index++) {
            var titleHobby = hobbiesData[index].title;
                titleHobby = titleHobby.toLowerCase();
            
            var findHobby = document.getElementById(index+"-hobby");
            
            if(titleHobby.includes(searchValue) == true){
                findHobby.style.display = "flex";  
            }else{
                findHobby.style.display = "none";   
            }  
    }
     }
    }

//3-gestion de l'affichage des détails
var detailHobby = document.getElementById("hobbyDetail");
var titleDetailHobby = document.getElementById("titleDetail");
var positionHobby ;
var idHobby;
var descriptionHobby;
var titleOfHobby;

    // au clic de la checkbox
var details = document.getElementById("details");
details.addEventListener("mouseup", showDetailCheck ); 

    // au clic du btn detail 
    // fonctionne mais pas si pertinent puisseque le détail s'affiche déjà au survol
for (let i = 0; i < hobbiesData.length; i++) {
    var btnDetail = document.getElementsByClassName('btnHobbyDetail')[i];
   // console.log(btnDetail)
    btnDetail.addEventListener("click", showDetailBtn);
}

    // au survol de la div hobby
for (let index = 0; index < hobbiesData.length+1; index++) {
    var survolHobby = document.getElementsByClassName("hobby")[index]
    //console.log(survolHobby)
    survolHobby.addEventListener("mousemove", showDetailSurvol);
}




function showDetailCheck(event){
    // console.log(event.target.checked)
    if (event.target.checked) {
        detailHobby.style.display = "none"
    } else {
        detailHobby.style.display = "flex"
      
    } 
   }

function showDetailBtn(event){
    //console.log(event.currentTarget.id)
    idHobby = event.currentTarget.id
     //console.log(idHobby)
     positionHobby = idHobby.slice(0,-7);
     //console.log(positionHobby)
    detailHobby.style.display = "flex";  
    //console.log(details)
    details.checked = "true";
    descriptionHobby = hobbiesData[positionHobby].text;
    //console.log(descriptionHobby)
    titleOfHobby = hobbiesData[positionHobby].title;

    detailHobby.innerHTML = descriptionHobby;
    titleDetailHobby.innerHTML = titleOfHobby;

   }

function showDetailSurvol(event) {
    //console.log(event.currentTarget.id)
    idHobby = event.currentTarget.id
  //console.log(idHobby)
  //console.log(hobbiesData.length)
    positionHobby = idHobby.slice(0,-6);
    //console.log(positionHobby)
    descriptionHobby = hobbiesData[positionHobby].text;
    //console.log(descriptionHobby)
    titleOfHobby = hobbiesData[positionHobby].title;

    detailHobby.innerHTML = descriptionHobby;
    titleDetailHobby.innerHTML = titleOfHobby;

}
}