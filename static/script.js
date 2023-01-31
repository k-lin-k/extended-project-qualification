function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var elem = document.getElementById(data);
    ev.target.appendChild(document.getElementById(data));
    if(ev.target.id == "Lovelace"){
        window.location.href="/Lovelace.html";
    } else if(ev.target.id == "Hopper"){
        window.location.href="Hopper.html";
    } else if(ev.target.id == "WWII"){
        window.location.href="WWII.html";
    } else {
        alertempty()
  }
}
