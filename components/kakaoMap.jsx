import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function KakaoMap({ change }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(
            35.870885125884286,
            128.60217416994897
          ),
          level: 1,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        map.relayout();
        const markerPosition = new kakao.maps.LatLng(
          35.870885125884286,
          128.60217416994897
        );

        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    });
  }, [change]);
  return <Box w="full" h="500px" id="map" rounded="sm"></Box>;
}
