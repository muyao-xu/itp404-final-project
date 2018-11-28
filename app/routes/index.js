import Route from '@ember/routing/route';

export default Route.extend({
  title: 'List of all restaurants',
  model() {
   return this.store.findAll('restaurant'); //find all post model(we use ember g model post)
 }
});
