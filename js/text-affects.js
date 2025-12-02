// scroll-fade.js

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

// Wait for the full page to load
window.addEventListener('load', () => {

    // Optionally fade in the hero
    gsap.fromTo('.hero', 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    // Scramble H1 text
    gsap.to("h1", {
        duration: 3.2,
        scrambleText: {
            text: "Eternal September",
            chars: "█▓▒░▚▞▙▛▜▟#*+=-<>[]",
            revealDelay: 2,
            speed: 0.5,
            newClass: "myClass"
        }
    });
});

// Scroll-trigger animations (unchanged)
gsap.utils.toArray("article").forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 30,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top center",
            toggleActions: "play none none reverse"
        }
    });
});

gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        y: 30,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});


// // Register the plugin
// gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

// // Scramble <h1> on page load
// // gsap.to("h1", {duration: 1, ScrambleTextPlugin: "Eternal September"});
// gsap.to("h1", {
//   duration: 3.2, 
//   scrambleText: {
//     text: "Eternal September", 
//     chars: "█▓▒░▚▞▙▛▜▟#*+=-<>[]", 
//     revealDelay: 2,
//     speed: 0.5, 
//     newClass: "myClass"
//   }
// });

// // Scroll trigger fade in <artcile>
// gsap.utils.toArray("article").forEach((section) => {
//     gsap.from(section, {
//         opacity: 0,
//         y: 30,
//         duration: 2,
//         ease: "power2.out",

//         scrollTrigger: {
//             trigger: section,
//             start: "top center",
//             toggleActions: "play none none reverse"
//         }
//     });
// });

// // Scroll trigger fade in <section>
// gsap.utils.toArray("section").forEach((section) => {
//     gsap.from(section, {
//         opacity: 0,
//         y: 30,
//         duration: 2,
//         ease: "power2.out",

//         scrollTrigger: {
//             trigger: section,
//             start: "top 85%",
//             toggleActions: "play none none reverse"
//         }
//     });
// });

