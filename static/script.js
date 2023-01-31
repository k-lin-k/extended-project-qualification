function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  ev.target.replaceChild(document.getElementById(data), div2);
}

var elem = document.getElementById(data);

function enter(){
    if(event.keyCode == 13){
       validate();
    }

}

function validate(elem) {
    if(ev.target.id == "Lovelace"){
        window.location.href="/Lovelace.html";
    } else if(ev.target.id == "Hopper"){
        window.location.href="Hopper.html";
    } else if(ev.target.id == "WWII"){
        window.location.href="WWII.html";
    } else {
        alertEmpty()
    }
}
