import Ember from 'ember';

export function questionPopularity(params/*, hash*/) {
  var question = params[0];

    if(question.get('answers').get('length') >= 5) {
      return Ember.String.htmlSafe('<img src="https://webappstatic.buzzfeed.com/static/images/global/og-image-trending.jpg"></>');
    }
}

export default Ember.Helper.helper(questionPopularity);
