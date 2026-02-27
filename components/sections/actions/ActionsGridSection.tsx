"use client";

import { Box, Flex, SimpleGrid, Tabs, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const MotionBox = motion.create(Box);

/* ── Category-based cover gradients ── */
const categoryCovers: Record<string, string> = {
  reforms:
    "radial-gradient(circle at 80% 20%, hsla(209, 50%, 36%, 0.3) 0%, transparent 50%), linear-gradient(135deg, hsl(211, 54%, 14%) 0%, hsl(211, 55%, 22%) 100%)",
  partnerships:
    "radial-gradient(circle at 30% 40%, hsla(39, 58%, 70%, 0.25) 0%, transparent 50%), linear-gradient(to bottom right, hsl(39, 55%, 48%) 0%, hsl(39, 45%, 38%) 100%)",
  humanitarian:
    "radial-gradient(circle at 60% 30%, hsla(350, 50%, 55%, 0.2) 0%, transparent 50%), linear-gradient(160deg, hsl(350, 42%, 35%) 0%, hsl(350, 38%, 26%) 100%)",
  field:
    "radial-gradient(circle at 40% 60%, hsla(209, 50%, 50%, 0.15) 0%, transparent 50%), linear-gradient(135deg, hsl(209, 50%, 32%) 0%, hsl(211, 54%, 16%) 100%)",
};

const actionKeys = [
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "a10",
] as const;

const filterKeys = [
  "all",
  "reforms",
  "partnerships",
  "humanitarian",
  "field",
] as const;

export default function ActionsGridSection() {
  const t = useTranslations("Actions");
  const [active, setActive] = useState("all");

  const actions = actionKeys.map((key) => ({
    key,
    title: t(`items.${key}.title`),
    date: t(`items.${key}.date`),
    categoryKey: t(`items.${key}.categoryKey`),
    category: t(`filters.${t(`items.${key}.categoryKey`)}`),
    desc: t(`items.${key}.desc`),
  }));

  const filtered =
    active === "all"
      ? actions
      : actions.filter((a) => a.categoryKey === active);

  return (
    <Box as="section" py={{ base: "16", lg: "24" }} bg="warm.white">
      <Box maxW="1400px" mx="auto" px={{ base: "6", md: "8" }}>
        {/* Tabs filter */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          mb="10"
        >
          <Tabs.Root
            value={active}
            onValueChange={(e) => setActive(e.value)}
            variant="plain"
            size="sm"
          >
            <Tabs.List gap="1" display="inline-flex">
              {filterKeys.map((key) => (
                <Tabs.Trigger
                  key={key}
                  value={key}
                  fontFamily="body"
                  fontSize="sm"
                  fontWeight="500"
                  px={{ base: "3", md: "5" }}
                  py="2"
                  rounded="full"
                  color="brand.muted"
                  border="1px solid"
                  borderColor="transparent"
                  _selected={{
                    bg: "brand.primary",
                    color: "white",
                    borderColor: "brand.primary",
                  }}
                  _hover={{
                    color: "brand.foreground",
                    _selected: { color: "white" },
                  }}
                >
                  {t(`filters.${key}`)}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </Tabs.Root>
        </MotionBox>

        {/* Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <MotionBox
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                bg="white"
                rounded="xl"
                border="1px solid"
                borderColor="brand.silver/30"
                overflow="hidden"
                role="group"
                _hover={{
                  borderColor: "brand.gold/25",
                }}
                css={{ transition: "border-color 300ms" }}
              >
                <Box
                  h="40"
                  bg={categoryCovers[item.categoryKey] || "cool.white"}
                  position="relative"
                  overflow="hidden"
                >
                  <Flex
                    position="absolute"
                    inset="0"
                    align="center"
                    justify="center"
                  >
                    <Text
                      fontFamily="heading"
                      fontSize="4xl"
                      color="white"
                      opacity={0.12}
                    >
                      {item.category[0]}
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
      </Box>
    </Box>
  );
}
