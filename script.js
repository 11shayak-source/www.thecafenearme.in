/**
 * Aesthetica Roots Dental - Landing Page Interactions
 * This script handles the sticky header effect and scroll-triggered animations.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    /* =========================================================
       1. STICKY BLURRED HEADER
       Adds a 'scrolled' class to the header when the user 
       scrolls down, changing its background and text colors.
    ========================================================= */
    const header = document.getElementById("main-header");
    
    // Function to check scroll position
    const checkScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    // Run once on load in case the user refreshes halfway down the page
    checkScroll();

    // Listen for scroll events
    window.addEventListener("scroll", checkScroll);


    /* =========================================================
       2. SCROLL-TRIGGERED REVEAL ANIMATIONS
       Uses IntersectionObserver to detect when elements enter
       the viewport, then adds the 'active' class to animate them.
    ========================================================= */
    
    // Select all elements that have the 'reveal-element' class
    const revealElements = document.querySelectorAll(".reveal-element");

    // Configure the observer
    const observerOptions = {
        root: null, // use the viewport as the root
        rootMargin: "0px", 
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    // Create the observer
    const elementObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                // Add the active class to trigger the CSS transition
                entry.target.classList.add("active");
                
                // Optional: Stop observing the element once it has revealed 
                // (prevents it from hiding/revealing multiple times if they scroll up and down)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Tell the observer to watch each reveal element
    revealElements.forEach(element => {
        elementObserver.observe(element);
    });

    /* =========================================================
       3. SMOOTH SCROLLING FOR NAVIGATION LINKS
       Ensures clicking a header link smoothly scrolls to the section.
    ========================================================= */
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"], .header-actions a[href^="#"], .center-btn a[href^="#"], .about-text a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Get the height of the sticky header so it doesn't cover the section title
                const headerHeight = header.offsetHeight;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
  
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    });

});