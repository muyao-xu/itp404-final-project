import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editRestaurant(restaurant, event) {
      event.preventDefault();

      // let restaurant = this.model;
      restaurant.save().then(() => {
        this.transitionToRoute('index');
      });
    }
  }
});
