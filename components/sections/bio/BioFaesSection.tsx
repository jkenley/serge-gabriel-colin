"use client";

import { Box, Flex, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import SectionLabel from "@/components/SectionLabel";

const MotionBox = motion.create(Box);

export default function BioFaesSection() {
  const t = useTranslations("About");

  const highlights = t.raw("sections.faes.highlights") as string[];

  const stats = [
    {
      value: t("faesStats.s1.value"),
      label: t("faesStats.s1.label"),
    },
    {
      value: t("faesStats.s2.value"),
      label: t("faesStats.s2.label"),
    },
    {
      value: t("faesStats.s3.value"),
      label: t("faesStats.s3.label"),
    },
    {
      value: t("faesStats.s4.value"),
      label: t("faesStats.s4.label"),
    },
  ];

  return (
    <Box
      as="section"
      py={{ base: "20", lg: "28" }}
      bg="brand.primary"
      position="relative"
      overflow="hidden"
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
        position="relative"
        zIndex="1"
        maxW="1200px"
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <SectionLabel>{t("label")}</SectionLabel>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Heading
            fontFamily="heading"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="600"
            color="white"
            letterSpacing="headingTight"
            lineHeight="heading"
            mb={{ base: "6", lg: "8" }}
            maxW="2xl"
          >
            {t("sections.faes.title")}
          </Heading>
        </MotionBox>

        {/* Narrative */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          mb={{ base: "12", lg: "14" }}
          maxW="3xl"
        >
          <Text
            fontFamily="body"
            fontSize={{ base: "md", lg: "17px" }}
            color="whiteAlpha.700"
            lineHeight="loose"
          >
            {t("sections.faes.content")}
          </Text>
        </MotionBox>

        {/* Stats grid */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          mb={{ base: "12", lg: "14" }}
        >
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: "6", lg: "8" }}>
            {stats.map((stat) => (
              <Box key={stat.label}>
                <Text
                  fontFamily="heading"
                  fontWeight="600"
                  fontSize={{
                    base: "2xl",
                    md: "3xl",
                    lg: "4xl",
                  }}
                  color="fg.accent"
                  letterSpacing="-0.02em"
                  lineHeight="display"
                >
                  {stat.value}
                </Text>
                <Text
                  fontFamily="body"
                  fontSize="label"
                  fontWeight="500"
                  color="whiteAlpha.400"
                  mt="1.5"
                  letterSpacing="heading"
                >
                  {stat.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </MotionBox>

        {/* Highlights */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Flex align="center" gap="3" mb="6">
            <Box w="8" h="2px" bg="brand.gold" flexShrink={0} />
            <Text
              fontFamily="body"
              fontSize="label"
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="label"
              color="fg.accent"
            >
              {t("highlightsLabel")}
            </Text>
          </Flex>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "4", lg: "5" }}>
            {highlights.map((item, i) => (
              <Flex key={i} align="start" gap="3">
                <Box
                  w="1.5"
                  h="1.5"
                  rounded="full"
                  bg="brand.gold"
                  flexShrink={0}
                  mt="2.5"
                />
                <Text
                  fontFamily="body"
                  fontSize="sm"
                  color="whiteAlpha.600"
                  lineHeight="relaxed"
                >
                  {item}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>
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
