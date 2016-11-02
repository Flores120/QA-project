import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
    actions: {
      updateQuestionForm() {
        this.set('updateQuestionForm', true);
      },
      update(question) {
        var params = {
          questionName: this.get('questionName'),
          questionDetails: this.get('questionDetails'),
        };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
