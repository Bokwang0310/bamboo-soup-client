import { useRecoilValue } from "recoil";
import { boardListState } from "../state/boardList";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Main() {
  const boardList = useRecoilValue(boardListState);
  return (
    <Box
      display="flex"
      height="100%"
      justifyContent="center"
      flexDirection="column"
    >
      <Masonry
        // 디바이스 가로 길이에 따라 자동 조절 필요
        columns={2}
        spacing={2}
        style={
          {
            // padding: 10,
            // 이거 키면 레이아웃 다 망가짐.. up이랑 left만 따로 줘야할 듯
          }
        }
      >
        {boardList.map((data, index) => (
          <Item key={index}>
            <Box padding={2}>
              <Typography variant="h6">{data.title}</Typography>
              <div>{data.content}</div>
            </Box>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}

export default Main;
