export default Ember.View.extend({
  tagName: 'div',
  classNames: ['card-wrap'],
  classNameBindings: ['enterAbout:hovering'],
  isOnCard: false,

  mouseEnter: function() {
    // this.sendAction('setOnContact');
    console.log('toggleAbout true');
    this.get('controller').send('toggleAbout', true);
    this.set('isOnCard', true);
    // console.log('mouse Enter about');
  },

  mouseLeave: function() {
    // this.sendAction('removeOnContact');
    console.log( 'toggle about false');
    this.get('controller').send('toggleAbout', false);
    this.set('isOnCard', false);
    // console.log("mouse leave about");
  }
});