gsap.registerPlugin(ScrollTrigger);


/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    const tl = gsap.timeline();

    tl.to(".loader-logo", {
        scale: 1.2,
        duration: 0.5,
        ease: "power2.out"
    })

    .to(".loader p", {
        opacity: 0,
        duration: 0.3
    })

    .to(loader, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut"
    })

    .from(".hero-content", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out"
    }, "-=.5");

});


/* =========================
   NAVBAR
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("mobile-open");

});


document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {
        navbar.classList.remove("mobile-open");
    });

});


/* =========================
   HERO PARALLAX
========================= */

gsap.to(".hero", {

    backgroundPosition: "50% 65%",

    ease: "none",

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }

});


/* =========================
   INTRO ANIMATION
========================= */

gsap.from(".intro-grid > div", {

    opacity: 0,
    y: 80,
    duration: 1,

    stagger: 0.2,

    scrollTrigger: {
        trigger: ".intro-section",
        start: "top 75%"
    }

});


/* =========================
   VILLA IMAGE
========================= */

gsap.from(".villa-image", {

    clipPath: "inset(0 100% 0 0)",
    duration: 1.5,
    ease: "power4.out",

    scrollTrigger: {
        trigger: ".villa-section",
        start: "top 70%"
    }

});


/* =========================
   VILLA CONTENT
========================= */

gsap.from(".villa-content > *", {

    opacity: 0,
    x: 60,

    duration: .8,

    stagger: .12,

    scrollTrigger: {
        trigger: ".villa-content",
        start: "top 75%"
    }

});


/* =========================
   ROOM CARDS
========================= */

gsap.from(".room-card", {

    opacity: 0,
    y: 70,
    scale: .95,

    duration: .8,

    stagger: .15,

    scrollTrigger: {
        trigger: ".room-grid",
        start: "top 75%"
    }

});


/* =========================
   POOL TEXT
========================= */

gsap.from(".pool-content > *", {

    opacity: 0,
    y: 50,

    duration: 1,

    stagger: .15,

    scrollTrigger: {
        trigger: ".pool-section",
        start: "top 70%"
    }

});


/* =========================
   GARDEN
========================= */

gsap.from(".garden-content", {

    opacity: 0,
    x: -80,

    duration: 1,

    scrollTrigger: {
        trigger: ".garden-section",
        start: "top 70%"
    }

});


gsap.from(".garden-image", {

    opacity: 0,
    x: 80,

    duration: 1,

    scrollTrigger: {
        trigger: ".garden-section",
        start: "top 70%"
    }

});


/* =========================
   FEATURES
========================= */

gsap.from(".feature", {

    opacity: 0,
    y: 50,

    duration: .7,

    stagger: .1,

    scrollTrigger: {
        trigger: ".features-grid",
        start: "top 75%"
    }

});


/* =========================
   DREAM NOTE
========================= */

gsap.from(".note-box", {

    opacity: 0,
    scale: .9,

    duration: 1,

    scrollTrigger: {
        trigger: ".dream-note",
        start: "top 75%"
    }

});


/* =========================
   CONTACT
========================= */

gsap.from(".contact-section > *", {

    opacity: 0,
    y: 40,

    duration: .8,

    stagger: .15,

    scrollTrigger: {
        trigger: ".contact-section",
        start: "top 75%"
    }

});


/* =========================
   GOLD BUTTON HOVER
========================= */

document.querySelectorAll(".gold-btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        gsap.to(button, {
            scale: 1.04,
            duration: .25
        });

    });

    button.addEventListener("mouseleave", () => {

        gsap.to(button, {
            scale: 1,
            duration: .25
        });

    });

});


/* =========================
   SMOOTH IMAGE MOVEMENT
========================= */

document.querySelectorAll(".room-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x =
            (e.clientX - rect.left) / rect.width - .5;

        const y =
            (e.clientY - rect.top) / rect.height - .5;

        gsap.to(card.querySelector("img"), {

            x: x * 12,
            y: y * 12,

            duration: .4,
            ease: "power2.out"

        });

    });


    card.addEventListener("mouseleave", () => {

        gsap.to(card.querySelector("img"), {

            x: 0,
            y: 0,

            duration: .6

        });

    });

});