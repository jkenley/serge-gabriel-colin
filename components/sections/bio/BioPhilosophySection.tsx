"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import SectionLabel from "@/components/SectionLabel";

const MotionBox = motion.create(Box);

export default function BioPhilosophySection() {
  const t = useTranslations("About");

  return (
    <Box as="section" py={{ base: "20", lg: "28" }} bg="cool.white">
      <Box maxW="1200px" mx="auto" px={{ base: "6", md: "8" }}>
        <Box maxW="3xl">
          <SectionLabel>{t("label")}</SectionLabel>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
              {t("sections.philosophy.title")}
            </Heading>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Text
              fontFamily="body"
              fontSize={{ base: "md", lg: "17px" }}
              color="brand.foreground"
              lineHeight="loose"
            >
              {t("sections.philosophy.content")}
            </Text>
          </MotionBox>
        </Box>
      </Box>
    </Box>
  );
}
