import {Container, Divider, Header} from "semantic-ui-react";

export default function About() {
    return (
        <Container text>
            <Header as="h1">About WM Medical</Header>
            <Divider/>
            <p>put description here</p>
        </Container>
    );
}