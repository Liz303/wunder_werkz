import { animate, stop, Promise } from "liquid-fire";

export default function cardTransition(opts) {
  opts = opts || {};
  var firstStep,
      secondStep,
      outerWrapper = this.oldElement.parents().eq(3);
  // var clickedCard = findClickedCard(this);

  // if (clickedCard) {
  //   firstStep = finish(clickedCard, 'slide-right');
  // }
  stop(this.oldElement);
  firstStep = animate(this.oldElement, {right: "-100%", left: "100%"}, opts, 'slide-right');
  // secondStep = animate($(outerWrapper), {left: "10px", top: "10px"}, opts)
  return firstStep.then(() => {
    // return secondStep.then(() => {
      return animate(this.newElement, {opacity: [(opts.maxOpacity || 1), 0], top: ["0px", "-10px"], left: ["0px", "-10px"]}, opts);
    // })
  })
  // stop(this.oldElement);
  // return Promise.all([
  //   animate(this.oldElement, { right: "-100%", left: "100%" }, opts)
  // ]);
}
