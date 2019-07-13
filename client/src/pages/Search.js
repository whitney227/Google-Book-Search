import React, {Component} from "react";
import {Container, Row, Col} from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import {List, ListItem} from "../components/BookDetails";
import {Card, ListGroup, ListGroupItem, InputGroup, Button} from "react-bootstrap";
import API from "../utils/API";

class Search extends Component {
  state= {
      results: [], 
      title:"",
      src:"",
      authors:"",
      description:"",
      view:"" 
    };
   
    // When the component mounts, load the book search
    componentDidMount() {
    this.loadBookSearch();
    }

    loadBookSearch = () => {
      API.getBooks()
      .then(res => this.setState({ results: res.data, title:"", src:"", authors:"", description:"", view:""}))
      .catch(err => console.log(err));
    }

    handleInputChange  = event => {
     const{ name, value} = event.target;
     this.setState({
       [name]: value
     });
    };
    
    // When the form is submitted, search the API for the value of `this.state.search`
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.results) {
        API.saveBook ({
          title: this.state.title,
          src: this.state.src,
          authors: this.state.authors,
          description: this.state.description,
          view: this.state.view
        })
        .then(res => this.loadBookSearch())
        .catch(err => console.log(err));
      }
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
                      <InputGroup className="mb-3">
                        <input
                          className="form-control"
                          value={this.state.title}
                          onChange={this.handleInputChange}
                          name="title"
                          placeholder="Search For a Book"
                        />
                      <InputGroup.Append>
                        <Button onClick={this.handleFormSubmit}>
                          Submit 
                        </Button>  
                      </InputGroup.Append>
                      </InputGroup>
                    </Col>        
                  </Row>
                  <Row>
                    <Col size="md-12">
                    {this.state.results.length ? (
                      <List>
                          {this.state.results.map(result => (
                            <ListItem key={result._id}>
                              <Card>
                                <Card.Img variant="top" src={result.src} />
                                <Card.Body>
                                  <Card.Title>Title: {result.title}</Card.Title>
                                  <Card.Text>Summary: {result.description}</Card.Text>
                                </Card.Body>
                              <ListGroup className="list-group-flush">
                                <ListGroupItem>Author: {result.authors}</ListGroupItem>
                              </ListGroup>
                              <Card.Body>
                                <Card.Link href={result.view}>Preview</Card.Link>
                              </Card.Body>
                              </Card>
                            </ListItem>
                          ))}
                        </List>
                    ) : (
                      <h4>Type in a title to begin</h4>
                    )}
                    </Col>
                  </Row>
                </Container>
            </div>
        );
    }
}

export default Search;