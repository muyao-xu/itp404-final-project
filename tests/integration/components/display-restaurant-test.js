import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | display-restaurant', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    var restaurant =  {
          name: 'Cava',
          price: '3',
          type: 'Salad'
    };
    this.set('restaurant', restaurant);
    await render(hbs`<DisplayRestaurant @restaurant={{restaurant}} data-test="restaurant" />`);

    assert.dom('[data-test="restaurant"]').hasText('name: Cava price: $$$ type: Salad');
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    var restaurant =  {
          name: 'Starbucks',
          price: '2',
          type: 'Coffee'
    };
    this.set('restaurant', restaurant);
    await render(hbs`<DisplayRestaurant @restaurant={{restaurant}} data-test="restaurant" />`);

    assert.dom('[data-test="restaurant"]').hasText('name: Starbucks price: $$ type: Coffee');
  });
});
