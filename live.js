let locomotiveAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  gsap.to(".nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -10%",
      scrub: true,
    },
  });

  gsap.to(".navpart-2 .links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });

  ScrollTrigger.refresh();
};
let videoConAnimation = () => {
  let videoCon = document.querySelector("#video-container");
  let playBtn = document.querySelector("#play");
  videoCon.addEventListener("mouseenter", () => {
    gsap.to(playBtn, {
      scale: 1,
      opacity: 1,
    });
  });

  videoCon.addEventListener("mouseleave", () => {
    gsap.to(playBtn, {
      scale: 0,
      opacity: 0,
    });
  });

  videoCon.addEventListener("mousemove", (location) => {
    gsap.to(playBtn, {
      left: location.x - 100,
      top: location.y - 100,
    });
  });
};
let headingAnimation = () => {
  gsap.from("#page1 h1", {
    y: 120,
    opacity: 0,
    delay: 0.5,
    duration: 0.8,
    stagger: 0.2,
  });

  gsap.from("#page1 #video-container", {
    scale: 0.89,
    opacity: 0,
    delay: 1.5,
    duration: 0.5,
  });
};
let mouseleave = () => {
  document.addEventListener("mousemove", (dets) => {
    gsap.to(".cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  let a = document.querySelectorAll(".child");
  a.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
  });

  let b = document.querySelectorAll(".child");
  a.forEach((elem) => {
    elem.addEventListener("mouseleave", () => {
      gsap.to(".cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
};

locomotiveAnimation();
videoConAnimation();
headingAnimation();
mouseleave();
