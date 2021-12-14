import { Divider, Typography } from "@mui/material";
import { FcIdea } from "react-icons/fc";

export default function HeaderComponent() {
    return (
        <>
            <Typography variant="h2" textAlign="center" alignItems="center" marginTop="1.5rem">Teste seu conhecimento <FcIdea/></Typography>
            <Divider />
            <br/><br/>
        </>
    );
}