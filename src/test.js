let a = [1, 2, 3, 4];

for (let i = 0; i < a.length; i++) {
    for (let j = 1; j < a.length; j++) {
        console.log(a[i - (i - j)]);
    }
}