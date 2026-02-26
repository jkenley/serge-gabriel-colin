"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Monogram from "@/components/Monogram";
import SectionLabel from "@/components/SectionLabel";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/src/components/ui/native-select";
import { rawColors } from "@/theme";

const MotionBox = motion.create(Box);

const socialIcons = ["in", "\u{1D54F}", "f", "ig", "\u25B6"];

const inputStyles = {
  bg: "transparent",
  borderBottom: "1px solid",
  borderColor: "whiteAlpha.200",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  borderRadius: "0",
  color: "white",
  fontFamily: "body",
  fontSize: "sm",
  py: "3",
  px: "0",
  _placeholder: { color: "whiteAlpha.300" },
  _focus: {
    borderColor: "brand.gold",
    outline: "none",
    boxShadow: "none",
  },
} as const;

export default function ContactSection() {
  const t = useTranslations("Contact");
  const [form, setForm] = useState({
    nom: "",
    email: "",
    objet: "press",
    message: "",
  });

  return (
    <Box
      as="section"
      id="contact"
      py={{ base: "24", lg: "32" }}
      bg="brand.primary"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        inset: 0,
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(30,50,80,0.3) 35px, rgba(30,50,80,0.3) 36px)",
        opacity: 0.5,
        zIndex: 0,
      }}
    >
      <Box
        position="absolute"
        inset="0"
        opacity={0.03}
        backgroundImage={
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")"
        }
        pointerEvents="none"
        zIndex="0"
      />
      <Box position="relative" zIndex="1" maxW="1400px" mx="auto" px="6">
        <SectionLabel>{t("label")}</SectionLabel>

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Heading
            fontFamily="heading"
            fontSize={{ base: "3xl", lg: "4xl" }}
            fontWeight="bold"
            color="white"
            letterSpacing="heading"
            mb="12"
          >
            {t("heading")}
          </Heading>
        </MotionBox>

        <Flex direction={{ base: "column", lg: "row" }} gap="16">
          {/* Info */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            flex="1"
          >
            <VStack align="start" gap="8">
              <Box>
                <Text fontFamily="body" fontWeight="500" color="white" mb="4">
                  {t("cabinetTitle")}
                </Text>
                <VStack align="start" gap="3">
                  <Flex align="center" gap="3" color="whiteAlpha.700">
                    <MapPin size={16} color={rawColors.teal} />
                    <Text fontFamily="body" fontSize="sm">
                      {t("location")}
                    </Text>
                  </Flex>
                  <Flex align="center" gap="3" color="whiteAlpha.700">
                    <Phone size={16} color={rawColors.teal} />
                    <Text fontFamily="body" fontSize="sm">
                      {t("phone")}
                    </Text>
                  </Flex>
                  <Flex align="center" gap="3" color="whiteAlpha.700">
                    <Mail size={16} color={rawColors.teal} />
                    <Text fontFamily="body" fontSize="sm">
                      {t("email")}
                    </Text>
                  </Flex>
                </VStack>
              </Box>

              <Flex gap="3">
                {socialIcons.map((icon) => (
                  <Box
                    key={icon}
                    as="button"
                    w="10"
                    h="10"
                    rounded="full"
                    bg="brand.teal/10"
                    border="1px solid"
                    borderColor="brand.teal/30"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="brand.teal"
                    fontSize="xs"
                    fontFamily="body"
                    cursor="pointer"
                    transition="all 300ms"
                    _hover={{
                      bg: "brand.teal",
                      color: "white",
                      transform: "scale(1.1)",
                    }}
                  >
                    {icon}
                  </Box>
                ))}
              </Flex>

              <Monogram size="lg" color="gold" opacity={0.3} pt="4" />
            </VStack>
          </MotionBox>

          {/* Form */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            flex="1"
          >
            <Box
              as="form"
              onSubmit={(e: React.FormEvent) => e.preventDefault()}
            >
              <VStack gap="5" align="stretch">
                <Input
                  placeholder={t("fields.name")}
                  value={form.nom}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, nom: e.target.value })
                  }
                  {...inputStyles}
                />
                <Input
                  type="email"
                  placeholder={t("fields.email")}
                  value={form.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  {...inputStyles}
                />
                <NativeSelectRoot>
                  <NativeSelectField
                    value={form.objet}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      setForm({ ...form, objet: e.target.value })
                    }
                    bg="transparent"
                    color="white"
                    fontFamily="body"
                    fontSize="sm"
                    borderBottom="1px solid"
                    borderColor="whiteAlpha.200"
                    borderTop="none"
                    borderLeft="none"
                    borderRight="none"
                    borderRadius="0"
                    py="3"
                    px="0"
                    _focus={{
                      borderColor: "brand.gold",
                      outline: "none",
                      boxShadow: "none",
                    }}
                  >
                    <option
                      value="press"
                      style={{ background: "hsl(211, 54%, 11%)" }}
                    >
                      {t("subjects.press")}
                    </option>
                    <option
                      value="partnership"
                      style={{ background: "hsl(211, 54%, 11%)" }}
                    >
                      {t("subjects.partnership")}
                    </option>
                    <option
                      value="other"
                      style={{ background: "hsl(211, 54%, 11%)" }}
                    >
                      {t("subjects.other")}
                    </option>
                  </NativeSelectField>
                </NativeSelectRoot>
                <Textarea
                  placeholder={t("fields.message")}
                  rows={4}
                  value={form.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  resize="none"
                  {...inputStyles}
                />
                <Button
                  type="submit"
                  bg="brand.teal"
                  color="white"
                  size="lg"
                  px="7"
                  h="12"
                  fontFamily="body"
                  fontSize="base"
                  _hover={{ bg: "brand.teal.light" }}
                >
                  {t("submit")}
                </Button>
                <Text fontFamily="body" fontSize="xs" color="brand.muted">
                  {t("responseTime")}
                </Text>
              </VStack>
            </Box>
          </MotionBox>
        </Flex>
      </Box>
    </Box>
  );
}
