import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  // buttonText: 'Save',
  attributeBindings: ['isPending:disabled'],

  isPending: false,

  init() {
    this._super(...arguments); // spread operator
    this.set('buttonText', this.defaultText);
  },

  click() {
    console.log('clicked');
    this.set('isPending', true);
    var pendingText = this.defaultText + '...';
    this.set('buttonText', pendingText);
    if (!this.onClick()) {
      this.set('buttonText', this.defaultText);
      this.set('isPending', false);
    }
  }
});
