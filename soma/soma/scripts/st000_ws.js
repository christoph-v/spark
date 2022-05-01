// variables for the initialization
// if the script cannot access the DOM element of the main menu, then
// it must add an event listener for the DOMContentLoaded event
const main_menu_id = "st_nav_main";
let main_menu_element;
let list_items_of_main_menu;


// edit this function to modify the main menu
function make_menu_main() {
    
    let menu_main =
        "<li><a href=\"index.html\">Intranet of the Society</li>" +
        "<li><a href=\"index.html\">Experimental Login at ELSA</li>" +
        "<li><a href=\"index.html\">Experimental Simple Chat (ESC)</li>" +
        "<li><a href=\"index.html\">WebRTC Based Experimental Private Call (unicast)</li>";

    return menu_main;    
}

// Try block for the first try of initialization
try {
    
    // try to initialize the main menu
    // (<nav><ul> of the page shall have id="st_nav_main")
    main_menu_element = document.getElementById(main_menu_id);
    list_items_of_main_menu = make_menu_main();
    main_menu_element.innerHTML = list_items_of_main_menu;

    // if it has worked well, then do the rest of the initialization
    initialize_script();

} catch (err) {

    // possibly the access to DOM elements did not work, because of old
    // browser did not support the "defer" attribute
    // we just try it again, after DOMContentLoaded event
    alert ("Cannot access the DOM, must wait for DOMContentLoaded event");
    document.addEventListener("DOMContentLoaded", initialize_2nd_try);

}

// Function with the try block for the second try of initialization
function initialize_2nd_try() {
    try {

        // try again to initialize the main menu
        // (<nav><ul> of the page shall have id="st_nav_main")
        if (typeof(main_menu_element) == "undefined" || main_menu_element === null) {
            main_menu_element = document.getElementById(main_menu_id);
        }
        if (typeof(list_items_of_main_menu) == "undefined") {
            list_items_of_main_menu = make_menu_main();
        }
        main_menu_element.innerHTML = list_items_of_main_menu;

        // if it has worked well, then do the rest of the initialization
        initialize_script();

    } catch (err) {

        alert("Cannot initialize the JavaScript\nError: " + err + ".");

    }
}

function initialize_script() {
    try {

        // rest of the initialization can access the DOM elements securely
        // ......

    } catch (err) {

        ;

    }
}
