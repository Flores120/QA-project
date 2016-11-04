import Ember from 'ember';

export default Ember.Route.extend({
  questionList: Ember.inject.service('fave-question'),
  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
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
      addFaveQ(question) {
        this.get('questionList').add(question);
        console.log(question);
      },
      deleteQuestion(question) {
        question.destroyRecord();
        this.transitionTo('index');
      },
      deleteAnswer(answer) {
        answer.destroyRecord();
        this.transitionTo('index');
      }
    }
});
