import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function About(){
    const navigate = useNavigate();

    return(
        <>
            <Typography variant="h4" fontWeight="bold" gutterBottom>This is the About page</Typography>
            <button onClick={() => navigate("/")}>Redirect</button>
        </>
      
    )
}
export default About;