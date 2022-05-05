// variables for the initialization of the script
const main_menu_id = "st_nav_main";
let main_menu_element;
let list_items_of_main_menu;


// edit this function to modify the main menu
function make_menu_main() {
    
    let menu_main =
        "<li><a href=\"index.html\">Home Page</li>" +
        "<li><a href=\"st000_intro.htm\">Introduction to SOMA Test</li>" +
        "<li><a href=\"index.html\">Experimental Login at ELSA</li>" +
        "<li><a href=\"index.html\">Experimental Simple Chat (ESC)</li>" +
        "<li><a href=\"index.html\">WebRTC Based Experimental Private Call (unicast)</li>";

    return menu_main;    
}

// Try block for the first try of initialization;
// if the script cannot access the DOM element of the main menu, then
// it must add an event listener for the DOMContentLoaded event and wait
// for a 2nd try
try {
    
    // 1.) try to create the content of the main menu
    // (<nav><ul> of the page shall have given id (const main_menu_id))
    main_menu_element = document.getElementById(main_menu_id);
    list_items_of_main_menu = make_menu_main();
    main_menu_element.innerHTML = list_items_of_main_menu;

    // 1.a.) if it has worked well, then do the rest of the initialization
    initialize_script();

} catch (err) {

    // possibly the access to DOM elements did not work, because of old
    // browser did not support the "defer" attribute
    // we just try it again, after DOMContentLoaded event
    console.log(err);
    console.log("SOMA cannot find element %s -> 2nd try", main_menu_id);
    document.addEventListener("DOMContentLoaded", initialize_2nd_try);

}

// Function with the try block for the second try of initialization
function initialize_2nd_try() {
    try {

        // 2.) try again to create the content of the main menu
        // (<nav><ul> of the page shall have given id (const main_menu_id))
        if (main_menu_element === null) {
            main_menu_element = document.getElementById(main_menu_id);
        }
        if (typeof(list_items_of_main_menu) == "undefined") {
            list_items_of_main_menu = make_menu_main();
        }
        main_menu_element.innerHTML = list_items_of_main_menu;

        // 2.a.) if it has worked well, then do the rest of the initialization
        initialize_script();

    } catch (err) {

        console.log(err);
        alert("Cannot initialize JavaScript\nError: " + err + ".");

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
