import { DEVICE_WIDTH } from "@/lib/deviceSetting";
import { Box, Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import SvgLogo from "@/public/svg/logo.svg";
import Link from "next/link";
import { useForm } from "react-hook-form";
import SocialAuth from "@/components/socialAuth";
import { useMutation } from "react-query";
import { useRouter } from "next/router";

const handleSignUp = async ({ username, email, name, password }) => {
  await fetch("/api/users/signup", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      name,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export default function SignUp() {
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const mutation = useMutation(handleSignUp, {
    onSuccess: () => {
      reset();
      router.push("/signin");
    },
  });
  const onValid = ({ username, email, name, password }) => {
    mutation.mutate({ username, email, name, password });
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
        <VStack>
          <SvgLogo />
          <Text color="white" fontWeight={600} fontSize="20">
            회원가입
          </Text>
        </VStack>

        <VStack w="full" as="form" onSubmit={handleSubmit(onValid, onInvalid)}>
          <Text px="2" w="full" align="right" fontSize="14" color="gray.400">
            이미 회원이시라면{" "}
            <Link href="/signin">
              <Button variant="link" as="span" color="gray.100" fontSize="14">
                로그인
              </Button>
            </Link>
          </Text>
          <Input
            type="text"
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
            type="email"
            {...register("email", {
              required: "이메일은 반드시 입력해 주셔야 합니다.",
            })}
            placeholder="이메일"
            bg="white"
            isInvalid={errors?.email?.message}
          />
          <Text color="white" px="2" w="full" align="left" fontSize="12">
            {errors?.email?.message}
          </Text>
          <Input
            type="text"
            {...register("name", {
              required: "이름은 반드시 입력해 주셔야 합니다.",
              minLength: {
                message: "이음은 반드시 2자이상 작성해 주셔야 합니다.",
                value: 2,
              },
            })}
            placeholder="이름"
            bg="white"
          />
          <Text color="white" px="2" w="full" align="left" fontSize="12">
            {errors?.name?.message}
          </Text>
          <Input
            type="password"
            {...register("password", {
              required: "패스워드는 반드시 입력해 주셔야 합니다. ",
            })}
            placeholder="패스워드"
            bg="white"
          />
          <Text color="white" px="2" w="full" align="left" fontSize="12">
            {errors?.password?.message}
          </Text>
          <Input
            type="password"
            {...register("password2", {
              required: "패스워드 확인은 반드시 입력해 주셔야 합니다.",
            })}
            placeholder="패스워드 확인"
            bg="white"
          />
          <Text color="white" px="2" w="full" align="left" fontSize="12">
            {errors?.password2?.message}
          </Text>
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

        {/* 소셜 로그인 */}
        <SocialAuth />
      </VStack>
    </VStack>
  );
}
