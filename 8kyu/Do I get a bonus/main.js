
// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).





function bonusTime(salary, bonus) {
    // your code here
      if(bonus === true) {
        return "£" + salary * 10
      } else if(bonus === false) {
        return "£" + salary
      } 
    } 
    
    
    // create conditional if bonus is true then salary should be multiplied by 10.
    // if bonus is false the fatcat did not make enough money and must receive only his stated salary
    
    //return ""£"(=\u00A3"
    
    
    
    //completed feb 01 2020