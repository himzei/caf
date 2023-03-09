import Layout from "@/components/layout";
import {
  Box,
  Button,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import svgLogo from "@/public/svg/logo.svg";
import Head from "next/head";
import Link from "next/link";
import { DEVICE_WIDTH_MARGIN } from "@/lib/deviceSetting";
import KakaoMap from "@/components/kakaoMap";
import ItemList from "@/components/itemList";
import { useState } from "react";

export default function Home() {
  const [locationStyle, setLocationStyle] = useState({});
  const ticket = true;
  return (
    <Layout hasTabBar Logo={svgLogo}>
      <Head>
        <title>와즐(와서즐겨라) - 홈</title>
      </Head>

      <VStack w="full" spacing="8">
        {ticket ? (
          <VStack w="full" spacing="4">
            {/* 티켓 */}
            <Box w="full" p="4">
              <HStack justifyContent="center" w="full" h="150px" bg="blue.400">
                <Text fontWeight={600} fontSize="20" color="white">
                  티켓 등록 완료
                </Text>
              </HStack>
            </Box>

            {/* 탭 */}
            <Tabs variant="unstyled" w="full">
              <TabList flexWrap="wrap">
                <Tab
                  _selected={{
                    color: "white",
                    bg: "#2A8CFF",
                    fontWeight: "600",
                  }}
                  color="#646B90"
                >
                  이용가능 어트랙션
                </Tab>
                <Tab
                  onClick={() =>
                    setLocationStyle({ width: "100%", height: "100%" })
                  }
                  _selected={{
                    color: "white",
                    bg: "#2A8CFF",
                    fontWeight: "600",
                  }}
                  color="#646B90"
                >
                  지도
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <VStack w="full">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <ItemList key={i} />
                      ))}
                  </VStack>
                </TabPanel>
                <TabPanel>
                  <KakaoMap change={locationStyle} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
        ) : (
          <>
            <VStack bg="#282C44" w="full" py="10" color="white" spacing={0}>
              <Text fontWeight={700} fontSize="34">
                NO TICKET
              </Text>
              <Text fontSize="12">예매하신 이용권을 등록해 주세요</Text>
            </VStack>
            <VStack w="full">
              <Link href="/home/registerQr">
                <Button
                  bg="#408CE5"
                  w={DEVICE_WIDTH_MARGIN}
                  color="white"
                  py="6"
                >
                  바코드 및 QR 코드로 등록하기
                </Button>
              </Link>

              <Link href="/home/registerNum">
                <Button bg="gray.200" w={DEVICE_WIDTH_MARGIN} py="6">
                  예매번호로 등록하기
                </Button>
              </Link>
            </VStack>
          </>
        )}
      </VStack>
    </Layout>
  );
}
