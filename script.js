// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// 1. Logo Animation (Loads immediately)
gsap.to(".nav-logo", {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out"
});

// 2. Hero Section Stagger Animation
gsap.to(".hero-item", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2, // Delays each item slightly for a cascading effect
    ease: "power3.out",
    delay: 0.3
});

// 3. Expert Section (Scroll Triggered)
gsap.to(".expert-image", {
    scrollTrigger: {
        trigger: ".expert-image",
        start: "top 80%", // Starts animation when top of element hits 80% down the screen
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.to(".expert-text", {
    scrollTrigger: {
        trigger: ".expert-text",
        start: "top 80%",
    },
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2
});

// 4. Technology Section (Scroll Triggered with 3D Flip)
gsap.to(".tech-text", {
    scrollTrigger: {
        trigger: ".tech-text",
        start: "top 80%",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.to(".tech-image", {
    scrollTrigger: {
        trigger: ".tech-image",
        start: "top 80%",
    },
    opacity: 1,
    rotateX: 0, // 3D flip effect
    duration: 1.2,
    ease: "back.out(1.7)",
    delay: 0.2
});

// 5. Footer (Scroll Triggered)
gsap.to(".footer-content", {
    scrollTrigger: {
        trigger: ".footer-content",
        start: "top 90%",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out"
});
