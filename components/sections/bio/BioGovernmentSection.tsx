"use client";

import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const MotionBox = motion.create(Box);

export default function BioGovernmentSection() {
  const t = useTranslations("About");

  const priorities = t.raw("sections.minister.initialPriorities") as string[];

  return (
    <Box as="section" py={{ base: "20", lg: "28" }} bg="cool.white">
      <Box maxW="1200px" mx="auto" px={{ base: "6", md: "8" }}>
        <VStack align="start" gap={{ base: "14", lg: "16" }} maxW="3xl">
          {/* Cabinet Director */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              fontFamily="heading"
              fontSize={{
                base: "2xl",
                md: "3xl",
                lg: "4xl",
              }}
              fontWeight="600"
              color="brand.primary"
              letterSpacing="headingTight"
              lineHeight="heading"
              mb="6"
            >
              {t("sections.cabinetDirector.title")}
            </Heading>
            <Text
              fontFamily="body"
              fontSize={{ base: "md", lg: "17px" }}
              color="brand.foreground"
              lineHeight="loose"
            >
              {t("sections.cabinetDirector.content")}
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

          {/* Minister */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              fontFamily="heading"
              fontSize={{
                base: "2xl",
                md: "3xl",
                lg: "4xl",
              }}
              fontWeight="600"
              color="brand.primary"
              letterSpacing="headingTight"
              lineHeight="heading"
              mb="6"
            >
              {t("sections.minister.title")}
            </Heading>
            <VStack align="start" gap="5">
              <Text
                fontFamily="body"
                fontSize={{ base: "md", lg: "17px" }}
                color="brand.foreground"
                lineHeight="loose"
              >
                {t("sections.minister.content")}
              </Text>
              <Text
                fontFamily="body"
                fontSize={{ base: "md", lg: "17px" }}
                color="brand.foreground"
                lineHeight="loose"
              >
                {t("sections.minister.installationDetails")}
              </Text>
            </VStack>
          </MotionBox>

          {/* Priorities */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            w="full"
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
                {t("prioritiesLabel")}
              </Text>
            </Flex>

            <VStack align="start" gap="4">
              {priorities.map((item, i) => (
                <Flex key={i} align="start" gap="4">
                  <Text
                    fontFamily="heading"
                    fontSize="lg"
                    fontWeight="600"
                    color="fg.accent"
                    lineHeight="display"
                    flexShrink={0}
                    w="8"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </Text>
                  <Text
                    fontFamily="body"
                    fontSize="sm"
                    color="brand.foreground"
                    lineHeight="relaxed"
                  >
                    {item}
                  </Text>
                </Flex>
              ))}
            </VStack>
          </MotionBox>
        </VStack>
      </Box>
    </Box>
  );
}
