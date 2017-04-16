var safeColors = ['00','33','66','99','cc','ff'];
var rand = function() {
    return Math.floor(Math.random()*6);
};

let randomColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let boxes =
["top-left","top-mid","top-right",
"mid-left","mid-mid","mid-right",
"bottom-left","bottom-mid","bottom-right"]

  function random() {
    return Math.floor(Math.random() * 9) + 0
  }
