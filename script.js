let screen = document.getElementById('inputScreen');

function calculate(x) {
    screen.value = screen.value + x;
}

let finalResult = () => {
    try {
        screen.value = eval(screen.value);
    }
    catch (err) {
        alert("Enter a valid input");
    }
}

function clr() {
    screen.value = " ";
}
function del() {
    screen.value = screen.value.slice(0, -1);
}


