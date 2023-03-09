import Layout from "@/components/layout";
import { Text, VStack } from "@chakra-ui/react";
import svgLogo from "@/public/svg/logo.svg";
import Head from "next/head";
import QrCamera from "@/components/qrCamera";

export default function Qr() {
  return (
    <Layout hasTabBar Logo={svgLogo}>
      <Head>
        <title>와즐(와서즐겨라) - QR</title>
      </Head>
      <VStack spacing="0">
        <QrCamera />
        <VStack w="full" p="4">
          <VStack
            color="white"
            w="full"
            bg="#282C44"
            px="6"
            py="8"
            rounded="lg"
          >
            <Text fontWeight={600}>안내사항</Text>
            <VStack spacing="2" fontSize="14" alignItems="flex-start">
              <Text>1. 어트랙션 체험 완료 후 QR 코드를 스캔하시면 됩니다.</Text>
              <Text>2. 인증이 되지 않으신 분은 직원에게 말씀해 주세요.</Text>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </Layout>
  );
}
