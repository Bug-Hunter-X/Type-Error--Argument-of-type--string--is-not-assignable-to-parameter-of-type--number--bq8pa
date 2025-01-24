function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' || typeof b === 'string') {
    return String(a) + String(b); 
  } else {
    return 0; // Or handle other cases appropriately
  }
}

const result1 = add(10, 5); // Returns 15
const result2 = add("hello", 5); // Returns "hello5"
const result3 = add(10, "world"); // Returns "10world"
const result4 = add("hello", "world"); // Returns "helloworld"