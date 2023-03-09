import Layout from "@/components/layout";
import {
  Box,
  HStack,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import svgLogo from "@/public/svg/logo.svg";
import SvgLocation from "@/public/svg/location.svg";
import Link from "next/link";
import { DEVICE_WIDTH } from "@/lib/deviceSetting";
import Head from "next/head";
import ItemList from "@/components/itemList";

export default function Information() {
  return (
    <Layout hasTabBar Logo={svgLogo}>
      <Head>
        <title>와즐(와서즐겨라) - 이용안내</title>
      </Head>
      <Tabs variant="unstyled">
        <TabList flexWrap="wrap">
          <Tab
            _selected={{ color: "white", bg: "#2A8CFF", fontWeight: "600" }}
            color="#646B90"
          >
            어트랙션
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#2A8CFF", fontWeight: "600" }}
            color="#646B90"
          >
            엔터테인먼트
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#2A8CFF", fontWeight: "600" }}
            color="#646B90"
          >
            이용시설
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "#2A8CFF", fontWeight: "600" }}
            color="#646B90"
          >
            기프트샵
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
            <VStack w="full">
              {Array(6)
                .fill("")
                .map((_, i) => (
                  <ItemList key={i} />
                ))}
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack w="full">
              {Array(2)
                .fill("")
                .map((_, i) => (
                  <ItemList key={i} />
                ))}
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack w="full">
              {Array(10)
                .fill("")
                .map((_, i) => (
                  <ItemList key={i} />
                ))}
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* 하단 빈 박스 */}
      <Box h="28" />
    </Layout>
  );
}
