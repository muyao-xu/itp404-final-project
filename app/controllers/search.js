import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    search(event) {
      console.log(this.saveButton);
      var id = Math.random() * 10;
      this.transitionToRoute('result', parseInt(id));
    }
  }
});
