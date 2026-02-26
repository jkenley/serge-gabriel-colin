"use client";

import {
  Box,
  Flex,
  Grid,
  Heading,
  Marquee,
  Span,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionLabel from "@/components/SectionLabel";
import { rawColors } from "@/theme";

const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);

/* ───────────────── Timeline Card ───────────────── */
function TimelineCard({
  item,
}: {
  item: { year: string; title: string; org: string; desc: string };
}) {
  return (
    <Box w="280px" flexShrink={0} px="6" py="5">
      <Flex align="center" gap="2.5" mb="3">
        <Box w="2" h="2" rounded="full" bg="brand.gold" flexShrink={0} />
        <Text
          fontFamily="heading"
          fontSize="2xl"
          fontWeight="600"
          color="fg.accent"
          lineHeight="display"
        >
          {item.year}
        </Text>
      </Flex>
      <Text
        fontFamily="body"
        fontWeight="600"
        fontSize="sm"
        color="brand.primary"
      >
        {item.title}
      </Text>
      <Text fontFamily="body" fontSize="xs" color="brand.muted" mt="1">
        {item.org}
      </Text>
      <Text
        fontFamily="body"
        fontSize="xs"
        color="brand.muted"
        opacity={0.7}
        mt="2"
        lineHeight="1.5"
      >
        {item.desc}
      </Text>
    </Box>
  );
}

/* ───────────────── About Section ───────────────── */
export default function AboutSection() {
  const t = useTranslations("About");

  const timeline = [
    {
      year: t("timeline.t1.year"),
      title: t("timeline.t1.title"),
      org: t("timeline.t1.org"),
      desc: t("timeline.t1.desc"),
    },
    {
      year: t("timeline.t2.year"),
      title: t("timeline.t2.title"),
      org: t("timeline.t2.org"),
      desc: t("timeline.t2.desc"),
    },
    {
      year: t("timeline.t3.year"),
      title: t("timeline.t3.title"),
      org: t("timeline.t3.org"),
      desc: t("timeline.t3.desc"),
    },
    {
      year: t("timeline.t4.year"),
      title: t("timeline.t4.title"),
      org: t("timeline.t4.org"),
      desc: t("timeline.t4.desc"),
    },
  ];

  const achievements = [
    t("achievements.a1"),
    t("achievements.a2"),
    t("achievements.a3"),
    t("achievements.a4"),
    t("achievements.a5"),
    t("achievements.a6"),
    t("achievements.a7"),
    t("achievements.a8"),
  ];

  return (
    <Box as="section" id="about" py={{ base: "20", lg: "28" }} bg="warm.white">
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

        {/* ── Bio: Photo + Text ── */}
        <Grid
          templateColumns={{ base: "1fr", lg: "5fr 7fr" }}
          gap={{ base: "10", lg: "14" }}
          mb={{ base: "16", lg: "20" }}
          alignItems="center"
        >
          {/* Photo */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            position="relative"
          >
            <Box
              display={{ base: "none", lg: "block" }}
              position="absolute"
              top="3"
              right="-3"
              bottom="-3"
              left="3"
              border="1px solid"
              borderColor="brand.gold/20"
              rounded="lg"
              zIndex="0"
            />
            <Box
              position="relative"
              aspectRatio="4/5"
              rounded="lg"
              overflow="hidden"
              zIndex="1"
            >
              <Image
                src="/serge_gabriel_colin.jpg"
                alt={t("imageAlt")}
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </Box>
          </MotionBox>

          {/* Text */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <VStack align="start" gap="5">
              <Text
                fontFamily="body"
                fontSize={{ base: "md", lg: "17px" }}
                color="brand.foreground"
                lineHeight="loose"
              >
                {t("bio1")}
              </Text>
              <Text
                fontFamily="body"
                fontSize={{ base: "md", lg: "17px" }}
                color="brand.foreground"
                lineHeight="loose"
              >
                {t("bio2prefix")}{" "}
                <Span fontWeight="600" color="brand.primary">
                  {t("bio2role")}
                </Span>
                {t("bio2suffix")}
              </Text>

              <Box
                as="button"
                fontFamily="body"
                fontSize="cta"
                fontWeight="600"
                letterSpacing="ctaSm"
                textTransform="uppercase"
                color="fg.accent"
                display="inline-flex"
                alignItems="center"
                gap="2"
                alignSelf="start"
                cursor="pointer"
                role="group"
                mt="2"
              >
                {t("readFullBio")}
                <Span
                  transition="transform 300ms"
                  _groupHover={{ transform: "translateX(4px)" }}
                >
                  &rarr;
                </Span>
              </Box>
            </VStack>
          </MotionBox>
        </Grid>
      </Box>

      {/* ── Marquee Timeline — full width on warm.white ── */}
      <MotionBox
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Label */}
        <Box maxW="1200px" mx="auto" px={{ base: "6", md: "8" }} mb="6">
          <Flex align="center" gap="3">
            <Box w="8" h="2px" bg="brand.gold" flexShrink={0} />
            <Text
              fontFamily="body"
              fontSize="label"
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="label"
              color="fg.accent"
            >
              {t("timelineLabel")}
            </Text>
          </Flex>
        </Box>

        <Stack gap="4">
          {/* Row 1 — Timeline cards */}
          <Marquee.Root
            pauseOnInteraction
            speed={25}
            autoFill
            spacing="0.5rem"
            css={{
              "--marquee-edge-color": rawColors.warmWhite,
              "--marquee-edge-size": "8%",
            }}
          >
            <Marquee.Edge side="start" />
            <Marquee.Viewport>
              <Marquee.Content>
                {timeline.map((item, i) => (
                  <Marquee.Item key={i} px="0.5rem">
                    <TimelineCard item={item} />
                  </Marquee.Item>
                ))}
              </Marquee.Content>
            </Marquee.Viewport>
            <Marquee.Edge side="end" />
          </Marquee.Root>

          {/* Row 2 — Achievements ticker (reversed) */}
          <Box h="px" bg="brand.gold/10" />
          <Marquee.Root
            reverse
            autoFill
            speed={20}
            spacing="0rem"
            css={{
              "--marquee-edge-color": rawColors.warmWhite,
              "--marquee-edge-size": "12%",
            }}
          >
            <Marquee.Edge side="start" />
            <Marquee.Viewport>
              <Marquee.Content>
                {achievements.map((item, i) => (
                  <Marquee.Item key={i} px="1rem">
                    <Flex align="center" gap="4">
                      <Text
                        fontFamily="body"
                        fontSize="sm"
                        fontWeight="500"
                        color="brand.muted"
                        whiteSpace="nowrap"
                        letterSpacing="heading"
                      >
                        {item}
                      </Text>
                      <Box
                        w="1"
                        h="1"
                        rounded="full"
                        bg="brand.gold/40"
                        flexShrink={0}
                      />
                    </Flex>
                  </Marquee.Item>
                ))}
              </Marquee.Content>
            </Marquee.Viewport>
            <Marquee.Edge side="end" />
          </Marquee.Root>
        </Stack>
      </MotionBox>
    </Box>
  );
}
