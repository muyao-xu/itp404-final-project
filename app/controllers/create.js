import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createRestaurant(event) {
      event.preventDefault();

      let restaurant = this.store.createRecord('restaurant', {
        name: this.name,
        price: this.price,
        type: this.type
      });

      // let email = this.model;
      restaurant.save().then(() => {
        this.transitionToRoute('/');
      });
    }
  }
});
