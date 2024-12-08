document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    // Define CSS keyframes for falling, rotating, and sliding animations
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes falling {
            to { top: ${window.innerHeight + 150}px; }
        }
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes slide {
            from { left: -200px; } /* Start outside of the screen */
            to { left: ${window.innerWidth}px; } /* End outside of the screen */
        }
    `;
    document.head.appendChild(styleSheet);

    // Function to create and animate a juice box
    function createAndAnimateJuiceBox() {
        const img = document.createElement('img');
        img.src = './images/fall.png';
        img.style.position = 'fixed';
        img.style.maxWidth = '100px';
        img.style.height = 'auto';
        img.style.zIndex = '15';
        img.style.pointerEvents = 'none';

        // Generate a random starting position
        const startX = Math.random() * window.innerWidth;
        img.style.left = `${startX}px`;

        // Adjust initial top position to start further off-screen
        img.style.top = '-150px'; // Start further above the screen

        // Append the image to the body
        body.appendChild(img);

        // Add animation for falling and rotating with random durations
        const fallingDuration = 4 + Math.random() * 2; // between 4 and 6 seconds
        const rotateDuration = 5 + Math.random(); // between 2 and 3 seconds
        img.style.animation = `falling ${fallingDuration}s linear forwards, rotate ${rotateDuration}s linear infinite`;

        // Remove the image after it has fallen out of view to clean up DOM
        setTimeout(() => {
            img.remove();
        }, fallingDuration * 1000); // Match the timeout to the falling duration
    }

    // Function to create and animate the sliding penguin image
    function createAndAnimateSlidingPenguin() {
        const img = document.createElement('img');
        img.src = 'FROGE.png'; // Your penguin image
        img.style.position = 'fixed';
        img.style.width = '200px'; // Set the width as required
        img.style.height = 'auto';
        img.style.bottom = '-10px'; // Position 10px above the bottom of the screen
        img.style.zIndex = '10'; // Ensure it's visible above other content if necessary
        img.style.pointerEvents = 'none';

        // Append the image to the body
        body.appendChild(img);

        // Add sliding animation with a constant duration
        const slideDuration = 5; // Adjust duration as needed
        img.style.animation = `slide ${slideDuration}s linear infinite`;

        // Optionally, remove the image after sliding off-screen to clean up the DOM
        // This step might not be necessary if the animation is infinite
    }

    // Create initial set of juice boxes
    for (let i = 0; i < 9; i++) {
        createAndAnimateJuiceBox();
    }

    // Continuously create new juice boxes at random intervals
    setInterval(createAndAnimateJuiceBox, 1000); // Adjust interval as needed

    // Call the function to create and animate the sliding penguin
    createAndAnimateSlidingPenguin();
});
