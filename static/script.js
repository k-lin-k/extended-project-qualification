function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
    var item = ev.target.id;
    var html = ".html";
    var link = item + html;
  ev.dataTransfer.setData("link", link);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    window.location=ev.dataTransfer.getData("link");
    ev.target.appendChild(document.getElementById(data));

}
