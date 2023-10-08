{
const dataadd = [
  {
    x: ['2014-10-04 22:23:00', '2014-11-04 22:23:00', '2014-12-04 22:23:00'],
    y: [11, 10, 16],
    type: 'scatter'
  }
];
data[0].x = data[0].x.concat(dataadd[0].x);
data[0].y = data[0].y.concat(dataadd[0].y);
}
