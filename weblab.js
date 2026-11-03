function addition(a, b) {

    return a + b;

}

console.log("Q1 Addition:", addition(10, 20));


function bitwiseAND(a, b) {
    return a & b;
}

function bitwiseOR(a, b) {
    return a | b;
}

function bitwiseXOR(a, b) {
    return a ^ b;
}

console.log("Q2 AND:", bitwiseAND(5, 3));

console.log("Q2 OR:", bitwiseOR(5, 3));

console.log("Q2 XOR:", bitwiseXOR(5, 3));



function addUp(a) {

    let sum = 0;

    for (let i = 1; i <= a; i++) {

        sum = sum + i;
    }
    return sum;
}

console.log("Q3 Add Up:", addUp(4));


function progressBar(a) {

    let filled = Math.floor(a / 10);

    let empty = 10 - filled;

    return "#".repeat(filled) + "-".repeat(empty);

}

console.log("Q4 Progress Bar:", progressBar(40));


function minMax(arr) {
    let minimum = Math.min(...arr);
    let maximum = Math.max(...arr);
    return [minimum, maximum];
}
console.log("Q5 Min Max:", minMax([1, 2, 3, 4, 5, 6]));





function calculateRepoStats(repos) {

    let stars = repos.map(repo => repo.stars);

    let maxStars = Math.max(...stars);

    let minStars = Math.min(...stars);

    let total = stars.reduce((sum, value) => sum + value, 0);

    let avgStars = Math.floor(total / stars.length);

    let varianceScore = Math.abs(maxStars - minStars);

    return {
        maxStars: maxStars,
        minStars: minStars,
        avgStars: avgStars,
        varianceScore: varianceScore
    };

}

const repos = [
    { name: 'repo-a', stars: 12 },
    { name: 'repo-b', stars: 45 },
    { name: 'repo-c', stars: 3 }
];

console.log("Q6 Repository Statistics:", calculateRepoStats(repos));



function calculateFinalPrice(basePrice, taxRate, discountPercentage) {

    let discountedPrice = basePrice * (1 - discountPercentage / 100);
    discountedPrice = Math.round(discountedPrice * 100) / 100;

    let tax = discountedPrice * taxRate / 100;
    tax = Math.round(tax * 100) / 100;

    let finalPrice = discountedPrice + tax;
    finalPrice = Math.round(finalPrice * 100) / 100;

    let loyaltyPoints = Math.ceil(finalPrice);

    return {
        discountedPrice: discountedPrice,
        tax: tax,
        finalPrice: finalPrice,
        loyaltyPoints: loyaltyPoints
    };
}

console.log("Q7 Final Price:", calculateFinalPrice(1000, 5, 10));




function paginateData(items, pageNumber, pageSize = 5) {

    let totalPages = Math.ceil(items.length / pageSize);

    let start = (pageNumber - 1) * pageSize;

    let end = start + pageSize;

    let data = items.slice(start, end);

    return {
        data: data,
        currentPage: pageNumber,
        totalPages: totalPages,
        hasNext: pageNumber < totalPages,
        hasPrev: pageNumber > 1 && pageNumber <= totalPages
    };

}

const allProducts = [
    'Laptop',
    'Mouse',
    'Keyboard',
    'Monitor',
    'Desk',
    'Chair',
    'Webcam',
    'Headphones'
];

const result = paginateData(allProducts, 2, 3);

console.log("Q8 Pagination:", result);