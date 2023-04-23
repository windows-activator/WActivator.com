// Selecting elements from the DOM
const button1 = document.querySelector('.activation-bottom1');
const button2 = document.querySelector('.activation-bottom2');
const step2 = document.querySelector('.step2');
const pp1 = document.getElementById('pp1');
const pp3 = document.getElementById('pp3');
const thegrayback = document.getElementById("buttonhover");
const thegrayback2 = document.getElementById("buttonhover2");
const backgroundadd = document.getElementById("backgroundadd");
const password = document.getElementById("password");
const buy = document.getElementById("buy");
const pub = document.getElementById("pub");
const pub2 = document.getElementById("pub2");
const pub3 = document.getElementById("pub3");
const chekimg = document.getElementById("chekimg");


// Setting initial values and styles for some elements
let active = false;
pp1.style.color = 'black';
pp3.style.color = 'black';
initializeStep2('0.5', 'not-allowed');
backgroundaddactive("none");
defoltdiv("transparent", "not-allowed", "inline-block");
buybut("none");
chekimgdisplay("none");
passworddis("none");
let clickcounter = 0;
let pubcount = 0;



// Functions to be used later
function hoverStep2(borderWidth) {
    step2.style.borderWidth = `${borderWidth}px`;
}

function initializeStep2(opacity, cursor) {
    step2.style.opacity = opacity;
    step2.style.cursor = cursor;
}

function changeTextColor() {
    pp1.style.color = 'white';
    pp3.style.color = 'white';
}

function setButton2Styles(border, color, boxShadow, borderColor) {
    button2.style.border = border;
    button2.style.color = color;
    button2.style.boxShadow = boxShadow;
    button2.style.borderColor = borderColor;
}

function setButton1Styles(border, color, boxShadow, borderColor) {
    button1.style.border = border;
    button1.style.color = color;
    button1.style.boxShadow = boxShadow;
    button1.style.borderColor = borderColor;
}


function setButton2InitialStyles() {
    button2.style.setProperty('background-color', 'rgb(0, 255, 0)', 'important');
    button2.style.setProperty('color', 'black', 'important');
    button2.style.setProperty('cursor', 'pointer', 'important');
}


function defoltdiv (backgroundColor, cursor, display) {
    thegrayback.style.backgroundColor = backgroundColor;
    thegrayback.style.cursor = cursor;
    thegrayback.style.display = display;
};

function defoltdiv2 (backgroundColor, cursor, display) {
    thegrayback2.style.backgroundColor = backgroundColor;
    thegrayback2.style.cursor = cursor;
    thegrayback2.style.display = display;
};

function backgroundaddactive (display) {
    backgroundadd.style.display = display;
}

function buybut (display ,top) {
    buy.style.display = display;
    buy.style.top = top;
}

function button1initial (background, color, cursor) {
    button1.style.setProperty('background-color', background, 'important');
    button1.style.setProperty('color', color, 'important');
    button1.style.setProperty('cursor', cursor, 'important');
};

function chekimgdisplay (display) {
    chekimg.style.display = display;
}

function passworddis (display) {
    password.style.display = display;
}

thegrayback2.addEventListener("click", function() {
    alert("please click on 3 ads in the page");
});











// Event listeners for pubs:
pub.addEventListener("click", function() {
    pubcount += 1;

    if (pubcount === 3) {
        button1.disabled = false;
        button1initial('rgb(0, 255, 0)', 'black', "pointer");
        defoltdiv2("blue", "not-allowed", "none");
        chekimgdisplay("inline-block");
        passworddis("inline-block");
    }
})

pub2.addEventListener("click", function() {
    pubcount += 1;

    if (pubcount === 3) {
        button1.disabled = false;
        button1initial('rgb(0, 255, 0)', 'black', "pointer");
         defoltdiv2("blue", "not-allowed", "none");
        chekimgdisplay("inline-block");
        passworddis("inline-block");
    }
})

pub3.addEventListener("click", function() {
    pubcount += 1;

    if (pubcount === 3) {
        button1.disabled = false;
        button1initial('rgb(0, 255, 0)', 'black', "pointer");
        defoltdiv2("blue", "not-allowed", "none");
        chekimgdisplay("inline-block");
        passworddis("inline-block");
    }
})



// Event listeners for button1:
button1.disabled = true;
button1initial('gray', 'white', "not-allowed");
defoltdiv2("transparent", "not-allowed", "inline-block");


    button1.addEventListener("mouseover", function() {
        setButton1Styles('none', 'white', '0px 0px 30px red', 'black');
    });

    button1.addEventListener("mouseout", function() {
        setButton1Styles('none', 'black', '0px 0px 0px red', 'white');
    });



button1.addEventListener("click", function() {
    active = true;
    button2.disabled = false;
    initializeStep2('1', 'auto');
    defoltdiv("transparent", "not-allowed", "none");
    setButton2InitialStyles();
    changeTextColor();
    
    if (active === true) {
        button2.addEventListener("mouseover", function() {
            setButton2Styles('none', 'white', '0px 0px 30px red', 'black');
        });
    
        button2.addEventListener("mouseout", function() {
            setButton2Styles('none', 'black', '0px 0px 0px red', 'white');
        });
    }
});


step2.addEventListener('mouseover', function() {
    if (active === true) {
        hoverStep2(1);
    }
});

step2.addEventListener('mouseout', function() {
    if (active === true) {
        hoverStep2(0);
    }
});




// Event listeners for button2
button2.disabled = true;

if (button2.disabled === true) {
    button2.style.setProperty('background-color', 'gray', 'important');
    button2.style.setProperty('color', 'white', 'important');
    setButton2Styles('none', 'none', '0 0 0', 'white');
}

if (active === true) {
    button2.addEventListener("mouseover", function() {
        setButton2Styles('none', 'white', '0px 0px 30px red', 'black');
    });

    button2.addEventListener("mouseout", function() {
        setButton2Styles('none', 'black', '0px 0px 0px red', 'white');
    });
}
