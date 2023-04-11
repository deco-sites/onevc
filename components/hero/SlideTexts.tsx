import { useSignal } from "@preact/signals";
import { useEffect } from "preact/compat";

export interface Props {
  slides: string[][];
  timing: number;
}

function SlideTexts({ slides, timing }: Props) {
  const currentSlide = useSignal(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      console.log(currentSlide.value);
      currentSlide.value = currentSlide.value === slides.length - 1
        ? 0
        : currentSlide.value + 1;
    }, timing * 1000);

    return () => clearInterval(timeout);
  }, []);

  return (
    <>
      {slides[currentSlide.value].map((text, key) => (
        <span class="block" key={key}>{text.trim()}</span>
      ))}
    </>
  );
}

export default SlideTexts;
