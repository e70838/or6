//document.getElementById("index")!.innerHTML = "Changed by TypeScript!";

function validateForm() {
  console.log("bozo");
  const n1 = parseInt((document.getElementById("num1")).value, 10);
  const n2 = parseInt((document.getElementById("num2")).value, 10);

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    alert("Not a number");
    return false;
  }

  const m = multiplication_phase1(n1, n2);

  let s = '';
  for (let i = 0; i < m.length; i++) {
    s += '<tr>';
    const ligne = m[i].slice().reverse();
    for (let j = 0; j < ligne.length; j++) {
      s += `<td>${ligne[j]}</td>`;
    }
    s += '</tr>';
  }

  document.getElementById("app").innerHTML = `<table>${s}</table><p>produit = ${n1 * n2}</p>`;
  return false;
}

function extraire_chiffres(nombre, taille) {
  const res = new Array(taille);

  for (let i = 0 ; i < taille; i++) {
      const d = nombre % 10;
      res[i] = d;
      nombre = (nombre - d) / 10;
  }

  return res;
}

function multiplication_phase1 (nombre_a, nombre_b) {
  let digit_a = 1+Math.floor(Math.log10(nombre_a));
  let digit_b = 1+Math.floor(Math.log10(nombre_b));
  if (digit_a < digit_b) {
      [nombre_a, nombre_b] = [nombre_b, nombre_a];
      [digit_a, digit_b] = [digit_b, digit_a];
  }

  //const chiffres_a = extraire_chiffres(nombre_a, digit_a);
  const chiffres_b = extraire_chiffres(nombre_b, digit_b);

  let res = new Array(digit_b + 1);
  // i indice de la ligne
  for (let i = 0; i < digit_b; i++) {
      // anticipe que le tableau sera complété par i x le chiffre '0'
      res[i] = extraire_chiffres(nombre_a * chiffres_b[i], digit_a+digit_b-i);
      // res[i].unshift(new Array(i).fill(0));
      for (let j = 0; j < i ; j++) {
          res[i].unshift(0);
      }
  }
  // alloue le tableau de chiffres pour la ligne totale
  res[digit_b] = new Array(digit_a+digit_b);

  let retenue = 0;
  // j indice de la colonne
  for (let j = 0; j < digit_a+digit_b; j++) {
      let total = retenue;
      for (let i = 0; i < digit_b ; i++) {
          total = total + res[i][j];
      }
      const d = total % 10;
      res[digit_b][j] = d;
      retenue = (total - d) / 10;
  }

  // enlever le zero initial si inutile
  if (res[digit_b][res[digit_b].length-1] === 0) {
      for (let i = 0; i < res.length ; i++) {
          res[i].pop();
      }
  }

  return res;
}