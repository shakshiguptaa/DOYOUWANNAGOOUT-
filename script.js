function moveButton() {
    const button = document.getElementById('noButton');
    const container = document.querySelector('.container');
    
    const maxX = container.clientWidth - button.clientWidth;
    const maxY = container.clientHeight - button.clientHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function nextPage() {
    window.location.href = 'yes.html';
}
