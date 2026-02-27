"use client";

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Span,
  Text,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const MotionBox = motion.create(Box);

/* ── Cover gradients ── */
const featuredCover =
  "radial-gradient(circle at 80% 20%, hsla(209, 50%, 36%, 0.4) 0%, transparent 50%), radial-gradient(circle at 15% 85%, hsla(173, 68%, 32%, 0.2) 0%, transparent 45%), linear-gradient(135deg, hsl(211, 54%, 11%) 0%, hsl(211, 55%, 20%) 100%)";

const articleCovers = [
  "radial-gradient(circle at 30% 40%, hsla(39, 58%, 70%, 0.3) 0%, transparent 50%), linear-gradient(to bottom right, hsl(39, 55%, 48%) 0%, hsl(39, 45%, 36%) 100%)",
  "radial-gradient(circle at 60% 30%, hsla(173, 62%, 50%, 0.25) 0%, transparent 50%), linear-gradient(160deg, hsl(173, 68%, 28%) 0%, hsl(173, 50%, 20%) 100%)",
  "radial-gradient(circle at 40% 60%, hsla(209, 50%, 50%, 0.15) 0%, transparent 50%), linear-gradient(135deg, hsl(209, 50%, 32%) 0%, hsl(211, 54%, 16%) 100%)",
  "radial-gradient(circle at 60% 30%, hsla(350, 50%, 55%, 0.2) 0%, transparent 50%), linear-gradient(160deg, hsl(350, 42%, 35%) 0%, hsl(350, 38%, 26%) 100%)",
  "radial-gradient(circle at 80% 20%, hsla(209, 50%, 36%, 0.3) 0%, transparent 50%), linear-gradient(135deg, hsl(211, 54%, 14%) 0%, hsl(211, 55%, 22%) 100%)",
];

const articleKeys = ["a1", "a2", "a3", "a4", "a5"] as const;

export default function NewsArticlesSection() {
  const t = useTranslations("News");

  const featured = {
    title: t("featured.title"),
    date: t("featured.date"),
    category: t("featured.category"),
    excerpt: t("featured.excerpt"),
  };

  const articles = articleKeys.map((key) => ({
    key,
    title: t(`articles.${key}.title`),
    date: t(`articles.${key}.date`),
    category: t(`articles.${key}.category`),
  }));

  return (
    <Box as="section" py={{ base: "16", lg: "24" }} bg="cool.white">
      <Box maxW="1200px" mx="auto" px={{ base: "6", md: "8" }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "7fr 5fr" }}
          gap={{ base: "10", lg: "10" }}
        >
          {/* Left — Featured article */}
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Featured cover */}
              <Box
                position="relative"
                aspectRatio="16/9"
                rounded="lg"
                overflow="hidden"
                mb="5"
              >
                <Box position="absolute" inset="0" bg={featuredCover} />
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  h="40%"
                  bg="linear-gradient(to top, hsla(211, 54%, 11%, 0.5) 0%, transparent 100%)"
                />
                <Box position="absolute" bottom="4" left="4">
                  <Text
                    fontFamily="body"
                    fontSize="label"
                    fontWeight="600"
                    textTransform="uppercase"
                    letterSpacing="cta"
                    color="white"
                    bg="brand.gold"
                    px="3"
                    py="1"
                    rounded="md"
                  >
                    {featured.category}
                  </Text>
                </Box>
              </Box>

              {/* Content */}
              <Text fontFamily="body" fontSize="xs" color="brand.muted" mb="3">
                {featured.date}
              </Text>

              <Heading
                fontFamily="heading"
                fontSize={{ base: "xl", lg: "2xl" }}
                fontWeight="600"
                color="brand.primary"
                lineHeight="subheading"
                mb="3"
              >
                {featured.title}
              </Heading>

              <Text
                fontFamily="body"
                fontSize="sm"
                color="brand.muted"
                lineHeight="relaxed"
                mb="5"
              >
                {featured.excerpt}
              </Text>

              <Box
                asChild
                fontFamily="body"
                fontSize="cta"
                fontWeight="600"
                letterSpacing="ctaSm"
                textTransform="uppercase"
                color="fg.accent"
                display="inline-flex"
                alignItems="center"
                gap="2"
                cursor="pointer"
                role="group"
              >
                <Link href="/actualites">
                  {t("readArticle")}
                  <Span
                    transition="transform 300ms"
                    _groupHover={{ transform: "translateX(4px)" }}
                  >
                    &rarr;
                  </Span>
                </Link>
              </Box>
            </MotionBox>
          </GridItem>

          {/* Right — Sidebar articles */}
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Sidebar header */}
              <Flex align="center" gap="3" mb="6">
                <Box w="8" h="2px" bg="brand.gold" flexShrink={0} />
                <Text
                  fontFamily="body"
                  fontSize="label"
                  fontWeight="600"
                  textTransform="uppercase"
                  letterSpacing="label"
                  color="fg.accent"
                >
                  {t("allNews")}
                </Text>
              </Flex>

              {/* Article list */}
              <Flex direction="column" gap="0">
                {articles.map((article, i) => (
                  <Flex
                    key={article.key}
                    gap="4"
                    align="center"
                    py="5"
                    borderBottom="1px solid"
                    borderColor="brand.silver/20"
                    role="group"
                    cursor="pointer"
                    _hover={{ borderColor: "brand.gold/25" }}
                    css={{ transition: "border-color 300ms" }}
                  >
                    <Box
                      w={{ base: "16", lg: "20" }}
                      aspectRatio="1"
                      rounded="md"
                      overflow="hidden"
                      flexShrink={0}
                      bg={articleCovers[i % articleCovers.length]}
                    />
                    <Box flex="1" minW="0">
                      <Flex align="center" gap="2" mb="1.5">
                        <Text
                          fontFamily="body"
                          fontSize="label"
                          fontWeight="600"
                          color="fg.accent"
                          textTransform="uppercase"
                          letterSpacing="0.05em"
                        >
                          {article.category}
                        </Text>
                        <Box
                          w="1"
                          h="1"
                          rounded="full"
                          bg="brand.silver"
                          flexShrink={0}
                        />
                        <Text
                          fontFamily="body"
                          fontSize="label"
                          color="brand.muted"
                        >
                          {article.date}
                        </Text>
                      </Flex>
                      <Text
                        fontFamily="heading"
                        fontSize={{ base: "sm", lg: "md" }}
                        fontWeight="600"
                        color="brand.primary"
                        lineHeight="1.4"
                      >
                        {article.title}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </Flex>
            </MotionBox>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
