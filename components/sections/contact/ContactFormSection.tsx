"use client";

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/src/components/ui/native-select";
import { rawColors } from "@/theme";

const MotionBox = motion.create(Box);

const subjectKeys = [
  "press",
  "partnership",
  "official",
  "invitation",
  "information",
  "complaint",
  "other",
] as const;

/* ── Field label — uses theme token `label` (11px) + `label` spacing (0.15em) ── */
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <Text
      fontFamily="body"
      fontSize="label"
      fontWeight="600"
      textTransform="uppercase"
      letterSpacing="label"
      color="brand.muted"
      mb="2"
    >
      {children}
    </Text>
  );
}

export default function ContactFormSection() {
  const t = useTranslations("Contact");
  const [form, setForm] = useState({
    nom: "",
    email: "",
    objet: "press",
    message: "",
  });

  return (
    <Box as="section" py={{ base: "16", lg: "24" }} bg="warm.white">
      <Box maxW="1200px" mx="auto" px={{ base: "6", md: "8" }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "5fr 7fr" }}
          gap={{ base: "14", lg: "20" }}
        >
          {/* ── Left: Contact details ── */}
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box w="10" h="2px" bg="brand.gold" mb="6" />

              <Heading
                fontFamily="heading"
                fontSize={{ base: "xl", lg: "2xl" }}
                fontWeight="600"
                color="brand.primary"
                letterSpacing="headingTight"
                lineHeight="heading"
                mb="8"
              >
                {t("cabinetTitle")}
              </Heading>

              <VStack align="start" gap="4">
                <Flex align="center" gap="3">
                  <MapPin size={16} color={rawColors.gold} strokeWidth={1.5} />
                  <Text fontFamily="body" fontSize="sm" color="brand.muted">
                    {t("locations.main")}
                  </Text>
                </Flex>
                <Flex align="center" gap="3">
                  <MapPin size={16} color={rawColors.gold} strokeWidth={1.5} />
                  <Text fontFamily="body" fontSize="sm" color="brand.muted">
                    {t("locations.secondary")}
                  </Text>
                </Flex>
                <Flex align="center" gap="3">
                  <Phone size={16} color={rawColors.gold} strokeWidth={1.5} />
                  <Text fontFamily="body" fontSize="sm" color="brand.muted">
                    {t("phone")}
                  </Text>
                </Flex>
                <Flex align="center" gap="3">
                  <Mail size={16} color={rawColors.gold} strokeWidth={1.5} />
                  <Text fontFamily="body" fontSize="sm" color="brand.muted">
                    {t("email")}
                  </Text>
                </Flex>
              </VStack>
            </MotionBox>
          </GridItem>

          {/* ── Right: Form ── */}
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Box
                as="form"
                onSubmit={(e: React.FormEvent) => e.preventDefault()}
              >
                <VStack gap="0" align="stretch">
                  {/* Name */}
                  <Box
                    py="4"
                    borderBottom="1px solid"
                    borderColor="brand.silver/20"
                  >
                    <FieldLabel>{t("fields.name")}</FieldLabel>
                    <Input
                      placeholder="—"
                      value={form.nom}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setForm({ ...form, nom: e.target.value })
                      }
                      bg="transparent"
                      border="none"
                      borderRadius="0"
                      color="brand.primary"
                      fontFamily="body"
                      fontSize="sm"
                      p="0"
                      h="auto"
                      _placeholder={{ color: "brand.silver" }}
                      _focus={{ outline: "none", boxShadow: "none" }}
                    />
                  </Box>

                  {/* Email */}
                  <Box
                    py="4"
                    borderBottom="1px solid"
                    borderColor="brand.silver/20"
                  >
                    <FieldLabel>{t("fields.email")}</FieldLabel>
                    <Input
                      type="email"
                      placeholder="—"
                      value={form.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      bg="transparent"
                      border="none"
                      borderRadius="0"
                      color="brand.primary"
                      fontFamily="body"
                      fontSize="sm"
                      p="0"
                      h="auto"
                      _placeholder={{ color: "brand.silver" }}
                      _focus={{ outline: "none", boxShadow: "none" }}
                    />
                  </Box>

                  {/* Subject */}
                  <Box
                    py="4"
                    borderBottom="1px solid"
                    borderColor="brand.silver/20"
                  >
                    <FieldLabel>{t("fields.subject")}</FieldLabel>
                    <NativeSelectRoot>
                      <NativeSelectField
                        value={form.objet}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                          setForm({ ...form, objet: e.target.value })
                        }
                        bg="transparent"
                        color="brand.primary"
                        fontFamily="body"
                        fontSize="sm"
                        border="none"
                        borderRadius="0"
                        p="0"
                        h="auto"
                        _focus={{ outline: "none", boxShadow: "none" }}
                      >
                        {subjectKeys.map((key) => (
                          <option key={key} value={key}>
                            {t(`subjects.${key}`)}
                          </option>
                        ))}
                      </NativeSelectField>
                    </NativeSelectRoot>
                  </Box>

                  {/* Message */}
                  <Box
                    py="4"
                    borderBottom="1px solid"
                    borderColor="brand.silver/20"
                  >
                    <FieldLabel>{t("fields.message")}</FieldLabel>
                    <Textarea
                      placeholder="—"
                      rows={4}
                      value={form.message}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      resize="none"
                      bg="transparent"
                      border="none"
                      borderRadius="0"
                      color="brand.primary"
                      fontFamily="body"
                      fontSize="sm"
                      p="0"
                      _placeholder={{ color: "brand.silver" }}
                      _focus={{ outline: "none", boxShadow: "none" }}
                    />
                  </Box>

                  {/* Submit — matches HomeCTASection gold button pattern */}
                  <Box pt="8">
                    <Button
                      type="submit"
                      bg="brand.gold"
                      color="white"
                      fontFamily="body"
                      fontSize="caption"
                      fontWeight="600"
                      letterSpacing="cta"
                      textTransform="uppercase"
                      px="8"
                      h="12"
                      rounded="md"
                      cursor="pointer"
                      transition="all 300ms"
                      display="inline-flex"
                      alignItems="center"
                      gap="2"
                      _hover={{ bg: "brand.gold.light" }}
                    >
                      {t("submit")}
                      <ArrowRight size={14} />
                    </Button>
                  </Box>
                </VStack>
              </Box>
            </MotionBox>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
