"use client";

import { Box, Flex } from "@chakra-ui/react";
import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const MotionBox = motion.create(Box);

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <MotionBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          position="fixed"
          bottom="8"
          right="8"
          zIndex="overlay"
        >
          <Flex
            as="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            w="12"
            h="12"
            rounded="full"
            bg="brand.primary"
            border="1px solid"
            borderColor="brand.gold/30"
            align="center"
            justify="center"
            color="white"
            cursor="pointer"
            shadow="lg"
            transition="all 300ms"
            _hover={{
              bg: "brand.secondary",
              transform: "scale(1.1)",
            }}
          >
            <ChevronUp size={20} />
          </Flex>
        </MotionBox>
      )}
    </AnimatePresence>
  );
}
