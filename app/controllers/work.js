import Ember from 'ember';

export default Ember.Controller.extend({
  aboutClicked: false,
  siteClicked: false,
  contactClicked: false,

  observesWork: function() {
    var _this = this;
    Ember.run.later((function() {
  //do something in here that will run in 2 seconds

    if (_this.get('aboutClicked') && _this.get('siteClicked') && _this.get('contactClicked') ) {
      console.log('go to contact');
      _this.set('aboutClicked', false);
      _this.set('siteClicked', false);
      _this.set('contactClicked', false);
       _this.transitionToRoute('contact');
    } else if (_this.get('siteClicked') && _this.get('aboutClicked')) {
      console.log('go to site');
      _this.set('aboutClicked', false);
      _this.set('siteClicked', false);
      _this.set('contactClicked', false);
       _this.transitionToRoute('site');
    } else if (_this.get('aboutClicked')) {
      console.log('go to about');
      _this.set('aboutClicked', false);
      _this.set('siteClicked', false);
      _this.set('contactClicked', false);
       _this.transitionToRoute('about');
    }
    }), 100);
  }.observes('aboutClicked', 'siteClicked', 'contactClicked'),

  actions: {
    transitionToAbout: function() {
      this.set('aboutClicked', true);
      console.log('about');
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
