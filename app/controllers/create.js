import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createRestaurant() {
      let restaurant = this.store.createRecord('restaurant', {
        name: this.name,
        price: this.price,
        type: this.type
      });

      if (this.name === undefined || this.price === undefined || this.type === undefined) {
        if (this.name === undefined) {
          this.set('nameErr', 'cannot be empty');
        }
        if (this.price === undefined) {
          this.set('priceErr', 'cannot be empty');
        }
        if (this.type === undefined) {
          this.set('typeErr', 'cannot be empty');
        }
      }
      else {
        // let email = this.model;
        restaurant.save().then(() => {
          this.transitionToRoute('/');
        });
      }

    }
  }
});
