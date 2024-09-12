document.getElementById('night').addEventListener('click', () => {
    document.getElementById('night').style.background = 'rgb(112, 112, 174)';
    document.getElementById('night').style.color = 'white';
    document.getElementById('light').style.background = 'white';
    document.getElementById('light').style.color = 'black';
    // document.querySelector('body').style.background = 'black';
    
});

document.getElementById('light').addEventListener('click', () => {
    document.getElementById('light').style.background = 'rgb(112, 112, 174)';
    document.getElementById('light').style.color = 'white';
    document.getElementById('night').style.background = 'white';
    document.getElementById('night').style.color = 'black';
    // document.querySelector('body').style.background = 'rgb(226, 231, 235)';
});
