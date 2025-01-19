const themeSelector = document.querySelector('#theme-selector');

function changeTheme() {
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark'); 
        document.querySelector('.logo').src = 'byui-logo_white.png';
    } else {
        document.body.classList.remove('dark'); 
        document.querySelector('.logo').src = 'byui-logo_blue.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);
