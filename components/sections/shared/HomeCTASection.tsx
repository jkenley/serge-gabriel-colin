"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const MotionBox = motion.create(Box);

/* ───────────────── Home CTA Band ───────────────── */
export default function HomeCTASection() {
  const t = useTranslations("HomeCTA");

  return (
    <Box as="section" py={{ base: "16", lg: "20" }} bg="warm.white">
      <Box maxW="1200px" mx="auto" px={{ base: "6", md: "8" }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            align={{ base: "start", lg: "center" }}
            justify="space-between"
            gap={{ base: "6", lg: "8" }}
          >
            {/* Text */}
            <Box>
              <Box w="10" h="2px" bg="brand.gold" mb="5" />
              <Heading
                fontFamily="heading"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="600"
                color="brand.primary"
                letterSpacing="headingTight"
                lineHeight="1.2"
                maxW="lg"
              >
                {t("heading")}
              </Heading>
              <Text
                fontFamily="body"
                fontSize="sm"
                color="brand.muted"
                mt="3"
                maxW="md"
                lineHeight="body"
              >
                {t("description")}
              </Text>
            </Box>

            {/* CTA Button */}
            <Box
              asChild
              fontFamily="body"
              fontSize="caption"
              fontWeight="600"
              letterSpacing="cta"
              textTransform="uppercase"
              px="8"
              py="3.5"
              bg="brand.gold"
              color="white"
              rounded="md"
              cursor="pointer"
              transition="all 300ms"
              flexShrink={0}
              _hover={{ bg: "brand.gold.light" }}
            >
              <Link href="/contact">{t("button")}</Link>
            </Box>
          </Flex>
        </MotionBox>
      </Box>
    </Box>
  );
}
