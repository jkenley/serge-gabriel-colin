"use client";

import {
  Box,
  Flex,
  Grid,
  Heading,
  Marquee,
  Span,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import SectionLabel from "@/components/SectionLabel";
import { Link } from "@/i18n/navigation";

const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);

/* ── Cover gradients ── */
const featuredCover =
  "radial-gradient(circle at 80% 20%, hsla(209, 50%, 36%, 0.4) 0%, transparent 50%), radial-gradient(circle at 15% 85%, hsla(173, 68%, 32%, 0.2) 0%, transparent 45%), linear-gradient(135deg, hsl(211, 54%, 11%) 0%, hsl(211, 55%, 20%) 100%)";

const sideCovers = [
  "radial-gradient(circle at 30% 40%, hsla(39, 58%, 70%, 0.3) 0%, transparent 50%), linear-gradient(to bottom right, hsl(39, 55%, 48%) 0%, hsl(39, 45%, 36%) 100%)",
  "radial-gradient(circle at 60% 30%, hsla(173, 62%, 50%, 0.25) 0%, transparent 50%), linear-gradient(160deg, hsl(173, 68%, 28%) 0%, hsl(173, 50%, 20%) 100%)",
  "radial-gradient(circle at 40% 60%, hsla(209, 50%, 50%, 0.15) 0%, transparent 50%), linear-gradient(135deg, hsl(209, 50%, 32%) 0%, hsl(211, 54%, 16%) 100%)",
];

/* ── Reusable news ticker card ── */
interface NewsItem {
  title: string;
  date: string;
  category: string;
}

function NewsTickerCard({
  item,
  coverIndex,
}: {
  item: NewsItem;
  coverIndex: number;
}) {
  return (
    <Flex gap="4" align="center" w="full" m="0" p="0">
      <Box
        w={{ base: "16", lg: "20" }}
        aspectRatio="1"
        rounded="md"
        overflow="hidden"
        flexShrink={0}
        bg={sideCovers[coverIndex % sideCovers.length]}
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
            {item.category}
          </Text>
          <Box w="1" h="1" rounded="full" bg="brand.silver" flexShrink={0} />
          <Text fontFamily="body" fontSize="label" color="brand.muted">
            {item.date}
          </Text>
        </Flex>
        <Text
          fontFamily="heading"
          fontSize={{ base: "sm", lg: "md" }}
          fontWeight="600"
          color="brand.primary"
          lineHeight="1.4"
        >
          {item.title}
        </Text>
      </Box>
    </Flex>
  );
}

/* ───────────────── Home News Section ───────────────── */
export default function HomeNewsSection() {
  const t = useTranslations("HomeNews");

  const featured = {
    title: t("featured.title"),
    date: t("featured.date"),
    category: t("featured.category"),
    excerpt: t("featured.excerpt"),
  };

  const otherNews: NewsItem[] = [
    {
      title: t("news.item1.title"),
      date: t("news.item1.date"),
      category: t("news.item1.category"),
    },
    {
      title: t("news.item2.title"),
      date: t("news.item2.date"),
      category: t("news.item2.category"),
    },
    {
      title: t("news.item3.title"),
      date: t("news.item3.date"),
      category: t("news.item3.category"),
    },
  ];

  return (
    <Box as="section" py={{ base: "20", lg: "28" }} bg="cool.white">
      <Box maxW="1200px" mx="auto" px={{ base: "6", md: "8" }}>
        <SectionLabel>{t("label")}</SectionLabel>

        <Flex
          justify="space-between"
          align="end"
          mb={{ base: "10", lg: "12" }}
          wrap="wrap"
          gap="4"
        >
          <MotionHeading
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            fontFamily="heading"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="600"
            color="brand.primary"
            letterSpacing="headingTight"
            lineHeight="heading"
            maxW="xl"
          >
            {t("heading")}
          </MotionHeading>

          <Box
            asChild
            fontFamily="body"
            fontSize="cta"
            fontWeight="600"
            letterSpacing="ctaSm"
            textTransform="uppercase"
            color="fg.accent"
            display={{ base: "none", lg: "inline-flex" }}
            alignItems="center"
            gap="2"
            cursor="pointer"
            role="group"
          >
            <Link href="/actualites">
              {t("allNews")}
              <Span
                transition="transform 300ms"
                _groupHover={{ transform: "translateX(4px)" }}
              >
                &rarr;
              </Span>
            </Link>
          </Box>
        </Flex>

        {/* ── Two-column: Featured + Marquee ticker ── */}
        <Grid
          templateColumns={{ base: "1fr", lg: "7fr 5fr" }}
          gap={{ base: "10", lg: "10" }}
        >
          {/* Left — Featured article */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
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
              {/* Bottom gradient for badge */}
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                h="40%"
                bg="linear-gradient(to top, hsla(211, 54%, 11%, 0.5) 0%, transparent 100%)"
              />
              {/* Category badge */}
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
            <Flex align="center" gap="3" mb="3">
              <Text fontFamily="body" fontSize="xs" color="brand.muted">
                {featured.date}
              </Text>
            </Flex>

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

          {/* Right — Vertical marquee news ticker */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
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
                {t("headlinesLabel")}
              </Text>
            </Flex>

            {/* Desktop: vertical marquee */}
            <Box display={{ base: "none", lg: "block" }}>
              <Marquee.Root
                side="bottom"
                pauseOnInteraction
                autoFill
                speed={25}
                height="420px"
              >
                <Marquee.Viewport>
                  <Marquee.Content>
                    {otherNews.map((item, i) => (
                      <Marquee.Item key={item.title}>
                        <Box
                          pt="2"
                          pb="6"
                          borderBottom="1px solid"
                          borderColor="brand.silver/20"
                        >
                          <NewsTickerCard item={item} coverIndex={i} />
                        </Box>
                      </Marquee.Item>
                    ))}
                  </Marquee.Content>
                </Marquee.Viewport>
              </Marquee.Root>
            </Box>

            {/* Mobile: static list */}
            <VStack
              align="stretch"
              gap="0"
              display={{ base: "flex", lg: "none" }}
            >
              {otherNews.map((item, i) => (
                <Box
                  key={item.title}
                  py="5"
                  borderTop={i === 0 ? "1px solid" : "none"}
                  borderBottom="1px solid"
                  borderColor="brand.silver/20"
                >
                  <NewsTickerCard item={item} coverIndex={i} />
                </Box>
              ))}
            </VStack>
          </MotionBox>
        </Grid>

        {/* Mobile CTA */}
        <Box
          asChild
          display={{ base: "inline-flex", lg: "none" }}
          fontFamily="body"
          fontSize="cta"
          fontWeight="600"
          letterSpacing="ctaSm"
          textTransform="uppercase"
          color="fg.accent"
          alignItems="center"
          gap="2"
          cursor="pointer"
          role="group"
          mt="8"
        >
          <Link href="/actualites">
            {t("allNews")}
            <Span
              transition="transform 300ms"
              _groupHover={{ transform: "translateX(4px)" }}
            >
              &rarr;
            </Span>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
