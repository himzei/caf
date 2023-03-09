import KakaoMap from "@/components/kakaoMap";
import Layout from "@/components/layout";
import { Box, Img, Text, VStack } from "@chakra-ui/react";

export default function Information() {
  return (
    <Layout canGoBack title="Detail">
      <VStack>
        <Box w="full" h="280px">
          <Img
            h="full"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80"
          />
        </Box>

        {/* 소개 */}
        <VStack
          w="full"
          alignItems="flex-start"
          py="4"
          px="4"
          color="white"
          spacing="0"
        >
          <Text fontWeight="600" fontSize="18">
            대구 디즈니 퍼레이드
          </Text>
          <Text>이용자들이 추천하는 오늘의 실시간 인기 체험</Text>
        </VStack>

        {/* 구분선 */}
        <Box h="2" w="full" bg="#2F334D" />

        {/* 디테일 */}
        <VStack
          w="full"
          alignItems="flex-start"
          p="4"
          color="white"
          spacing="4"
        >
          <VStack w="full" alignItems="flex-start" spacing="0">
            <Text fontWeight="600">운영시간</Text>
            <Text fontSize="14">12:00 ~ 13:00</Text>
          </VStack>
          <VStack w="full" alignItems="flex-start" spacing="0">
            <Text fontWeight="600">이용조건</Text>
            <Text fontSize="14">입장한 모든 고객</Text>
          </VStack>
          <VStack w="full" alignItems="flex-start" spacing="0">
            <Text fontWeight="600">이용인원</Text>
            <Text fontSize="14">제한없음</Text>
          </VStack>
          <VStack w="full" alignItems="flex-start" spacing="0">
            <Text fontWeight="600">탑승제한</Text>
            <Text fontSize="14">제한없음</Text>
          </VStack>
          <VStack w="full" alignItems="flex-start" spacing="0">
            <Text fontWeight="600">위치</Text>
            <Text fontSize="14">에덴광장</Text>
          </VStack>
        </VStack>

        {/* 지도 표시부분 */}
        <Box w="full" px="4">
          <KakaoMap />
        </Box>

        {/* 하단 빈 박스 */}
        <Box h="2" />
      </VStack>
    </Layout>
  );
}
