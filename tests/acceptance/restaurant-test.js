import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | restaurant', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('the restaurant list displays all the restaurants in the database', async function(assert) {
    server.createList('restaurant', 10);

    await visit('/');
    assert.equal(currentURL(), '/');
    assert.dom('[data-test="restaurant"]').exists({count : 10});
  });

  test('viewing a single restaurant', async function(assert) {
    server.create('restaurant', {
          id: 1,
          name: 'Cava',
          price: '3',
          type: 'salad'
        });

        await visit('/restaurant/1');

        assert.dom('[data-test="restaurant-name"]').hasText('Cava');
        assert.dom('[data-test="restaurant-price"]').hasText('price: $$$');
        assert.dom('[data-test="restaurant-type"]').hasText('salad');
  });

  // test('creating an email', async function(assert) {
  //   await visit('/create');
  //
  //   await fillIn('#name', 'Cava');
  //   await fillIn('#price', '30');
  //   await fillIn('#type', 'salad');
  //   await click('[data-test="restaurant-submit"]');
  //
  //   assert.equal(currentURL(), '/');
  //   assert.dom('[data-test="restaurant"]').exists({count : 1});
  //   assert.equal(server.db.restaurants[0].name, 'Cava');
  //   assert.equal(server.db.restaurants[0].price, '30');
  //   assert.equal(server.db.restaurants[0].type, 'salad');
  // });

  test('deleting a single restaurant', async function(assert) {
    server.createList('restaurant', 1);
     await visit('/');
     await click('[data-test="restaurant-delete"]');

     assert.dom('[data-test="restaurant"]').exists({count : 0});
     assert.equal(currentURL(), '/');
  });

  test('editing a restaurant', async function(assert) {
    server.create('restaurant', {
          id: 1,
          name: 'Cava',
          price: '30',
          type: 'salad'
    });

    await visit('/edit/1');
    await fillIn('#name', 'Starbucks');
    await fillIn('#price', '1');
    await fillIn('#type', 'Coffee');
    await click('[data-test="restaurant-edit-submit"]');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test="restaurant"]').exists({count : 1});
    assert.equal(server.db.restaurants[0].name, 'Starbucks');
    assert.equal(server.db.restaurants[0].price, '1');
    assert.equal(server.db.restaurants[0].type, 'Coffee');
  })
});
