"use client";

import {
  Box,
  Field,
  Flex,
  Heading,
  PinInput,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod/v4";
import Monogram from "@/components/Monogram";
import { rawColors } from "@/theme";

/* ── Schema ── */
const pinSchema = z.object({
  pin: z.array(z.string().min(1, "Required")).length(4, "PIN must be 4 digits"),
});

type PinFormValues = z.infer<typeof pinSchema>;

/* ── Pin input shared styles ── */
const pinInputStyles = {
  bg: "brand.secondary",
  borderColor: "brand.secondary",
  _focus: {
    borderColor: "brand.gold",
    boxShadow: "none",
    outline: "none",
  },
  _invalid: {
    borderColor: "red.500",
    boxShadow: "none",
    outline: "none",
  },
  rounded: "lg",
  color: "white",
  fontSize: "xl",
  fontWeight: "600",
  fontFamily: "heading",
  h: "16",
  w: "16",
} as const;

/* ───────────────── PIN Page ───────────────── */
export default function PinPage() {
  const t = useTranslations("PinPage");
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { handleSubmit, control, formState, reset } = useForm<PinFormValues>({
    resolver: zodResolver(pinSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const pinString = data.pin.join("");
      const response = await fetch("/api/verify-pin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: pinString }),
      });

      const result = await response.json();

      if (result.success) {
        router.push("/");
      } else {
        setError(t("invalidPin"));
        reset();
      }
    } catch {
      setError(t("verificationError"));
      reset();
    } finally {
      setIsSubmitting(false);
    }
  });

  const handlePinComplete = (value: string[]) => {
    if (value.length === 4 && value.every((d) => d !== "")) {
      onSubmit();
    }
  };

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
          {/* Logo */}
          <Monogram size="lg" color="gold" />

          {/* Lock icon */}
          <Flex
            align="center"
            justify="center"
            w="16"
            h="16"
            rounded="full"
            border="1px solid"
            borderColor="whiteAlpha.100"
            bg="whiteAlpha.50"
          >
            <LockKeyhole size={28} color={rawColors.gold} strokeWidth={1.5} />
          </Flex>

          {/* Title */}
          <VStack gap="3" align="center" textAlign="center">
            <Heading
              fontFamily="heading"
              fontSize={{ base: "2xl", lg: "3xl" }}
              fontWeight="600"
              color="white"
              letterSpacing="headingTight"
              lineHeight="heading"
            >
              {t("title")}
            </Heading>
            <Text
              fontFamily="body"
              fontSize="sm"
              color="whiteAlpha.500"
              lineHeight="body"
            >
              {t("subtitle")}
            </Text>
          </VStack>

          {/* PIN Form */}
          <Stack gap="6" align="center">
            <Field.Root invalid={!!formState.errors.pin || !!error}>
              <Controller
                control={control}
                name="pin"
                render={({ field }) => (
                  <PinInput.Root
                    otp
                    value={field.value}
                    onValueChange={(e) => {
                      field.onChange(e.value);
                      setError(null);
                      handlePinComplete(e.value);
                    }}
                    size="lg"
                  >
                    <PinInput.HiddenInput />
                    <PinInput.Control gap={{ base: "3", md: "4" }}>
                      <PinInput.Input index={0} {...pinInputStyles} />
                      <PinInput.Input index={1} {...pinInputStyles} />
                      <PinInput.Input index={2} {...pinInputStyles} />
                      <PinInput.Input index={3} {...pinInputStyles} />
                    </PinInput.Control>
                  </PinInput.Root>
                )}
              />
              {(formState.errors.pin || error) && (
                <Field.ErrorText
                  color="red.400"
                  textAlign="center"
                  mt="3"
                  fontFamily="body"
                  fontSize="sm"
                >
                  {formState.errors.pin?.message || error}
                </Field.ErrorText>
              )}
            </Field.Root>

            {/* Loading */}
            {isSubmitting && (
              <Text
                fontFamily="body"
                fontSize="sm"
                color="brand.gold"
                textAlign="center"
              >
                {t("verifying")}
              </Text>
            )}
          </Stack>

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
