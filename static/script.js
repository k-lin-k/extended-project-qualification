function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

var elem = document.getElementById(data);

function enter(){
    if(event.keyCode == 13){
       validate();
    }

}

function validate(elem) {
    if(elem == "Lovelace"){
        location.href="https://support.wwf.org.uk/earth_hour/index.php?type=individual";
    } else if(elem == "Hopper"){

    } else if(elem == "WWII"){

    } else {
        alertEmpty()
    }
}
