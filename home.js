// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const brdrElements = document.querySelectorAll('.brdr1, .brdr2, .brdr3');

    // Add click event listener to each .brdr element
    brdrElements.forEach(el => {
        el.addEventListener('click', function () {
            // Toggle the 'pop' class on click
            el.classList.toggle('pop');

            // Optionally, remove the class after a delay if you want the effect to reset
            setTimeout(() => {
                el.classList.remove('pop');
            }, 300); // Adjust the delay to match the CSS transition time (300ms in this case)
        });
    });
});
