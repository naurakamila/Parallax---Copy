const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    // console.log['Offset: ' + offset];
    // console.log['offset * 0.7 ' + offset * 0.7];
    parallax.style.backgroundPositionY = offset *
        0.8 + "px";
})

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

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));