"use client";

import { Box, Flex, Heading, Span, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import SectionLabel from "@/components/SectionLabel";
import { Link } from "@/i18n/navigation";

const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);

/* ───────────────── Home Vision Teaser ───────────────── */
export default function HomeVisionSection() {
  const t = useTranslations("HomeVision");

  const pillars = [
    { num: "01", title: t("pillars.p1") },
    { num: "02", title: t("pillars.p2") },
    { num: "03", title: t("pillars.p3") },
    { num: "04", title: t("pillars.p4") },
  ];

  return (
    <Box
      as="section"
      py={{ base: "20", lg: "28" }}
      bg="brand.primary"
      position="relative"
      overflow="hidden"
    >
      {/* Pattern overlay — matches hero */}
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

        <MotionHeading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          fontFamily="heading"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="600"
          color="white"
          letterSpacing="headingTight"
          lineHeight="heading"
          mb={{ base: "10", lg: "12" }}
          maxW="2xl"
        >
          {t("heading")}
        </MotionHeading>

        {/* ── Quote ── */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          mb={{ base: "12", lg: "14" }}
          maxW="2xl"
        >
          <Box w="10" h="2px" bg="brand.gold" mb="6" />
          <Text
            fontFamily="heading"
            fontStyle="italic"
            fontSize={{ base: "lg", lg: "xl" }}
            color="whiteAlpha.700"
            lineHeight="loose"
          >
            {t("quote")}
          </Text>
          <Text
            fontFamily="body"
            fontSize="caption"
            fontWeight="600"
            color="fg.accent"
            letterSpacing="labelSm"
            textTransform="uppercase"
            mt="5"
          >
            {t("quoteAuthor")}
          </Text>
        </MotionBox>

        {/* ── Pillars preview ── */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
              {t("axesLabel")}
            </Text>
          </Flex>

          <Box h="px" bg="whiteAlpha.100" />

          <Flex direction={{ base: "column", md: "row" }} wrap="wrap">
            {pillars.map((pillar, i) => (
              <Flex
                key={pillar.num}
                align="baseline"
                gap="3"
                py={{ base: "4", lg: "5" }}
                flex={{ base: "1", md: "1 1 50%", lg: "1 1 25%" }}
                borderBottom={{ base: "1px solid", lg: "none" }}
                borderRight={{
                  base: "none",
                  lg: i < pillars.length - 1 ? "1px solid" : "none",
                }}
                borderColor="whiteAlpha.100"
                pr={{ base: "0", lg: "6" }}
                pl={{ base: "0", lg: i > 0 ? "6" : "0" }}
              >
                <Text
                  fontFamily="heading"
                  fontSize="lg"
                  fontWeight="600"
                  color="fg.accent"
                  lineHeight="display"
                  flexShrink={0}
                >
                  {pillar.num}
                </Text>
                <Text
                  fontFamily="heading"
                  fontSize="sm"
                  fontWeight="600"
                  color="whiteAlpha.600"
                  lineHeight="subheading"
                >
                  {pillar.title}
                </Text>
              </Flex>
            ))}
          </Flex>

          <Box h="px" bg="whiteAlpha.100" />
        </MotionBox>

        {/* ── CTA ── */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          mt={{ base: "8", lg: "10" }}
        >
          <Box
            asChild
            fontFamily="body"
            fontSize="cta"
            fontWeight="600"
            letterSpacing="ctaSm"
            textTransform="uppercase"
            color="fg.accent"
            display="inline-flex"
            alignItems="center"
            gap="2"
            cursor="pointer"
            role="group"
          >
            <Link href="/vision">
              {t("cta")}
              <Span
                transition="transform 300ms"
                _groupHover={{ transform: "translateX(4px)" }}
              >
                &rarr;
              </Span>
            </Link>
          </Box>
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
