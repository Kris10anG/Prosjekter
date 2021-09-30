function counter() {
    for (var count = 1; ; count++) {  // infinite loop
      console.log(count + 'A'); // until 5
        if (count === 5) {
          return;
        }
        console.log(count + 'B');  // until 4
      }
    console.log(count + 'C');  // never appears
  }
  
  counter();
  
  // Output:
  // 1A
  // 1B
  // 2A
  // 2B
  // 3A
  // 3B
  // 4A
  // 4B
  // 5A
  