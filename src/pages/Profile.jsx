import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

function Profile(){
    const { id } = useParams();

    return(
        <>
            <Typography variant="h6" fontWeight="bold" gutterBottom>This student user's ID is {id}</Typography>
        </>
      
    )
}
export default Profile;