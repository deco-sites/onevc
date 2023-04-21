import { useSignal } from "@preact/signals";
import { useEffect } from "preact/compat";
import { IS_BROWSER } from "$fresh/runtime.ts";

const useIntersectionObserver = <T extends Element = Element>(
  target: React.RefObject<T>,
  executeOnce?: boolean,
  options?: IntersectionObserverInit,
): boolean => {
  const visible = useSignal<boolean>(false);
  const defaultOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
    ...options,
  };

  useEffect(() => {
    if (!target.current || !IS_BROWSER) return;

    const intersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[], observer) => {
        visible.value = entries[0].isIntersecting;
        if (executeOnce && entries[0].isIntersecting) {
          observer.disconnect();
        }
      },
      defaultOptions,
    );


    intersectionObserver.observe(target.current);
    return () => intersectionObserver.disconnect();
  }, [target.current]);

  return visible.value;
};

export default useIntersectionObserver;
