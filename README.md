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

For fetching my blogs, I used useSWR for two main reasons:
1) Its data often changes and it's on a client side area (dashboard)
2) It caches data automatically so fetching data again is not as time consuming as client side fetching.
