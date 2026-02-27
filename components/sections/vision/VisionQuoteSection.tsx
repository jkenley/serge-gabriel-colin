"use client";

import { Blockquote, Box, VStack } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const MotionBox = motion.create(Box);

export default function VisionQuoteSection() {
  const t = useTranslations("Vision");

  return (
    <Box as="section" py={{ base: "20", lg: "28" }} bg="warm.white">
      <Box maxW="1200px" mx="auto" px={{ base: "6", md: "8" }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Blockquote.Root variant="plain" maxW="2xl" mx="auto">
            <VStack gap={{ base: "6", lg: "8" }} textAlign="center">
              <Box w="12" h="2px" bg="brand.gold" />
              <Blockquote.Content
                fontFamily="heading"
                fontStyle="italic"
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                color="brand.foreground"
                lineHeight="relaxed"
                letterSpacing="headingTight"
              >
                &ldquo;{t("quote")}&rdquo;
              </Blockquote.Content>
              <Box w="12" h="2px" bg="brand.gold" />
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
            </VStack>
          </Blockquote.Root>
        </MotionBox>
      </Box>
    </Box>
  );
}
