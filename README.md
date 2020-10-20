# Project Name
IronNext

## Description
Platform for former bootcamp students to keep on learning, creating, and sharing together.

## User Stories
-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I have access to the content, share my own favorite resources, and work together with other students 
-  **Login:** As a user I can login to the platform and have the benefits as mentioned as above
-  **Logout:** As a user I can logout from the platform so no one else can use it

-  **Get Resources** As a user I want to be able to get all the content that has been shared on the platform
-  **Search Resources** As a user I want to be able to search by main theme (for example: Web Dev, UI/UX, Data), language (for example: HTML, CSS, JavaScript), frameworks (for example: Bootstrap, ReactJS, Figma) and specific topics (for example: asynchronous programming, authorization)
-  **Add Resources** As a user I can add my favorite resources so that I can share it with the community

-  **Ask to team up** As a user I can ask the community to team up with me and work together on projects
-  **Join to team up** As a user I can join a project from another user and work together

## Backlog
User profile:
- name
- location
- email
- phone
- profile picture
- bootcamp (which one user has attended)
- bio
- portfolio / experience
- personal website
- github
- instagram
- facebook

Logged In User:
- see other users profile

# Client
## Routes
| Path | Component | Permissions | Behavior
|--------|------|--------|--| -------|
| /	Home |	anon only <AnonRoute> |	Landing Page with Navbar that includes links to Sign Up & Log In
| /signup	Signup | anon only <AnonRoute> |	Signup form, link to login, redirect to full homepage
| /login | Login |anon only <AnonRoute> |	Login form, link to signup, redirect to full homepage
| /logout | n/a	| user only <PrivateRoute> | Log out user
| /user |	User | logged in user only <PrivateRoute> | User Profile page
| /user/editprofile |	EditUser | user only <PrivateRoute> |	Form to edit/update user profile
| /webdev | WebDevMain | user only <PrivateRoute> | Main page for web development
| /webdev/html | WebDevHTML | user only <PrivateRoute> | Main page for HTML
| /webdev/css | WebDevCSS | user only <PrivateRoute> | Main page for CSS
| /webdev/javascript | WebDevJavaScript | user only <PrivateRoute> | Main page for JavaScript


| /webdev |



| Method | Path | Component | Permissions | Behavior | 
|--------|------|--------|--| -------|
| `get`  | `/` | HomePageComponent| public | just promotional copy|
| `post` | `/auth/signup` | SignupPageComponent| anon only| signup form, link to login, navigate to homepage after signup|
| `post` | `/auth/login` | LoginPageComponent | anon only |login form, link to signup, navigate to homepage after login |
| `post` | `/auth/logout` | n/a| anon only | navigate to homepage after logout, expire session |
| `get`  | `/restaurants` | RestaurantListPageComponent| public | shows all restaurants, links to details, search restaurants by name
| `post` | `/restaurants` | RestaurantCreatePageComponent | user only | creates a new restaurant, navigates to restaurant's detail page after creation
| `put` | `/restaurants/:id` | RestaurantDetailPageComponent  | public/user | details of one restaurant, if logged in - button to add to favorite, show star if in favorites already
| `delete` | `/restaurants/:id` | na | user only | delete resteraunt
| `get` | `/profile/me` | ProfilePageComponent | user only | my details, my favorite restaurants, restaurants created by me
| `get` | `**` | NotFoundPageComponent | public | 

## Components
Navbar Landing Page (not logged in)
- 
-

Navbar Home Page (logged in)

## Services
- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Restaurant Service
  - restaurant.list()
  - restaurant.search(terms)
  - restaurant.create(data)
  - restaurant.detail(id)
  - restaurant.addFavorite(id)
  - restaurant.removeFavorite(id)   
# Server
## Models
User model
username - String // required
email - String // required & unique
password - String // required
favorites - [ObjectID<Restaurant>]
Restaurant model
owner - ObjectID<User> // required
name - String // required
phone - String
address - String
## API Endpoints (backend routes)
- GET /auth/me
  - 404 if no user in session
  - 200 with user object
- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - email
    - password
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - passdword matches (404)
  - store user in session
  - 200 with user object
- POST /auth/logout
  - body: (empty)
  - 204
- POST /user/me/favorite
  - body:
    - restaurantId
  - validation
    - id is valid (404)
    - id exists (404)
  - add to favorites if not there yet
  - updates user in session
- DELETE /user/me/favorite/:restaurantId
  - validation
    - id is valid (404)
    - id exists (404)
  - body: (empty - the user is already stored in the session)
  - remove from favorites
  - updates user in session
- GET /restaurant?terms=foo
  - use search criteria if terms provided
  - 200 with array of restaurants
- POST /restaurant
  - body:
    - name
    - phone
    - address
  - validation
    - fields not empty
  - create restaurant
  - 200 with restaurant object
- GET /restaurant/:id

## Links

### Trello/Kanban
https://trello.com/b/1J0shfus/final-project-ironnext or picture of your physical board

### Git
The url to your repository and to your deployed project
[Client repository Link](http://github.com)
[Server repository Link](http://github.com)
[Deploy Link](http://heroku.com)

### Slides
The url to your presentation slides
[Slides Link](http://slides.com)