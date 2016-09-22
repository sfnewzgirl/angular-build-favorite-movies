# Favorite Movies App
## Angular Build Project
Misha LeClair
Screenshot here
![alt text](public/images/disneyland-app-screenshot.png)

## Objectives
* Build an app with Angular

This was my first time incorporating all the Angular lessons and labs in one place on an individual project, including more modular code with controllers, services, and directives.

* Use an external API

I have struggled with external APIs in past lessons and labs, so I made this a top priority. I wanted to solidify best practices for tapping into external APIs and accomplish this personal goal.

* Explore a new styling framework

I have solely used Bootstrap to compliment my CSS and was interested in exploring a new framework this time around. I pick Material Design Lite.

## Links

Live URL:

GitHub Repository: 

## Technologies Used
* HTML, CSS, JavaScript
* The Open Movie Database API (http://www.omdbapi.com/)
The OMDb API
* Bootstrap (flex technical requirement)
* Handlebars, AJAX
* Heroku
* Additional flex technical requirement (one-to-many model relationship)

## Code Examples

A core feature of ProTips is a user's ability to up vote or down vote a ProTip. We did this with three key steps. We used Sass to create an interactive button, split into an up and down vote. Then we created an AJAX call on the event listener that sent a dataType directly to the server.

```
function upVote (event) {
  $.ajax({
   method: 'PUT',
   url: '/api/protips/'+$(this).attr('data-id'),
   dataType: 'json',
   data: {voteStatus: 'up'},
   success: onSuccessVote,
   error: error
 });
}
```
Next we create a function on the server that edited the tipScore based on the user's button click. Allowing the user to edit an attribute and save it on the database.

```
app.put('/api/protips/:id', function (req, res) {
  db.ProTip.findOne({_id: req.params.id}, function(err, selectedProTip) {
      if (req.body.voteStatus == 'up') {
        selectedProTip.tipScore = selectedProTip.tipScore + 1;
      } else if (req.body.voteStatus == 'down') {
        selectedProTip.tipScore = selectedProTip.tipScore - 1;
      };
    selectedProTip.save(function (err, updatedTipScore) {
      if (err) {return console.log(err);}
      res.json(updatedTipScore);
    });
  });
});
```

## Wireframes

![alt text](public/images/disneyland-app-wireframe.jpg)

## Future Ideas
Create an API for more parks.
Expand vote up and vote down feature to rides, individual attractions, etc.
