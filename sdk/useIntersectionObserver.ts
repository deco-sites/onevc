import { useSignal } from "@preact/signals";
import { useEffect } from "preact/compat";
import { IS_BROWSER } from "$fresh/runtime.ts";

const useIntersectionObserver = <T extends Element = Element>(
  target: React.RefObject<T>,
  executeOnce?: boolean,
  options?: IntersectionObserverInit & { executeOnce: boolean },
): boolean => {
  const visible = useSignal<boolean>(false);
  const defaultOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
    ...options,
  };

  const intersectionObserver = IS_BROWSER && new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      visible.value = entries[0].isIntersecting;
      if (executeOnce) {
        (intersectionObserver as IntersectionObserver).disconnect();
      }
    },
    defaultOptions,
  );

  useEffect(() => {
    if (!target.current || !intersectionObserver) return;

    intersectionObserver.observe(target.current);
    return () => intersectionObserver.disconnect();
  }, [target.current, intersectionObserver]);

  return visible.value;
};

export default useIntersectionObserver;
