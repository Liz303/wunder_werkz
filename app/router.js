import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('site', {path: '/'});
  this.resource('about', function() {
    this.route('about-text');
  });
  this.route('contact');
  this.route('work');

});
