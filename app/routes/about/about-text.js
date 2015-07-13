import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
      this.render('about-text', {'into':'about', 'outlet':'about-text'});
    
  }
});
