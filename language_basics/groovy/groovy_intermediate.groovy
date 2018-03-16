// ---------------- CLOSURES -------------------
class ClosuresClass {
  def square = { it * it }
  assert [1,4,9] == [1,2,3].collect(square)

  // Groovy Step Method
  def lastRevision = 0.9

  // Here, the last argument passed is a closure
  0.1.step(lastRevision, 0.1) { currentRevision ->
    println( currentRevision )
  }

  // Here are some addition examples of closures
  def item = 1
  { item ++ }
  { -> item++ }

  { println it }
  { it ->  println it }
  { name -> println name }

  { String x, int y -> println "hey ${x} the value is ${y}"}

  { reader ->
    def line = reader.readLine()
    line.trim()
  }
}
// Lists, Maps, and Ranges
