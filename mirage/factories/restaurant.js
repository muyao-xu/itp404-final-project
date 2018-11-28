import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return i;
  },
  name() {
    return faker.company.companyName();
  },

  price() {
   return faker.commerce.price();
},

  type() {
    return faker.address.country();
  }
});
