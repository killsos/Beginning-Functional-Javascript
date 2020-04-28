const double = (n) => n * 2;
const increment = (n) => n + 1;

// without pipeline operator
console.log(1, double(increment(double(double(5))))) // 42

// with pipeline operator
console.log(2, 5 |> double |> double |> increment |> double); // 42