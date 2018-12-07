export default function() {
this.timing = 1000;

this.get('/restaurants');
this.post('/restaurants');
this.get('/restaurants/:id');
this.put('/restaurants/:id');
this.patch('/restaurants/:id'); // or this.patch
this.del('/restaurants/:id');
}

export function testConfig() {
  // test-only config, does not apply to development
  this.get('/restaurants');
  this.post('/restaurants');
  this.get('/restaurants/:id');
  this.put('/restaurants/:id');
  this.patch('/restaurants/:id'); // or this.patch
  this.del('/restaurants/:id');
}
