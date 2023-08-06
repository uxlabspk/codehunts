
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hiddenDown');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenLeft = document.querySelectorAll('.hiddenLeft');
hiddenLeft.forEach((el) => observer.observe(el));

const hiddenRight = document.querySelectorAll('.hiddenRight');
hiddenRight.forEach((el) => observer.observe(el));

const hiddenGlow = document.querySelectorAll('.hiddenGlow');
hiddenGlow.forEach((el) => observer.observe(el));

const Glow = document.querySelectorAll('.hiddenText');
Glow.forEach((el) => observer.observe(el));