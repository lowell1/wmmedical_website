// helper component for structuring a product page
import {Container, Header, Divider} from "semantic-ui-react";

export default function Product({title, description}) { //image?
    return (
        <Container text>
            <Header as="h1">{title}</Header>
            <Divider/>
            <p>description: {description}</p>
        </Container>
    );
}