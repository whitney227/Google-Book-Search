import React, {Component} from "react";
import {Container, Row} from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class Search extends Component {
    state={
        
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1>Google Book Search</h1>
                    <h2>Search for and Save Books of Interest</h2>
                </Jumbotron>
            


            </Container>

        )
    }
}

export default Search;