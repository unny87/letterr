const envelope = document.querySelector('.envelope-wrapper');
const heart = document.querySelector('.heart');

heart.addEventListener('mouseenter', () => {
    envelope.classList.add('flap');
});

heart.addEventListener('mouseleave', () => {
    envelope.classList.remove('flap');
});

document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.querySelector(".envelope");
    const letter = document.querySelector(".letter");
    const heart = document.querySelector(".heart");

    heart.addEventListener("click", function () {
        if (!envelope.classList.contains("open")) {
            envelope.classList.add("open");
            envelope.classList.add("flap");

            setTimeout(() => {
                letter.style.bottom = "-40px"; // Moves letter up
                letter.style.zIndex = "4"; // Brings letter above
            }, 500); // Slight delay after opening
        } else {
            letter.style.bottom = "20%"; // Moves letter back inside

            setTimeout(() => {
                envelope.classList.remove("open"); // Hide overflow again
                letter.style.zIndex = "1"; // Moves letter behind before closing
                envelope.classList.remove("flap"); // Close envelope
            }, 1000); // Wait for animation to complete
        }
    });
});