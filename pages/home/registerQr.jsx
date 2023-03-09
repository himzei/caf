import Layout from "@/components/layout";
import { Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import QrReader from "react-qr-scanner";

export default function RegisterQr() {
  return (
    <Layout title="바코드/QR 코드로 등록하기" canGoBack>
      <Head>
        <title>와즐(와서즐겨라) - 티켓등록</title>
      </Head>
      <VStack w="full">
        <QrReader />
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
              <Text>
                1. 현장예매를 통해 발급받은 지류이용권의 바코드를 스캔해주세요.
              </Text>
              <Text>
                2. 스마트예매를 통해 발급받은 온라인 이용권의 QR코드를
                스캔해주세요.
              </Text>
              <Text>3. 어플로 구매한 분은 자동으로 등록이 됩니다. </Text>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </Layout>
  );
}
