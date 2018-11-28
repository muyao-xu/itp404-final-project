import Route from '@ember/routing/route';

export default Route.extend({
  title: function(tokens) {
    console.log('result Token:' + tokens);
   tokens = Ember.makeArray(tokens);
   tokens.unshift('Restaurant');
   return tokens.reverse().join(' - ');
 },
  titleToken: function(model) {
    console.log(model.name);
    return model.name;
  },
  model(params) {
    return this.store.findRecord('restaurant', params.id);
  }
});
