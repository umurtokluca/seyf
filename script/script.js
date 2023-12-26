
window.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector('main')

    main.addEventListener('mousemove', function(e){
        document.querySelectorAll('.video-container a').forEach((move)=>{
            var moving = move.getAttribute('data-set')
            var x = (e.clientX * moving) / 100;
            var y = (e.clientY * moving) / 100;
        
            move.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
        })
    })
})


