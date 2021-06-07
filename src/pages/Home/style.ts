import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-areas: "header header"
                        "menu chart"
                        "menu body";
`;