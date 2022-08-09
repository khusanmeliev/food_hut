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
  border-radius: ${({ borderRadius }) => borderRadius || "50%"};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default Flexbox;
