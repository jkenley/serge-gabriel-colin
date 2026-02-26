"use client";

import { Box, Button, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Play } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import SectionLabel from "@/components/SectionLabel";

const MotionBox = motion.create(Box);

const tabKeys = ["photos", "videos", "press"] as const;

/* ── Cover gradients ── */
const photoCovers = [
  "radial-gradient(circle at 80% 20%, hsla(209, 50%, 36%, 0.4) 0%, transparent 50%), linear-gradient(135deg, hsl(211, 54%, 11%) 0%, hsl(211, 55%, 20%) 100%)",
  "radial-gradient(circle at 30% 40%, hsla(39, 58%, 70%, 0.3) 0%, transparent 50%), linear-gradient(to bottom right, hsl(39, 55%, 48%) 0%, hsl(39, 45%, 36%) 100%)",
  "radial-gradient(circle at 60% 30%, hsla(173, 62%, 50%, 0.25) 0%, transparent 50%), linear-gradient(160deg, hsl(173, 68%, 28%) 0%, hsl(173, 50%, 20%) 100%)",
  "radial-gradient(circle at 40% 60%, hsla(209, 50%, 50%, 0.15) 0%, transparent 50%), linear-gradient(135deg, hsl(209, 50%, 32%) 0%, hsl(211, 54%, 16%) 100%)",
  "linear-gradient(160deg, hsl(39, 50%, 45%) 0%, hsl(211, 50%, 20%) 60%, hsl(211, 54%, 14%) 100%)",
  "radial-gradient(circle at 70% 80%, hsla(173, 68%, 36%, 0.3) 0%, transparent 50%), linear-gradient(145deg, hsl(211, 54%, 14%) 0%, hsl(173, 55%, 22%) 100%)",
];

const videoCovers = [
  "radial-gradient(circle at 50% 50%, hsla(211, 55%, 25%, 0.5) 0%, transparent 60%), linear-gradient(to bottom, hsl(211, 54%, 11%) 0%, hsl(211, 55%, 18%) 100%)",
  "radial-gradient(circle at 50% 50%, hsla(173, 60%, 30%, 0.3) 0%, transparent 60%), linear-gradient(135deg, hsl(173, 68%, 22%) 0%, hsl(211, 54%, 14%) 100%)",
  "radial-gradient(circle at 50% 50%, hsla(39, 50%, 45%, 0.2) 0%, transparent 60%), linear-gradient(160deg, hsl(211, 54%, 14%) 0%, hsl(209, 50%, 28%) 100%)",
];

export default function MediaSection() {
  const t = useTranslations("Media");
  const [activeTab, setActiveTab] = useState<string>("photos");

  const tabs = tabKeys.map((key) => ({
    key,
    label: t(`tabs.${key}`),
  }));

  const photos = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    caption: `${t("eventCaption")} ${i + 1}`,
    date: "2025",
  }));

  const videos = [
    { title: t("videos.v1.title"), date: t("videos.v1.date") },
    { title: t("videos.v2.title"), date: t("videos.v2.date") },
    { title: t("videos.v3.title"), date: t("videos.v3.date") },
  ];

  const press = [
    {
      pub: t("press.p1.pub"),
      title: t("press.p1.title"),
      date: t("press.p1.date"),
    },
    {
      pub: t("press.p2.pub"),
      title: t("press.p2.title"),
      date: t("press.p2.date"),
    },
    {
      pub: t("press.p3.pub"),
      title: t("press.p3.title"),
      date: t("press.p3.date"),
    },
  ];

  return (
    <Box as="section" id="media" py={{ base: "24", lg: "32" }} bg="warm.white">
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
          >
            {t("heading")}
          </Heading>
        </MotionBox>

        {/* Tabs */}
        <Flex
          gap="1"
          mb="10"
          borderBottom="1px solid"
          borderColor="brand.silver/30"
        >
          {tabs.map((tab) => (
            <Box
              key={tab.key}
              as="button"
              onClick={() => setActiveTab(tab.key)}
              fontFamily="body"
              fontSize="sm"
              px="5"
              py="3"
              transition="all 300ms"
              cursor="pointer"
              position="relative"
              color={activeTab === tab.key ? "brand.primary" : "brand.muted"}
              fontWeight={activeTab === tab.key ? "500" : "400"}
              _hover={{ color: "brand.primary" }}
            >
              {tab.label}
              {activeTab === tab.key && (
                <MotionBox
                  layoutId="media-tab"
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  h="2px"
                  bg="brand.gold"
                />
              )}
            </Box>
          ))}
        </Flex>

        {/* Photos */}
        {activeTab === "photos" && (
          <SimpleGrid columns={{ base: 2, lg: 3 }} gap="4">
            {photos.map((photo, i) => (
              <MotionBox
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
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
                  transition="all 300ms"
                  _groupHover={{ opacity: 1 }}
                >
                  <Text fontFamily="body" fontSize="sm" color="white">
                    {photo.caption}
                  </Text>
                </Flex>
              </MotionBox>
            ))}
          </SimpleGrid>
        )}

        {/* Videos */}
        {activeTab === "videos" && (
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
            {videos.map((video, i) => (
              <MotionBox
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
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
                    transition="transform 300ms"
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
        {activeTab === "press" && (
          <Box>
            {press.map((item, i) => (
              <MotionBox
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                py="5"
                borderBottom="1px solid"
                borderColor="brand.silver/20"
                cursor="pointer"
                role="group"
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
                    transition="color 300ms"
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
                  transition="opacity 300ms"
                  _groupHover={{ opacity: 1 }}
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
