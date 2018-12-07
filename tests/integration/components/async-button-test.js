import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import RSVP from 'rsvp';
import { later } from '@ember/runloop';

module('Integration | Component | async-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`{{async-button}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#async-button}}
        template block text
      {{/async-button}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('on initial render', async function(assert) {
    this.set('defaultText', 'Save');

    await render(hbs`<AsyncButton
      data-test="restaurant-create"
      @defaultText={{defaultText}}
    />`);

    assert.dom('[data-test="restaurant-create"]').hasText('Save');
  });

  test('onClick render', async function(assert) {
    this.set('defaultText', 'Save');
    this.set('onClick', function() {
      return new RSVP.Promise((resolve) => {
        later(() => {
          resolve();
        }, 1000);
      });
    })

    await render(hbs`<AsyncButton
      data-test="restaurant-create"
      @defaultText={{defaultText}}
      @onClick={{onClick}}
    />`);

    await click('[data-test="restaurant-create"]');
    assert.dom('[data-test="restaurant-create"]').hasText('Save...');
  });
});
