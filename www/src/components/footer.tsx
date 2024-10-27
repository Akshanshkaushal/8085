import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { Container, Box, Paper } from "@mui/material"; 

function Footer (props: {dark: boolean}) {
    const {dark} = props;

    return (
        <Container component={Paper} elevation={0} sx={{width:"50%"}}>
            <Box display="flex" alignContent="center" justifyContent="space-between">
               
            </Box>
        </Container>
    )
}

export default Footer;