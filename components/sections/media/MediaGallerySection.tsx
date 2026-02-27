"use client";

import { Box, Button, Flex, SimpleGrid, Tabs, Text } from "@chakra-ui/react";
import { Play } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const MotionBox = motion.create(Box);

const tabKeys = ["photos", "videos", "press"] as const;

/* ── Cover gradients ── */
const photoCovers = [
  "radial-gradient(circle at 80% 20%, hsla(209, 50%, 36%, 0.4) 0%, transparent 50%), linear-gradient(135deg, hsl(211, 54%, 11%) 0%, hsl(211, 55%, 20%) 100%)",
  "radial-gradient(circle at 30% 40%, hsla(39, 58%, 70%, 0.3) 0%, transparent 50%), linear-gradient(to bottom right, hsl(39, 55%, 48%) 0%, hsl(39, 45%, 36%) 100%)",
  "radial-gradient(circle at 60% 30%, hsla(173, 62%, 50%, 0.25) 0%, transparent 50%), linear-gradient(160deg, hsl(173, 68%, 28%) 0%, hsl(173, 50%, 20%) 100%)",
  "radial-gradient(circle at 40% 60%, hsla(209, 50%, 50%, 0.15) 0%, transparent 50%), linear-gradient(135deg, hsl(209, 50%, 32%) 0%, hsl(211, 54%, 16%) 100%)",
  "linear-gradient(160deg, hsl(39, 50%, 45%) 0%, hsl(211, 50%, 20%) 60%, hsl(211, 54%, 14%) 100%)",
];

const videoCovers = [
  "radial-gradient(circle at 50% 50%, hsla(211, 55%, 25%, 0.5) 0%, transparent 60%), linear-gradient(to bottom, hsl(211, 54%, 11%) 0%, hsl(211, 55%, 18%) 100%)",
  "radial-gradient(circle at 50% 50%, hsla(173, 60%, 30%, 0.3) 0%, transparent 60%), linear-gradient(135deg, hsl(173, 68%, 22%) 0%, hsl(211, 54%, 14%) 100%)",
  "radial-gradient(circle at 50% 50%, hsla(39, 50%, 45%, 0.2) 0%, transparent 60%), linear-gradient(160deg, hsl(211, 54%, 14%) 0%, hsl(209, 50%, 28%) 100%)",
];

const galleryKeys = ["g1", "g2", "g3", "g4", "g5"] as const;
const videoKeys = ["v1", "v2", "v3"] as const;
const pressKeys = ["p1", "p2", "p3", "p4", "p5"] as const;

export default function MediaGallerySection() {
  const t = useTranslations("Media");
  const [active, setActive] = useState("photos");

  const galleries = galleryKeys.map((key) => ({
    key,
    title: t(`photoGalleries.${key}.title`),
    date: t(`photoGalleries.${key}.date`),
  }));

  const videos = videoKeys.map((key) => ({
    key,
    title: t(`videos.${key}.title`),
    date: t(`videos.${key}.date`),
  }));

  const press = pressKeys.map((key) => ({
    key,
    pub: t(`press.${key}.pub`),
    title: t(`press.${key}.title`),
    date: t(`press.${key}.date`),
  }));

  return (
    <Box as="section" py={{ base: "16", lg: "24" }} bg="warm.white">
      <Box maxW="1400px" mx="auto" px={{ base: "6", md: "8" }}>
        {/* Tabs */}
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
              {tabKeys.map((key) => (
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
                  {t(`tabs.${key}`)}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </Tabs.Root>
        </MotionBox>

        {/* Photos */}
        {active === "photos" && (
          <SimpleGrid columns={{ base: 2, lg: 3 }} gap="4">
            {galleries.map((gallery, i) => (
              <MotionBox
                key={gallery.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                position="relative"
                rounded="xl"
                overflow="hidden"
                bg={photoCovers[i]}
                cursor="pointer"
                role="group"
                gridRow={i === 0 ? "span 2" : undefined}
                aspectRatio={i === 0 ? "3/4" : "1/1"}
              >
                <Flex
                  position="absolute"
                  inset="0"
                  align="end"
                  p="4"
                  opacity={0}
                  bg="brand.primary/50"
                  css={{ transition: "opacity 300ms" }}
                  _groupHover={{ opacity: 1 }}
                >
                  <Box>
                    <Text
                      fontFamily="body"
                      fontSize="sm"
                      color="white"
                      fontWeight="500"
                    >
                      {gallery.title}
                    </Text>
                    <Text
                      fontFamily="body"
                      fontSize="xs"
                      color="whiteAlpha.600"
                    >
                      {gallery.date}
                    </Text>
                  </Box>
                </Flex>
              </MotionBox>
            ))}
          </SimpleGrid>
        )}

        {/* Videos */}
        {active === "videos" && (
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
            {videos.map((video, i) => (
              <MotionBox
                key={video.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                rounded="xl"
                overflow="hidden"
                bg={videoCovers[i]}
                aspectRatio="16/9"
                position="relative"
                cursor="pointer"
                role="group"
              >
                <Flex
                  position="absolute"
                  inset="0"
                  align="center"
                  justify="center"
                >
                  <Flex
                    w="14"
                    h="14"
                    rounded="full"
                    bg="brand.teal"
                    align="center"
                    justify="center"
                    css={{ transition: "transform 300ms" }}
                    _groupHover={{ transform: "scale(1.1)" }}
                  >
                    <Play
                      size={24}
                      fill="currentColor"
                      color="white"
                      style={{ marginLeft: "2px" }}
                    />
                  </Flex>
                </Flex>
                <Flex
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  p="4"
                  bgGradient="to-t"
                  gradientFrom="brand.primary/80"
                  gradientTo="transparent"
                  direction="column"
                >
                  <Text
                    fontFamily="body"
                    fontSize="sm"
                    color="white"
                    fontWeight="500"
                  >
                    {video.title}
                  </Text>
                  <Text fontFamily="body" fontSize="xs" color="whiteAlpha.600">
                    {video.date}
                  </Text>
                </Flex>
              </MotionBox>
            ))}
          </SimpleGrid>
        )}

        {/* Press */}
        {active === "press" && (
          <Box>
            {press.map((item, i) => (
              <MotionBox
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                py="5"
                borderBottom="1px solid"
                borderColor="brand.silver/20"
                cursor="pointer"
                role="group"
                _hover={{ borderColor: "brand.gold/25" }}
                css={{ transition: "border-color 300ms" }}
              >
                <Box>
                  <Text
                    fontFamily="body"
                    fontSize="xs"
                    color="fg.accent"
                    fontWeight="500"
                    mb="1"
                  >
                    {item.pub}
                  </Text>
                  <Text
                    fontFamily="body"
                    fontWeight="500"
                    color="brand.primary"
                    css={{ transition: "color 300ms" }}
                    _groupHover={{ color: "brand.steel" }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    fontFamily="body"
                    fontSize="xs"
                    color="brand.muted"
                    mt="1"
                  >
                    {item.date}
                  </Text>
                </Box>
                <Text
                  fontFamily="body"
                  fontSize="sm"
                  color="brand.teal"
                  opacity={0}
                  css={{ transition: "opacity 300ms" }}
                  _groupHover={{ opacity: 1 }}
                  flexShrink={0}
                  ml="4"
                >
                  {t("read")} &rarr;
                </Text>
              </MotionBox>
            ))}
            <Box pt="8">
              <Button
                bg="brand.teal"
                color="white"
                size="lg"
                px="7"
                h="12"
                fontFamily="body"
                fontSize="base"
                _hover={{ bg: "brand.teal.light" }}
              >
                {t("downloadPressKit")}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
