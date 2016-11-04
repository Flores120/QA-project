import Ember from 'ember';

export default Ember.Component.extend({
  questionList: Ember.inject.service('fave-question'),

  totalQuestionCount: Ember.computed('questionList.questions.length', function(){
    var QuestionCount =+ this.get('questionList.questions.length');
     return QuestionCount;
  }),
    actions: {
      removeQ(question){
      this.get('questionList').remove(question)
    }
  }
});
