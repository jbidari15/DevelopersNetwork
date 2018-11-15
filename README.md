
# Developer's Network

An application to connect Developers

Live Demo: https://connectdevelopers.herokuapp.com/

* Users can: 
  - Sign Up and Login to the app
  - Create their own profile and view profiles of other.To get the avatar (profile imamge), user need to have a [Gravatar](https://en.gravatar.com/)
  - Edit and Update their Profile
  - Create a Post , add comment on other's post , like and dislike other's post
  
  ## Technologies used

* [Reactjs](https://reactjs.org/docs/getting-started.html) 
* [ReduxJS](https://redux.js.org/) 
* [Nodejs](https://nodejs.org/en/docs/) 
* [MongoDB](https://docs.mongodb.com/) 
* [PassportJS](http://www.passportjs.org/docs/) 
  

### Installing


```
> git clone https://github.com/jbidari15/DevelopersNetwork
> npm install (installs the dependencies for both front-end and back-end)
> npm run dev (this one starts the front-end and back-end server)

```
### List of API used

#### User API
* `'/api/users/signup' - POST` - SignUp user
* `'/api/users/login' - POST` - Login user

#### Post API

* `'/api/posts' - GET`- Get all posts
* `'/api/posts/:post_id' - GET` - Get specific post
* `'/api/posts' - POST`- Create new post
* `'/api/posts/like/:post_id' - POST`- Like post
* `'/api/posts/unlike/:post_id' - POST`-Unlike post
* `'/api/posts/comment/:post_id' - POST`- Add comment to post
* `'/api/posts/:post_id' - DELETE` - Delete specific post
* `'/api/posts/comment/:post_id/:comment_id' - DELETE`- Delete comment


#### Profile API
* `'/api/profile' - GET` - Get current user's profile
* `'/api/profile' - POST` - Create/Edit profile
* `'/api/profile' - DELETE` - Delete current user's profile and account
* `'/api/profile/all' - GET` - Get all profile
* `'/api/profile/handle/:handle' - GET` - Get profile by handle
* `'/api/profile/user/:user_id' - GET` - Get profile by _id
* `'/api/profile/experience' - POST` - Add experience to current profile
* `'/api/profile/education' - POST` - Add education to current profile
* `'/api/profile/experience/:exp_id' - DELETE` - Delete experience from current user's profile
* `'/api/profile/education/:edu_id' - DELETE` - Delete education from current user's profile



## Author

* **Jaya Kumar Bidari** - [jbidari15]


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


