// variables for the initialization of the script
const main_menu_id = "st_nav_main";
const addl_links_id = "st_aside_links";
const contact_id = "st_footer_contact";
const webmaster_id = "st_footer_webmaster";
let main_menu_element;
let list_items_of_main_menu;

// edit this function to modify the main menu
function make_menu_main() {
    
    // modify this
    let menu_main =
        "<li><a href=\"index.html\">Home Page</li>" +
        "<li><a href=\"st000_intro.htm\">Introduction to SOMA Test</li>" +
        "<li><a href=\"index.html\">Experimental Login at ELSA</li>" +
        "<li><a href=\"index.html\">Experimental Simple Chat (ESC)</li>" +
        "<li><a href=\"index.html\">WebRTC Based Experimental Private Call (unicast)</li>";

    return menu_main;    
}

// edit this function to modify the additional links
function make_addl_links() {

    // modify this
    let addl_links =
        "<li><a href=\"https://areasharpa.blog\">Area#A</li>" +
        "<li><a href=\"https://github.com/christoph-v/spark\">S&amp;P-ARK</li>" +
        "<li><a href=\"https://lc-soc-lc.or.at\">Society for Lifelong Collaborating</li>" +
        "<li><a href=\"https://github.com/christoph-v/spark/tree/master/soma/soma\">SOMA</li>" +
        "<li><a href=\"https://lc-soc-lc.at\">Lost Children Society for Lifelong Collaborating</li>";

    return addl_links;    
}

// edit this function to modify the other dynamic parts of the web page
function initialize_script() {
    try {
        // rest of the initialization can access the DOM elements securely
        let contact_element = document.getElementById(contact_id);
        let webmaster_element = document.getElementById(webmaster_id);
        let addl_links_element = document.getElementById(addl_links_id);

        // modify this
        contact_element.innerHTML = "<a href=\"/addendum.htm\">Contact</a>";
        webmaster_element.innerHTML = "Webmaster: ben-yeti";

        addl_links_element.innerHTML = make_addl_links();
    } catch (err) {
        console.log(err);
        throw "SOMA cannot initialize JavaScript";

    }
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
    console.log("SOMA -> 2nd try (add event listener DOMContentLoaded");
    document.addEventListener("DOMContentLoaded", initialize_2nd_try);
}

// Function with the try block for the second try of initialization
function initialize_2nd_try() {
    try {
        console.log("SOMA: now doing 2nd try (received DOMContentLoaded");
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
