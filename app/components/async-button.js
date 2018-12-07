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

  click(event) {
    event.preventDefault();
    console.log('clicked');
    this.set('isPending', true);
    var pendingText = this.defaultText + '...';
    this.set('buttonText', pendingText);
    this.onClick();
  }
});
