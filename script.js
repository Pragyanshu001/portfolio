// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Step 1: Intro Animation (no page scroll)
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#parallax",
      start: "top top",
      end: "+=3500", // scroll distance for animation
      //   end: "+=100%",
      scrub: true,
      pin: true, // page scroll will pause until animation completes
    },
  })
  .to("#layer4-1", {
    x: "-30%", // move left offscreen
    scale: 1.3,
    transformOrigin: "center center",
  })
  .to(
    "#moon",
    {
      x: "200%", // move left offscreen
      scale: 1.07,
      y: "-60%",
      transformOrigin: "center center",
    },
    "<"
  )
  .to(
    "#layer4-2",
    {
      x: "30%", // move right offscreen
      scale: 1.3,
      transformOrigin: "center center",
    },
    "<"
  ) // "<" syncs both animations
  .to(
    "#layer3",
    {
      scale: 1.07,
      y: -"20%",
      transformOrigin: "center center",
      // boxShadow: `10000px 0 0 rgba(0,0,0,0.5) inset`,
    },
    "<"
  )
  .to(
    "#layer2",
    {
      y: "-5%",
      scale: 1.03,
      transformOrigin: "center center",
    },
    "<"
  );

// Step 2: Scroll-based parallax (after intro animation)
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#moon",
      start: "top+=400 top",
      end: "top+=1500 top",
      scrub: true,
    },
  })
  .to("#moon", { y: "500%", scale: 1.2, ease: "none" }, 0)
  .to("#layer2", { y: "60%", scale: 1.05, ease: "none" }, 0)
  .to("#layer3", { y: "-20%", ease: "none" }, 0)
  .to("#layer4-1", { x: "60%", ease: "none" }, 0)
  .to("#layer4-2", { x: "-60%", ease: "none" }, 0);

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    console.log("Sending email...");
    console.log(this);

    emailjs.sendForm("service_9lbctvr", "template_nqb22os", this).then(
      function (result) {
        alert("Message sent successfully! ✅");
        console.log("SUCCESS!", result.text);
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("Oops! Something went wrong. ❌ Check console for details.");
        console.error("FAILED...", error.text);
      }
    );
  });
