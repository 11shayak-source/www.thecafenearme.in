// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Create a Master Timeline for the initial page load sequence
const loadTl = gsap.timeline();

// 1. Logo & Nav Reveal (Cinematic Slide & Fade)
loadTl.fromTo(".nav-logo", 
    { opacity: 0, x: -50, rotate: -5 },
    { opacity: 1, x: 0, rotate: 0, duration: 1.2, ease: "expo.out" }
)
.fromTo(".nav-menu a", 
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
    "-=1" // Overlaps with the logo animation for a fluid start
);

// 2. Hero Section (Staggered upward float with slight scale)
loadTl.fromTo(".hero-item", 
    { opacity: 0, y: 60, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 1.5, stagger: 0.15, ease: "power4.out" },
    "-=0.8" // Triggers right before the nav finishes
);

// 3. Expert Section (Advanced Parallax & Scroll Scrubbing)
gsap.fromTo(".expert-image", 
    { opacity: 0, scale: 0.8, y: 100 },
    { 
        scrollTrigger: { 
            trigger: ".expert-image", 
            start: "top 90%", 
            end: "center center", 
            scrub: 1 // Ties the animation to the user's scroll speed
        },
        opacity: 1, 
        scale: 1, 
        y: 0, 
        ease: "none" 
    }
);

gsap.fromTo(".expert-text", 
    { opacity: 0, x: 50 },
    {
        scrollTrigger: { 
            trigger: ".expert-text", 
            start: "top 80%" 
        },
        opacity: 1, 
        x: 0, 
        duration: 1.2, 
        ease: "power3.out"
    }
);

// 4. Technology Section (Deep 3D Flip)
gsap.fromTo(".tech-text", 
    { opacity: 0, y: 50 },
    {
        scrollTrigger: { 
            trigger: ".tech-text", 
            start: "top 85%" 
        },
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power2.out"
    }
);

gsap.fromTo(".tech-image", 
    { opacity: 0, rotateX: 90, rotateY: -10, z: -300 }, // Starts pushed back in 3D space
    {
        scrollTrigger: { 
            trigger: ".tech-image", 
            start: "top 80%" 
        },
        opacity: 1, 
        rotateX: 0, 
        rotateY: 0, 
        z: 0, // Snaps forward to standard depth
        duration: 1.5, 
        ease: "back.out(1.5)"
    }
);

// 5. Footer (Upward Swell)
gsap.fromTo(".footer-content", 
    { opacity: 0, y: 100, scale: 0.95 },
    {
        scrollTrigger: { 
            trigger: ".footer-content", 
            start: "top 95%" 
        },
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 1.2, 
        ease: "expo.out"
    }
);
