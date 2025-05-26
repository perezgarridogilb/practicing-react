import { Container as SUIContainer } from "semantic-ui-react";

export default function ContainerWrapper({ children }) {
    return (
        <SUIContainer text>
            {children}
        </SUIContainer>
    );
}