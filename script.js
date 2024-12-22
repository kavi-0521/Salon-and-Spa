let currentIndex = 0; 

const slides = document.getElementById("slides");
const totalSlides = slides.children.length; 

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const slideWidth = slides.children[0].offsetWidth;
    const newTransformValue = -slideWidth * currentIndex;

    slides.style.transform = `translateX(${newTransformValue}px)`;
}
document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
document.querySelector(".next").addEventListener("click", () => moveSlide(1));

document.getElementById("slides").addEventListener("wheel", (event) => {
    event.preventDefault(); 

    if (event.deltaY < 0) {
        moveSlide(-1);
    }

    else if (event.deltaY > 0) {
        moveSlide(1);
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

