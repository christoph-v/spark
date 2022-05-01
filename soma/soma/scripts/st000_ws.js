// initialize the main menu (<nav><ul> of the page shall have id="st_nav_main")

try {

    document.getElementById("st_nav_main").innerHTML = make_menu_main();

} catch (err) {

    alert("Cannot find main menu id=\"st_nav_main\" at page\nError: " + err + ".");

}

// enter more initializations here ......


function make_menu_main() {
    
    let menu_main =
        "<li><a href=\"index.html\">Intranet of the Society</li>" +
        "<li><a href=\"index.html\">Experimental Login at ELSA</li>" +
        "<li><a href=\"index.html\">Experimental Simple Chat (ESC)</li>" +
        "<li><a href=\"index.html\">WebRTC Based Experimental Private Call (unicast)</li>";

    return menu_main;    
}