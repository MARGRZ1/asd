import { motion } from "framer-motion";
import styled from "styled-components";

const CardContainer = styled.div`
  transform: rotate(45deg);
  display: none;

  @media (min-width: 650px) {
    display: block;
    align-self: center;
  }
`;

const CardSVG = styled(motion.svg)`
  max-width: 280px;
  height: 100%;
  stroke: #fff;
  overflow: hidden;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
  z-index: 1;
  animation: scale 1s 2s infinite alternate both ease-in-out;

  @keyframes scale {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.015);
    }
  }

  @media (min-width: 1200px) {
    max-width: 400px;
  }

  @media (min-width: 2000px) {
    max-width: 550px;
  }
`;

const CardTop = styled(motion.path)`
  animation: move 1s 2s infinite alternate both ease-in-out;

  @keyframes move {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(4px);
    }
  }
`;

const CardBox1 = styled(motion.path)`
  animation: blur 3s 2s infinite alternate both ease-out;

  @keyframes blur {
    from {
      background: rgba(28, 54, 123, 0);
    }
    to {
      fill: #07226e;
    }
  }
`;

const CardBox2 = styled(motion.path)`
  animation: blur 3.1s 2s infinite alternate both ease-out;

  @keyframes blur {
    from {
      background: rgba(28, 54, 123, 0);
    }
    to {
      fill: #07226e;
    }
  }
`;

const CardBox3 = styled(motion.path)`
  animation: blur 2.8s 2s infinite alternate both ease-out;

  @keyframes blur {
    from {
      background: rgba(28, 54, 123, 0);
    }
    to {
      fill: #07226e;
    }
  }
`;

const CardBox4 = styled(motion.path)`
  animation: blur 3.3s 2s infinite alternate both ease-out;

  @keyframes blur {
    from {
      background: rgba(28, 54, 123, 0);
    }
    to {
      fill: #07226e;
    }
  }
`;

const cardAnimationVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const pathVariants = {
  hidden: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

const smallBoxesVariants = {
  hidden: { pathLength: 0, fill: "rgba(28, 54, 123, 0)" },
  visible: {
    pathLength: 1,
    fill: "rgba(28, 54, 123, 1)",
  },
};

const transition = {
  default: { duration: 2, ease: "easeInOut" },
  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
};

export const CardComponent = () => (
  <CardContainer>
    <CardSVG
      width="650"
      height="409"
      viewBox="0 0 650 409"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={cardAnimationVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.path
        variants={pathVariants}
        transition={transition}
        d="M0 129H650V379C650 395.569 636.569 409 620 409H30C13.4315 409 0 395.569 0 379V129Z"
      />
      <CardTop
        variants={pathVariants}
        transition={transition}
        d="M650 80H0V30C0 13.4315 13.4315 0 30 0H620C636.569 0 650 13.4315 650 30V80Z"
      />
      <CardBox1
        variants={smallBoxesVariants}
        transition={transition}
        d="M50 292H165V332H50V292Z"
      />
      <CardBox2
        variants={smallBoxesVariants}
        transition={transition}
        d="M195 292H310V332H195V292Z"
      />
      <CardBox3
        variants={smallBoxesVariants}
        transition={transition}
        d="M340 292H455V332H340V292Z"
      />
      <CardBox4
        variants={smallBoxesVariants}
        transition={transition}
        d="M485 292H600V332H485V292Z"
      />
    </CardSVG>
  </CardContainer>
);
