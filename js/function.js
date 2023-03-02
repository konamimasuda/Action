document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const bar = new ProgressBar.Line(loading__bar, {
    strokeWidth: 4,
    easing: "easeInOut",
    duration: 1400,
    color: "#272727",
    trailColor: "#D4D4D4",
    trailWidth: 2,
    svgStyle: { width: "100%", height: "100%" },
  });

  bar.animate(1.0, function () {
    $("#loading").fadeOut();
    $('#top').removeClass('fixed');
  });

  //scroll
  const scrollUp = document.getElementById("scroll");
  const main = document.getElementById("main");

  window.addEventListener("scroll", function () {
    main.classList.add("noScroll");
    scrollUp.classList.add("isRisen");
  });


  //reload
  let deviceFlag;
  if (window.innerWidth < 768) {
    deviceFlag = "sp";
  } else if (window.innerWidth < 1024) {
    deviceFlag = "tablet";
  } else {
    deviceFlag = "pc";
  }
  window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
      deviceFlag !== "sp" && window.location.reload();
    } else if (window.innerWidth < 1024) {
      deviceFlag !== "tablet" && window.location.reload();
    } else {
      deviceFlag !== "pc" && window.location.reload();
    }
   })

  //header
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const intro = document.getElementById("intro");
    const ST = window.pageYOffset;
    const headerHeight = header.offsetHeight;
    let introHeight = intro.clientHeight;

    //header show/hide
    if (ST >= introHeight) {
      header.classList.add("showHeader");
    } else {
      header.classList.remove("showHeader");
    }

    //PCver Only
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const feature = document.getElementById("work__feature");
      const featureRect = feature.getBoundingClientRect();
      const featureX = featureRect.left;
      const feature0 = 0;

      //Work feature header color change
      if (featureX === feature0) {
        header.classList.add("beigeHeader");
      } else {
        header.classList.remove("beigeHeader");
      }

      const workMenu = document.getElementById("work__menu");
      const menuRect = workMenu.getBoundingClientRect();
      const menuTop = menuRect.top;
      const menuBottom = menuRect.bottom;
      const menuHeight = workMenu.offsetHeight;

      //work menu header color change
      if (menuTop <= headerHeight) {
        header.classList.add("bgChange");
      } else {
        header.classList.remove("bgChange");
      }

      //header color reset
      if (menuBottom <= headerHeight) {
        header.classList.remove("bgChange", "beigeHeader");
      }

      const message = document.getElementById("skill__message");
      const messageStyle = message.style.transform;
      const messageScale = messageStyle.match(/scale\(([^)]+)\)/);

      //skill menu header color change
      if (messageScale === null) {
        header.classList.add("skillBg");
      } else {
        header.classList.remove("skillBg");
      }

      const skillMenu = document.getElementById("skill__menu");
      const skillRect = skillMenu.getBoundingClientRect();
      const skillBottom = skillRect.bottom;

      //header color reset
      if (skillBottom <= headerHeight) {
        header.classList.remove("skillBg");
      }

      const detail = document.getElementById("profile__detail");
      const detailRect = detail.getBoundingClientRect();
      const detailTop = detailRect.top;
      const detailBottom = detailRect.bottom;
      const detailLeft = detailRect.left;

      //profile detail header color change
      if (detailLeft >= -30 && detailTop <= 1) {
        header.classList.add("profileBg");
      } else {
        header.classList.remove("profileBg");
      }

      //header color reset
      if (detailBottom <= headerHeight) {
        header.classList.remove("profileBg");
      }
    }
  });

  //gnav show/hide
  const btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    const btnTop = document.getElementById("btn__top");
    const btnMiddle = document.getElementById("btn__middle");
    const btnBottom = document.getElementById("btn__bottom");
    const gnav = document.getElementById("gnav");

    btnTop.classList.toggle("rotateTop");
    btnMiddle.classList.toggle("hideMiddle");
    btnBottom.classList.toggle("rotateBottom");
    gnav.classList.toggle("slideGnav");

    gnav.addEventListener("click", function () {
      console.log(this);
      btnTop.classList.remove("rotateTop");
      btnMiddle.classList.remove("hideMiddle");
      btnBottom.classList.remove("rotateBottom");
      this.classList.remove("slideGnav");
    });
  });

  //GSAP intro animation for sp and tab
  const letterA = document.querySelector(".intro__a");
  let aRect = letterA.getBoundingClientRect();
  let aX = aRect.left;
  let aY = window.pageYOffset + aRect.top;

  const letterC = document.querySelector(".intro__c");
  let cRect = letterC.getBoundingClientRect();
  let cX = cRect.left;
  let cY = window.pageYOffset + cRect.top;

  const letterT = document.querySelector(".intro__t");
  let tRect = letterT.getBoundingClientRect();
  let tX = tRect.left;
  let tY = window.pageYOffset + tRect.top;

  const letterI = document.querySelector(".intro__i");
  let iRect = letterI.getBoundingClientRect();
  let iX = iRect.left;
  let iY = window.pageYOffset + iRect.top;

  const letterO = document.querySelector(".intro__o");
  let oRect = letterO.getBoundingClientRect();
  let oX = oRect.left;
  let oY = window.pageYOffset + oRect.top;

  const letterN = document.querySelector(".intro__n");
  let nRect = letterN.getBoundingClientRect();
  let nX = nRect.left;
  let nY = window.pageYOffset + nRect.top;

  //GSAP animation
  if (window.matchMedia("(max-width: 767px)").matches) {
    //SP
    function introLogo() {
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro__box",
          start: "top top",
          // end: 'bottom top',
          pin: true,
          scrub: 1,
          markers: false,
        },
      });

      introTl
        .set(
          ".intro__a",
          {
            position: "fixed",
            top: -230,
            left: -180,
            fontSize: 1100,
          },
          "same1"
        )

        .set(
          ".intro__c",
          {
            position: "fixed",
            bottom: 600,
            right: -50,
            fontSize: 1100,
          },
          "same1"
        )

        .set(
          ".intro__t",
          {
            position: "fixed",
            top: 600,
            right: 50,
            fontSize: 1100,
          },
          "same1"
        )

        .set(
          ".intro__i",
          {
            position: "fixed",
            bottom: 600,
            right: -300,
            fontSize: 1100,
          },
          "same1"
        )

        .set(
          ".intro__o",
          {
            position: "fixed",
            top: 600,
            left: 200,
            fontSize: 1100,
          },
          "same1"
        )

        .set(
          ".intro__n",
          {
            position: "fixed",
            bottom: 100,
            left: 500,
            fontSize: 1100,
          },
          "same1"
        )

        .to(
          ".intro__a",
          {
            left: aX,
            top: aY,
            fontSize: 80,
            duration: 10,
          },
          "same2"
        )

        .to(
          ".intro__c",
          {
            left: cX,
            top: cY,
            fontSize: 80,
            duration: 10,
          },
          "same2+=1"
        )

        .to(
          ".intro__t",
          {
            left: tX,
            top: tY,
            fontSize: 80,
            duration: 10,
          },
          "same2+=2"
        )

        .to(
          ".intro__i",
          {
            left: iX,
            top: iY,
            fontSize: 80,
            duration: 10,
          },
          "same2+=3"
        )

        .to(
          ".intro__o",
          {
            left: oX,
            top: oY,
            fontSize: 80,
            duration: 10,
          },
          "same2+=4"
        )
        .to(
          ".intro__n",
          {
            left: nX,
            top: nY,
            fontSize: 80,
            duration: 10,
          },
          "same2+=5"
        )

        .fromTo(
          ".intro__sub",
          {
            y: 40,
            autoAlpha: 0,
          },
          {
            y: 30,
            autoAlpha: 1,
            duration: 5,
          }
        )

        .to(
          ".intro__box",
          {
            yPercent: -100,
            duration: 50,
          },
          ">3"
        );
    }

    function introCube() {
      const cubeTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro__wrap",
          start: "top top",
          end: "bottom top",
          pin: ".intro__wrap",
          scrub: 0,
          markers: false,
        },
      });

      cubeTl
        .fromTo(
          ".intro__letter--front",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            stagger: {
              each: 0.5,
              from: "random",
            },
          }
        )

        .to(".intro__cube", {
          rotateY: "-90deg",
          duration: 30,
          delay: 10,
        })

        .fromTo(
          ".intro__letter--side",
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0,
            stagger: {
              each: 0.5,
              from: "random",
            },
          }
        )

        .to(".intro__wrap", {
          yPercent: -100,
          duration: 50,
          delay: 10,
        });
    }

    function workIntro() {
      const workTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".work__front",
          start: "top bottom",
          end: "bottom top",
          pinSpacer: false,
          scrub: 0,
          markers: false,
        },
      });

      workTl
        .to(".work__front", {
          yPercent: -50,
          duration: 5,
        })

        .to(
          ".work__back",
          {
            yPercent: -50,
            duration: 8,
          },
          "<"
        );
    }

    function workFeature() {
      const workThumb = document.getElementById("work__list");
      const workHeight = workThumb.clientHeight;

      const featureTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".work__feature",
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: 0,
          markers: false,
        },
      });

      featureTl
        .to(
          ".work__feature",
          {
            translateX: 0,
          },
          "same1"
        )

        .to(
          ".work__left",
          {
            translateX: 0,
            scale: 1,
          },
          "same1"
        )

        .to(
          ".work__right",
          {
            translateX: 0,
          },
          "same1"
        )

        .to(
          ".work__logo",
          {
            translateX: 0,
          },
          "same1"
        )

        .to(
          ".work__cover",
          {
            top: 0,
            width: "75%",
            height: workHeight,
          },
          "same2"
        )

        .to(
          ".work__logo",
          {
            width: "35%",
          },
          "same2"
        );
    }

    function skill() {
      const skillTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".skill",
          start: "top bottom",
          end: "bottom top",
          scrub: 0,
          markers: false,
        },
      });

      skillTl.to(".skill__ttl", {
        visibility: "visible",
      });
    }

    function skillIntro() {
      const skillIntroTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".skill__intro",
          start: "top top",
          // end: 'bottom top',
          pin: true,
          pinSpacing: false,
          scrub: 0,
          markers: false,
        },
      });

      skillIntroTl
        .set(".row__left", {
          xPercent: 100,
        })

        .set(".row__right", {
          xPercent: -380,
        })

        .to(".skill__ttl", {
          opacity: 0,
          pointerEvents: "none",
          duration: 4,
        })

        .to(
          ".row__left",
          {
            xPercent: -380,
            duration: 3,
          },
          "same"
        )

        .to(
          ".row__right",
          {
            xPercent: 100,
            duration: 3,
          },
          "same"
        );
    }

    function skillMain() {
      const skillMainTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".skill__main",
          start: "top top",
          // end: 'bottom top',
          pin: true,
          scrub: 0,
          markers: false,
        },
      });

      skillMainTl
        .set(".skill__message", {
          scaleX: 0,
          transformOrigin: "center center",
        })

        .set(".skill__sub", {
          autoAlpha: 0,
        })

        .set(".skill__note", {
          autoAlpha: 0,
        })

        .to(".skill__message", {
          scaleX: 1,
          duration: 4,
        })

        .to(".skill__sub", {
          autoAlpha: 1,
          duration: 3,
        })

        .to(".skill__note", {
          autoAlpha: 1,
          duration: 3,
        });
    }

    function profileIntro() {
      const profileIntro = gsap.timeline({
        scrollTrigger: {
          trigger: ".profile",
          start: "top top",
          end: "bottom bottom",
          pin: true,
          // pinSpacing: false,
          scrub: 0,
          markers: false,
        },
      });

      profileIntro
        .to(".profile__ttl", {
          autoAlpha: 0,
        })

        .set(".profile__message", {
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 2,
        })

        .set(
          ".profile__lead",
          {
            yPercent: 10,
            autoAlpha: 0,
          },
          "same"
        )

        .set(
          ".profile__sub",
          {
            yPercent: 10,
            autoAlpha: 0,
          },
          "same"
        )

        .to(".profile__lead", {
          yPercent: 0,
          autoAlpha: 1,
        })

        .to(".profile__sub", {
          yPercent: 0,
          autoAlpha: 1,
        })

        .set(".profile__detail", {
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 3,
          xPercent: -100,
        })

        .to(
          ".profile__detail",
          {
            xPercent: 0,
          },
          "same2"
        )

        .to(
          ".profile__message",
          {
            xPercent: 100,
          },
          "same2"
        );
    }

    function outro() {
      const outro = gsap.timeline({
        scrollTrigger: {
          trigger: ".outro",
          start: "top top",
          // end: 'bottom bottom',
          pin: true,
          scrub: 0,
          markers: false,
        },
      });

      outro
        .set(".outro__letter", {
          rotate: 90,
          xPercent: -100,
          yPercent: 150,
          transformOrigin: "left center",
        })

        .to(
          ".outro__letter--row3",
          {
            rotate: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
            stagger: {
              from: "center",
              each: 5,
            },
          },
          "first"
        )

        .to(
          ".outro__letter--row2",
          {
            rotate: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
            stagger: {
              from: "center",
              each: 5,
            },
          },
          "first+=5"
        )

        .to(
          ".outro__letter--row4",
          {
            rotate: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
            stagger: {
              from: "center",
              each: 5,
            },
          },
          "first+=5"
        )

        .to(
          ".outro__letter--row1",
          {
            rotate: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
            stagger: {
              from: "center",
              each: 5,
            },
          },
          "first+=10"
        )

        .to(
          ".outro__letter--row5",
          {
            rotate: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
            stagger: {
              from: "center",
              each: 5,
            },
          },
          "first+=10"
        )

        .set(".outro__letter", {
          transformOrigin: "center center",
        })

        .to(
          ".outro__letter--col3",
          {
            scale: 0,
            duration: 20,
          },
          "second"
        )

        .to(
          ".outro__letter--col4",
          {
            scale: 0,
            duration: 20,
          },
          "second+=10"
        )

        .to(
          ".outro__letter--col5",
          {
            scale: 0,
            duration: 20,
          },
          "second+=20"
        )

        .to(
          ".outro__letter--col6",
          {
            scale: 0,
            duration: 20,
          },
          "second+=30"
        )

        .to(
          ".outro__letter--col7",
          {
            scale: 0,
            duration: 20,
          },
          "second+=40"
        );
    }

    const master = gsap.timeline();
    master
      .add(introLogo())
      .add(introCube())
      .add(workIntro())
      .add(workFeature())
      .add(skill())
      .add(skillIntro())
      .add(skillMain())
      .add(profileIntro())
      .add(outro());
  } else if (
    window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches
  ) {
    //tablet
    function introLogo() {
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro__box",
          start: "top top",
          // end: 'bottom top',
          pin: true,
          scrub: 1,
          markers: false,
        },
      });

      introTl
        .set(
          ".intro__a",
          {
            position: "fixed",
            top: -740,
            left: -315,
            fontSize: 2100,
          },
          "same1"
        )

        .set(
          ".intro__c",
          {
            position: "fixed",
            bottom: 1300,
            right: -100,
            fontSize: 2100,
          },
          "same1"
        )

        .set(
          ".intro__t",
          {
            position: "fixed",
            top: 800,
            right: 400,
            fontSize: 2100,
          },
          "same1"
        )

        .set(
          ".intro__i",
          {
            position: "fixed",
            bottom: 800,
            right: -200,
            fontSize: 2100,
          },
          "same1"
        )

        .set(
          ".intro__o",
          {
            position: "fixed",
            top: 800,
            left: 200,
            fontSize: 2100,
          },
          "same1"
        )

        .set(
          ".intro__n",
          {
            position: "fixed",
            bottom: 150,
            left: 800,
            fontSize: 2100,
          },
          "same1"
        )

        .to(
          ".intro__a",
          {
            left: aX,
            top: aY,
            fontSize: 108,
            duration: 10,
          },
          "same2"
        )

        .to(
          ".intro__c",
          {
            left: cX,
            top: cY,
            fontSize: 108,
            duration: 10,
          },
          "same2+=1"
        )

        .to(
          ".intro__t",
          {
            left: tX,
            top: tY,
            fontSize: 108,
            duration: 10,
          },
          "same2+=2"
        )

        .to(
          ".intro__i",
          {
            left: iX,
            top: iY,
            fontSize: 108,
            duration: 10,
          },
          "same2+=3"
        )

        .to(
          ".intro__o",
          {
            left: oX,
            top: oY,
            fontSize: 108,
            duration: 10,
          },
          "same2+=4"
        )
        .to(
          ".intro__n",
          {
            left: nX,
            top: nY,
            fontSize: 108,
            duration: 10,
          },
          "same2+=5"
        )

        .fromTo(
          ".intro__sub",
          {
            y: 50,
            autoAlpha: 0,
          },
          {
            y: 40,
            autoAlpha: 1,
            duration: 5,
          }
        )

        .to(
          ".intro__box",
          {
            yPercent: -100,
            duration: 50,
          },
          ">3"
        );
    }

    function introCube() {
      const cubeTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro__wrap",
          start: "top top",
          end: "bottom top",
          pin: ".intro__wrap",
          scrub: 0,
          markers: false,
        },
      });

      cubeTl
        .fromTo(
          ".intro__letter--front",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            stagger: {
              each: 0.5,
              from: "random",
            },
          }
        )

        .to(".intro__cube", {
          rotateY: "-90deg",
          duration: 30,
          delay: 10,
        })

        .fromTo(
          ".intro__letter--side",
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0,
            stagger: {
              each: 0.5,
              from: "random",
            },
          }
        )

        .to(".intro__wrap", {
          yPercent: -100,
          duration: 50,
          delay: 10,
        });
    }

    function workIntro() {
      const workTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".work__front",
          start: "top bottom",
          end: "bottom top",
          pinSpacer: false,
          scrub: 0,
          markers: false,
        },
      });

      workTl
        .to(".work__front", {
          yPercent: -50,
          duration: 5,
        })

        .to(
          ".work__back",
          {
            yPercent: -50,
            duration: 8,
          },
          "<"
        );
    }

    function workFeature() {
      const workThumb = document.getElementById("work__list");
      const workHeight = workThumb.clientHeight;

      const featureTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".work__feature",
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: 0,
          markers: false,
        },
      });

      featureTl
        .to(
          ".work__feature",
          {
            translateX: 0,
          },
          "same1"
        )

        .to(
          ".work__left",
          {
            translateX: 0,
            scale: 1,
          },
          "same1"
        )

        .to(
          ".work__right",
          {
            translateX: 0,
          },
          "same1"
        )

        .to(
          ".work__logo",
          {
            translateX: 0,
          },
          "same1"
        )

        .to(
          ".work__cover",
          {
            top: 0,
            width: "75%",
            height: workHeight,
          },
          "same2"
        )

        .to(
          ".work__logo",
          {
            width: "35%",
          },
          "same2"
        );
    }

    function skill() {
      const skillTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".skill",
          start: "top bottom",
          end: "bottom top",
          scrub: 0,
          markers: false,
        },
      });

      skillTl.to(".skill__ttl", {
        visibility: "visible",
      });
    }

    function skillIntro() {
      const skillIntroTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".skill__intro",
          start: "top top",
          // end: 'bottom top',
          pin: true,
          pinSpacing: false,
          scrub: 0,
          markers: false,
        },
      });

      skillIntroTl
        .set(".row__left", {
          xPercent: 100,
        })

        .set(".row__right", {
          xPercent: -240,
        })

        .to(".skill__ttl", {
          opacity: 0,
          pointerEvents: "none",
          duration: 4,
        })

        .to(
          ".row__left",
          {
            xPercent: -240,
            duration: 3,
          },
          "same"
        )

        .to(
          ".row__right",
          {
            xPercent: 100,
            duration: 3,
          },
          "same"
        );
    }

    function skillMain() {
      const skillMainTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".skill__main",
          start: "top top",
          // end: 'bottom top',
          pin: true,
          scrub: 0,
          markers: false,
        },
      });

      skillMainTl
        .set(".skill__message", {
          scaleX: 0,
          transformOrigin: "center center",
        })

        .set(".skill__sub", {
          autoAlpha: 0,
        })

        .set(".skill__note", {
          autoAlpha: 0,
        })

        .to(".skill__message", {
          scaleX: 1,
          duration: 4,
        })

        .to(".skill__sub", {
          autoAlpha: 1,
          duration: 3,
        })

        .to(".skill__note", {
          autoAlpha: 1,
          duration: 3,
        });
    }

    function profileIntro() {
      const profileIntro = gsap.timeline({
        scrollTrigger: {
          trigger: ".profile",
          start: "top top",
          end: "bottom bottom",
          pin: true,
          // pinSpacing: false,
          scrub: 0,
          markers: false,
        },
      });

      profileIntro
        .to(".profile__ttl", {
          autoAlpha: 0,
        })

        .set(".profile__message", {
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 2,
        })

        .set(
          ".profile__lead",
          {
            yPercent: 10,
            autoAlpha: 0,
          },
          "same"
        )

        .set(
          ".profile__sub",
          {
            yPercent: 10,
            autoAlpha: 0,
          },
          "same"
        )

        .to(".profile__lead", {
          yPercent: 0,
          autoAlpha: 1,
        })

        .to(".profile__sub", {
          yPercent: 0,
          autoAlpha: 1,
        })

        .set(".profile__detail", {
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 3,
          xPercent: -100,
        })

        .to(
          ".profile__detail",
          {
            xPercent: 0,
          },
          "same2"
        )

        .to(
          ".profile__message",
          {
            xPercent: 100,
          },
          "same2"
        );
    }

    function outro() {
      const outro = gsap.timeline({
        scrollTrigger: {
          trigger: ".outro",
          start: "top top",
          // end: 'bottom bottom',
          pin: true,
          scrub: 0,
          markers: false,
        },
      });

      outro
        .set(".outro__letter", {
          rotate: 90,
          xPercent: -100,
          yPercent: 150,
          transformOrigin: "left center",
        })

        .to(
          ".outro__letter--row3",
          {
            rotate: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
            stagger: {
              from: "center",
              each: 5,
            },
          },
          "first"
        )

        .to(
          ".outro__letter--row2",
          {
            rotate: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
            stagger: {
              from: "center",
              each: 5,
            },
          },
          "first+=5"
        )

        .to(
          ".outro__letter--row4",
          {
            rotate: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
            stagger: {
              from: "center",
              each: 5,
            },
          },
          "first+=5"
        )

        .to(
          ".outro__letter--row1",
          {
            rotate: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
            stagger: {
              from: "center",
              each: 5,
            },
          },
          "first+=10"
        )

        .to(
          ".outro__letter--row5",
          {
            rotate: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
            stagger: {
              from: "center",
              each: 5,
            },
          },
          "first+=10"
        )

        .set(".outro__letter", {
          transformOrigin: "center center",
        })

        .to(
          ".outro__letter--col2",
          {
            scale: 0,
            duration: 20,
          },
          "second"
        )

        .to(
          ".outro__letter--col3",
          {
            scale: 0,
            duration: 20,
          },
          "second+=10"
        )

        .to(
          ".outro__letter--col4",
          {
            scale: 0,
            duration: 20,
          },
          "second+=20"
        )

        .to(
          ".outro__letter--col5",
          {
            scale: 0,
            duration: 20,
          },
          "second+=30"
        )

        .to(
          ".outro__letter--col6",
          {
            scale: 0,
            duration: 20,
          },
          "second+=40"
        )

        .to(
          ".outro__letter--col7",
          {
            scale: 0,
            duration: 20,
          },
          "second+=50"
        )

        .to(
          ".outro__letter--col8",
          {
            scale: 0,
            duration: 20,
          },
          "second+=60"
        );
    }

    const master = gsap.timeline();
    master
      .add(introLogo())
      .add(introCube())
      .add(workIntro())
      .add(workFeature())
      .add(skill())
      .add(skillIntro())
      .add(skillMain())
      .add(profileIntro())
      .add(outro());
  } else {
    //pc
    function introLogo() {
      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro__box",
          start: "top top",
          // end: 'bottom top',
          pin: true,
          pinSpacing: false,
          scrub: 1,
          markers: false,
        },
      });

      introTl
        .set(
          ".intro__a",
          {
            scale: 13,
            xPercent: 175,
            yPercent: -110,
          },
          "same1"
        )

        .set(
          ".intro__c",
          {
            scale: 13,
            xPercent: -120,
            yPercent: -800,
          },
          "same1"
        )

        .set(
          ".intro__t",
          {
            scale: 13,
            xPercent: -400,
            yPercent: 800,
          },
          "same1"
        )

        .set(
          ".intro__i",
          {
            scale: 13,
            xPercent: 600,
            yPercent: -800,
          },
          "same1"
        )

        .set(
          ".intro__o",
          {
            scale: 13,
            xPercent: 400,
            yPercent: 600,
          },
          "same1"
        )

        .set(
          ".intro__n",
          {
            scale: 13,
            xPercent: 1500,
            yPercent: -400,
          },
          "same1"
        )

        .to(
          ".intro__a",
          {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
          },
          "same2"
        )

        .to(
          ".intro__c",
          {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
          },
          "same2+=2"
        )

        .to(
          ".intro__t",
          {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
          },
          "same2+=4"
        )

        .to(
          ".intro__i",
          {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
          },
          "same2+=6"
        )

        .to(
          ".intro__o",
          {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
          },
          "same2+=8"
        )

        .to(
          ".intro__n",
          {
            scale: 1,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
          },
          "same2+=10"
        )

        .fromTo(
          ".intro__sub",
          {
            y: 10,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 5,
          }
        )

        .to(".intro__box", {
          yPercent: -100,
          duration: 10,
          delay: 3,
        });
    }

    function introCube() {
      const cubeTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro__wrap",
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: 1,
          markers: false,
        },
      });

      cubeTl
        .fromTo(
          ".intro__letter--front",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            stagger: {
              each: 0.5,
              from: "random",
            },
          }
        )

        .to(".intro__cube", {
          rotateY: "-90deg",
          duration: 50,
          delay: 10,
        })

        .fromTo(
          ".intro__letter--side",
          {
            autoAlpha: 1,
          },
          {
            autoAlpha: 0,
            stagger: {
              each: 0.5,
              from: "random",
            },
          }
        )

        .to(".intro__wrap", {
          yPercent: -100,
          duration: 50,
          delay: 5,
        });
    }

    function workIntro() {
      const workTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".work__front",
          start: "top bottom",
          end: "bottom top",
          pinSpacer: false,
          scrub: 1,
          markers: false,
        },
      });

      workTl
        .to(".work__front", {
          yPercent: -50,
          duration: 5,
        })

        .to(
          ".work__back",
          {
            yPercent: -50,
            duration: 8,
          },
          "<"
        );
    }

    function workFeature() {
      const workThumb = document.getElementById("work__list");
      const workHeight = workThumb.clientHeight;

      const featureTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".work__feature",
          start: "top top",
          end: "bottom top",
          pin: true,
          // pinSpacing: false,
          scrub: 1,
          markers: false,
        },
      });

      featureTl

        .set(".header", {
          zIndex: 0,
        })
        .set(".work__intro", {
          zIndex: -2,
        })

        .set(".work__cover", {
          zIndex: 15,
          transformOrigin: "center center",
          scale: 4,
        })

        .set(".work__logo", {
          bottom: "30%",
          left: "15%",
        })

        .set(".work__feature", {
          xPercent: 100,
          position: "fixed",
          top: 0,
          left: 0,
        })

        .to(
          ".work__feature",
          {
            xPercent: 0,
            duration: 10,
          },
          "same1"
        )

        .to(
          ".work__logo",
          {
            translateX: 0,
            duration: 10,
          },
          "same1+=5"
        )

        .to(
          ".work__left",
          {
            width: "50%",
            duration: 10,
          },
          "same1+=6"
        )

        .to(
          ".work__right",
          {
            width: "50%",
            duration: 10,
          },
          "same1+=8"
        )

        .set(
          ".header",
          {
            zIndex: 11,
          },
          "same2"
        )

        .set(
          ".work__intro",
          {
            zIndex: 0,
          },
          "same2"
        )

        .to(
          ".work__cover",
          {
            scale: 1,
            duration: 10,
          },
          "same3"
        )

        .to(
          ".work__logo",
          {
            bottom: "7%",
            left: "3%",
            duration: 10,
          },
          "same3"
        )

        .set(
          ".header",
          {
            zIndex: 100,
          },
          "same4"
        )

        .to(
          ".work__unit",
          {
            xPercent: -70,
            duration: 20,
            delay: 1,
          },
          "same5"
        )

        .to(".work__feature", {
          yPercent: -20,
          duration: 20,
        });
    }

    function workMain() {
      const workMainTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".work__menu",
          start: "top bottom",
          // end: "bottom bottom",
          pin: false,
          scrub: 1,
          markers: false,
        },
      });

      workMainTl.to(".work__menu", {
        yPercent: -100,
        duration: 50,
      });
    }

    function skill() {
      const skillTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".work__menu",
          start: "top bottom",
          end: "center bottom",
          scrub: 1,
          markers: false,
        },
      });

      skillTl.to(".skill__ttl", {
        visibility: "visible",
      });
    }

    function skillIntro() {
      const skillIntroTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".skill__intro",
          start: "top top",
          // end: 'bottom top',
          pin: true,
          pinSpacing: false,
          scrub: 1,
          markers: false,
        },
      });

      skillIntroTl
        .set(".row__left", {
          xPercent: 200,
        })

        .set(".row__right", {
          xPercent: -200,
        })

        .to(".skill__ttl", {
          opacity: 0,
          pointerEvents: "none",
        })

        .to(
          ".row__left",
          {
            xPercent: -200,
            duration: 5,
          },
          "same"
        )

        .to(
          ".row__right",
          {
            xPercent: 200,
            duration: 5,
          },
          "same"
        );
    }

    function skillMain() {
      const skillMainTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".skill__main",
          start: "top top",
          pin: true,
          scrub: 1,
          markers: false,
        },
      });

      skillMainTl
        .set(".skill__message", {
          scaleX: 0,
          transformOrigin: "center center",
        })

        .set(".skill__sub", {
          autoAlpha: 0,
        })

        .set(".skill__note", {
          autoAlpha: 0,
        })

        .to(".skill__message", {
          scaleX: 1,
          duration: 4,
          delay: 2,
        })

        .to(".skill__sub", {
          autoAlpha: 1,
          duration: 3,
        })

        .to(".skill__note", {
          autoAlpha: 1,
          duration: 3,
        });

      // .to('.skill__message', {
      //   yPercent: -100,
      //   duration: 10,
      // }, 'same')

      // .to('.skill__menu', {
      //   yPercent: -100,
      //   duration: 10,
      // }, 'same2')
    }

    // function skillUp() {
    //   const skillUpTl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".skill__menu",
    //       start: "top bottom",
    //       // end: "bottom bottom",
    //       pin: false,
    //       // pinSpacing: false,
    //       scrub: 1,
    //       markers: false,
    //     },
    //   });

    //   skillUpTl.to('.skill__menu', {
    //     yPercent: -100,
    //     duration: 10,
    //   }, 'same')
    // }

    function profileIntro() {
      const profileIntro = gsap.timeline({
        scrollTrigger: {
          trigger: ".profile",
          start: "top top",
          end: "bottom bottom",
          pin: true,
          scrub: 1,
          markers: false,
        },
      });

      profileIntro
        .to(".profile__ttl", {
          autoAlpha: 0,
          duration: 20,
        })

        .set(".profile__message", {
          position: "fixed",
          top: 0,
          left: 0,
        })

        .set(
          ".profile__lead",
          {
            yPercent: 10,
            autoAlpha: 0,
          },
          "same"
        )

        .set(
          ".profile__sub",
          {
            yPercent: 10,
            autoAlpha: 0,
          },
          "same"
        )

        .to(".profile__lead", {
          yPercent: 0,
          autoAlpha: 1,
          duration: 20,
        })

        .to(".profile__sub", {
          yPercent: 0,
          autoAlpha: 1,
          duration: 20,
        })

        .set(".profile__detail", {
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 3,
          xPercent: -100,
        })

        .to(
          ".profile__message",
          {
            xPercent: 100,
            duration: 20,
          },
          "same2"
        )
        .to(
          ".profile__detail",
          {
            xPercent: 0,
            duration: 30,
          },
          "same2"
        )

        .to(
          ".profile__detail",
          {
            yPercent: -100,
            duration: 20,
            delay: 5,
          },
          "same3"
        );
    }

    function outro() {
      const outro = gsap.timeline({
        scrollTrigger: {
          trigger: ".outro",
          start: "top top",
          // end: 'bottom bottom',
          pin: true,
          scrub: 1,
          markers: false,
        },
      });

      outro
        .set(".outro__letter", {
          rotate: 90,
          xPercent: -100,
          yPercent: 150,
          transformOrigin: "left center",
        })

        .to(
          ".outro__letter--row3",
          {
            rotate: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
            stagger: {
              from: "center",
              each: 3,
            },
          },
          "first"
        )

        .to(
          ".outro__letter--row2",
          {
            rotate: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
            stagger: {
              from: "center",
              each: 3,
            },
          },
          "first+=5"
        )

        .to(
          ".outro__letter--row4",
          {
            rotate: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
            stagger: {
              from: "center",
              each: 3,
            },
          },
          "first+=5"
        )

        .to(
          ".outro__letter--row1",
          {
            rotate: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
            stagger: {
              from: "center",
              each: 3,
            },
          },
          "first+=10"
        )

        .to(
          ".outro__letter--row5",
          {
            rotate: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 10,
            stagger: {
              from: "center",
              each: 3,
            },
          },
          "first+=10"
        )

        .set(".outro__letter", {
          transformOrigin: "center center",
        })

        .to(
          ".outro__letter--col1",
          {
            scale: 0,
            duration: 20,
            delay: 3,
          },
          "second"
        )

        .to(
          ".outro__letter--col2",
          {
            scale: 0,
            duration: 20,
          },
          "second+=10"
        )

        .to(
          ".outro__letter--col3",
          {
            scale: 0,
            duration: 20,
          },
          "second+=20"
        )

        .to(
          ".outro__letter--col4",
          {
            scale: 0,
            duration: 20,
          },
          "second+=30"
        )

        .to(
          ".outro__letter--col5",
          {
            scale: 0,
            duration: 20,
          },
          "second+=40"
        )

        .to(
          ".outro__letter--col6",
          {
            scale: 0,
            duration: 20,
          },
          "second+=50"
        )

        .to(
          ".outro__letter--col7",
          {
            scale: 0,
            duration: 20,
          },
          "second+=60"
        )

        .to(
          ".outro__letter--col8",
          {
            scale: 0,
            duration: 20,
          },
          "second+=70"
        )

        .to(
          ".outro__letter--col9",
          {
            scale: 0,
            duration: 20,
          },
          "second+=80"
        )

        .to(".outro", {
          yPercent: -100,
          duration: 20,
        });
    }

    const master = gsap.timeline();
    master
      .add(introLogo())
      .add(introCube())
      .add(workIntro())
      .add(workFeature())
      .add(workMain(), "<")
      .add(skill())
      .add(skillIntro())
      .add(skillMain())
      // .add(skillUp())
      .add(profileIntro())
      .add(outro());
  }
});
