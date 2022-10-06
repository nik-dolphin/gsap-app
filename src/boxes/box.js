import "./box.css";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

function Box() {
  const boxRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".box1", {
        rotation: "+=360",
        x: 124,
        y: 50,
        delay: .5,
        duration: 2,
        yoyo: true,
        repeat: -1,
        repeatDelay: 1,
      });
      gsap.to(".box3", {
        rotation: "+=360",
        x: -124,
        y: 50,
        delay: 1.5,
        duration: 2,
        yoyo: true,
        repeat: -1,
        repeatDelay: 1,
      });
      gsap.to(".box4", {
        rotation: "+=360",
        x: -124,
        y: -60,
        delay: 2,
        duration: 2,
        yoyo: true,
        repeat: -1,
        repeatDelay: 1,
      });
      gsap.to(".box5", {
        rotation: "+=360",
        x: 124,
        y: -60,
        delay: 3.5,
        duration: 2,
        yoyo: true,
        repeat: -1,
        repeatDelay: 1,
      });
    }, boxRef);

    return () => ctx.revert();
  });
  return (
    <div ref={boxRef} className="app">
      <div className="box box1">Nikunj</div>
      <div className="box box2">Nikunj</div>
      <div className="box box3">Nikunj</div>
      <div className="box box4">Nikunj</div>
      <div className="box box5">Nikunj</div>
    </div>
  );
}

export default Box;
