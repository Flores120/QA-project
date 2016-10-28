import Ember from 'ember';
var questions = [{
  author: "Angel",
  question: "how musch does a dog cost?"
}];

export default Ember.Route.extend({
  model(){
    return this.store.findAll('question');
  }
});
