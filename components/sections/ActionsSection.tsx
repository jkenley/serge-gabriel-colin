"use client";

import { Box, Flex, Heading, SimpleGrid, Span, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import SectionLabel from "@/components/SectionLabel";

const MotionBox = motion.create(Box);

/* ── Category-based cover gradients ── */
const categoryCovers: Record<string, string> = {
  reforms:
    "radial-gradient(circle at 80% 20%, hsla(209, 50%, 36%, 0.3) 0%, transparent 50%), linear-gradient(135deg, hsl(211, 54%, 14%) 0%, hsl(211, 55%, 22%) 100%)",
  partnerships:
    "radial-gradient(circle at 30% 40%, hsla(39, 58%, 70%, 0.25) 0%, transparent 50%), linear-gradient(to bottom right, hsl(39, 55%, 48%) 0%, hsl(39, 45%, 38%) 100%)",
  investments:
    "radial-gradient(circle at 60% 30%, hsla(173, 62%, 50%, 0.2) 0%, transparent 50%), linear-gradient(160deg, hsl(173, 68%, 28%) 0%, hsl(173, 50%, 22%) 100%)",
  field:
    "radial-gradient(circle at 40% 60%, hsla(209, 50%, 50%, 0.15) 0%, transparent 50%), linear-gradient(135deg, hsl(209, 50%, 32%) 0%, hsl(211, 54%, 16%) 100%)",
};

export default function ActionsSection() {
  const t = useTranslations("Actions");
  const [active, setActive] = useState("all");

  const filterKeys = [
    "all",
    "reforms",
    "partnerships",
    "investments",
    "field",
  ] as const;
  const filters = filterKeys.map((key) => ({
    key,
    label: t(`filters.${key}`),
  }));

  const actionMeta = [
    { key: "a1", categoryKey: "reforms" },
    { key: "a2", categoryKey: "partnerships" },
    { key: "a3", categoryKey: "investments" },
    { key: "a4", categoryKey: "field" },
    { key: "a5", categoryKey: "reforms" },
    { key: "a6", categoryKey: "partnerships" },
  ] as const;

  const actions = actionMeta.map(({ key, categoryKey }) => ({
    title: t(`items.${key}.title`),
    date: t(`items.${key}.date`),
    category: t(`filters.${categoryKey}`),
    categoryKey,
    desc: t(`items.${key}.desc`),
  }));

  const filtered =
    active === "all"
      ? actions
      : actions.filter((a) => a.categoryKey === active);

  return (
    <Box
      as="section"
      id="actions"
      py={{ base: "24", lg: "32" }}
      bg="warm.white"
    >
      <Box maxW="1400px" mx="auto" px={{ base: "6", md: "8" }}>
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
            color="brand.primary"
            letterSpacing="heading"
            mb="10"
            maxW="2xl"
          >
            {t("heading")}
          </Heading>
        </MotionBox>

        {/* Filters */}
        <Flex wrap="wrap" gap="2" mb="10">
          {filters.map((f) => (
            <Box
              key={f.key}
              as="button"
              onClick={() => setActive(f.key)}
              fontFamily="body"
              fontSize="sm"
              px="4"
              py="2"
              rounded="full"
              transition="all 300ms"
              cursor="pointer"
              bg={active === f.key ? "brand.primary" : "transparent"}
              color={active === f.key ? "white" : "brand.foreground"}
              border="1px solid"
              borderColor={active === f.key ? "brand.primary" : "brand.silver"}
              _hover={{
                borderColor:
                  active === f.key ? "brand.primary" : "brand.primary",
              }}
            >
              {f.label}
            </Box>
          ))}
        </Flex>

        {/* Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <MotionBox
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                bg="white"
                rounded="xl"
                border="1px solid"
                borderColor="transparent"
                overflow="hidden"
                cursor="pointer"
                role="group"
                _hover={{
                  shadow: "lg",
                  borderColor: "brand.gold/30",
                  transform: "translateY(-2px)",
                }}
                css={{ transition: "all 300ms" }}
              >
                <Box
                  h="44"
                  bg={categoryCovers[item.categoryKey] || "cool.white"}
                  position="relative"
                  overflow="hidden"
                >
                  <Flex
                    position="absolute"
                    inset="0"
                    align="center"
                    justify="center"
                    bg="transparent"
                    transition="background 300ms"
                    _groupHover={{ bg: "white/10" }}
                  >
                    <Text
                      fontFamily="heading"
                      fontSize="4xl"
                      color="white"
                      opacity={0.15}
                    >
                      {item.category[0]}
                    </Text>
                  </Flex>
                  <Flex
                    position="absolute"
                    inset="0"
                    opacity={0}
                    align="center"
                    justify="center"
                    bg="brand.primary/60"
                    transition="opacity 300ms"
                    _groupHover={{ opacity: 1 }}
                  >
                    <Text
                      fontFamily="body"
                      fontSize="sm"
                      color="white"
                      fontWeight="500"
                    >
                      {t("readMore")} &rarr;
                    </Text>
                  </Flex>
                </Box>
                <Box p="5">
                  <Flex align="center" gap="2" mb="2">
                    <Text
                      fontFamily="body"
                      fontSize="xs"
                      bg="brand.teal.light/10"
                      color="brand.teal"
                      px="2"
                      py="0.5"
                      rounded="full"
                    >
                      {item.category}
                    </Text>
                    <Text fontFamily="body" fontSize="xs" color="brand.muted">
                      {item.date}
                    </Text>
                  </Flex>
                  <Text
                    fontFamily="body"
                    fontWeight="600"
                    color="brand.primary"
                    mb="2"
                  >
                    {item.title}
                  </Text>
                  <Text fontFamily="body" fontSize="sm" color="brand.muted">
                    {item.desc}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </AnimatePresence>
        </SimpleGrid>

        <Box textAlign="center" mt="10">
          <Box
            as="button"
            fontFamily="body"
            color="brand.teal"
            fontWeight="500"
            display="inline-flex"
            alignItems="center"
            gap="2"
            cursor="pointer"
            role="group"
          >
            {t("viewAll")}
            <Span
              transition="transform 300ms"
              _groupHover={{ transform: "translateX(4px)" }}
            >
              &rarr;
            </Span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
