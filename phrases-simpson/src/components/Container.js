import styled from "styled-components";

const Content = styled.div`
    max-width: 1200px;
    padding: 40px;
`;

export default function Container({children}) {
    return (
        <Content>{children}</Content>
    )
};
