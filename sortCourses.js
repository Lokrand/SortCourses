 // Список курсов
 let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// Функция для вывода подходящих под фильтр курсов
function filterByPrices(coursePrice, priceRange) {
  let coursesWithoutRange = []
  coursePrice.forEach(element => {
    if (element.prices[1] === null && element.prices[0] === null) {
      coursesWithoutRange.push(element);
    }
  }); 
  if (priceRange[0] === null) {
    priceRange[0] = 0;
  }
  if (priceRange[1] === null) {
    priceRange[1] = Infinity;
  }
  coursePrice.forEach(element => {
    if (element.prices[1] === null && priceRange[1] !== null) {
      element.prices[1] = priceRange[1];
    } else if (element.prices[1] === null && priceRange[1] === null) {
      element.prices[1] = Infinity;
    }
    if (element.prices[0] === null && priceRange[0] !== null) {
      element.prices[0] = priceRange[0];
    } else if (element.prices[0] === null && priceRange[0] === null) {
      element.prices[0] = 0;
    }
  });
  let newArr = coursePrice.filter(item => ( (item.prices[0] >= priceRange[0]) && 
                                            (item.prices[0] <= priceRange[1]) && 
                                            (item.prices[1] <= priceRange[1]) && 
                                            (item.prices[1] >= priceRange[0])
                                        )
                                 );                     
  return newArr;
}

// Функция сортирующая курсы по минимальной цене
function sortByMinPrice (course) {
  return course.sort((prev, next) => prev.prices[0] - next.prices[0])
}
// Функция сортирующая курсы по максимальной цене
function sortByMaxPrice (course) {
  course.forEach(element => {
    if (element.prices[1] === null) {
      element.prices[1] = Infinity;
    }
  });
  return course.sort((prev, next) => prev.prices[1] - next.prices[1])
}

console.log(filterByPrices(courses,requiredRange1))
