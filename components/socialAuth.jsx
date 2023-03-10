import { Button, Text, VStack } from "@chakra-ui/react";

export default function SocialAuth() {
  return (
    <VStack w="full" spacing={4}>
      <Button type="submit" w="full" bg="#FAE100">
        <Text>카카오톡 회원가입</Text>
      </Button>
      <Button type="submit" w="full" bg="#EA4335">
        <Text color="white">Google 회원가입</Text>
      </Button>
    </VStack>
  );
}
