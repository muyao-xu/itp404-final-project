import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | characters-remaining', function(hooks) {
  setupRenderingTest(hooks);

  test('on initial renders', async function(assert) {
    this.set('price', 3);
    
    await render(hbs `<DisplayPrice @price={{price}} data-test="display-price"/>`);

    assert.dom('[data-test="display-price"]').hasText('price: $$$');
  });
});
