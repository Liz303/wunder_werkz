import { animate, stop, Promise } from "liquid-fire";

export default function cardTransition(opts) {
  opts = opts || {};
  var clickedCard = this.oldElement.find('.inner-wrapper-2'),
      destinationCard = this.newElement.find('.inner-wrapper-2');
  stop(this.oldElement);
  debugger;
  return Promise.all([
    animate(clickedCard, { background: "red" }, opts),
    animate(destinationCard, { background: "red"} , opts)
  ]);
}
