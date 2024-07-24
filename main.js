'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;

    if(className == "light-theme") {
        this.textContent = "Modo Oscuro";
    } else {
        this.textContent = "Modo Claro";
    }

    console.log("Nombre actual de la clase: "+className);

});