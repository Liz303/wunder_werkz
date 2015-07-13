export default Ember.Component.extend({
  isOnCard: false,

  actions: {
    setContactHover: function() {
    // this.set('isOnCard', true);
    this.sendAction('setOnContact');
    console.log('mouse Enter contact');
    }, 

    removeOnContact: function() {
      this.sendAction('removeOnContact');
      console.log("mouse leave ocntact");
    }
  }
  
});