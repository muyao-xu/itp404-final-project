import Route from '@ember/routing/route';
import { makeArray } from '@ember/array';

export default Route.extend({
  title: function(tokens) {
   tokens = makeArray(tokens);
   tokens.unshift('Restaurant');
   return tokens.reverse().join(' - ');
 },
  titleToken: function(model) {
    return model.name;
  },
  model(params) {
    return this.store.findRecord('restaurant', params.id);
  }
});
