## Front End - State Management

### Status
Accepted


### Context
The front end application state management is important to get right from the beginning.
Main alternatives are:
 - __useState:__
   
    *pros:* Clean & simple
   
    *cons:* Anything beside use on the same component becomes tricky having to pass down props, risk of prop drilling
   
 - __Context Provider:__
   
    *pros:* Can bec as global or as local as needed
   
    *cons:* Its syntax pollutes the DOM tree. If we want to split state logic into different context providers then each of those will need to be manually added to the DOM tree
   
 - __Redux / Redux Toolkit:__
   
    *pros:* State logic can be separate from rest of app, DOM tree not polluted, related data can live in the same `slice`
   
    *cons:* A bit of a learning curve. Can potentially end up with lots of boilerplate code.


### Decision
To use `Redux` and `Redux Toolkit` for almost all the state management throughout the app.

There are some small cases (e.g. NewPlayerForm) where is ok to use `useState` if the state is simple and only affects a single component.


### Consequences
It becomes easier to share state between components, including components in the same DOM tree branch, e.g. parents to children, children to parent.

The state management can be split into specific `slices` allowing for better compartmentalization of the logic, and allowing to have related data reside on the same `slice`.

It requires a little more planning and designing when creating the `slices`.

Accessing/Fetching the state has a cleaner and re-usable syntax.

