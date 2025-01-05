const preload = () => {
    let loader = document.getElementById('preloader');

    window.addEventListener('load', function(){
            loader.style.display = 'none';
    })
}
preload()