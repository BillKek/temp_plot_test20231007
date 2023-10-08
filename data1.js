var data = [
  {
    x: [],
    y: [],
    type: 'scatter'
  }
];

{
const dataadd = [
  {
    x: ['2013-10-04 22:23:00', '2013-11-04 22:23:00', '2013-12-04 22:23:00'],
    y: [1, 0, 6],
    type: 'scatter'
  }
];
data[0].x = data[0].x.concat(dataadd[0].x);
data[0].y = data[0].y.concat(dataadd[0].y);
}
