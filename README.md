# SimplifiedWebpack_babel_server
webpack, babel and the server, all in one, served from dist

## What is Webpack?
Check out their website at https://webpack.js.org/

Webpack is a very deep tool, but we are just doing a shallow dive for the moment.  Webpack is a static module bundler.  What does that mean?  It means that it will take multiple scripts and combine them into 1 script.  Fewer things to load means that your site has less latency.  Latency is the the wait time in a process.  We want our sites to be fast for the end user!  

Nearly all modern JavaScript frameworks utilize webpack and babel.  In our class we will be using Vue.  Vue uses taskrunners, babel and webpack to streamline the development process.

The core concepts in webpack are:
1. **Entry**: What script do you start your application with?  Where does it live in your development environment?
2. **Output**:  Where should everything go when the work is compiled?  
3. **Loaders**: Processing file types other than javascript, like css, jade, images, text files, etc...
4. **Plugins**: Plugins let you expand what webpack can do.  A good plugin setup can arrange and optimize the files in your site.
5. **Mode**: Typically this is either production or development.  
    1. **Production** is the end product that goes out to the world.  It is often minimized to make it small, and a little hard for the average user to read.  This is good.  We don't want folks to reverse engineer our code.
    2. **Development** is for us, the developers.  The code still has all its lines and spaces so it is easy for us to read.  We want to see the guts of what we are making.  This helps us to fine tune things and figure out problems.
6. **Browser Compatability**: We want our code to compile down to ES5 JavaScript to bring our creations to the largest possible audience.  
7.  **Environment**: To do all these amazing things, we need to run this on node.js 8 or higher.

Webpack can seem very big, and there is a tonne you can do with it.  For more information please visit: https://webpack.js.org/concepts/

## What is Babel
Check out the Babel website at https://babeljs.io/

Babel is the natural partner to Webpack.  Babel converts modern JavaScript to ES5 JavaScript which came out in 2009. Babel is run by volunteers, and has a huge supporting community.  Webpack uses babel-loader to function.  What Babel and Webpack do together is **transpile**(fancy term for converting from one kind of code to another) from es6+ to es5.

## Debugging
The coolest part about using babel and webpack, is how they handle bugs.  You might think that this method of converting and compiling code would make debuggings difficult.  The cool part is that they don't.  They use a source map, which will pinpoint where in the original source code an error likely came from.  


# What does each part do?

## Folders

### dist folder
The **dist** folder holds the output of your javascript files being combined into one file, as well as any other files you may choose to bring across like images, html, css, etc.

Dist stands for distribution

### src folder
The **src** folder contains the files we edit for the website!  Src stands for source.

## Files
Some files will start with a dot.  Files that start with a dot are system files that are not typically visible to the end user.  We use several of these for our project!

## System Files

### .babelrc
.babelrc holds settings for babel.  In this file we list the presets used to convert between types of code.  What types of code?  We are using a preset called preset-env, which is used to  convert newer JavaScript to ES5 JavaScript.  We do this because ES5 JavaScript which came out around 2009 is the most compatible version of JavaScript with older browsers.

### .gitignore
This whole project is being stored on git.  We don't want store certain files and folders on git for many reasons like:
1. They are too big.
2. They can be loaded afterwards from npm, and saving them in our project would be a waste of space.

Have a look inside .gitignore and you will see all the file and folder names we do not want to push to our git repo.

## Non System Files

### package.json
The package.json file holds all the descriptive information about our project.  What info?
1. The name of your project.
2. The version number of your project.
3. A description of what your project is about
4. Scripts that node will run for you on command.  These are also called task runners.  They do background work for you, like converting sass to css, or ES6 and higher JavaScript to ES5.  My favourite scripts reload your page on every save, making it easier to figure out when your project breaks.
5. Keywords to find your project if it on a repo like github
6. The authors name, so you can show you built the project, or you can reach out to who did.
7. The type of license on the project, so you can see if it is open source!
8. devDependencies:  This lets us see what packages are being used from npm that are helping us to build our project, but will not launch with our project.
9. Dependencies:  These are npm packages that will launch with our project, and are needed for it to function.

### package-lock.json
This file is for node to look at.  It give the tree of packages that are used to run and/or build your project.

### README.md
This file is full of helpful notes you should read to learn more about the project!

### webpack.config.js
This file is a biggie!  It handles all sorts of things like:
1. ports to serve your app from
2. where your file is coming from
3. where your file exports to
4. rules for what exports to where!

Open this file up and have a look at the provided notes in the code!

## A Final Note:  How to Shut Down your Server When You Are Done!
Click on your terminal and press **control-c**

Yep, thats all it takes.