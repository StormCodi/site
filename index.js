function Server() {
    var hiddenDiv = document.getElementById('hidden');
    if (hiddenDiv.style.display === 'none') {
        hiddenDiv.style.display = 'flex';
    } else {
        hiddenDiv.style.display = 'none';
    }
}



function lol(x) {
    if (document.getElementById(x).style.backgroundColor == "green") {

        document.getElementById(x).style.backgroundColor = "red";
        document.getElementById(x).style.color = "red";

    } else {
        document.getElementById(x).style.backgroundColor = "green"
        document.getElementById(x).style.color = "green";
    }
}

function Numbers() {
    var hiddenDiv = document.getElementById('NumberPad');
    if (hiddenDiv.style.display === 'none') {
        hiddenDiv.style.display = 'flex';
    } else {
        hiddenDiv.style.display = 'none';
    }
}

function AddNumber(number) {
    var input = document.getElementById('input');
    input.value += number;
}

function ClearInput() {
    var input = document.getElementById('input');
    input.value = '';
}

function RemoveLastNumber() {
    var input = document.getElementById('input');
    input.value = input.value.slice(0, -1);
}

function OpenIcons() {
    var hiddenDiv = document.getElementById('icons');
    if (hiddenDiv.style.display === 'none') {
        hiddenDiv.style.display = 'flex';
    } else {
        hiddenDiv.style.display = 'none';
    }
}