import Route from '@ember/routing/route';

export default Route.extend({
  title: 'The restaurant we found for you',
  model(params) {
    return this.store.findRecord('restaurant', params.id);
  }
});
