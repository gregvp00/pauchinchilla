import React, { forwardRef, useRef, useImperativeHandle } from "react";

interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const RippleButton = forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ children, className = "", onClick, ...props }, ref) => {
    const internalRef = useRef<HTMLButtonElement>(null);

    // Exponer el ref externo apuntando al botón real
    useImperativeHandle(ref, () => internalRef.current!);

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = internalRef.current;
      if (!button) return;

      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${
        event.clientX - button.getBoundingClientRect().left - radius
      }px`;
      circle.style.top = `${
        event.clientY - button.getBoundingClientRect().top - radius
      }px`;
      circle.classList.add("ripple");

      // Remueve ripple previo
      const ripple = button.getElementsByClassName("ripple")[0];
      if (ripple) ripple.remove();

      button.appendChild(circle);
    };

    return (
      <button
        {...props}
        ref={internalRef}
        onClick={(e) => {
          createRipple(e);
          if (onClick) onClick(e);
        }}
        className={`relative overflow-hidden ${className}`}
      >
        {children}
      </button>
    );
  }
);

RippleButton.displayName = "RippleButton";
