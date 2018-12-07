import Route from '@ember/routing/route';
import { makeArray } from '@ember/array';

export default Route.extend({
  title: function(tokens) {
   tokens = makeArray(tokens);
   tokens.unshift('Restaurant List');
   return tokens.reverse().join(' - ');
 },
  model() {
   return this.store.findAll('restaurant'); //find all post model(we use ember g model post)
 }
});
