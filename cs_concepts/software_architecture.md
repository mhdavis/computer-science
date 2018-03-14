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
