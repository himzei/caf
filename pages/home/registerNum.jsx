import Layout from "@/components/layout";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";

export default function RegisterNum() {
  return (
    <Layout title="예매번호로 등록하기" canGoBack>
      <Head>
        <title>와즐(와서즐겨라) - 티켓등록</title>
      </Head>
      <VStack w="full" px="4" py="8" spacing={8} h="full" position={"relative"}>
        <FormControl>
          <FormLabel color="gray.200">예매번호로 등록하기</FormLabel>
          <Input type="text" bg="white" />
          <FormHelperText color="gray.400">
            구입하신 티켓의 예매번호를 입력해 주세요
          </FormHelperText>
        </FormControl>
        <VStack w="full">
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
        <HStack w="full" position="absolute" bottom="0" px="4" pb="4">
          <Button bg="#646B90" w="50%" color="white">
            취소
          </Button>
          <Button bg="#2A8CFF" w="50%" color="white">
            확인
          </Button>
        </HStack>
      </VStack>
    </Layout>
  );
}
