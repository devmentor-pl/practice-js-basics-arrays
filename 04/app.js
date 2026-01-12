const years = [1980, 1934, 2002, 2019];

const yearPoint = parseInt(prompt('Podaj rok, który będzie punktem odniesienia'));

if (!yearPoint | yearPoint < 0) {
  alert('Wprowadzono niepoprawny format danych odśwież stronę i spróbuj jeszcze raz!');
} else {
  const newYears = years.map((e) => e - yearPoint);
  newYears.forEach((e, i) => {
    console.log(`Między datą nr. ${i + 1} a punktem odniesienia jest ${e} lat różnicy`)
  });
}