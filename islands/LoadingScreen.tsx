import { useUI } from "deco-sites/onevc/sdk/useUI.ts";
import { useEffect, useRef } from "preact/compat";
import { animation, keyframes, tw } from "twind/css";

function LoadingScreen() {
  const { isLoaded } = useUI();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isLoaded.value) {
      document.getElementsByTagName("body").item(0)?.removeAttribute(
        "no-scroll",
      );
      ref.current?.open === true && ref.current.close();
      return;
    }

    document.getElementsByTagName("body").item(0)?.setAttribute(
      "no-scroll",
      "",
    );
  }, [isLoaded.value]);

  const animate = tw`${
    animation(
      `1.5s ease-in-out 0s infinite`,
      keyframes`
        from {
            transform: translateY(20px) scaleX(0);
            transform-origin: left;
        }

        25% {
            transform: translateY(20px) scaleX(1);
            transform-origin: left;
        }

        25.1% {
            transform-origin: right;
        }

        50%,to {
            transform: translateY(20px) scaleX(0);
            transform-origin: right;
        }
        `,
    )
  }`;

  return (
    <dialog
      ref={ref}
      open
      class="p-0 m-0 w-full max-w-full h-full max-h-screen fixed top-0 left-0 z-50"
    >
      <div class="bg-white w-full h-full flex flex-col items-center justify-center">
        <p class="uppercase">Loading...</p>
        <div
          class={`${animate} bg-[#555] w-[200px] h-[1px] translate-y-[20px] scale-x-[0]`}
        />
      </div>
    </dialog>
  );
}

export default LoadingScreen;
