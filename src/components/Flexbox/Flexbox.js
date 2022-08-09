import styled from "styled-components";

const Flexbox = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  gap: ${({ gap }) => gap};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  width: ${({ wd }) => wd};
  height: ${({ hg }) => hg};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ background }) => background};
`;

export default Flexbox;
