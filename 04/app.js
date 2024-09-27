const years = [1980, 1934, 2002, 2019];

let countYearsFromNow = (array) => {

    const year = new Date().getFullYear();
    const yearsFromNow = array.map(x => year - x);

    array.forEach(function (element, index) {
        console.log(`Od ${element} do ${year} minęło ${yearsFromNow[index]} lat`);
    })
};

countYearsFromNow(years);