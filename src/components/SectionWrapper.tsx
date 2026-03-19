import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  noise?: boolean;
}

const SectionWrapper = ({ children, className = "", noise = false }: SectionWrapperProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className={`${noise ? "noise-bg" : ""} ${className} transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
