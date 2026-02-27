"use client";

import { Blockquote, Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import SectionLabel from "@/components/SectionLabel";

const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);

/* ───────────────── Vision Section ───────────────── */
export default function VisionSection() {
  const t = useTranslations("Vision");

  const pillars = [
    {
      num: "01",
      title: t("pillars.p1.title"),
      desc: t("pillars.p1.desc"),
    },
    {
      num: "02",
      title: t("pillars.p2.title"),
      desc: t("pillars.p2.desc"),
    },
    {
      num: "03",
      title: t("pillars.p3.title"),
      desc: t("pillars.p3.desc"),
    },
    {
      num: "04",
      title: t("pillars.p4.title"),
      desc: t("pillars.p4.desc"),
    },
  ];

  return (
    <Box as="section" id="vision" py={{ base: "20", lg: "28" }} bg="warm.white">
      <Box maxW="1200px" mx="auto" px={{ base: "6", md: "8" }}>
        {/* ── Header ── */}
        <SectionLabel>{t("label")}</SectionLabel>

        <MotionHeading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          fontFamily="heading"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="600"
          color="brand.primary"
          letterSpacing="headingTight"
          lineHeight="heading"
          mb={{ base: "12", lg: "16" }}
          maxW="2xl"
        >
          {t("heading")}
        </MotionHeading>

        {/* ── Centered Quote ── */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          mb={{ base: "16", lg: "20" }}
        >
          <Blockquote.Root
            variant="plain"
            textAlign="center"
            maxW="2xl"
            mx="auto"
          >
            <Box w="10" h="2px" bg="brand.gold" mx="auto" mb="6" />
            <Blockquote.Content
              fontFamily="heading"
              fontStyle="italic"
              fontSize={{ base: "xl", lg: "2xl" }}
              color="brand.foreground"
              lineHeight="relaxed"
            >
              {t("quote")}
            </Blockquote.Content>
            <Box w="10" h="2px" bg="brand.gold" mx="auto" mt="6" mb="4" />
            <Blockquote.Caption
              fontFamily="body"
              fontSize="caption"
              fontWeight="600"
              color="fg.accent"
              letterSpacing="labelSm"
              textTransform="uppercase"
            >
              {t("quoteAuthor")}
            </Blockquote.Caption>
          </Blockquote.Root>
        </MotionBox>

        {/* ── Pillars — clean 2x2 grid ── */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Flex align="center" gap="3" mb="8">
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

          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={{ base: "8", md: "10", lg: "12" }}
          >
            {pillars.map((pillar) => (
              <Flex key={pillar.num} gap="4" align="start">
                {/* Gold number */}
                <Text
                  fontFamily="heading"
                  fontSize="2xl"
                  fontWeight="600"
                  color="fg.accent"
                  lineHeight="1.2"
                  flexShrink={0}
                >
                  {pillar.num}
                </Text>

                {/* Title + desc */}
                <Box>
                  <Text
                    fontFamily="heading"
                    fontSize="lg"
                    fontWeight="600"
                    color="brand.primary"
                    lineHeight="subheading"
                    mb="2"
                  >
                    {pillar.title}
                  </Text>
                  <Text
                    fontFamily="body"
                    fontSize="sm"
                    color="brand.muted"
                    lineHeight="relaxed"
                  >
                    {pillar.desc}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Grid>
        </MotionBox>
      </Box>
    </Box>
  );
}
