import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createRestaurant() {
      if (this.name === undefined || this.price === undefined || this.type === undefined) {
        if (this.name === undefined || this.name.length === 0) {
          this.set('nameErr', 'cannot be empty  ');
        }
        if (this.price === undefined) {
          this.set('priceErr', 'cannot be empty  ');
        }
        if (this.type === undefined) {
          this.set('typeErr', 'cannot be empty  ');
        }
        return new Promise((resolve, reject) => {
          reject();
        });
      }
      else {
        let restaurant = this.store.createRecord('restaurant', {
          name: this.name,
          price: this.price,
          type: this.type
        });
        restaurant.save().then(() => {
          this.transitionToRoute('/');
        });
      }

    }
  }
});
