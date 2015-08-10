import { animate, stop, Promise } from "liquid-fire";

export default function cardTransition(opts) {
  opts = opts || {};
  var firstStep,
      secondStep,
      thirdStep,
      fourthStep,
      outerWrapper = this.oldElement.parents().eq(3),
      wrapper = this.oldElement.parents().eq(2),
      innerWrapper = this.oldElement.parents().eq(1);
  // var clickedCard = findClickedCard(this);

  // if (clickedCard) {
  //   firstStep = finish(clickedCard, 'slide-right');
  // }
  stop(this.oldElement);
  firstStep = animate(this.oldElement, {opacity: [0, 1], right: "-100%", left: "100%"}, opts, 'slide-right');
  secondStep = animate($(innerWrapper), {opacity: [0, 1], left: "0px", top: "0px"}, opts),
               animate($(wrapper), {opacity: [0, 1], left: "0px", top: "0px"}, opts),
               animate($(outerWrapper), {opacity: [0, 1], left: "0px", top: "0px"}, opts);
  thirdStep = animate($(innerWrapper), {opacity: [(opts.maxOpacity || 1), 0], left: "10px", top: "10px"}, opts),
               animate($(wrapper), {opacity: [(opts.maxOpacity || 1), 0], left: "10px", top: "10px"}, opts),
               animate($(outerWrapper), {opacity: [(opts.maxOpacity || 1), 0], left: "0px", top: "7px"}, opts);
  fourthStep = animate(this.newElement, {opacity: [(opts.maxOpacity || 1), 0], top: ["0px", "-10px"], left: ["0px", "-10px"]}, opts);
  return firstStep.then(() => {
    return secondStep.then(() => {
      return fourthStep.then(() => {
         return thirdStep;
      })
    })
  })
  // stop(this.oldElement);
  // return Promise.all([
  //   animate(this.oldElement, { right: "-100%", left: "100%" }, opts)
  // ]);
}
