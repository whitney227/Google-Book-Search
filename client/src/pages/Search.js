import React, {Component} from "react";
import {Container, Row, Col} from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import BookDetails from "../components/BookDetails";
import Card from "../components/Card";
import API from "../utils/API";

class Search extends Component {
    state={
        results: [],
        search: ""    
    };

    // When the component mounts, load the book search
    componentDidMount() {
    this.loadBookSearch();
    }

    loadBookSearch = () => {
      API.search()
      .then(res => this.setState({ results: res.data}))
      .catch(err => console.log(err));
    }

    handleInputChange = event => {
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value
      });
    };

    // When the form is submitted, search the API for the value of `this.state.search`
    handleFormSubmit = event => {
      event.preventDefault();
      this.loadBookSearch(this.state.search);
    };


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
                      <Card heading="Book Search">
                        <Form
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                        />
                      </Card>
                    </Col>        
                  </Row>
                  <Row>
                    <Col size="md-12">
                      <Card
                        heading={this.state.results.items.volumeInfo.title || "Search for a Book"}
                      >
                        {this.state.results.items.volumeInfo.title ? (
                          <BookDetails
                            src={this.state.results.items.volumeInfo.imageLinks.thumbnail}
                            author={this.state.results.items.volumeInfo.authors}
                            description={this.state.results.items.volumeInfo.description}
                            view={this.state.results.items.volumeInfo.previewLink}
                          />
                        ) : (
                          <h3>No Results to Display</h3>
                        )}
                      </Card>
                    </Col>
                  </Row>
                </Container>
            </div>
        );
    }
}

export default Search;