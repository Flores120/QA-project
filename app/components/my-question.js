import Ember from 'ember';

export default Ember.Component.extend({
  questionList: Ember.inject.service('fave-question')
});
