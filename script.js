<script>
// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 🌄 Step 1: Intro Parallax Animation (Pinned Section)
gsap.timeline({
  scrollTrigger: {
    trigger: "#parallax",
    start: "top top",
    end: "+=3000", // ⬆️ Increased for longer, smoother scroll duration
    scrub: true,
    pin: true, // Keeps section fixed while animation plays
  },
})
.to("#layer4-1", {
  x: "-30%", // move left
  scale: 1.3,
  transformOrigin: "center center",
  ease: "power1.out",
})
.to(
  "#moon",
  {
    x: "200%", // move right
    y: "-60%",
    scale: 1.07,
    transformOrigin: "center center",
    ease: "power1.out",
  },
  "<" // run simultaneously
)
.to(
  "#layer4-2",
  {
    x: "30%", // move right
    scale: 1.3,
    transformOrigin: "center center",
    ease: "power1.out",
  },
  "<"
)
.to(
  "#layer3",
  {
    scale: 1.07,
    y: "-20%",
    transformOrigin: "center center",
    ease: "power1.out",
  },
  "<"
)
.to(
  "#layer2",
  {
    y: "-5%",
    scale: 1.03,
    transformOrigin: "center center",
    ease: "power1.out",
  },
  "<"
);

// 🌙 Step 2: Scroll-Based Parallax (After Intro)
gsap.timeline({
  scrollTrigger: {
    trigger: "#moon",
    start: "top+=400 top",
    end: "top+=2500 top", // ⬆️ Increased for smoother/longer scroll effect
    scrub: true,
  },
})
.to("#moon", { y: "500%", scale: 1.2, ease: "none" }, 0)
.to("#layer2", { y: "60%", scale: 1.05, ease: "none" }, 0)
.to("#layer3", { y: "-20%", ease: "none" }, 0)
.to("#layer4-1", { x: "60%", ease: "none" }, 0)
.to("#layer4-2", { x: "-60%", ease: "none" }, 0);

// ✉️ Step 3: Contact Form EmailJS Integration
document.getElementById("contact-form").addEventListener("submit", function (e) {
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
</script>
