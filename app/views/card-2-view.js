export default Ember.View.extend({
  tagName: 'div',
  classNames: ['card-2-wrap'],
  classNameBindings: ['enterSite:hovering', 'enterAbout::not-about', 'enterSite::not-work'],
  classNameBindings: ['enterSite:hovering', 'enterAbout::not-about', 'enterSite::not-work'],
  isOnCard: false,

  mouseEnter: function() {
    // this.send('isOnAbout', true);
    this.get('controller').send('toggleSite', true);
    this.set('isOnSite', true);
    console.log('mouse Enter Site');
  },

  mouseLeave: function() {
    this.get('controller').send('toggleSite', false);
    // this.send('isOnAbout', false);
    this.set('isOnSite', false);
    console.log('mouse Leave Site');
  }
});