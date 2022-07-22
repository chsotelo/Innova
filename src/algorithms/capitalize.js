export const capitalize = (string) => { //Capitalizador universal de strings
  if(!(typeof string === 'string')) return ""
    return string
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
}