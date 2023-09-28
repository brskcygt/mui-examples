import { Grid, Typography } from "@mui/material"
import { CustomCheckbox } from "./Components/CustomCheckbox"
import { ResponsiveBackgroundColor } from "./Components/ResponsiveBackgroundColor"

function App() {

  return (
    <>
    <CustomCheckbox/>       
    <Typography variant="h1">Responsive h1</Typography>
    <Typography variant="subtitle1">Subtitle1</Typography>
    <Typography variant="poster">Poster variant</Typography>
    <ResponsiveBackgroundColor/>
    </>
  )
}

export default App
