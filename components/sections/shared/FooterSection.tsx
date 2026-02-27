"use client";

import {
  Blockquote,
  Box,
  Flex,
  Grid,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import Monogram from "@/components/Monogram";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { socialLinks } from "@/lib/social";
import { rawColors } from "@/theme";

/* ───────────────── Footer ───────────────── */
export default function FooterSection() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { label: tNav("home"), href: "/" },
    { label: tNav("biographie"), href: "/biographie" },
    { label: tNav("vision"), href: "/vision" },
    { label: tNav("actions"), href: "/actions" },
    { label: tNav("actualites"), href: "/actualites" },
    { label: tNav("medias"), href: "/medias" },
    { label: tNav("contact"), href: "/contact" },
  ];

  const contactInfo = [
    { icon: MapPin, text: t("locations.main") },
    { icon: MapPin, text: t("locations.secondary") },
    { icon: Phone, text: t("phone") },
    { icon: Mail, text: t("email") },
  ];

  const languages = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ] as const;

  return (
    <Box as="footer" bg="brand.primary" position="relative" overflow="hidden">
      {/* Gold accent line */}
      <Box
        w="full"
        h="1px"
        bgGradient="to-r"
        gradientFrom="transparent"
        gradientVia="brand.gold"
        gradientTo="transparent"
      />

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
        position="relative"
        zIndex="1"
        maxW="1200px"
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        {/* ── Top: Brand + Tagline ── */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align={{ base: "start", lg: "end" }}
          gap={{ base: "4", lg: "8" }}
          pt={{ base: "16", lg: "20" }}
          pb={{ base: "8", lg: "12" }}
          // border="2px solid blue"
        >
          <Box>
            <Link href="/">
              <Monogram size="md" color="gold" />
            </Link>
            <Text
              fontFamily="heading"
              fontSize={{ base: "xl", lg: "2xl" }}
              fontWeight="600"
              color="white"
              mt="4"
              lineHeight="subheading"
            >
              {t("name")}
            </Text>
            <Text fontFamily="body" fontSize="sm" color="whiteAlpha.400" mt="2">
              {t("role")}
            </Text>
          </Box>

          <Blockquote.Root
            variant="plain"
            maxW="sm"
            textAlign={{ base: "left", lg: "right" }}
          >
            <Blockquote.Content
              fontFamily="heading"
              fontStyle="italic"
              fontSize={{ base: "md", lg: "lg" }}
              color="whiteAlpha.300"
              lineHeight="body"
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
            </Blockquote.Content>
          </Blockquote.Root>
        </Flex>

        {/* ── Middle: Nav + Contact ── */}
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
          gap={{ base: "8", md: "10", lg: "16" }}
          py={{ base: "0", lg: "14" }}
          pb={{ base: "8", lg: "0" }}
        >
          {/* Navigation */}
          <Box>
            <Text
              fontFamily="body"
              fontSize="label"
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="label"
              color="fg.accent"
              mb="5"
            >
              {t("navigationLabel")}
            </Text>
            <VStack as="nav" align="start" gap="3">
              {navLinks.map((link) => (
                <Box
                  key={link.href}
                  asChild
                  fontFamily="body"
                  fontSize="sm"
                  color="whiteAlpha.500"
                  cursor="pointer"
                  transition="color 300ms"
                  _hover={{ color: "white" }}
                >
                  <Link href={link.href}>{link.label}</Link>
                </Box>
              ))}
            </VStack>
          </Box>

          {/* Contact */}
          <Box>
            <Text
              fontFamily="body"
              fontSize="label"
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="label"
              color="fg.accent"
              mb="5"
            >
              {t("contactLabel")}
            </Text>
            <Text
              fontFamily="body"
              fontSize="sm"
              fontWeight="500"
              color="whiteAlpha.600"
              mb="5"
              lineHeight="body"
            >
              {t("cabinetTitle")}
              <br />
              {t("cabinetSubtitle")}
            </Text>
            <VStack align="start" gap="2">
              {contactInfo.map((item) => (
                <Flex key={item.text} align="center" gap="3">
                  <item.icon
                    size={15}
                    color={rawColors.gold}
                    strokeWidth={1.5}
                  />
                  <Text fontFamily="body" fontSize="sm" color="whiteAlpha.500">
                    {item.text}
                  </Text>
                </Flex>
              ))}
            </VStack>
          </Box>

          {/* Republique */}
          <Box>
            <Text
              fontFamily="body"
              fontSize="label"
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="label"
              color="fg.accent"
              mb="5"
            >
              {t("republicLabel")}
            </Text>
            <Text
              fontFamily="body"
              fontSize="sm"
              color="whiteAlpha.500"
              lineHeight="relaxed"
            >
              {t("republicDescription")}
            </Text>
            <HStack gap="2.5" mt="6">
              {languages.map((lang) => (
                <Text
                  key={lang.code}
                  fontFamily="body"
                  fontSize="label"
                  color={locale === lang.code ? "fg.accent" : "whiteAlpha.400"}
                  px="3"
                  py="1.5"
                  border="1px solid"
                  borderColor={
                    locale === lang.code ? "brand.gold" : "whiteAlpha.100"
                  }
                  rounded="full"
                  cursor="pointer"
                  transition="all 300ms"
                  _hover={{
                    borderColor: "whiteAlpha.300",
                    color: "whiteAlpha.700",
                  }}
                  onClick={() =>
                    router.replace(pathname, { locale: lang.code })
                  }
                >
                  {lang.label}
                </Text>
              ))}
            </HStack>
          </Box>
        </Grid>

        {/* Divider */}
        <Box h="px" bg="whiteAlpha.100" />

        {/* ── Bottom bar ── */}
        <Flex
          py="6"
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align="center"
          gap="3"
        >
          <Text fontFamily="body" fontSize="xs" color="whiteAlpha.300">
            {t("copyright")}
          </Text>
          <HStack gap="4" align="center">
            <HStack gap="2.5">
              {socialLinks.map((social) => (
                <Box
                  key={social.key}
                  asChild
                  color="whiteAlpha.300"
                  cursor="pointer"
                  transition="color 300ms"
                  _hover={{ color: "brand.gold" }}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon size={14} strokeWidth={1.5} />
                  </a>
                </Box>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
