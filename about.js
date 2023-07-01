function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introposition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if(introposition < screenPosition){
        introText.classList.add('intro-appear');
    }
}

window.addEventListener('scroll',scrollAppear);

