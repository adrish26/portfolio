gsap.registerPlugin(ScrollTrigger);

gsap.from(".section", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.4,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".section",
        start: "top 80%",
    },
});

gsap.from(".project", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.4,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".project",
        start: "top 80%",
    },
});