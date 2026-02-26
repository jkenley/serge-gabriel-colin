"use client";

import { Flex, Span } from "@chakra-ui/react";
import { motion } from "motion/react";

const MotionFlex = motion.create(Flex);

export default function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionFlex
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      align="center"
      gap="3"
      mb="6"
    >
      <Span
        display="inline-flex"
        alignItems="center"
        gap="3"
        fontSize="cta"
        fontFamily="body"
        fontWeight="500"
        textTransform="uppercase"
        letterSpacing="labelSm"
        color="fg.accent"
        _before={{
          content: '""',
          display: "block",
          w: "8",
          h: "1px",
          bg: "brand.gold",
        }}
      >
        {children}
      </Span>
    </MotionFlex>
  );
}
