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
import SectionLabel from "@/components/SectionLabel";

const MotionBox = motion.create(Box);

/* ── Cover gradients ── */
const featuredCover =
  "radial-gradient(circle at 80% 20%, hsla(209, 50%, 36%, 0.4) 0%, transparent 50%), radial-gradient(circle at 15% 85%, hsla(173, 68%, 32%, 0.2) 0%, transparent 45%), linear-gradient(135deg, hsl(211, 54%, 11%) 0%, hsl(211, 55%, 20%) 100%)";

const articleCovers = [
  "radial-gradient(circle at 30% 40%, hsla(39, 58%, 70%, 0.3) 0%, transparent 50%), linear-gradient(to bottom right, hsl(39, 55%, 48%) 0%, hsl(39, 45%, 36%) 100%)",
  "radial-gradient(circle at 60% 30%, hsla(173, 62%, 50%, 0.25) 0%, transparent 50%), linear-gradient(160deg, hsl(173, 68%, 28%) 0%, hsl(173, 50%, 20%) 100%)",
  "radial-gradient(circle at 40% 60%, hsla(209, 50%, 50%, 0.15) 0%, transparent 50%), linear-gradient(135deg, hsl(209, 50%, 32%) 0%, hsl(211, 54%, 16%) 100%)",
];

export default function NewsSection() {
  const t = useTranslations("News");

  const featured = {
    title: t("featured.title"),
    date: t("featured.date"),
    category: t("featured.category"),
    excerpt: t("featured.excerpt"),
  };

  const articles = [
    {
      title: t("articles.a1.title"),
      date: t("articles.a1.date"),
      category: t("articles.a1.category"),
    },
    {
      title: t("articles.a2.title"),
      date: t("articles.a2.date"),
      category: t("articles.a2.category"),
    },
    {
      title: t("articles.a3.title"),
      date: t("articles.a3.date"),
      category: t("articles.a3.category"),
    },
  ];

  return (
    <Box as="section" id="news" py={{ base: "24", lg: "32" }} bg="cool.white">
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
            mb="12"
          >
            {t("heading")}
          </Heading>
        </MotionBox>

        <Grid templateColumns={{ base: "1fr", lg: "3fr 2fr" }} gap="8">
          {/* Featured */}
          <GridItem>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              bg="white"
              rounded="xl"
              overflow="hidden"
              border="1px solid"
              borderColor="transparent"
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
                h="64"
                bg={featuredCover}
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient="to-t"
                  gradientFrom="brand.primary/40"
                  gradientTo="transparent"
                />
                <Box position="absolute" bottom="4" left="4">
                  <Text
                    fontFamily="body"
                    fontSize="xs"
                    bg="brand.gold"
                    color="white"
                    px="3"
                    py="1"
                    rounded="full"
                  >
                    {featured.category}
                  </Text>
                </Box>
              </Box>
              <Box p="6">
                <Text
                  fontFamily="body"
                  fontSize="sm"
                  color="brand.muted"
                  mb="2"
                >
                  {featured.date}
                </Text>
                <Heading
                  fontFamily="heading"
                  fontSize={{ base: "xl", lg: "2xl" }}
                  fontWeight="bold"
                  color="brand.primary"
                  mb="3"
                >
                  {featured.title}
                </Heading>
                <Text
                  fontFamily="body"
                  fontSize="sm"
                  color="brand.foreground"
                  lineHeight="relaxed"
                  mb="4"
                >
                  {featured.excerpt}
                </Text>
                <Box
                  as="button"
                  fontFamily="body"
                  color="brand.teal"
                  fontWeight="500"
                  display="inline-flex"
                  alignItems="center"
                  gap="2"
                  cursor="pointer"
                >
                  {t("readArticle")}
                  <Span
                    transition="transform 300ms"
                    _groupHover={{ transform: "translateX(4px)" }}
                  >
                    &rarr;
                  </Span>
                </Box>
              </Box>
            </MotionBox>
          </GridItem>

          {/* Side articles */}
          <GridItem display="flex" flexDir="column" gap="4">
            {articles.map((article, i) => (
              <MotionBox
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i + 3) * 0.1 }}
                bg="white"
                rounded="xl"
                p="5"
                border="1px solid"
                borderColor="transparent"
                cursor="pointer"
                display="flex"
                gap="4"
                role="group"
                _hover={{
                  shadow: "lg",
                  borderColor: "brand.gold/30",
                  transform: "translateY(-2px)",
                }}
                css={{ transition: "all 300ms" }}
              >
                <Flex
                  w="20"
                  h="20"
                  rounded="lg"
                  bg={articleCovers[i]}
                  flexShrink={0}
                  align="center"
                  justify="center"
                >
                  <Text
                    fontFamily="heading"
                    fontSize="2xl"
                    color="white"
                    opacity={0.25}
                  >
                    {article.category[0]}
                  </Text>
                </Flex>
                <Box>
                  <Text fontFamily="body" fontSize="xs" color="brand.muted">
                    {article.date}
                  </Text>
                  <Text
                    fontFamily="body"
                    fontWeight="600"
                    color="brand.primary"
                    fontSize="sm"
                    mt="1"
                    lineHeight="snug"
                  >
                    {article.title}
                  </Text>
                  <Text
                    fontFamily="body"
                    fontSize="xs"
                    color="fg.accent"
                    mt="2"
                  >
                    {article.category}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </GridItem>
        </Grid>

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
            {t("allNews")}
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
