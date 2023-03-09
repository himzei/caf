import { DEVICE_WIDTH } from "@/lib/deviceSetting";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

export default function MoreList({ title, detail, href }) {
  return (
    <Link href={href}>
      <VStack w={DEVICE_WIDTH} px="4">
        <HStack
          justifyContent={"space-between"}
          alignItems="center"
          w="full"
          h="56px"
          px="2"
        >
          <Text fontWeight={600} color="white">
            {title}
          </Text>
          {detail ? (
            <Text color="white" fontSize="14">
              {detail}
            </Text>
          ) : (
            <MdArrowForwardIos color="white" />
          )}
        </HStack>
        <Box h="1px" w="full" bg="#2F334D" />
      </VStack>
    </Link>
  );
}
