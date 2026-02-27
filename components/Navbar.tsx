"use client";

import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { rawColors } from "@/theme";
import Monogram from "./Monogram";

const MotionBox = motion.create(Box);

const languages = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { label: t("home"), href: "/" },
    { label: t("biographie"), href: "/biographie" },
    { label: t("vision"), href: "/vision" },
    { label: t("actions"), href: "/actions" },
    { label: t("actualites"), href: "/actualites" },
    { label: t("medias"), href: "/medias" },
    { label: t("contact"), href: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional — re-run on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <Box
        as="header"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="header"
        transition="all 300ms"
        bg={scrolled || !isHome ? rawColors.primary : "transparent"}
        boxShadow={scrolled ? "lg" : "none"}
        overflow="hidden"
      >
        {/* Pattern overlay — matches hero sections */}
        {(scrolled || !isHome) && (
          <Box
            position="absolute"
            inset="0"
            opacity={0.5}
            backgroundImage="repeating-radial-gradient(circle at 0 0, transparent 0, hsl(211, 54%, 11%) 6px), repeating-linear-gradient(hsla(211, 55%, 18%, 0.4), hsla(211, 55%, 14%, 0.15))"
            pointerEvents="none"
            zIndex="0"
          />
        )}

        <Flex
          position="relative"
          zIndex="1"
          maxW="1200px"
          mx="auto"
          px="6"
          align="center"
          justify="space-between"
          h={{ base: "16", lg: "20" }}
        >
          <Link href="/">
            <Monogram size="sm" color="white" />
          </Link>

          {/* Desktop nav */}
          <HStack as="nav" gap="8" display={{ base: "none", lg: "flex" }}>
            {navLinks.map((link) => (
              <Box
                key={link.href}
                asChild
                fontFamily="body"
                fontSize="sm"
                color={pathname === link.href ? "fg.accent" : "whiteAlpha.800"}
                position="relative"
                transition="color 300ms"
                cursor="pointer"
                _hover={{ color: "fg.accent" }}
                role="group"
              >
                <Link href={link.href}>
                  {link.label}
                  <Box
                    position="absolute"
                    bottom="-1"
                    left="0"
                    w={pathname === link.href ? "full" : "0"}
                    h="1px"
                    bg="brand.gold"
                    transition="all 300ms"
                    _groupHover={{ w: "full" }}
                  />
                </Link>
              </Box>
            ))}
          </HStack>

          <HStack gap="2" display={{ base: "none", lg: "flex" }}>
            {languages.map((lang) => (
              <Button
                key={lang.code}
                variant="ghost"
                size="xs"
                onClick={() => router.replace(pathname, { locale: lang.code })}
                fontFamily="body"
                fontSize="xs"
                px="3"
                py="1"
                rounded="full"
                transition="all 300ms"
                cursor="pointer"
                bg={locale === lang.code ? "brand.gold" : "transparent"}
                color={locale === lang.code ? "white" : "whiteAlpha.600"}
                _hover={{
                  bg: locale === lang.code ? "brand.gold" : "transparent",
                  color: locale === lang.code ? "white" : "whiteAlpha.900",
                }}
              >
                {lang.label}
              </Button>
            ))}
          </HStack>

          {/* Mobile toggle */}
          <IconButton
            display={{ base: "flex", lg: "none" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            variant="ghost"
            color="white"
            size="md"
            borderRadius="full"
            _hover={{ bg: "brand.gold" }}
            _active={{ bg: "brand.gold" }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </IconButton>
        </Flex>
      </Box>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            position="fixed"
            inset="0"
            zIndex="overlay"
            bg="brand.primary"
            display="flex"
            alignItems="center"
            justifyContent="center"
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
            <VStack gap="6" position="relative" zIndex="1">
              {navLinks.map((link, i) => (
                <MotionBox
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Box
                    asChild
                    fontFamily="heading"
                    fontSize="2xl"
                    color={pathname === link.href ? "fg.accent" : "white"}
                    cursor="pointer"
                    transition="color 300ms"
                    _hover={{ color: "fg.accent" }}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Box>
                </MotionBox>
              ))}
              <HStack gap="2" mt="4">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      router.replace(pathname, { locale: lang.code })
                    }
                    fontFamily="body"
                    fontSize="sm"
                    px="4"
                    py="1.5"
                    rounded="full"
                    transition="all 300ms"
                    cursor="pointer"
                    bg={locale === lang.code ? "brand.gold" : "transparent"}
                    color={locale === lang.code ? "white" : "whiteAlpha.600"}
                    borderColor={
                      locale === lang.code ? "brand.gold" : "whiteAlpha.200"
                    }
                    _hover={{
                      bg: locale === lang.code ? "brand.gold" : "transparent",
                      borderColor:
                        locale === lang.code ? "brand.gold" : "whiteAlpha.400",
                    }}
                  >
                    {lang.label}
                  </Button>
                ))}
              </HStack>
            </VStack>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
}
