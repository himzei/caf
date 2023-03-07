import Layout from "@/components/layout";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import svgLogo from "@/public/svg/logo.svg";
import SvgLocation from "@/public/svg/location.svg";

export default function Information() {
  return (
    <Layout hasTabBar Logo={svgLogo}>
      <Box>
        <VStack w="full">
          {Array(10)
            .fill("")
            .map((_, i) => (
              <HStack
                key={i}
                w="full"
                h="100px"
                border="1px"
                rounded="md"
                borderColor={"#2F334D"}
                overflow="hidden"
              >
                <Box w="100px" h="100px">
                  <Image
                    h="full"
                    objectFit="cover"
                    src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80"
                    alt="info"
                  />
                </Box>
                <VStack
                  alignItems={"flex-start"}
                  justifyContent="space-between"
                  w={"calc(100% - 100px)"}
                  h="full"
                  p="2"
                >
                  <VStack alignItems={"flex-start"} spacing="0" color="white">
                    <Text fontWeight={600}>83전망대</Text>
                    <Text fontSize="12">10:00 ~ 16:00</Text>
                  </VStack>
                  <HStack w="full" justifyContent={"flex-end"} spacing="1">
                    <SvgLocation />
                    <Text color="white" fontSize="12">
                      120m
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
            ))}
        </VStack>
      </Box>
    </Layout>
  );
}
