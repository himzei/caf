import { DEVICE_WIDTH } from "@/lib/deviceSetting";
import { Box, Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import SvgLogo from "@/public/svg/logo.svg";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const { register } = useForm();
  return (
    <VStack h="100vh" justifyContent={"center"}>
      <VStack
        as="div"
        w={DEVICE_WIDTH}
        h="full"
        bg="#3C415E"
        justifyContent="center"
        px="4"
        spacing={8}
        backgroundImage="url('https://images.unsplash.com/photo-1597948723474-ce7811388a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80')"
      >
        <VStack>
          <SvgLogo />
          <Text color="white" fontWeight={600} fontSize="20">
            회원가입
          </Text>
        </VStack>
        <VStack w="full">
          <Text px="2" w="full" align="right" fontSize="14" color="gray.400">
            이미 회원이시라면{" "}
            <Link href="/signin">
              <Button variant="link" as="span" color="gray.100" fontSize="14">
                로그인
              </Button>
            </Link>
          </Text>
          <Input {...register("username")} placeholder="아이디" bg="white" />
          <Input {...register("email")} placeholder="이메일" bg="white" />
          <Input {...register("name")} placeholder="이름" bg="white" />
          <Input {...register("password")} placeholder="패스워드" bg="white" />
          <Input
            {...register("password2")}
            placeholder="패스워드 확인"
            bg="white"
          />
          <Button type="submit" w="full" bg="#408CE5">
            <Text color="white">회원가입</Text>
          </Button>
        </VStack>
        <HStack w="full" justifyContent="center">
          <Box h="1px" bg="gray.500" w="20%" />
          <Text color="white" fontSize="14" px="4">
            또는
          </Text>
          <Box h="1px" bg="gray.500" w="20%" />
        </HStack>
        <VStack w="full">
          <Button type="submit" w="full" bg="#FAE100">
            <Text>카카오톡 회원가입</Text>
          </Button>
          <Button type="submit" w="full" bg="#EA4335">
            <Text color="white">Google 회원가입</Text>
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
}