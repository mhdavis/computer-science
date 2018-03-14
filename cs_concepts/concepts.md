### Statically Typed vs. Dynamically Typed Languages

Languages that are **dynamically** typed do not have to be provided the data type of primitive data in advanced by the coder. This is because compiler intelligently determines what amount of memory is necessary for a particular data type.

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

### Closures

**Closures** are reusable code blocks that contain necessary execution data stored within their scope (see _First Class Functions_):

```javascript
// JS example:

function add(x) {
  return function addX(y) {
    return x + y;
  };
}

console.log(add(1)(2)); // => 3
// alternatively...
var addedOne = add(1);
var addedTwo = addedOne(2);
console.log(addedTwo); // => 3
```

In the example above we can see that `x` is called inside of `addX`. This is because `addX` is aware of `x` as it is defined in the one scope level above it. When the actual function call is preformed inside of `var addOne = add(1)`, we are providing `x` with the value of one.

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

### Model-View-Controller (a.k.a MVC)

An architectural pattern for creating web applications. Each facet is responsible for one element of the web application, thus adhering to a separation of concerns.

A following flow diagram is presented to understand the interaction between the three elements in an MVC-structured application:

```
                     +----- [ Model ] <-----+
                     |                      |
                    Updates            Manipulates
                     |                      |
                     V                      |
                  [ View ]            [ Controller ]
                      \                    /
                       \                  /
                        Sees           Uses
                         \              /
                          \            /
                           \          /
                            V        /
                             [ User ]
```

##### Model

The **Model** is responsible for managing data in the application. It responds to requests from the **view** as well as instructions from **controllers**.

##### View

The **view** is what the client predominantly interacts with. It is the visual representation of the application at its current state.

##### Controller

The **controller** acts as the go-between for the **view** and the **model**. Its in charge of receiving inputs and requests from the view, checking to see if they are valid, and then converting them into a command for the **model** to handle. Likewise, the **controller** also sends responses from the **model** to the **view** to be displayed for the user.

---
