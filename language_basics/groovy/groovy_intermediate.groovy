// ---------------- CLOSURES -------------------
def square = { it * it }
assert [1,4,9] == [1,2,3].collect(square)

// Groovy Step Method
def lastRevision = 0.9

// Here, the last argument passed is a closure
0.1.step(lastRevision, 0.1) { currentRevision ->
  println( currentRevision )
}

// Lists, Maps, and Ranges
