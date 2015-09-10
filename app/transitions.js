export default function(){
  this.transition(
    this.fromRoute('site'),
    this.toRoute('about'),
    this.use('cardTransition', {duration: 1000})
  );

  this.transition(
    this.fromRoute('about'),
    this.toRoute('work'),
    this.use('toRight', {duration: 500})
  );

  this.transition(
    this.fromRoute('work'),
    this.toRoute('contact'),
    this.use('toRight', {duration: 500})
  );

   this.transition(
    this.fromRoute('contact'),
    this.toRoute('site'),
    this.use('toRight', {duration: 500})
  );
}
