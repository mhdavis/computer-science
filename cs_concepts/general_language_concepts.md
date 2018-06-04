### Statically Typed vs. Dynamically Typed Languages

Languages that are **dynamically** typed do not have to be provided the data type of primitive data in advanced by the coder. This is because the compiler intelligently determines what amount of memory is necessary for a particular data type.

```javascript
/*
JS example:
in this example you can see that a integer
is not specified as the variables data type.
*/

var item = 3;
```

Languages that are **statically** typed are the opposite. They required the coder to provide the type of data being provided to the compiler.

```java
/*
Java example:
in this example we have to specify the data type. Here we tell the compiler that we are dealing with an primitive data type of Integer
*/

int item = 3;
```

---

### First Class Functions

When a function is defined to be a _"first class citizen"_ in a language it means three essential things:

* The language allows for the passing of functions as arguments
* The language allows for functions to return other functions as values
* The language allows for functions to be assigned to variables or stored in data structures (objects, arrays, etc)

To put it simply, a language that contains first class functions means that functions are treated as values. A usually acronym is **RAPS** (Returned, Assigned, Passed, Stored.)

---

### Compilation

**Compilation** is the process in which syntactically human-readable source code is converted by a language's compiler into code that is machine readable code (usually in the form of an `.exe` executable file).

Technically speaking, the Compiler hands off the tree structure to the **Assembler** to be converted into binary code.
(Note: even this varies from language to language)

```
Programmer ------.exe-----> Client
```

The process by which a compiler operates is the following:

```
--chars--> [ Lexer ] --tokens--> [ Parser ] --tree-->
```

The two major steps in compilation are **Lexing** and **Parsing**.

_Fun Fact: Grace Hopper was the first programmer to write a compiler!_

##### Lexical Analysis (a.k.a. Lexing)

The process in which a compiler's lexer takes a series of characters and converts them into tokens which can then be interpreted by a language parser.

Lets examine the following code:

```javascript
// JS example:

function showId(x) {
  return x; // comment
}
```

As this function is lexed, one might think the compiler is lexing the code from the syntactically written javascript into the abstract lexical tokens:

```
FUNCTION
IDENT(showId)
LPAR
IDENT(x)
RPAR
LBRACE
RETURN
IDENT(x)
SEMI
RBRACE
```

Where the token `LPAR = left paren`, `RPAR = right paren`, `LBRACE = left brace`, `RBRACE = right brace`, and `SEMI = semicolon`.

#### Parsing

The transformation of a sequence of tokens into a tree (unstructured data into structured data).

In continuing with our lexing example, the tokens created are then converted to a tree structure:

```
       +------- FUNCTION -------+
       |            |           |
    IDENT()      IDENT()      RETURN
                                |
                              IDENT()
```

Notice that syntactically irrelevant tokens (ex. `LBAR`) are removed from the tree structure, but are important for developing the actual structure of the tree. These removed tokens are left inherently in the structure of the tree.

#### Assembling

**Assembling** is the process in which the **Assembler** (a program) takes in text based instructions produced after parsing and converts it to binary code, thereby making it readable by the machine.

Assembly languages have a one-to-one mapping to machine instructions, where as high-level programming languages have a one-to-many mapping to machine instructions.

---

### Interpretation

**Interpretation** is when a source code is passed as is from a Programmer to a client and then interpreted line-by-line, executing immediately upon interpretation completion (on-the-fly interpretation).

---

### Compilation vs. Interpretation: Pros and Cons

Listed below are some of the advantages and disadvantages to using interpreted versus compiled languages.

##### Compilation:

| Pros                  | Cons                            |
| --------------------- | ------------------------------- |
| - Fast                | - Not Cross-platform            |
| - Source Code Private | - Requires extra compiling step |
|                       | - Longer to Develop in          |

##### Interpretation:

| Pros               | Cons            |
| ------------------ | --------------- |
| - Cross-platform   | - Slower        |
| - No extra step    | - Public source |
| - Easier debugging |                 |

---

### Static Elements

A **static** element (variable or method) is an element which exists throughout the lifetime of the executed program. This means that unlike in the termination of a instance, where that instance's methods are variables are removed from runtime memory, a _static_ will continue to persist and be usable by other instances.

Static methods have the benefit of helping conserve memory usage in larger programs. If a program is not consistently required to create an instance to access a method (only to have that instance later terminated), it means that rather than have 8 different instances with 8 different instanced methods, you have 8 instances with access to the one method. This logic applies to static variables as well.

---

### Dependency Injection

A technique whereby one object (or static method) supplies the dependencies of another object.

---

### Singleton Design Pattern

A design pattern in object-oriented programming in which the instantiation of a class is restricted to one object. This is useful when exactly one object is needed to coordinate actions across the system.

[_Entry Source_](https://en.wikipedia.org/wiki/Singleton_pattern)

---

### Passed by Reference vs. Passed by Value

When a parameter is **passed by reference**, the caller and the callee use the same variable for the parameter. If the callee modifies the parameter variable, the effect is visible to the caller's variable.

When a parameter is **passed by value**, the caller and callee have two independent variables with the same value. If the callee modifies the parameter variable, the effect is not visible in the caller.

[_Entry Source_](https://stackoverflow.com/questions/373419/whats-the-difference-between-passing-by-reference-vs-passing-by-value)

---

### Semaphore

A variable or abstract data type used to control access to a common resource by multiple processes in a concurrent system.

A trivial example of a semaphore: Consider a variable A and a boolean variable S. A is only accessed when S is marked true. Thus, S is a semaphore for A.

[_Entry Source_](https://en.wikipedia.org/wiki/Semaphore_programming)

---

### Lambda / Anonymous Function

A function that is not bound to an identifier. They are often:

* Arguments passed to higher order functions, or
* Used for constructing the result of a higher order function that needs to return a function.

```javascript
// JS example

var adder = function(x) {
  // Here the returned function is
  // an anonymous function / lambda
  return function(y) {
    return x + y;
  };
};
add5 = adder(5);
add5(1) == 6;
```

[_Entry Source_](https://en.wikipedia.org/wiki/Anonymous_function) |
[_Example Code Source_](https://stackoverflow.com/questions/16501/what-is-a-lambda-function)

#### Difference Between Lambdas and Closures

A lambda is just an anonymous function.

A closure is any function which closes over the environment in which it was defined. This means that it can access variables not in its parameter list.

[_Comparison Source_](https://stackoverflow.com/questions/220658/what-is-the-difference-between-a-closure-and-a-lambda#220728)

---

### Platform Dependency

Let us take examine the case where two programs are compiled into executables, one is compiled on a windows system and the other is compiled on a linux system. The executable (.exe) produced after compilation on the windows system will not be runnable on the linux system. Similarly, the executable produced after compilation on the linux system will not be runnable on the windows system. This is because the executables produced are **Platform Dependent**.

---
