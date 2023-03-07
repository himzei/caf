import { Box, Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";

import Link from "next/link";
import { useRouter } from "next/router";
import { MdArrowBackIosNew } from "react-icons/md";
import SvgEvent from "../public/svg/event.svg";
import SvgInfo from "../public/svg/information.svg";
import SvgHome from "../public/svg/home.svg";
import SvgQr from "../public/svg/qr.svg";
import SvgMore from "../public/svg/more.svg";
import { DEVICE_WIDTH } from "@/lib/deviceSetting";

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
  Logo,
}) {
  const router = useRouter();
  const pathname = router.pathname;
  const onClick = () => {
    router.back();
  };
  return (
    <Box w="full" display={"flex"} justifyContent="center">
      <HStack
        bg="#2F334D"
        position="fixed"
        top={0}
        maxWidth={DEVICE_WIDTH}
        w="full"
        h={20}
        px={10}
        fontWeight={600}
        color={"white"}
        justifyContent="center"
        alignItems="center"
        zIndex={9}
      >
        {canGoBack ? (
          <Box onClick={onClick} position="absolute" left={4} cursor="pointer">
            <MdArrowBackIosNew size={20} />
          </Box>
        ) : null}
        {Logo ? <Logo /> : title ? <span>{title}</span> : null}
      </HStack>
      <Box pt={20} pb={24} w={DEVICE_WIDTH} bg="#3C415E" minH="100vh">
        {children}
      </Box>
      {hasTabBar ? (
        <HStack
          position="fixed"
          bottom={0}
          bg="#2F334D"
          maxWidth={DEVICE_WIDTH}
          w="full"
          h="112px"
          aligni="center"
          justifyContent="space-between"
        >
          <Grid templateColumns={"repeat(5, 1fr)"} w="full" borderTop={2}>
            <Link href="/">
              <GridItem cursor={"pointer"}>
                <VStack alignItems={"center"}>
                  <SvgEvent fill={pathname === "/" ? "#2A8CFF" : "#646B90"} />
                  <Text
                    fontWeight="600"
                    color={pathname === "/" ? "#2A8CFF" : "#646B90"}
                  >
                    이벤트
                  </Text>
                </VStack>
              </GridItem>
            </Link>
            <Link href="/information">
              <GridItem cursor={"pointer"}>
                <VStack alignItems={"center"}>
                  <SvgInfo
                    fill={pathname === "/information" ? "#2A8CFF" : "#646B90"}
                  />
                  <Text
                    fontWeight="600"
                    color={pathname === "/information" ? "#2A8CFF" : "#646B90"}
                  >
                    이용안내
                  </Text>
                </VStack>
              </GridItem>
            </Link>
            <GridItem>
              <VStack alignItems={"center"}>
                <SvgHome fill="#646B90" />
                <Text fontWeight="600" color="#646B90">
                  홈
                </Text>
              </VStack>
            </GridItem>
            <Link href="/streaming">
              <GridItem>
                <VStack alignItems={"center"}>
                  <SvgQr fill="#646B90" />
                  <Text fontWeight="600" color="#646B90">
                    QR
                  </Text>
                </VStack>
              </GridItem>
            </Link>
            <Link href="/profile">
              <GridItem>
                <VStack alignItems={"center"}>
                  <SvgMore fill="#646B90" />
                  <Text fontWeight="600" color="#646B90">
                    더보기
                  </Text>
                </VStack>
              </GridItem>
            </Link>
          </Grid>
        </HStack>
      ) : null}
    </Box>
  );
}
