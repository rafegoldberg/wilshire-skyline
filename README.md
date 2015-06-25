Wilshire Skyline
===

Kirby-based, Grunt-powered infosite for Wilshire Skyline.

## Site Structure & Usage

### Kirby

This framework is built around the [Kirby CMS](http://getkirby.com). Kirby is a simple yet full-featured content managment system and includes a templating system, simple custom fields and post-types right out of the box, [as well as a number of other useful features](http://getkirby.com/docs/cheatsheet).

###### Server Setup
Kirby is a PHP-based content managment system and uses directory and file structures to manage your site's content. (As opposed to a database like Wordpress.) Because of this, it's pretty simple to get it up and running. All of Kirby's required files are included in the repo. The only other step is to run a basic web server that supports PHP. Simple, GUI tools like [XAMMP](https://www.apachefriends.org/index.html) or [MAMMP](https://www.mamp.info/en/) will work just fine, though there are also various Grunt packages which can spool up a basic server if you prefer.

###### Site Management Panel

Kirby provides an admin “Panel” where you can manage your site, whether that's tweaking metadata, adjusting your page structure, or editing your content and copy. You can access the Panel from `localhost/path/to/project/panel`.

### Grunt

This framework assumes a simple frontend architecture and workflow built using [Grunt](http://gruntjs.com). The site uses a number of Grunt tools  (NPM packages, or sometimes ‘plugins’) to compile SCSS and to concatenate and uglify Javascript.

###### Configuration

The architecture of the Grunt project is defined in the `Gruntfile.js`. This setup file, along with the project config and the NPM package directory, are located in the project root alongside Kirby. The project assumes that the set of NPM packages listed in `package.json` are installed. (See next section for a quick install guide.) The required packages are as follows:

- [`grunt`](http://gruntjs.com/getting-started)
- [`autoprefixer`](https://github.com/nDmitry/grunt-autoprefixer)
- [`contrib-clean`](https://github.com/gruntjs/grunt-contrib-clean)
- [`contrib-jshint`](https://github.com/gruntjs/grunt-contrib-jshint)
- [`contrib-nodeunit`](https://github.com/gruntjs/grunt-contrib-nodeunit)
- [`contrib-sass`](https://github.com/gruntjs/grunt-contrib-sass)
- [`contrib-uglify`](https://github.com/gruntjs/grunt-contrib-uglify)
- [`contrib-watch`](https://github.com/gruntjs/grunt-contrib-watch)

###### Installation

While the above NPM packages are declared as requirements the actual innards of these plugins are ignored by the Git repo. This means you have to install them when you initially pull the repo to your local machine. To be completely honest, this process does require a tiny bit of command line action. But don't let that get you down! Assuming you know how to copy and paste it should be pretty easy:

1. `cd` in to the project's root directory
2. From the root, run `npm install`

   <small style="color:#8E8E8E;">**Having issues?** Try running this command as the root user, so: `sudo npm install`. If you're still running in to trouble [<span style="color:#666;text-decoration:underline;">try running **`chmod`** to reset permissions</span>](http://stackoverflow.com/questions/3740152/how-to-set-chmod-for-a-folder-and-all-of-its-subfolders-and-files-in-linux-ubunt) of the site's files and directories to `644` and `755`, respectively.</small>

3. **Voila!** That was easy, no?

(These steps assume that you *already* have [Node.js](https://nodejs.org/) and the [NPM cli tools](http://gruntjs.com/getting-started#installing-the-cli) running on your machine.) This 'lil one-liner should now set about installing all of the necessary dependencies listed above. Once it's finished up you should be set to rock. Now you can run `grunt` to compile SCSS, concatenate and uglify JS, etc. Or try some of the other predefined tasks from the `Gruntfile.js` to auto-watch for changes, or run concurrent process. or run concurrent process.