import { animation, keyframes } from "twind/css";

export const heroImageShadow = animation(
  "3s ease-in-out alternate infinite",
  keyframes`
    from {
      transform: translateX(-50%) scaleX(0.8);
      opacity: .05;
      filter: blur(10px)
    }

    to {
      transform: translateX(-50%) scaleX(1);
      opacity: .3;
      filter: blur(5px)
    }
  `,
);

export const heroImage = animation(
  "3s ease-in-out alternate infinite",
  keyframes`
    from {
        transform: translateY(0)
    }

    to {
        transform: translateY(25px)
    }
  `,
);
