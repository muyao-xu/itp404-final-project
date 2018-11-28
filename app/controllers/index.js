import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteRestaurant(restaurant) {
      console.log('delete');
      restaurant.destroyRecord();
      this.transitionToRoute('index');
    }
  }
});
