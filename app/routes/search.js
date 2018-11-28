import Route from '@ember/routing/route';

export default Route.extend({
  title: function(tokens) {
    console.log('Search Token:' + tokens);
   tokens = Ember.makeArray(tokens);
   tokens.unshift('Search For A Restaurant');
   return tokens.reverse().join(' - ');
 },
});
