import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  displayText: computed('price', function() {
    var i;
    var text='';
    for (i=0; i<this.price; i++) {
      text = text + '$';
    }
    return text;
}),
});
