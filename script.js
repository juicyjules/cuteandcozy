window.addEventListener('load', () => {
    // A short delay to ensure the animation has time to play before fading out.
    // The animation itself takes about 2.2s. We'll fade out after that.
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 2500); // Wait for animation to finish
});
