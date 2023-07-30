import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import Header from "./components/Header/Header";
import Footer from "../Footer";
import AGLogo from "../../assets/ag_logo.png";
import AGLogo2 from "../../assets/agens_logo2.png";

const Home = () => {
  return (
    <StyledContainer>
      <Header />
      <StyledAgensContainer>
        <Typography fontSize={55} fontWeight="bolder">
          AgensGraph
        </Typography>
        <Typography fontWeight="light">
          AgensGraph is an enterprise graph database management system which
          stores and manages various types of data including relational data in
          your legacy system.
        </Typography>
      </StyledAgensContainer>
      <StyledWhyOuterContainer>
        <StyledWhyContainer>
          <Typography fontSize={45} fontWeight="bolder">
            W. H. Y ?
          </Typography>
          <Image src={AGLogo} width={"20px"} />
        </StyledWhyContainer>
      </StyledWhyOuterContainer>
      <CypherContainer>
        <Box>
          <Typography fontSize={35} fontWeight="bolder">
            SQL + Cypher
          </Typography>
          <Typography fontSize={18} fontWeight="bolder">
            : Hybrid Query Processing
          </Typography>
        </Box>
        <Typography fontSize={14} fontWeight="light">
          Cypher is one of the most efficient graph query languages in the graph
          domain. AgensGraph supports both Cypher and SQL in its graph domain.
          Through hybrid query technology, bring out the best performance by
          creating, modifying, and querying graph data.
        </Typography>
        <img alt={"AGLogo2"} src={AGLogo2} />
      </CypherContainer>
      <Footer />
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({
  justifyContent: "center",
  alignItems: "center",
});
const StyledWhyOuterContainer = styled(Stack)({
  padding: 80,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f3f6fa",
});
const CypherContainer = styled(Stack)({
  margin: "auto",
  width: "500px",
  gap: 40,
  paddingTop: 80,
  paddingBottom: 80,
  alignItems: "center",
  justifyContent: "center",
});
const StyledWhyContainer = styled(Box)({
  gap: 20,
  width: 680,
  backgroundColor: "white",
  padding: "102px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
const StyledAgensContainer = styled(Box)({
  padding: "70px 0",
  margin: "auto",
  textAlign: "center",
  width: "500px",
  justifyContent: "center",
  alignItems: "center",
});

const Image = styled("img")({
  width: "200px",
});

export default Home;
