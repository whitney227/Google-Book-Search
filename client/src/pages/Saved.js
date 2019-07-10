import React from "react";
import {Container, Row, Col} from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";
import Input from "../components/Input";
import {BookList, BookListItem } from "../components/BookList"


function Saved() {
    return (
        <div>
            <Jumbotron>
                <h1>My Saved Books</h1>
            </Jumbotron>
            <Container>
                <Row>
                    <Col size="md-12">
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Saved;