import Ember from 'ember';

export default Ember.Controller.extend({
  workClicked: false,
  aboutClicked: false,
  siteClicked: false,

  observesWork: function() {
    var _this = this;
    Ember.run.later((function() {
  //do something in here that will run in 2 seconds

    if (_this.get('workClicked') && _this.get('aboutClicked') && _this.get('siteClicked') ) {
      console.log('go to site');
      _this.set('workClicked', false);
      _this.set('aboutClicked', false);
      _this.set('siteClicked', false);
       _this.transitionToRoute('site');
    } else if (_this.get('workClicked') && _this.get('aboutClicked')) {
      console.log('go to about');
      _this.set('workClicked', false);
      _this.set('aboutClicked', false);
      _this.set('siteClicked', false);
       _this.transitionToRoute('about');
    } else if (_this.get('workClicked')) {
      console.log('go to work');
      _this.set('workClicked', false);
      _this.set('aboutClicked', false);
      _this.set('siteClicked', false);
       _this.transitionToRoute('work');
    }
    }), 100);
  }.observes('workClicked', 'aboutClicked', 'siteClicked'),

  actions: {
    transitionToWork: function() {
      this.set('workClicked', true);
      console.log('work');
    },

    transitionToAbout: function() {
        this.set('aboutClicked', true);
      console.log('about');
    },

    transitionToSite: function() {
        this.set('siteClicked', true);
      console.log('site');
    },
  }
});
