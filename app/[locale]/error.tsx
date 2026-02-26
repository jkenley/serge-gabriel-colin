"use client";

import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Monogram from "@/components/Monogram";

export default function ErrorPage({
  reset,
}: {
  error: globalThis.Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Box bg="brand.primary" minH="100vh" position="relative" overflow="hidden">
      {/* Pattern overlay */}
      <Box
        position="absolute"
        inset="0"
        opacity={0.5}
        backgroundImage="repeating-radial-gradient(circle at 0 0, transparent 0, hsl(211, 54%, 11%) 6px), repeating-linear-gradient(hsla(211, 55%, 18%, 0.4), hsla(211, 55%, 14%, 0.15))"
        pointerEvents="none"
        zIndex="0"
      />

      {/* Gold accent line top */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        h="1px"
        bgGradient="to-r"
        gradientFrom="transparent"
        gradientVia="brand.gold"
        gradientTo="transparent"
        zIndex="1"
      />

      <Flex
        position="relative"
        zIndex="1"
        minH="100vh"
        align="center"
        justify="center"
        px={{ base: "6", md: "8" }}
      >
        <VStack gap={{ base: "8", lg: "10" }} align="center" maxW="sm" w="full">
          <Monogram size="lg" color="gold" />

          <VStack gap="4" align="center" textAlign="center">
            <Heading
              fontFamily="heading"
              fontSize={{ base: "xl", lg: "2xl" }}
              fontWeight="600"
              color="white"
              letterSpacing="headingTight"
            >
              Something went wrong
            </Heading>
            <Text
              fontFamily="body"
              fontSize="sm"
              color="whiteAlpha.500"
              lineHeight="body"
              maxW="xs"
            >
              An unexpected error occurred. Please try again.
            </Text>
          </VStack>

          <Box
            as="button"
            onClick={reset}
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
            Try again
          </Box>

          {/* Bottom accent */}
          <Box
            w="12"
            h="1px"
            bgGradient="to-r"
            gradientFrom="transparent"
            gradientVia="brand.gold"
            gradientTo="transparent"
            mt="4"
          />
        </VStack>
      </Flex>
    </Box>
  );
}
