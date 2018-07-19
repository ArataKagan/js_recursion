###Questions

//1.What is recursion?

//A: Recursion is a technique which calls a function itself until it arrives at
// certain state.

// 2. When would a programmer want to write a recursive function instead of an
// iterative one?

//A: When a problem comes with many subproblems and tend to follow similar patterns.
// Since iterative function tend to involve more lines and get more complicated,
// solving the problem with recursion is preferred.

// 3. What is a base case and what is its role in a recursive function?

// A: At some point the recursion has to stop and a base case serves this
// role as a conditional statement to stop runnning the recursion forever.

// 4. What would happen if a programmer did not utilize a base case within a
// recursive function?

// A: It keeps running forever and the program crashes.

###Code

var factorial = function(n){
if(n === 0){
        return 1
    }else{
        return n * factorial(n-1);
    }
}
