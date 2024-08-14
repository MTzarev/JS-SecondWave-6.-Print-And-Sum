function printAndSum(start, end) {
    let line = "";
    let sum = 0;
    for (let i = start; i <= end; i++) {
        line += i + " ";
        sum += i;
    }
    console.log(`${line}\nSum: ${sum}`);
    
}
printAndSum(50, 60);
