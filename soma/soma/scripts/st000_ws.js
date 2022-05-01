const nav_ul_main = document.getElementById("st_nav_main"); // TODO: error handling

nav_ul_main.innerHTML = make_menu_main();


function make_menu_main() {
    
    let menu_main =
        "<li><a href=\"index.html\">Intranet of the Society</li>" +
        "<li><a href=\"index.html\">Experimental Login at ELSA</li>" +
        "<li><a href=\"index.html\">Experimental Simple Chat (ESC)</li>" +
        "<li><a href=\"index.html\">WebRTC Based Experimental Private Call (unicast)</li>";

    return menu_main;    
}