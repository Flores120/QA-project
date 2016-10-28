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
    update(question, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            question.set(key,params[key]);
          }
        });
        question.save();
        this.transitionTo('index');
      },
      deleteQuestion(question) {
        question.destroyRecord();
        this.transitionTo('index');
      }
    }
});
