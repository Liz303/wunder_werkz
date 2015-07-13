export default Ember.View.extend({
  tagName: 'div',
  classNames: ['card-3-wrap'],
  classNameBindings: ['enterContact:hovering', 'enterAbout::not-about', 'enterContact::not-contact'],
  isOnCard: false,
  templateName: ['contact-markup'],

  mouseEnter: function() {
    // this.send('isOnAbout', true);
    this.get('controller').send('toggleContact', true);
    this.set('isOnContact', true);
    console.log('mouse Enter Contact');
  },

  mouseLeave: function() {
    this.get('controller').send('toggleContact', false);
    // this.send('isOnAbout', false);
    this.set('isOnContact', false);
    console.log('mouse Leave Contact');
  }
});