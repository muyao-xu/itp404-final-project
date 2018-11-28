import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    search(event) {
      this.transitionToRoute('search');
    }
  }
});
