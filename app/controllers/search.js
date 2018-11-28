import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    search(event) {
      event.preventDefault();
      // console.log(this);
      // var price = $('input[name=price]:checked').val();
      // var foodType = $('select').val();
      // var openNow = $('#openNow')[0].checked;
      // var price;
      // let restaurant = this.store.createRecord('restaurant', {
      //     name: 'hahaha',
      //     price: '123'
      // });
      this.transitionToRoute('result', 1);


    }
  }
});
