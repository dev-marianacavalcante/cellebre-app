import { TouchableOpacity } from "react-native";
import { ContainerButton, TextButton } from "./styles";

interface ButtonProps {
    title: string;
}
export function Button({title}: ButtonProps) {
    return(
        <TouchableOpacity>
            <ContainerButton>
                <TextButton>{title}</TextButton>
            </ContainerButton>
        </TouchableOpacity>
    )
}