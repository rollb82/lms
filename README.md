This is a sample of what was created from a React project for an lms system.

The components for build/tool would be within an electron driven desktop application.

The components inside lessons located via the path of "build/lessons/01/index.html" are used within a students lesson.  Each component/activity is populated via json data. Scores are calculated using methods and redux t confirm that a student has answered items correctly.

Each answer has a mistakes property that allows us to calculate a score correctly.

You can populate activities with a students previous answers by using the following in your web console. This method would be used along with an http request to restore previous answers for a student on a current page.

I know that using the window object is frowned upon however the project I was pulled into was built in a way that didn't allow us time to redesign how our components were built.  This is why I created a unique property name "NextGenerationActivities" to allow our react components give us access to a few methods that each individual component contains. 

window.NextGenerationActivities.restoreCompletedActivities['Labeling 1']([{"id":2,"value":"Google logo","correct":true,"disabled":true,"detached":true,"mistakes":1,"position":{"x":1112.671875,"y":1039.8125}},{"id":1,"value":"Stormtrooper","correct":true,"disabled":true,"detached":true,"mistakes":0,"position":{"x":1129.046875,"y":780.15625}},{"id":0,"value":"Search field","correct":true,"disabled":true,"detached":true,"mistakes":0,"position":{"x":809.375,"y":1007.0625}}])


The code above allows me to select the labeling activity with an id of "Labeling 1".  Each activity will have a method associated to showing answers. The restoreCompletedActivities is an object set with the ids of each activity our lesson contains.  Each activity id has a function as it's value.  This function allows us to set the answers based on what is returned from our server.