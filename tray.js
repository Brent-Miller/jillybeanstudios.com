// The dice tray on the home page: five dice, three rolls, tap to hold. Stores nothing.
(() => {
  // Pip positions on a 3x3 grid (cells 0-8) for faces 1-6.
  const PIPS = { 1: [4], 2: [2, 6], 3: [2, 4, 6], 4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8] };
  const NAMES = ['', 'Ones', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes'];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const diceEl = document.getElementById('dice');
  const rollBtn = document.getElementById('roll');
  const resBox = document.getElementById('res-box');
  const resPts = document.getElementById('res-pts');
  const resAlso = document.getElementById('res-also');
  const hint = document.getElementById('tray-hint');
  let faces = [2, 3, 4, 5, 6];
  let held = [false, false, false, false, false];
  let rollsLeft = 2;

  const dieEls = faces.map((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'die';
    for (let c = 0; c < 9; c++) b.appendChild(document.createElement('i'));
    const tag = document.createElement('span');
    tag.className = 'held-tag';
    tag.textContent = 'Held';
    b.appendChild(tag);
    b.addEventListener('click', () => {
      if (rollsLeft === 0) return;
      held[i] = !held[i];
      draw();
    });
    diceEl.appendChild(b);
    return b;
  });

  // The best box for five dice, with the scorecard's base values (Loaded Dice docs/RULES.md).
  function best(f) {
    const counts = [0, 0, 0, 0, 0, 0, 0];
    f.forEach(v => counts[v]++);
    const sum = f.reduce((a, b) => a + b, 0);
    const has = n => counts.some(c => c >= n);
    const run = len => {
      for (let s = 1; s + len - 1 <= 6; s++) {
        let ok = true;
        for (let v = s; v < s + len; v++) if (!counts[v]) ok = false;
        if (ok) return true;
      }
      return false;
    };
    const opts = [];
    if (has(5)) opts.push(['Five of a Kind', 50]);
    if (run(5)) opts.push(['Large Straight', 40]);
    if (run(4)) opts.push(['Small Straight', 30]);
    if (counts.includes(3) && counts.includes(2)) opts.push(['Full House', 25]);
    if (has(4)) opts.push(['Four of a Kind', sum]);
    if (has(3)) opts.push(['Three of a Kind', sum]);
    for (let v = 6; v >= 1; v--) if (counts[v]) opts.push([NAMES[v], v * counts[v]]);
    opts.push(['Chance', sum]);
    const top = opts.reduce((a, b) => (b[1] > a[1] ? b : a));
    // A Full House scores a flat 25, so with high dice Three of a Kind (the dice added up) beats it.
    // Name it anyway, so the tray doesn't look like it missed it.
    const fh = opts.find(o => o[0] === 'Full House');
    return [top[0], top[1], fh && fh !== top ? `Also a Full House: ${fh[1]}` : ''];
  }

  function draw() {
    dieEls.forEach((el, i) => {
      const on = PIPS[faces[i]];
      el.querySelectorAll('i').forEach((p, c) => { p.style.visibility = on.includes(c) ? 'visible' : 'hidden'; });
      el.setAttribute('aria-pressed', held[i]);
      el.setAttribute('aria-label', `Die showing ${faces[i]}`);
      el.disabled = rollsLeft === 0;
    });
    const [name, pts, also] = best(faces);
    resBox.textContent = name;
    resPts.textContent = `${pts} points`;
    resAlso.textContent = also;
    resAlso.hidden = !also;
    if (rollsLeft > 0) {
      rollBtn.textContent = `Roll again (${rollsLeft} left)`;
      hint.textContent = 'Tap a die to hold it, then roll the rest. You get three rolls.';
    } else {
      rollBtn.textContent = 'New turn';
      hint.textContent = 'That’s your turn. In a run, trinkets can turn rolls like this into thousands of points.';
    }
  }

  function roll(animate) {
    faces = faces.map((v, i) => (held[i] ? v : 1 + Math.floor(Math.random() * 6)));
    if (animate && !reduce) {
      dieEls.forEach((el, i) => {
        if (held[i]) return;
        el.classList.remove('rolling');
        void el.offsetWidth;
        el.classList.add('rolling');
      });
    }
    draw();
  }

  rollBtn.addEventListener('click', () => {
    if (rollsLeft === 0) {
      held = [false, false, false, false, false];
      rollsLeft = 2;
      roll(true);
      return;
    }
    if (held.every(Boolean)) {
      hint.textContent = 'Every die is held. Tap one to let it roll.';
      return;
    }
    rollsLeft--;
    roll(true);
  });

  // The page opens on a real first roll, tumbled once.
  roll(true);
})();
