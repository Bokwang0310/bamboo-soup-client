import { useRecoilValue } from "recoil";
import { boardState } from "../state/board";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

// import { dataList } from "../utils";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Main() {
  const boardList = useRecoilValue(boardState);
  return (
    <Box
      display="flex"
      height="100%"
      justifyContent="center"
      alignContent="center"
      flexDirection="column"
    >
      <Masonry
        // 디바이스 가로 길이에 따라 자동 조절 필요
        columns={2}
        spacing={2}
        style={{
          padding: 10,
        }}
      >
        {boardList.map((data, index) => (
          <Item key={index}>
            {/* 제목 표시 칸 추가 필요 */}
            <Box padding={2}>{data.content}</Box>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}

export default Main;
