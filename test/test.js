function OpenIcons() {
    var hiddenDiv = document.getElementById('icons');
    if (hiddenDiv.style.display === 'none') {
        hiddenDiv.style.display = 'flex';
    } else {
        hiddenDiv.style.display = 'none';
    }
}