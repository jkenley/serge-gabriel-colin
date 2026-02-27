"use client";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const MotionBox = motion.create(Box);

export default function BioNarrativeSection() {
  const t = useTranslations("About");

  return (
    <Box
      as="section"
      id="bio-narrative"
      py={{ base: "20", lg: "28" }}
      bg="warm.white"
    >
      <Box maxW="1200px" mx="auto" px={{ base: "6", md: "8" }}>
        <VStack align="start" gap={{ base: "14", lg: "16" }} maxW="3xl">
          {/* Intro section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              fontFamily="heading"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="600"
              color="brand.primary"
              letterSpacing="headingTight"
              lineHeight="heading"
              mb="6"
            >
              {t("sections.intro.title")}
            </Heading>
            <Text
              fontFamily="body"
              fontSize={{ base: "md", lg: "17px" }}
              color="brand.foreground"
              lineHeight="loose"
            >
              {t("sections.intro.content")}
            </Text>
          </MotionBox>

          {/* Gold divider */}
          <MotionBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            w="full"
            h="1px"
            bgGradient="to-r"
            gradientFrom="transparent"
            gradientVia="brand.gold"
            gradientTo="transparent"
          />

          {/* Early Career section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              fontFamily="heading"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="600"
              color="brand.primary"
              letterSpacing="headingTight"
              lineHeight="heading"
              mb="6"
            >
              {t("sections.earlyCareer.title")}
            </Heading>
            <Text
              fontFamily="body"
              fontSize={{ base: "md", lg: "17px" }}
              color="brand.foreground"
              lineHeight="loose"
            >
              {t("sections.earlyCareer.content")}
            </Text>
          </MotionBox>
        </VStack>
      </Box>
    </Box>
  );
}
