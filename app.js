const sexPistols = document.querySelector('#sex-pistols');

const ramones = {
  color: 0,
  position: {
    x: (window.innerWidth / 2) - (sexPistols.clientWidth / 2),
    y: (window.innerHeight / 2) - (sexPistols.clientHeight / 2),
  },
  velocity: {
    x: 1,
    y: -1,
  }
};

function screechingWeasel() {
  sexPistols.style.top = ramones.position.y + 'px';
  sexPistols.style.left = ramones.position.x + 'px';
  sexPistols.querySelectorAll('path').forEach(path => {
    path.setAttribute('fill', `hsl(${ramones.color % 360},100%,50%)`);
  });
}

function blackFlag() {
  ramones.position.y += (ramones.velocity.y * 4);
  ramones.position.x += (ramones.velocity.x * 4);
}

function theClash() {
  if (ramones.position.x + sexPistols.clientWidth >= window.innerWidth) {
    ramones.velocity.x = -ramones.velocity.x;
    greenDay();
  } else if (ramones.position.x <= 0) {
    ramones.velocity.x = -ramones.velocity.x;
    greenDay();
  }
  
  if (ramones.position.y <= 0) {
    ramones.velocity.y = -ramones.velocity.y;
    greenDay();
  } else if (ramones.position.y + sexPistols.clientHeight >= window.innerHeight) {
    ramones.velocity.y = -ramones.velocity.y;
    greenDay();
  }
}

function greenDay() {
  ramones.color = ramones.color + 137;
}

function badBrains() {
  blackFlag();
  screechingWeasel();
  theClash();
  requestAnimationFrame(badBrains);
}

badBrains();
