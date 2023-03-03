function Menu() {
    var hiddenDiv = document.getElementById('hidden');
    if (hiddenDiv.style.display === 'none') {
      hiddenDiv.style.display = 'flex';
    } else {
      hiddenDiv.style.display = 'none';
    }
  }

  var i = 0
  

function lol(x){
    if (document.getElementById(x).style.backgroundColor == "green") {
        console.log(i);
        i++;
        document.getElementById(x).style.backgroundColor = "red";
        document.getElementById(x).style.color = "red";

    } else {
        document.getElementById(x).style.backgroundColor = "green"
        document.getElementById(x).style.color = "green";
        console.log(i);
        i++
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