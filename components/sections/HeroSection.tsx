"use client";

import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Span,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);
const MotionFlex = motion.create(Flex);

/* ───────────────── Counter ───────────────── */
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            setCount(Math.max(0, Math.floor(eased * target)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <Span
      ref={ref}
      fontFamily="heading"
      fontWeight="600"
      fontSize={{ base: "3xl", md: "4xl" }}
      color="fg.accent"
      letterSpacing="-0.02em"
      lineHeight="display"
    >
      {count}
      {suffix}
    </Span>
  );
}

/* ───────────────── Hero — Option 4: Centered Monumental ───────────────── */
export default function HeroSection() {
  const t = useTranslations("Hero");

  const stats = [
    { value: 15, suffix: "+", label: t("stats.experience.label") },
    { value: 20, suffix: "+", label: t("stats.partnerships.label") },
    { value: 50, suffix: "+", label: t("stats.budget.label") },
    { value: 30, suffix: "+", label: t("stats.projects.label") },
  ];

  return (
    <Box
      as="section"
      id="hero"
      position="relative"
      bg="brand.primary"
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
        maxW="1200px"
        mx="auto"
        px={{ base: "6", md: "8" }}
        position="relative"
        zIndex="1"
      >
        {/* ── Upper: Text + Portrait side by side ── */}
        <Flex
          minH="100vh"
          direction={{ base: "column", lg: "row" }}
          align="center"
          gap={{ base: "8", lg: "0" }}
          pt={{ base: "24", lg: "0" }}
        >
          {/* Left — Typography block */}
          <Box
            flex="1"
            pr={{ base: "0", lg: "12" }}
            py={{ base: "0", lg: "20" }}
            order={{ base: 2, lg: 1 }}
          >
            <VStack align="start" gap={{ base: "5", lg: "6" }}>
              {/* Label */}
              <MotionFlex
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                align="center"
                gap="3"
              >
                <Box w="10" h="2px" bg="brand.gold" flexShrink={0} />
                <Text
                  fontFamily="body"
                  fontSize="10px"
                  fontWeight="600"
                  textTransform="uppercase"
                  letterSpacing="0.2em"
                  color="fg.accent"
                >
                  {t("republic")}
                </Text>
              </MotionFlex>

              {/* Name — large, stacked */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                <Heading
                  as="h1"
                  fontFamily="heading"
                  fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                  fontWeight="900"
                  color="white"
                  letterSpacing="-0.02em"
                  lineHeight="display"
                >
                  {t("name")}
                </Heading>
              </MotionBox>

              {/* Role */}
              <MotionText
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                fontFamily="body"
                fontSize="sm"
                fontWeight="500"
                color="whiteAlpha.600"
                letterSpacing="0.04em"
              >
                {t("role")}
              </MotionText>

              {/* Quote */}
              <MotionText
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                fontFamily="heading"
                fontStyle="italic"
                fontSize={{ base: "md", lg: "lg" }}
                color="whiteAlpha.500"
                lineHeight="relaxed"
                maxW="sm"
              >
                &ldquo;
                {t
                  .raw("quote")
                  .split("\n")
                  .map((line: string, i: number) => (
                    <React.Fragment key={i}>
                      {line}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                &rdquo;
              </MotionText>

              {/* CTA */}
              <MotionFlex
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                gap="4"
                pt="2"
                wrap="wrap"
              >
                <Box
                  asChild
                  fontFamily="body"
                  fontSize="caption"
                  fontWeight="600"
                  letterSpacing="cta"
                  textTransform="uppercase"
                  px="7"
                  py="3"
                  bg="brand.gold"
                  color="white"
                  rounded="md"
                  cursor="pointer"
                  transition="all 300ms"
                  _hover={{ bg: "brand.gold.light" }}
                >
                  <Link href="/biographie">{t("ctaPrimary")}</Link>
                </Box>
                <Box
                  asChild
                  fontFamily="body"
                  fontSize="caption"
                  fontWeight="600"
                  letterSpacing="cta"
                  textTransform="uppercase"
                  px="7"
                  py="3"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  color="whiteAlpha.500"
                  rounded="md"
                  cursor="pointer"
                  transition="all 300ms"
                  _hover={{ borderColor: "whiteAlpha.500", color: "white" }}
                >
                  <Link href="/contact">{t("ctaSecondary")}</Link>
                </Box>
              </MotionFlex>

              {/* Stats — below CTA */}
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                w="full"
                pt="4"
              >
                <Box w="full" h="px" bg="whiteAlpha.100" mb="6" />
                <SimpleGrid columns={2} gap="5">
                  {stats.map((stat) => (
                    <Box key={stat.label}>
                      <Counter target={stat.value} suffix={stat.suffix} />
                      <Text
                        fontFamily="body"
                        fontSize="label"
                        fontWeight="500"
                        color="whiteAlpha.400"
                        mt="1.5"
                        letterSpacing="heading"
                      >
                        {stat.label}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </MotionBox>
            </VStack>
          </Box>

          {/* Right — Tall portrait, contained with breathing room */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            w={{ base: "100%", lg: "440px" }}
            flexShrink={0}
            position="relative"
            order={{ base: 1, lg: 2 }}
            alignSelf={{ base: "center", lg: "center" }}
            my={{ base: "0", lg: "0" }}
          >
            {/* Offset gold frame behind image */}
            <Box
              display={{ base: "none", lg: "block" }}
              position="absolute"
              top="4"
              right="-4"
              bottom="-4"
              left="4"
              border="1px solid"
              borderColor="brand.gold/25"
              rounded="lg"
              zIndex="0"
            />

            {/* Image */}
            <Box
              position="relative"
              w="full"
              aspectRatio={{ base: "3/4", lg: "3/4" }}
              overflow="hidden"
              rounded="lg"
              zIndex="1"
            >
              <Image
                src="/serge_gabriel_colin.jpg"
                alt={t("imageAlt")}
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
                priority
              />
              {/* Bottom gradient for mobile text contrast */}
              <Box
                display={{ base: "block", lg: "none" }}
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                h="30%"
                bg="linear-gradient(to top, hsl(211, 54%, 11%) 0%, transparent 100%)"
              />
            </Box>
          </MotionBox>
        </Flex>
      </Box>

      {/* Scroll indicator */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        position="absolute"
        bottom="8"
        left="50%"
        transform="translateX(-50%)"
        zIndex="2"
        cursor="pointer"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <MotionBox
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          color="whiteAlpha.500"
          _hover={{ color: "fg.accent" }}
          css={{ transition: "color 300ms" }}
        >
          <ChevronDown size={28} />
        </MotionBox>
      </MotionBox>

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
