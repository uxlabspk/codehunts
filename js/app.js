

// © 2023 CodeHUNT'S, Inc. · <a href="./terms.html" target="_blank" class="text-light">Terms.</a>

document.getElementById('year').innerText = `© 2023 - ` + new Date().getFullYear() + " CodeHUNT'S · "
// (new Date().getFullYear() == '2024') ? `© ` + new Date().getFullYear() + " CodeHUNT'S, Inc. · " : `© 2024 - ` + new Date().getFullYear() + " CodeHUNT'S, Inc. · ";

let backtotop = document.getElementById('backtotop');
if (backtotop) {
    const toggleBacktotop = () => {
        if (window.scrollY > 100) 
            backtotop.classList.add('active')
        else 
            backtotop.classList.remove('active')
    }
    window.addEventListener('load', toggleBacktotop)
    document.addEventListener('scroll', toggleBacktotop)
}
