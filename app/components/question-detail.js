import Ember from 'ember';

export default Ember.Component.extend({
  heading: Ember.computed('answer.author', 'answer.content', function() {
    return this.get('answer.author') + ' - ' + this.get('answer.content');
  }),
  actions:  {
    deleteQuestion(question){
      if (confirm('are you sure????')){
        this.sendAction('deleteQuestion', question);
      }
    },
      deleteAnswer(answer){
        this.sendAction('deleteAnswer', answer);
    }
  }
});
