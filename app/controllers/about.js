import Ember from 'ember';

export default Ember.Controller.extend({
  workClicked: false,
  siteClicked: false,
  contactClicked: false,

  observesWork: function() {
    var _this = this;
    Ember.run.later((function() {
  //do something in here that will run in 2 seconds

    if (_this.get('workClicked') && _this.get('siteClicked') && _this.get('contactClicked') ) {
      console.log('go to work');
      debugger;
      _this.set('workClicked', false);
      _this.set('siteClicked', false);
      _this.set('contactClicked', false);
      _this.transitionToRoute('work');
    } else if (_this.get('siteClicked') && _this.get('contactClicked')) {
      console.log('go to contact');
      _this.set('workClicked', false);
      _this.set('siteClicked', false);
      _this.set('contactClicked', false);
      _this.transitionToRoute('contact');
    } else if (_this.get('siteClicked')) {
      console.log('go to site');
      _this.set('workClicked', false);
      _this.set('siteClicked', false);
      _this.set('contactClicked', false);
       _this.transitionToRoute('site');
    }
    }), 100);
  }.observes('workClicked', 'siteClicked', 'contactClicked'),

  actions: {
    transitionToWork: function() {
      this.set('workClicked', true);
      console.log('work');
    },

    transitionToSite: function() {
        this.set('siteClicked', true);
      console.log('site');
    },

    transitionToContact: function() {
        this.set('contactClicked', true);
      console.log('contact');
    },
  }
});
