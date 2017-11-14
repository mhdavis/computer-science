// =============================================================

/* QUESTION
var fruits = ['apple, 'banana', 'orange']
using JS determine if fruits contains an orange?
*/

let fruits = ['apple', 'banana', 'orange'];

let orange = fruits.find(function (item) {
  return item === 'orange'
});

console.log(orange);

// =============================================================

/* QUESTION
Name and explain the main RESTful HTTP verbs.
*/

/* ANSWER:
GET - Retrieve data from an API or server, equivalent of Read
in CRUD operations

POST - Send or create data to the server / database, equivalent
of Create in CRUD operations

PUT - Update existing data in the server / database, equivalent
of Update in CRUD operations

DELETE - Remove or eradicate some form of existing data in server /
database, equivalent of Delete in CRUD operations
*/

// =============================================================

/* QUESTION
Explain what MVC means and
why it is important in web development.
*/

/* ANSWER:
  MVC stands for Model View Controller,
  and is a software architectural pattern
  for creating user interfaces. The View corresponds
  to the portion of the software that the user interacts
  with and sees. The user uses the controller portion
  of the application to manipulate the model, which
  in most cases can be seen as a place for data storage,
  that when updated, updates the user view.

*/

// =============================================================

/* QUESTION
What are the advantages/disadvantages
of using a NoSQL vs SQL database?
*/

/*
  The major difference has do to with the
  advantages and disadvantages of relational
  vs. non-relational databases. In the case of MySQL,
  a relational database allows for separation of data
  items that can be connected via foreign keys. This allows
  for database structure mutability, in which a coder can set
  up a database without necessarily worrying about wholistic
  structure of data organization. In the case of a Non-Relational
  Database, a greater amount of thought has to be put into the architecture
  of a model, because alteration of that type of structure
  gets difficult as the number of data entries increases.
*/

// =============================================================
