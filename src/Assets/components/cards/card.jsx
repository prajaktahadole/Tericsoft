import React from "react";
import "./card.css";

class Cards extends React.Component {
  render() {
    return (
      <div className="card-main ">

        <img src={this.props.data.url} />

        <div className="detail">

          <div className="time">
            <h2 style={{ margin: 0 ,}}>{this.props.data.title}</h2>
            <p>{this.props.data.time}</p>
          </div>

          <div>
            {this.props.data.genre.map((elem, index) => (
              <p key={index}>{elem}</p>
            ))}
          </div>

        </div>
      </div>

    );
  }
}

export default Cards;
