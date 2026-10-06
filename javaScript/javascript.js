//setting up a custom cursor to repace the current one.
document.addEventListener("mousemove", (event)=> {
    const cursor = document.createElement("div"); // creating a div in the HTML Document that will act as our custom cursor. (Potts, 2024).
    cursor.classList.add("cursor"); //We use ClassList .add(to add classes to elements (W3schools, 2024).

    //Detecting back ground themes

    const contentUnderCursor = document.elementFromPoint(event.clientX, event.clientY); //The clientX and ClientY are properties that return the coordinates of the mouse pointer, when a mouse event occurs(W3schools)
    const theme = contentUnderCursor.closest("[data-theme]")?.getAttribute("data-theme"); // Pulling data attributes that were set in each of the webpages (developer.mozilla, 2024).

    //setting conditions for what effect will have depending on the theme of each section (Potts, 2024).

    if (theme === "dark"){
        cursor.style.backgroundColor =  "rgba(255,255,255,0.7)"; //This is turns the color of the curor trail light when in the dark.
    } else{
        cursor.style.backgroundColor = "rgba(0,0,0,0.4)" //This turns our cursor trail dark when in the light.
    }

    cursor.style.left = `${event.pageX}px`; //This code is used to return the co-ordinantes of the mouse pointer while it's moving (W3schools, 2024).
    cursor.style.top = `${event.pageY}px`;
    document.body.appendChild(cursor); //used to add the cursor div to the html document's body (W3schools, 2019).

    setTimeout(()=> {
        cursor.remove();
    }, 500); //This code is used to make sure that after 0.5 seconds the cursor trail disappears (W3Schools, 2019).
});

function validateEmail(){
    //(The IIE, 2024)
    var email = document.getElementById('email').value
    var check = /^([a-zA-Z0-9_\,\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    return check.test(email)
};

form.addEventListener('submit', function (event) {
    event.preventDefault() //(The IIE, 2024)
    if (validateEmail()){
        form.submit()
    }else {
        alert("Please enter a valid email.");
        form.classList.add('invalid')
        document.getElementById('email').value = "";
    }
});

/*Reference List 
developer.mozilla. 2024. Using data attributes - Learn web development | MDN. [online] Available at: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes [Accessed 5 Nov. 2024].

Potts, T. 2024. EASY CUSTOM CURSORS in HTML, CSS & JavaScript. [online] YouTube. Available at: https://youtu.be/OKvvjXu7WE8?si=h_HMqo1QenVP4Z2t [Accessed 5 Nov. 2024].

The IIE. 2024. Web Development (Introduction)[WEDE5020 Module Manual]. The Independent Institute of Education: Unpublished.

W3Schools. 2019. Window setTimeout() Method. [online] W3schools.com. Available at: https://www.w3schools.com/jsref/met_win_settimeout.asp.W3schools. [Accessed 5 Nov 2024].

W3Schools. 2019.HTML DOM appendChild() Method. [online] Available at: https://www.w3schools.com/jsref/met_node_appendchild.asp [Accessed 5 Nov. 2024].

W3schools. 2024. HTML DOM Element classList Property. [online] Available at: https://www.w3schools.com/jsref/prop_element_classlist.asp [Accessed 5 Nov. 2024].

W3schools. 2024. MouseEvent pageX Property. [online] Available at: https://www.w3schools.com/jsref/event_pagex.asp [Accessed 5 Nov. 2024].

*/