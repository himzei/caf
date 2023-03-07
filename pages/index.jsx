import Layout from "@/components/layout";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import svgLogo from "../public/svg/logo.svg";
import SvgLocation from "../public/svg/location.svg";
import { DEVICE_WIDTH } from "@/lib/deviceSetting";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StarRatings from "react-star-ratings";
import { Button } from "@mui/material";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Layout title="이벤트" hasTabBar Logo={svgLogo}>
      <Head>
        <title>와즐(와서즐겨라) - 이벤트</title>
      </Head>
      <VStack spacing={0} w="full">
        {/* 운영시간 */}
        <VStack w="full" alignItems="center" color="white" py="8" spacing={0}>
          <Text>03.01.(금) 운영시간</Text>
          <Text fontSize={22} fontWeight="600">
            10:00 ~ 21:00
          </Text>
        </VStack>
        {/* 구분선 */}

        <Box h="2" w="full" bg="#2F334D" />

        {/* 공연 이벤트 */}
        <VStack
          alignItems={"flex-start"}
          w={"full"}
          py="8"
          px="4"
          spacing={5}
          overflow="hidden"
        >
          <VStack w="full" alignItems="flex-start" spacing="1" color="white">
            <Text fontWeight={600} fontSize="20">
              공연 & 이벤트
            </Text>
            <Text>다양하고 풍성한 와즐 이벤트, 행사와 함께 즐기세요.</Text>
          </VStack>
          <Box w={DEVICE_WIDTH + 30}>
            <Slider {...settings}>
              {Array(4)
                .fill("")
                .map((_, i) => (
                  <Box w="190px" h="230px" key={i} cursor={"pointer"}>
                    <VStack alignItems={"flex-start"} w="full">
                      <Box
                        position={"relative"}
                        bg="blue.400"
                        rounded="sm"
                        w="190px"
                        h="230px"
                        overflow="hidden"
                      >
                        <Image
                          h="full"
                          alt="image"
                          objectFit={"cover"}
                          src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80"
                        />
                        <VStack
                          spacing="0"
                          alignItems={"flex-start"}
                          color="white"
                          position="absolute"
                          bottom="0"
                          w="full"
                          py="4"
                          px="2"
                          bg={"rgba(0,0, 0, 0.7)"}
                        >
                          <Text fontWeight={600} fontSize="16" px="1">
                            호미곶 해맞이 광장
                          </Text>
                          <Text fontSize="14" px="1">
                            12:00 ~ 13:00
                          </Text>
                        </VStack>
                      </Box>
                    </VStack>
                  </Box>
                ))}
            </Slider>
          </Box>
        </VStack>

        {/* 구분선 */}
        <Box h="2" w="full" bg="#2F334D" />

        {/* 추천코스 */}
        <VStack alignItems={"flex-start"} w={"full"} py="8" px="4" spacing={5}>
          <VStack w="full" alignItems="flex-start" spacing="1" color="white">
            <Text fontWeight={600} fontSize="20">
              추천 코스
            </Text>
            <Text>이용자들이 추천하는 오늘의 실시간 인기 체험</Text>
          </VStack>
          <VStack w="full" spacing={4}>
            {Array(4)
              .fill("")
              .map((_, i) => (
                <Box
                  key={i}
                  w="full"
                  h="240"
                  overflow="hidden"
                  bg="red.200"
                  position="relative"
                >
                  <Image
                    h="full"
                    alt="image"
                    objectFit={"cover"}
                    src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80"
                  />
                  <VStack
                    position="absolute"
                    w="full"
                    bottom="0"
                    bg={"rgba(0, 0, 0, 0.7)"}
                    alignItems="flex-start"
                    py="4"
                    px="4"
                    spacing="2"
                  >
                    <VStack spacing={0} alignItems="flex-start">
                      <Text color="white" fontWeight={600} fontSize="16">
                        롤러코스터
                      </Text>

                      <HStack spacing={1}>
                        <SvgLocation />
                        <Text fontSize="14" color="white">
                          120m
                        </Text>
                      </HStack>
                    </VStack>
                    <HStack>
                      <StarRatings
                        rating={4.2}
                        starDimension="12px"
                        starSpacing="1px"
                        numberOfStars={5}
                        starRatedColor="#50BBFF"
                      />

                      <Text color="white" fontSize="12">
                        4.2
                      </Text>
                    </HStack>
                    <VStack position="absolute" top="-6" right="4" spacing={1}>
                      <VStack
                        rounded="full"
                        w="10"
                        h="10"
                        bgGradient="linear(to-b, #646B90, #2F334D)"
                        justifyContent={"center"}
                      >
                        {false ? (
                          <AiFillHeart color="tomato" size="24" />
                        ) : (
                          <AiOutlineHeart color="white" size="24" />
                        )}
                      </VStack>
                      <Text color="white" fontSize="12" fontWeight={600}>
                        175
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              ))}
          </VStack>
        </VStack>
      </VStack>
    </Layout>
  );
}
