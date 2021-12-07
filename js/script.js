// Navbar

const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')
const menuItem = document.querySelectorAll('.nav-link')

menu.addEventListener('click', () => {
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener('click', () => {
        navbar.classList.toggle('change')
        menu.classList.toggle('change')
    })
}


// End of navbar

// Section 2 video

const video = document.querySelector('.video')
const wrapper = document.querySelector('.video-wrapper')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')
let timeout;
const duration = 3000;

const playPause = () => {
    if(video.paused) {
        video.play()
        btn.className = 'far fa-pause-circle'
        video.style.opacity = 0.7;
        wrapper.addEventListener('mouseleave', () => {
            btn.style.opacity = 0
        })
        // wrapper.addEventListener('mouseenter', () => {
        //     btn.style.opacity = 1
        // })
        wrapper.addEventListener('mousemove', () => {
            btn.style.opacity = 1
            bar.style.opacity = 1
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                btn.style.opacity = 0
                bar.style.opacity = 0
            }, duration)
        })
    } else {
        video.pause()
        btn.className = 'far fa-play-circle'
        video.style.opacity = 0.3;
        wrapper.addEventListener('mouseleave', () => {
            btn.style.opacity = 1
        })
    }
    
}

btn.addEventListener('click', () => {
    playPause()
})

video.addEventListener('timeupdate', () => {
    const barWidth = video.currentTime / video.duration
    bar.style.width = `${barWidth * 100}%`
    if(video.ended) {
        btn.className = 'far fa-play-circle'
        video.style.opacity = 0.3
    }
})


// End of section 2 video

// Section 3 pricing cards - swiper

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });

// End of section 3 pricing cards - swiper