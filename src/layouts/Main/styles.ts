import styled from "@emotion/styled";
import { Colors } from "../../constants/colors";

export const Container = styled.main`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
    max-height: 100vh;
    max-width: 100vw;
    background-color: ${Colors.PRIMARY};
`