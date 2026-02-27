"use client";

import { Box, Flex, Marquee, Stack, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { rawColors } from "@/theme";

const MotionBox = motion.create(Box);

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

/* ───────────────── Bio Timeline Section ───────────────── */
export default function BioTimelineSection() {
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
    <Box as="section" py={{ base: "16", lg: "20" }} bg="warm.white">
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
