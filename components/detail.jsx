import { Box, Img, VStack } from "@chakra-ui/react";
import Layout from "./layout";

export default function Detail() {
  return (
    <Layout>
      <VStack>
        <Box>
          <Img src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80" />
        </Box>
      </VStack>
    </Layout>
  );
}
