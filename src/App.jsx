import { Avatar, Box, Flex, Heading, keyframes } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Milanesas from "./assets/mila.ogg";

const size = "96px";
const color = "teal";

const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

function App() {
  const [isPlay, setIsPlay] = useState(false);
  let audio = new Audio(Milanesas);

  const start = () => {
    setIsPlay(true);
    audio.play();
  };

  useEffect(() => {
    const finish = () => setIsPlay(false);
    audio.addEventListener("ended", finish);

    // return audio.removeEventListener("ended", finish);
  }, []);

  return (
    <div className="App">
      <Flex
        justifyContent="center"
        flexDir="column"
        alignItems="center"
        h="216px"
        w="full"
        overflow="hidden"
      >
        {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
        <Heading>Osi-thor - Milanesas</Heading>
        <Box
          as="div"
          position="relative"
          w={size}
          h={size}
          onClick={start}
          _before={
            isPlay && {
              content: "''",
              position: "relative",
              display: "block",
              width: "300%",
              height: "300%",
              boxSizing: "border-box",
              marginLeft: "-100%",
              marginTop: "-100%",
              borderRadius: "50%",
              bgColor: color,
              animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
            }
          }
        >
          <Avatar
            src="https://static.misionesonline.news/wp-content/uploads/2022/05/milanesa-1-696x412.jpg"
            size="full"
            position="absolute"
            top={0}
          />
        </Box>
      </Flex>
    </div>
  );
}

export default App;
