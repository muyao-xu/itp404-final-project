import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    search() {
      var id = Math.random() * 10;
      this.transitionToRoute('result', parseInt(id));
    }
  }
});
