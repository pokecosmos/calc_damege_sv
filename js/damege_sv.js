/**
 * 能力値・威力からダメージの最小値・最大値を計算して返す
 * ポケモン対戦考察Wikiのダメージ計算式
 * https://latest.pokewiki.net/%E3%83%80%E3%83%A1%E3%83%BC%E3%82%B8%E8%A8%88%E7%AE%97%E5%BC%8F
 * を参考にダメージ計算をする
 * @returns min: ダメージ最小値, max: ダメージ最大値
 */
const calcDamage = () => {
  const realValueAttack = document.getElementById('real-value-attack').value;
  const realValueDefense = document.getElementById('real-value-defense').value;
  const power = document.nForm.elements['iryoku'].value;
  const level = 50;
  let baseDamage = Math.floor(level * 2 + 5 + 2);
  baseDamage = Math.floor(baseDamage * power * realValueAttack / realValueDefense);
  baseDamage = Math.floor(baseDamage / 50 + 2);
  const minDamage = Math.floor(baseDamage * 0.85);
  const maxDamage = Math.floor(baseDamage * 1.00);
  console.log(`min: ${minDamage}, max: ${maxDamage}`);
  document.getElementById('real-value-damage').textContent = `ダメージ：min: ${minDamage}, max: ${maxDamage}`
}
