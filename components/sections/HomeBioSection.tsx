"use client";

import { Box, Grid, Heading, Span, Text, VStack } from "@chakra-ui/react";
import { motion } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionLabel from "@/components/SectionLabel";
import { Link } from "@/i18n/navigation";

const MotionBox = motion.create(Box);

export default function HomeBioSection() {
  const t = useTranslations("HomeBio");

  return (
    <Box as="section" py={{ base: "20", lg: "28" }} bg="warm.white">
      <Box maxW="1200px" mx="auto" px={{ base: "6", md: "8" }}>
        <SectionLabel>{t("label")}</SectionLabel>

        <Grid
          templateColumns={{ base: "1fr", lg: "5fr 7fr" }}
          gap={{ base: "10", lg: "14" }}
          alignItems="center"
        >
          {/* Photo */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <VStack align="start" gap="5">
              <Heading
                fontFamily="heading"
                fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                fontWeight="600"
                color="brand.primary"
                letterSpacing="headingTight"
                lineHeight="heading"
              >
                {t("heading")}
              </Heading>

              <Text
                fontFamily="body"
                fontSize={{ base: "md", lg: "17px" }}
                color="brand.foreground"
                lineHeight="loose"
              >
                {t("body")}
              </Text>

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
                alignSelf="start"
                cursor="pointer"
                role="group"
                mt="2"
              >
                <Link href="/biographie">
                  {t("cta")}
                  <Span
                    transition="transform 300ms"
                    _groupHover={{ transform: "translateX(4px)" }}
                  >
                    &rarr;
                  </Span>
                </Link>
              </Box>
            </VStack>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
}
