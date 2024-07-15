import { View, TouchableOpacity} from "react-native";
import { Button } from "../../components/Button";
import { ContainerHeader } from "./styles";
import { Typography } from "../../components/Typography/styles";

export function Home(){
    return(
        <ContainerHeader>
        <Typography.H1>Olá, Carol! 👋</Typography.H1>
        <Typography.Body>Vamos tornar seus eventos extraordinários, começando aqui mesmo!</Typography.Body>
        <Button title="Planejar evento"></Button>
        
        </ContainerHeader>
    )
}