import { Box } from "@mui/system"

export const Container = ({children}) => {
    return <Box
    sx={{
        paddingLeft:'30px',
        paddingRight:'30px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    }}
    >
        {children}
    </Box>
}