import { useRef } from "react";
import View from "@/hooks/View";

function AnimatedText() {
  const ref = useRef(null);
  const isInView = View(ref);

  return (
    <h1
      ref={ref}
      className={`text-3xl font-bold transition-opacity duration-700 ${
        isInView ? "animate-tracking-in-expand-fwd" : "opacity-0"
      }`}
    >
      Scrolling Animation Text
    </h1>
  );
}
export default AnimatedText;
