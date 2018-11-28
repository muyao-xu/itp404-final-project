import Route from '@ember/routing/route';

export default Route.extend({
  title: function(tokens) {
    console.log('create Token:' + tokens);
   tokens = Ember.makeArray(tokens);
   tokens.unshift('Create A Restaurant');
   return tokens.reverse().join(' - ');
 }
});
