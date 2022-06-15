import React from "react";
import "./Card.css";
import $ from "jquery";

var lastCard = $(".card-list .card").length - 1;

$(".next").click(function () {
  var prependList = function () {
    if ($(".card").hasClass("activeNow")) {
      var $slicedCard = $(".card")
        .slice(lastCard)
        .removeClass("transformThis activeNow");
      $("ul").prepend($slicedCard);
    }
  };
  $("li")
    .last()
    .removeClass("transformPrev")
    .addClass("transformThis")
    .prev()
    .addClass("activeNow");
  setTimeout(function () {
    prependList();
  }, 150);
});

function Card() {
  return (
    <div className="container">
      <div className="left-card" />
      <div className="card-stack next">
        <ul className="card-list">
          <li className="card" style={{ backgroundColor: "#f2eff0" }}>
            <h2>Visa Card</h2>
          </li>
          <li className="card" style={{ backgroundColor: "#f2eff0" }}>
            <h2>Master Card</h2>
          </li>
          <li className="card" style={{ backgroundColor: "#f2eff0" }}>
            <h2>My Card</h2>
          </li>
        </ul>
      </div>
      <div className="right-card" />
    </div>
  );
}
export default Card;
