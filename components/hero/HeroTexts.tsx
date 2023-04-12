import { useEffect, useState } from "preact/compat";

export interface Props {
  slides: string[][];
  timing: number;
}

function HeroTexts({ slides, timing }: Props) {
  const [currentSlide, setNextSlide] = useState(0);
  const [animateSlide, setAnimation] = useState(true);

  useEffect(() => {
    const maxTiming = slides[currentSlide].length * 250;
    const slideTimeout = setTimeout(() => {
      setNextSlide((currentSlide) =>
        currentSlide === slides.length - 1 ? 0 : currentSlide + 1
      );
    }, (timing * 1000) + maxTiming);

    const animationTimeout = setTimeout(() => {
      setAnimation(false);

      setTimeout(() => {
        setAnimation(true);
      }, maxTiming + 300);
    }, timing * 1000);

    return () => {
      clearTimeout(slideTimeout);
      clearTimeout(animationTimeout);
    };
  }, [currentSlide]);

  return (
    <>
      {slides.map((slide, slideIndex) => (
        <p
          key={slideIndex}
          class={slideIndex === currentSlide ? "block" : "hidden"}
        >
          {slide.map((text, index) => (
            <span
              class={`block whitespace-nowrap ${
                animateSlide
                  ? "translate-x-0 opacity-1 visible"
                  : "translate-x-[20px] opacity-0 invisible"
              }`}
              key={`${index}-${slideIndex}`}
              style={{
                transition: "all .6s ease-out",
                transitionDelay: `${(index + 1) * 0.2}s`,
              }}
            >
              {text.trim()}
            </span>
          ))}
        </p>
      ))}
    </>
  );
}

export default HeroTexts;
