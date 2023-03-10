import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
