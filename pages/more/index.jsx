import Layout from "@/components/layout";
import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import svgLogo from "@/public/svg/logo.svg";
import Head from "next/head";
import { MdArrowForwardIos } from "react-icons/md";
import MoreList from "./moreList";

export default function More() {
  return (
    <Layout hasTabBar Logo={svgLogo}>
      <Head>
        <title>와즐(와서즐겨라) - 더보기</title>
      </Head>
      <VStack w="full">
        {/* Profile */}
        <HStack justifyContent={"space-between"} w="full" px="4" py="6">
          <HStack h="60px" spacing="4" px="2">
            <Avatar size="lg" />
            <VStack
              spacing={0}
              h="full"
              alignItems="flex-start"
              justifyContent="center"
            >
              <Text color="white" fontWeight={600}>
                조현일
              </Text>
              <Text color="white" fontSize="12">
                Lv.2
              </Text>
            </VStack>
          </HStack>
          <MdArrowForwardIos color="white" />
        </HStack>

        {/* 굵은 구분선 */}
        <Box h="2" w="full" bg="#2F334D" />

        {/* More List */}
        <VStack w="full" px="4">
          <MoreList title="포인트" detail="2,000" href="/" />
          <MoreList title="수료증" href="/" />
          <MoreList title="예매내역" href="/" />
          <MoreList title="건의하기" href="/" />
          <MoreList title="교통/주차안내" href="/" />
          <MoreList title="개인정보취급방침" href="/" />
          <MoreList title="로그아웃" href="/" />
        </VStack>
      </VStack>
    </Layout>
  );
}
