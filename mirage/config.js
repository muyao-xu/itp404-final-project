export default function() {
this.timing = 1000;

this.get('/restaurants');
this.post('/restaurants');
this.get('/restaurants/:id');
this.put('/restaurants/:id');
this.patch('/restaurants/:id'); // or this.patch
this.del('/restaurants/:id');
}
