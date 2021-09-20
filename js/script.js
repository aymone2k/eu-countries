window.onload = function () {
    // gestion de la requete ajax vers l'api 
    let data = new XMLHttpRequest();
data.open('GET', 'https://restcountries.eu/rest/v2/regionalbloc/eu');
data.onreadystatechange = function(){
    if(data.readyState == 4){
        var response = JSON.parse(data.responseText);
         
 


//1-affichage dynamique des hobbies
function createHobbie(nb){
    var myHobby = response[nb];
console.log(myHobby)
    //creation d'une div pour un hobby
    var hobby = document.createElement('div');
    hobby.className = "hobby";
    hobby.id = `${nb}-hobby`;

    //creation de l'image
    var image = document.createElement('img');
    image.src = myHobby.flag;
    image.alt = myHobby.name;
        // creation de la div pour l'image
        var img = document.createElement('div');
        img.className = "img";
        img.appendChild(image);

    //creation du titre
    var title = document.createElement('h3');
    title.innerHTML = myHobby.name;

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

for (let index = 0; index < response.length; index++) {
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
        for (let index = 0; index < response.length; index++) {
            var titleHobby = response[index].name;
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
for (let i = 0; i < response.length; i++) {
    var btnDetail = document.getElementsByClassName('btnHobbyDetail')[i];
   // console.log(btnDetail)
    btnDetail.addEventListener("click", showDetailBtn);
}

    // au survol de la div hobby
for (let index = 0; index < response.length; index++) {
    var survolHobby = document.getElementsByClassName('hobby')[index];
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
    descriptionHobby = " Capitale : " +response[positionHobby].capital + "<br/>"+"Habitants : " +response[positionHobby].demonym + "<br/>"+"Population : " +response[positionHobby].population;
    //console.log(descriptionHobby) 
    titleOfHobby = response[positionHobby].name;

    detailHobby.innerHTML = descriptionHobby;
    titleDetailHobby.innerHTML = titleOfHobby;

   }

function showDetailSurvol(event) {
    //console.log(event.currentTarget.id)
    idHobby = event.currentTarget.id
  //console.log(idHobby)
  //console.log(response.length)
    positionHobby = idHobby.slice(0,-6);
    //console.log(positionHobby)
    descriptionHobby = " Capitale : " +response[positionHobby].capital + "<br/>"+"Habitants : " +response[positionHobby].demonym + "<br/>"+"Population : " +response[positionHobby].population;
    //console.log(descriptionHobby)
    titleOfHobby = response[positionHobby].name;

    detailHobby.innerHTML = descriptionHobby;
    titleDetailHobby.innerHTML = titleOfHobby;

}

// gestion du top des hobbies


for (let index = 0; index < response.length; index++) {
    var btnAddTopHobby = document.getElementsByClassName("btnHobbyAdd")[index];

    btnAddTopHobby.addEventListener('click', addTopBtn )
}


function addTopBtn(event) {
    //console.log(event.target)
    idAddHobby = event.currentTarget.parentNode;
    //positionAddHobby = idAddHobby.slice(0,-7);
    //console.log(positionAddHobby) 
    //infoHobby = response[positionAddHobby]
    //console.log(infoHobby)
    console.log(idAddHobby)
    
    var hobby1 = document.getElementById("hobbies1");
    var hobby2 = document.getElementById("hobbies2");
    var hobby1Child = hobby1.childNodes;//reccup ts les noeuds( les elts) enfts de hobbies
    var hobby2Child = hobby2.childNodes;
    console.log(hobby1Child, hobby2Child)

    if(hobby1Child.length == 1){
     
       hobby1.insertBefore(idAddHobby, hobby1Child[0]);
       //voir pour modif le btn add 
    }else if(hobby2Child.length == 1){
     
        hobby2.insertBefore(idAddHobby, hobby2Child[0]);
    }else{
        alert("you have already selected 2 hobbies; please remove 1 hobby for adding another one")
    }

}



}

}
data.send();
}