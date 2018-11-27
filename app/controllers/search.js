import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    search(event) {
      event.preventDefault();
      console.log(this);
      var price = $('input[name=price]:checked').val();
      var foodType = $('select').val();
      var openNow = $('#openNow')[0].checked;

    }
  }
});
