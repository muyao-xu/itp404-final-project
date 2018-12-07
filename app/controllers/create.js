import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createRestaurant() {
      if (this.name === undefined || this.name.length === 0 || this.price === undefined
        || this.type === undefined || this.type.length === 0 || this.price.length === 0) {
        if (this.name === undefined || this.name.length === 0) {
          this.set('nameErr', 'cannot be empty  ');
        }
        else {
          this.set('nameErr', '');
        }
        if (this.price === undefined || this.price.length === 0) {
          this.set('priceErr', 'cannot be empty  ');
        }
        else {
          this.set('priceErr', '');
        }
        if (this.type === undefined || this.type.length === 0) {
          this.set('typeErr', 'cannot be empty  ');
        }
        else {
          this.set('typeErr', '');
        }
        return new Promise((resolve, reject) => {
          reject();
        });
      }
      else {
        this.set('nameErr', '');
        this.set('priceErr', '');
        this.set('typeErr', '');
        let restaurant = this.store.createRecord('restaurant', {
          name: this.name,
          price: this.price,
          type: this.type
        });
        restaurant.save().then(() => {
          this.transitionToRoute('/').then(() => {

          });
        });
        return new Promise((resolve) => {
          resolve();
        });
      }

    }
  }
});
