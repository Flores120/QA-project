import Ember from 'ember';

export default Ember.Component.extend({
  actions:  {
    deleteQuestion(question){
    if (confirm('are you sure????')){
      this.sendAction('deleteQuestion', question);
    }
  }
}
});
