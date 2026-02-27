"use client";

import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const MotionBox = motion.create(Box);

export default function BioQuoteSection() {
  const t = useTranslations("About");

  return (
    <Box as="section" py={{ base: "20", lg: "28" }} bg="warm.white">
      <Box maxW="1200px" mx="auto" px={{ base: "6", md: "8" }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <VStack gap={{ base: "6", lg: "8" }} maxW="2xl" mx="auto">
            {/* Top divider */}
            <Box w="12" h="2px" bg="brand.gold" />

            {/* Quote */}
            <Text
              fontFamily="heading"
              fontStyle="italic"
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              color="brand.foreground"
              lineHeight="relaxed"
              textAlign="center"
              letterSpacing="headingTight"
            >
              &ldquo;{t("quote.text")}&rdquo;
            </Text>

            {/* Bottom divider */}
            <Box w="12" h="2px" bg="brand.gold" />

            {/* Attribution */}
            <Text
              fontFamily="body"
              fontSize="caption"
              fontWeight="600"
              color="fg.accent"
              letterSpacing="labelSm"
              textTransform="uppercase"
              textAlign="center"
            >
              {t("quote.source")}
            </Text>
          </VStack>
        </MotionBox>
      </Box>
    </Box>
  );
}
