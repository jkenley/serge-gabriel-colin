"use client";

import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import SectionLabel from "@/components/SectionLabel";

const MotionBox = motion.create(Box);

const pillarKeys = ["p1", "p2", "p3", "p4"] as const;

export default function VisionPillarsSection() {
  const t = useTranslations("Vision");

  const pillars = pillarKeys.map((key, i) => ({
    num: String(i + 1).padStart(2, "0"),
    title: t(`pillars.${key}.title`),
    desc: t(`pillars.${key}.desc`),
    keyActions: t.raw(`pillars.${key}.keyActions`) as string[],
  }));

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
        <SectionLabel>{t("axesLabel")}</SectionLabel>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          mb={{ base: "10", lg: "14" }}
          maxW="3xl"
        >
          <Text
            fontFamily="body"
            fontSize={{ base: "md", lg: "17px" }}
            color="whiteAlpha.700"
            lineHeight="loose"
          >
            {t("introText")}
          </Text>
        </MotionBox>

        <VStack align="stretch" gap={{ base: "10", lg: "12" }}>
          {pillars.map((pillar, i) => (
            <MotionBox
              key={pillar.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.05,
              }}
            >
              {/* Divider between pillars */}
              {i > 0 && (
                <Box
                  h="1px"
                  bg="whiteAlpha.100"
                  mb={{ base: "10", lg: "12" }}
                />
              )}

              <Flex gap={{ base: "4", lg: "6" }} align="start">
                {/* Gold number */}
                <Text
                  fontFamily="heading"
                  fontSize={{ base: "2xl", lg: "3xl" }}
                  fontWeight="600"
                  color="fg.accent"
                  lineHeight="display"
                  flexShrink={0}
                  w={{ base: "10", lg: "12" }}
                >
                  {pillar.num}
                </Text>

                {/* Content column */}
                <Box flex="1">
                  <Heading
                    fontFamily="heading"
                    fontSize={{
                      base: "xl",
                      md: "2xl",
                      lg: "3xl",
                    }}
                    fontWeight="600"
                    color="white"
                    letterSpacing="headingTight"
                    lineHeight="heading"
                    mb="4"
                  >
                    {pillar.title}
                  </Heading>

                  <Text
                    fontFamily="body"
                    fontSize={{ base: "sm", lg: "md" }}
                    color="whiteAlpha.700"
                    lineHeight="relaxed"
                    mb="6"
                    maxW="3xl"
                  >
                    {pillar.desc}
                  </Text>

                  {/* Key Actions sub-label */}
                  <Flex align="center" gap="3" mb="4">
                    <Box w="6" h="2px" bg="brand.gold" flexShrink={0} />
                    <Text
                      fontFamily="body"
                      fontSize="label"
                      fontWeight="600"
                      textTransform="uppercase"
                      letterSpacing="label"
                      color="fg.accent"
                    >
                      {t("keyActionsLabel")}
                    </Text>
                  </Flex>

                  {/* Key actions list */}
                  <VStack align="start" gap="3">
                    {pillar.keyActions.map((action, j) => (
                      <Flex key={j} align="start" gap="3">
                        <Box
                          w="1.5"
                          h="1.5"
                          rounded="full"
                          bg="brand.gold"
                          flexShrink={0}
                          mt="2"
                        />
                        <Text
                          fontFamily="body"
                          fontSize="sm"
                          color="whiteAlpha.600"
                          lineHeight="relaxed"
                        >
                          {action}
                        </Text>
                      </Flex>
                    ))}
                  </VStack>
                </Box>
              </Flex>
            </MotionBox>
          ))}
        </VStack>
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
