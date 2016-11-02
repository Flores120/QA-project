import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
    actions: {
      questionFormShow(){
        this.set('addNewQuestion', true);
      },
      postQuestion(){
        var params = {
          author: this.get('author'),
          questionName: this.get('questionName'),
          questionDetails: this.get('questionDetails')
        };
      this.set('addNewQuestion', false);
      this.sendAction('postQuestion', params);
    }
  }
});
