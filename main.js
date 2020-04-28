const checkbox = document.getElementById("themeSwtichCb");

checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})