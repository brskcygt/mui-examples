import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

export const ResponsiveBackgroundColor = styled(Grid)(({ theme: T }) => ({
  width: "100%",
  height: "300px",
  border: "2px solid red",
  padding: T.spacing(2),
  [T.breakpoints.down("laptop")]: {
    backgroundColor: "blue",
  },
  [T.breakpoints.up("laptop")]: {
    backgroundColor: "yellow",
  },
  [T.breakpoints.up("desktop")]: {
    backgroundColor: "green",
  },
}));
