"use client";

import { Box, type BoxProps } from "@chakra-ui/react";
import Image from "next/image";

interface LogoProps extends BoxProps {
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl";
  color?: "gold" | "white";
}

const sizeMap = {
  "2xs": { w: "20px", h: "7px" },
  xs: { w: "40px", h: "14px" },
  sm: { w: "60px", h: "21px" },
  md: { w: "80px", h: "28px" },
  lg: { w: "100px", h: "35px" },
  xl: { w: "120px", h: "42px" },
};

const srcMap = {
  gold: "/serge_gabriel_colin_gold.png",
  white: "/serge_gabriel_colin_white.png",
};

export default function Monogram({
  size = "xs",
  color = "gold",
  ...props
}: LogoProps) {
  const dimensions = sizeMap[size];

  return (
    <Box
      position="relative"
      w={dimensions.w}
      h={dimensions.h}
      flexShrink={0}
      aria-label="Serge Gabriel Colin"
      {...props}
    >
      <Image
        src={srcMap[color]}
        alt="Serge Gabriel Colin"
        fill
        style={{ objectFit: "contain", objectPosition: "left center" }}
        priority
      />
    </Box>
  );
}
