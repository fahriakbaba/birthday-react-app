import React from "react";

function List(props) {
  return (
    <article>
      <img src={props.person.image} alt={props.person.name} />
      <div className="person-info">
        <h4>{props.person.name}</h4>
        <p>{props.person.age} years old</p>
      </div>
    </article>
  );
}

export default List;
