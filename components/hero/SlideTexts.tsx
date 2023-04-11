import { useSignal } from "@preact/signals";
import { useEffect } from "preact/compat";

export interface Props {
  slides: string[][];
  timing: number;
}

function SlideTexts({ slides, timing }: Props) {
  const currentSlide = useSignal(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      currentSlide.value = currentSlide.value === slides.length - 1
        ? 0
        : currentSlide.value + 1;
    }, timing * 1000);

    return clearTimeout(timeout);
  }, [currentSlide.value]);

  return (
    <>
      {slides[currentSlide.value].map((text) => (
        <span key={text}>{text.trim()}</span>
      ))}
    </>
  );
}

export default SlideTexts;
