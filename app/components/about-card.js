export default Ember.Component.extend({
  isOnCard: false,
  isOnContact: false, 
  isOnAbout: false,
  isOneSite: false,

  actions: {
    setHoverAbout: function() {
      this.set('isOnAbout', true);
      this.set('isOnSite', false);
        console.log('is on about');   
    },

    setHoverSite: function() {
          console.log('is on work');
       this.set('isOnSite', true);
        this.set('isOnAbout', false);
    },

    setOnContact: function() {
      console.log('is on contact = true')
      this.set('isOnContact', true);
      this.set('isOnCard', false);
    },

    removeOnContact: function() {
      this.set('isOnContact', false);
      this.set('isOnCard', true);
    },

    removeHover: function() {
      this.set('isOnCard', false);
      console.log('mouse Leave');
    }

  }
  
});