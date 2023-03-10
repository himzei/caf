import { Box, Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import SvgLogo from "@/public/svg/logo.svg";
import Link from "next/link";
import { DEVICE_WIDTH } from "@/lib/deviceSetting";
import SocialAuth from "@/components/socialAuth";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onValid = (data) => {
    console.log(data);
  };
  const onInvalid = (error) => {
    console.log(error);
  };
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
        {/* 타이틀 */}
        <VStack>
          <SvgLogo />
          <Text color="white" fontWeight={600} fontSize="20">
            로그인
          </Text>
        </VStack>

        {/* form */}
        <VStack w="full" as="form" onSubmit={handleSubmit(onValid, onInvalid)}>
          <Text px="2" w="full" align="right" fontSize="14" color="gray.400">
            회원이 아니시라면{" "}
            <Link href="/signup">
              <Button variant="link" as="span" color="gray.100" fontSize="14">
                회원가입
              </Button>
            </Link>
          </Text>
          <Input
            {...register("username", {
              required: "아이디는 반드시 입력해 주셔야 해요.",
              minLength: {
                message: "아이디는 6자 이상 작성하셔야 합니다.",
                value: 6,
              },
            })}
            placeholder="아이디"
            bg="white"
            isInvalid={errors?.username?.message}
          />
          <Text color="white" px="2" w="full" align="left" fontSize="12">
            {errors?.username?.message}
          </Text>
          <Input
            {...register("password", {
              required: "패스워드는 반드시 입력해 주셔야 합니다. ",
            })}
            placeholder="패스워드"
            bg="white"
            isInvalid={errors?.password?.message}
          />
          <Text color="white" px="2" w="full" align="left" fontSize="12">
            {errors?.password?.message}
          </Text>
          <Button type="submit" w="full" bg="#408CE5">
            <Text color="white">로그인</Text>
          </Button>
        </VStack>

        {/* 또는 */}
        <HStack w="full" justifyContent="center">
          <Box h="1px" bg="gray.500" w="20%" />
          <Text color="white" fontSize="14" px="4">
            또는
          </Text>
          <Box h="1px" bg="gray.500" w="20%" />
        </HStack>

        {/* 소셜 로그인 */}
        <SocialAuth />
      </VStack>
    </VStack>
  );
}
