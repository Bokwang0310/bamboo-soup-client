import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
// import Typography from "@mui/material/Typography";

const heights = [
  150,
  30,
  90,
  70,
  110,
  150,
  130,
  80,
  50,
  90,
  100,
  150,
  30,
  50,
  80,
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const dataList = [
  {
    title: "학교 진심 같지 않냐",
    date: new Date(),
    content:
      "저번에 학교 뒷산에서 고앵이 발견했는데 어쩌다보니까 키우게 됨 ㅇㅇ",
  },
  {
    title: "우리 학교를 사랑합시다",
    date: new Date(),
    content:
      "우리 학교에 대한 애정이 학교를 굴러가게 만든다는 사실을 당신은 알고 계십니까, 레몬 한 개에는 비타민 C 레몬 한 개 분량이",
  },
  {
    title: "수학 수행 언제까지냐",
    date: new Date(),
    content: "오늘까지면 진심 자살",
  },
];

function Main() {
  return (
    <Box sx={{ width: 1000, minHeight: 393 }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}

export default Main;
