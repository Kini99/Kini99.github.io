import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import "../Styles/Github.css";
import { BiLinkExternal } from "react-icons/bi"
import { Link } from "react-router-dom";

export default function Github() {
  return (
    <div id="github">
      <h1>My Github</h1>
      <div id='line'></div>
      <p>All my work in codes</p>
      <div id="github-container">
      <Link to="https://github.com/Kini99" target="_blank" style={{ textDecoration: 'none' }}><h2>Visit my Account <BiLinkExternal /></h2></Link>
        <h2>Github Statistics</h2>
        <div className="github-stats"
          justifyContent="space-around"
          direction={{ base: "column", sm: "column", lg: "row", xl: "row" }} style={{ alignItems: "center" }}
        >
            <Image
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=kini99"
              alt="Stats"
            />
            <Image
              id="github-streak-stats"
              src="https://github-readme-streak-stats.herokuapp.com?user=kini99"
              alt="Strek"
            />
        </div>
        <Flex justifyContent="space-around"
          direction={{ base: "column", sm: "column", lg: "row", xl: "row" }}
          gap="10px" style={{ alignItems: "center", margin: "20px" }}>
          <Box>
            <Image
              id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=kini99&theme=dark"
              alt="Language"
            />
          </Box>
        </Flex>
        <h2>Github Calendar</h2>
        <Flex justifyContent="space-around"
          direction={{ base: "column", sm: "column", lg: "row", xl: "row" }}
          gap="10px" style={{ alignItems: "center", margin: "20px" }}>
          <Box className="react-activity-calendar" width="100%" m="auto" overflowX="hidden">
            <Image
              width="100%"
              m="auto"
              bgColor="#e0e0e0"
              borderRadius="5px"
              src="https://ghchart.rshah.org/kini99"
              alt="Git Calender"
            />
          </Box>
        </Flex>
      </div>
    </div>
  );
}