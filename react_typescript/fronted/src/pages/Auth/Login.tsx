import { Box, Button, FormControl, Input, InputLabel, TextField } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import './login.css';

function Login() {

    return (
        <div className="full-screen-image">
            <img src='./public/login.jpg' alt="Found" />
            <div className="login-box">
                <form>
                    <div>
                        <div>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <MailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="standard"
                                    fullWidth
                                />
                            </Box>
                        </div>
                        <>

                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-password" >Password</InputLabel>
                                    <Input
                                    />
                                </FormControl>
                            </Box>
                        </>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '8px' }}>
                            <Button type='submit' style={{ marginLeft: '8px' }} variant="contained">Log In</Button>
                        </Box>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login