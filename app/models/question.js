import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  questionName: DS.attr(),
  questionDetails: DS.attr(),
  answers: DS.hasMany('answer', { async: true})
});
