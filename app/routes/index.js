import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('question');
  },
  actions:{
    postQuestion(params){
      var postQuestion = this.store.createRecord('question', params);
      postQuestion.save();
      this.transitionTo('index');
    },
      deleteQuestion(question) {
        question.destroyRecord();
        this.transitionTo('index');
      }
    }
});
