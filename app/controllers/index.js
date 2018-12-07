import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteRestaurant(restaurant) {
      restaurant.destroyRecord();
      this.transitionToRoute('index');
      return new Promise((resolve) => {
        resolve();
      })
    }
  }
});
