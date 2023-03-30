import { Typography } from '@mui/material';

function Home({login, setLogin}){

    return(
        <>
            <Typography variant="h4" fontWeight="bold" gutterBottom>This is the Home page</Typography>
            <button 
                disabled={login} 
                onClick={() => {
                setLogin(true)}}>
            Login as Admin</button>
        </>
      
    )
}
export default Home;