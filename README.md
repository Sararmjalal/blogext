# blogext
Simple blog site powered by Next.js

more information will add here on how this project works.

## What you need to know about client directory
Client directory uses React.js as a library and Next.js as its freamwork (note that I used MUI for its UI).
I'm a junior React developer at this point and this is my first exprience using Next.js and Material UI altoghether.

Now, let's have a quick guide about what I've written and how can you use this in your first Next.js project.

### The /apis directory
The apis directory has a list of all apis used in blogext, and some hooks to post data (for using in general).
It has a client.js for post methods and client side fetchings, and a statics.js that its data will passed to getStaticProps later. That's why I called it statics.
Note that you can use axios instead of fetch or .then instead of async/await.

#### /apis/client.js
For fetching client side data, I used useSWR for two main reasons:
1) Its data often changes and it's on a client side area (dashboard)
2) It caches data automatically so fetching data again is not as time consuming as client side fetching.

Note that if you want to use useSWR hook, you should read its documantation. For refetching data using swr, I used it's mutate function. So if you want to use states for re-rendering your component (for any reason) useSWR is not a good choice and you should do everything in the old fashion way (fetch in useEffect, setState the data and call fetch again)

[useSWR Documantation](https://swr.vercel.app/)

in client.js, fetcher() and refetch() especially written for swr, postJSON() and postFormData() is a function for post method apis and finally, postMe() is a function that do the authorization, take the user's data and send it as a res so you do whatever you want with it.

#### /apis/statics.js
statics.js is a file full of get method apis defined in the server that I mostly used them in getStaticProps() and getStaticPaths().

Note that you don't have to fetch apis like this, but it's better if you do.

### The /components directory
It explains itself

### The /layouts directory
The layouts directory has three layouts defined in them. 
#### /layouts/main.js: For the whole site
#### /layouts/dashboard.js: For the paths includes 'dashboard'
#### /layouts/provider.js: State provider for redux. I imported this in _app.js to use it wherever I want.

### The /lib directory
The lib directory holding my custom hooks for not using a function twice. My mentor thought me this and that's wise. I recommend you to do the exact same thing for your project as well.

### The /pages and /public directory
See the /client.README for more details

### The /store directory
The store directory holds related files for redux, including its slice and store. I used redux-toolkit and I recommend you to the exact same thing. I use my redux state for every user condition in my project like who can access dashboard, when can I see the dashboard and logout link on the header and wether I can see the sign-in page or not.
Note that you can build your condition on token as well, but if you want to become more professional at handling global state, I recommend you to the exact same thing.

### The /styles and /icons directory
It explains itself


## What you need to know about server directory
Server directory is a simple blog-api programmed for Junior Frontend Developers to simply create their first real (but simple) app.
note that the server/src/db and server/src/public directories must include in ####.gitignore file and for my project to have initial data, these directories are available now.

That's it! Hope you enjoy creating your first Next.js app!
