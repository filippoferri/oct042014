//Backgorund change
function newGradient() {
  var c1 = Please.make_color({saturation: 1,})
  var c2 = Please.make_color({saturation: 0.6,})
  return 'radial-gradient(at top left, '+c1+', '+c2+')';
}

function rollBg() {
  $('.bg.op').css('background', newGradient());
  $('.bg').toggleClass('op');
}
