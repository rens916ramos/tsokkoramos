var i = 0;
var txt = 'Tsokko is a Filipino company established in 2021. The company specializes in chocolate production, producing a variety of quality chocolate products.' +
'The Tsokko company is open for partnership to food companies looking for the right and quality chocolate ingredient for their menu. Tsokko ships nationwide.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("aboutus").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};