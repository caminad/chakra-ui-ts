import {
  chakra,
  ChakraProps,
  forwardRef,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import React from "react";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Logo = forwardRef<ChakraProps, "svg">((props, ref) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 60s linear`;

  return (
    <chakra.svg
      width="582"
      height="582"
      viewBox="0 0 582 582"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animation={animation}
      ref={ref}
      {...props}
    >
      <rect width="582" height="582" rx="291" fill="url(#paint0_linear)" />
      <path
        d="M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="291"
          y1="0"
          x2="291"
          y2="582"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7BCBD4" />
          <stop offset="1" stopColor="#29C6B7" />
        </linearGradient>
      </defs>
    </chakra.svg>
  );
});
