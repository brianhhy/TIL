function solution(a, b, c, d) {

    if (a === b && b === c && c === d) return 1111 * a;
  
   
    if (a === b && b === c) return Math.pow(10 * a + d, 2);
    if (a === b && b === d) return Math.pow(10 * a + c, 2);
    if (a === c && c === d) return Math.pow(10 * a + b, 2);
    if (b === c && c === d) return Math.pow(10 * b + a, 2);
  
  
    if (a === b && c === d && a !== c) return (a + c) * Math.abs(a - c);
    if (a === c && b === d && a !== b) return (a + b) * Math.abs(a - b);
    if (a === d && b === c && a !== b) return (a + b) * Math.abs(a - b);
  
  
    if (a === b && c !== d && a !== c && a !== d) return c * d;
    if (a === c && b !== d && a !== b && a !== d) return b * d;
    if (a === d && b !== c && a !== b && a !== c) return b * c;
    if (b === c && a !== d && b !== a && b !== d) return a * d;
    if (b === d && a !== c && b !== a && b !== c) return a * c;
    if (c === d && a !== b && c !== a && c !== b) return a * b;
  
  
    return Math.min(a, b, c, d);
  }
  