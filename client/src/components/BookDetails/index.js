import React from "react";

function BookDetails(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Author(s): {props.author}</h3>
      <h3>Summary: {props.description}</h3>
      <link href={props.view}>Preview</link>
    </div>
  );
}

export default BookDetails;