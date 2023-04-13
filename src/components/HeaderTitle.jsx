import { Box, Typography } from "@mui/material"

export const HeaderTitle = () => {
    return(
        <Box 
        sx={{
            width: "100%",
            maxWidth: '100vw',
            height: "100px",
            display: 'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Typography variant="h3">TodoInput</Typography>
        </Box>
    )
}