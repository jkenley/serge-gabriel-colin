"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import SectionLabel from "@/components/SectionLabel";

const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);

export default function ActionsHeroSection() {
  const t = useTranslations("Actions");
  const tAbout = useTranslations("About");

  return (
    <Box
      as="section"
      position="relative"
      bg="brand.primary"
      overflow="hidden"
      pt={{ base: "32", lg: "40" }}
      pb={{ base: "16", lg: "20" }}
    >
      {/* Pattern overlay */}
      <Box
        position="absolute"
        inset="0"
        opacity={0.5}
        backgroundImage="repeating-radial-gradient(circle at 0 0, transparent 0, hsl(211, 54%, 11%) 6px), repeating-linear-gradient(hsla(211, 55%, 18%, 0.4), hsla(211, 55%, 14%, 0.15))"
        pointerEvents="none"
        zIndex="0"
      />

      <Box
        maxW="1200px"
        mx="auto"
        px={{ base: "6", md: "8" }}
        position="relative"
        zIndex="1"
      >
        <SectionLabel>{t("label")}</SectionLabel>

        <MotionHeading
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          as="h1"
          fontFamily="heading"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="600"
          color="white"
          letterSpacing="headingTight"
          lineHeight="heading"
          maxW="2xl"
          mb="5"
        >
          {t("heading")}
        </MotionHeading>

        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Text
            fontFamily="body"
            fontSize="sm"
            fontWeight="500"
            color="whiteAlpha.500"
            letterSpacing="0.04em"
          >
            {tAbout("bio2role")}
          </Text>
        </MotionBox>
      </Box>

      {/* Bottom accent */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="1px"
        bg="brand.gold/20"
      />
    </Box>
  );
}
