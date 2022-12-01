import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./scroll.css";

const Scroll = () => {
  const boxRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ ease: "none", duration: 2 });
      // create a sequence that moves 3 of the panels in from different directions
      const tl = gsap.timeline();
      tl.from(".orange", { xPercent: -100 })
        .from(".purple", { xPercent: 100 })
        .from(".green", { yPercent: -100 });

      // pin the container and link the animation to the scrollbar (scrub: true). We could easily embed this in the gsap.timeline() to shorten things a bit, but this is to show that you can create the ScrollTrigger separately if you prefer.
      ScrollTrigger.create({
        animation: tl,
        trigger: "#container",
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      });

      gsap.to(".arrow", {
        y: 12,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".arrow-right", {
        x: -12,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, boxRef);

    return () => ctx.revert();
  });

  return (
    <div ref={boxRef}>
      <div className="description panel blue"  style={{ height: "100vh" }}>
        <div className="child-container">
          <h1 style={{ color: "white", fontSize: "5em" }}>Slide-in panels</h1>
          <p style={{ color: "black", fontSize: "2em" }}>
            A simple animation linked to a ScrollTrigger with{" "}
            <code>scrub: true</code> creates a nifty effect.
          </p>
          <div className="scroll-down">
            Scroll down<div className="arrow"></div>
          </div>
        </div>
      </div>
      <div id="container" style={{ height: "100vh" }}>
        <section className="panel red">ONE</section>
        <section className="panel orange">TWO</section>
        <section className="panel purple">THREE</section>
        <section className="panel green">FOUR</section>
      </div>
    </div>
  );
};

export default Scroll;
