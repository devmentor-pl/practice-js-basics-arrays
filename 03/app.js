const n = 24
const oddNumbers = []

for (let i = 1; i <= n; i++) {
    i % 2 !== 0 ? oddNumbers.push(i) : null
}

console.log({ oddNumbers })