import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { dataList } from "../utils";
// import { nanoid } from "nanoid"
// import Typography from "@mui/material/Typography";

/*
const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];
*/

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Main() {
  return (
    <Box
      display="flex"
      height="100%"
      justifyContent="center"
      flexDirection="column"
    >
      <Masonry columns={2} spacing={2}>
        {/* {heights.map((height, index) => (
            <Item key={index} sx={{ height }}>
              {index + 1}
            </Item>
          ))} */}
        {dataList.map((data, index) => (
          <Item key={index}>
            <Box padding={5}>{data.content}</Box>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}

export default Main;
