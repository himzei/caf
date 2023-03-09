import { Box, useToast } from "@chakra-ui/react";
import QrReader from "react-qr-scanner";

export default function QrCamera() {
  const toast = useToast();
  const handleError = (error) => {
    console.log(error);
  };
  const handleScan = (data) => {
    console.log(data);
    toast({
      title: "QR 성공",
      description: "성공적으로 인증",
      status: "success",
    });
  };
  return (
    <Box w="full">
      <QrReader
        delay="1000"
        style={{ height: 600, objectFit: "cover" }}
        onError={handleError}
      />
    </Box>
  );
}
