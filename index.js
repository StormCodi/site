function Clicked() {
    var hiddenDiv = document.getElementById('hidden');
    if (hiddenDiv.style.display === 'none') {
      hiddenDiv.style.display = 'flex';
    } else {
      hiddenDiv.style.display = 'none';
    }
  }
  