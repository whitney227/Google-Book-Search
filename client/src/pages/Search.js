import React, {Component} from "react";
import {Container, Row, Col} from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";
import Input from "../components/Input";

class Search extends Component {
    state={
        books: [],
        bookSearch: ""    
    };

    handleInputChange = event => {

    };

    handleFormSubmit = event => {
        
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Google Book Search</h1>
                    <h2>Search for and Save Books of Interest</h2>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <form>
                            <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>

                            </form>
                        </Col>
                    </Row>

                </Container>
            </div>

        )
    }
}

export default Search;