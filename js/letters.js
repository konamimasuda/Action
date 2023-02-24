document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const WIDTH = window.outerWidth;
  const HEIGHT = window.outerHeight;

  const Engine = Matter.Engine;
  const Render = Matter.Render;
  const Runner = Matter.Runner;
  const Body = Matter.Body;
  const Bodies = Matter.Bodies;
  const Bounds = Matter.Bounds;
  const Common = Matter.Common;
  const Composite = Matter.Composite;
  const Composites = Matter.Composites;
  const Constraint = Matter.Constraint;
  const Events = Matter.Events;
  const Mouse = Matter.Mouse;
  const MouseConstraint = Matter.MouseConstraint;

  window.onload = () => {
    const engine = Engine.create();
    const place = document.getElementById("profile__letter");
    const render = Render.create({
      element: place,
      engine: engine,
      options: {
        width: WIDTH,
        height: HEIGHT,
        showAngleIndicator: false,
        showCollisions: true,
        showDebug: false,
        showIds: true,
        showVelocity: true,
        hasBounds: true,
        wireframes: false, // Important!!
      },
    });
    Render.run(render);


    // 3-1, Boxとballを用意
    const letterW = Bodies.rectangle(WIDTH / 2, HEIGHT / 2, 52, 45, {
      restitution: 0.7,
      friction: 0,
      angle: Common.random(0, 0),
      timeScale: 1.5,
      render: {
        sprite: {
          texture: "../images/letter/w.svg",
        },
      },
    });

    const letterH1 = Bodies.rectangle(WIDTH / 2, HEIGHT / 2, 28, 45, {
      restitution: 0.7,
      friction: 0,
      angle: Common.random(0, 0),
      timeScale: 1.5,
      render: {
        sprite: {
          texture: "../images/letter/h.svg",
        },
      },
    });

    const letterO = Bodies.circle(WIDTH / 2 + 80, 20, 20, {
      restitution: 0.7,
      friction: 0,
      angle: Common.random(0, 0),
      timeScale: 1.5,
      render: {
        sprite: {
          texture: "../images/letter/o.svg",
        },
      },
    });

    const letterC = Bodies.circle(WIDTH / 2 + 60, 23, 25, {
      restitution: 0.7,
      friction: 0,
      angle: Common.random(0, 0),
      timeScale: 1.5,
      render: {
        sprite: {
          texture: "../images/letter/c.svg",
        },
      },
    });

    const letterR1 = Bodies.rectangle(WIDTH / 2, 50, 17, 32, {
      restitution: 0.7,
      friction: 0,
      angle: Common.random(0, 0),
      timeScale: 1.5,
      render: {
        sprite: {
          texture: "../images/letter/r.svg",
        },
      },
    });

    const letterE1 = Bodies.circle(WIDTH / 2 + 40, 28, 20, {
      restitution: 0.7,
      friction: 0,
      angle: Common.random(0, 0),
      timeScale: 1.5,
      render: {
        sprite: {
          texture: "../images/letter/e.svg",
        },
      },
    });

    const letterA = Bodies.circle(WIDTH / 2 + 20, 28, 20, {
      restitution: 0.7,
      friction: 0,
      angle: Common.random(0, 0),
      timeScale: 1.5,
      render: {
        sprite: {
          texture: "../images/letter/a.svg",
        },
      },
    });

    const letterT = Bodies.rectangle(WIDTH / 2, 50, 19, 40, {
      restitution: 0.7,
      friction: 0,
      angle: Common.random(0, 0),
      timeScale: 1.5,
      render: {
        sprite: {
          texture: "../images/letter/t.svg",
        },
      },
    });

    const letterE2 = Bodies.circle(WIDTH / 2 + 40, 28, 20, {
        restitution: 0.7,
        friction: 0,
        angle: Common.random(0, 0),
        timeScale: 1.5,
        render: {
          sprite: {
            texture: "../images/letter/e.svg",
          },
        },
      });

      const letterD = Bodies.rectangle(WIDTH / 2, 50, 29, 46, {
        restitution: 0.7,
        friction: 0,
        angle: Common.random(0, 0),
        timeScale: 1.5,
        render: {
          sprite: {
            texture: "../images/letter/d.svg",
          },
        },
      });

      const letterH2 = Bodies.rectangle(WIDTH / 2, 50, 35, 43, {
        restitution: 0.7,
        friction: 0,
        angle: Common.random(0, 0),
        timeScale: 1.5,
        render: {
          sprite: {
            texture: "../images/letter/bigh.svg",
          },
        },
      });

      const letterE3 = Bodies.circle(WIDTH / 2 + 40, 28, 20, {
        restitution: 0.7,
        friction: 0,
        angle: Common.random(0, 0),
        timeScale: 1.5,
        render: {
          sprite: {
            texture: "../images/letter/e.svg",
          },
        },
      });

      const letterR2 = Bodies.rectangle(WIDTH / 2, 50, 17, 32, {
        restitution: 0.7,
        friction: 0,
        angle: Common.random(0, 0),
        timeScale: 1.5,
        render: {
          sprite: {
            texture: "../images/letter/r.svg",
          },
        },
      });

      const letterE4 = Bodies.circle(WIDTH / 2 + 40, 28, 20, {
        restitution: 0.7,
        friction: 0,
        angle: Common.random(0, 0),
        timeScale: 1.5,
        render: {
          sprite: {
            texture: "../images/letter/e.svg",
          },
        },
      });

    //左壁を用意。画面左端にくっつける
    const wallLeft = Bodies.rectangle(0, HEIGHT / 2, 10, HEIGHT, {
      isStatic: true,
    });

    //右壁を用意。画面右端にくっつける
    const wallRight = Bodies.rectangle(WIDTH, HEIGHT / 2, 10, HEIGHT, {
      isStatic: true,
    });

    // 3-2, 地面を用意。画面下にくっつける
    const ground = Bodies.rectangle(WIDTH / 2, HEIGHT, WIDTH, 1, {
      isStatic: true,
    });

    Composite.add(engine.world, [
      letterW,
      letterH1,
      letterO,
      letterC,
      letterR1,
      letterE1,
      letterA,
      letterT,
      letterE2,
      letterD,
      letterH2,
      letterE3,
      letterR2,
      letterE4,
      ground,
      wallLeft,
      wallRight,
    ]);

    const mouse = Mouse.create(render.canvas);
	render.mouse = mouse;
	const mouseConstraint = MouseConstraint.create(engine, {
		mouse: mouse,
		constraint: {
			stiffness: 0.2,
			render: {visible: false}
		}
	});
	Composite.add(engine.world, mouseConstraint);

    // 4, 物理世界を更新します
    const runner = Runner.create();
    // Runner.run(runner, engine);
  };
});
