import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Admin({setLogin}){
    const navigate = useNavigate();
    return(
        <>
            <img src="../src/assets/John.jpg" alt="John Doe"></img>
            <Typography variant="h4" fontWeight="bold" gutterBottom>This is the Admin page</Typography>
            <button onClick={() => {
                navigate("/")
                setLogin(false)}}>
            Logout</button>
        </>
      
    )
}
export default Admin;