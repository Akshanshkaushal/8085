import { Box, Typography } from "@mui/material"; 

function Header (props: {dark: boolean}) {
    const {dark} = props;
    return (
        <Box sx={{p:0, m:0}} display="flex" justifyContent="start">
           
            <Box display="flex" flexDirection="column" marginY="auto">
                <Typography variant="h5">Intel 8085<br/>Microporcessor Emulator</Typography>
                <Typography variant="subtitle1"><a href="https://en.wikipedia.org/wiki/Intel_8085" style={{color: "inherit"}}>wikipedia</a></Typography>
            </Box>
        </Box>
    )
}

export default Header;