/*
 * THE BOM ONLY MAKES SENSE IN A BROWSER ENVIRONMENT
 */

// from within the global scope
const global = this;

// Going Global
x = 6; // global variable created
// << 6

window.x; // same variable can be accessed as a property of the window object
// << 6

// both variables are exactly the same
window.x === x;
// << true

window.parseInt(4.2);
// << 4

window.isNaN(4.2);
// << false

/*
 * Changes in ES6
 */
Number.parseInt(4.2);
// << 4

Number.isNaN(4.2);
// << false

// Dialogs
window.alert("Hello");
// << undefined

window.confirm("Do you wish to continue?");
// << undefined

window.prompt("Please enter your name:");

/*
 * USE WITH CARE
 */

// Browser
window.navigator.userAgent;
// << "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/602.4.8 (KHTML, like Gecko) Version/10.0.3 Safari/602.4.8";

// Location
window.location.href;
// << "https://www.sitepoint.com/premium/books/javascript-novice-to-ninja";

window.location.href = "https://www.sitepoint.com/javascript/";
// << "https://www.sitepoint.com/javascript/";

window.location.protocol;
// << "https:";

window.location.host;
// << "www.sitepoint.com";

window.location.hostname;
// << "www.sitepoint.com";

window.location.port;
// << "";

window.location.pathname;
// << "/premium/books/javascript-novice-to-ninja";

window.location.search;
// << "?q=javascript&limit=24&offset=0&page=1&content_types[]=All&slugs[]=all&states[]=available&order="

window.location.hash;
// << "";

window.location.origin;
// << "https://www.sitepoint.com";

window.location.assign("https://www.sitepoint.com/");

window.location.toString();
// << "https://www.sitepoint.com/javascript/"

// The Browser History
window.history.go(1); // goes forward 1 page
window.history.go(0); // reloads the current page
window.history.go(-1); // goes back 1 page

// Controlling Windows
const popup = window.open(
  "https://sitepoint.com",
  "SitePoint",
  "width=400,height=400,resizable=yes"
);

popup.close();

window.moveTo(0, 0); // will move the window to the top-left corner of the screen

window.resizeTo(600, 400);

/*
 * ANNOYING GROUPS
 */

// Screen Information
window.screen.height;
// << 1024;

window.screen.width;
// << 1280;

window.screen.availWidth;
// << 1280;

window.screen.availHeight;
// << 995;

window.screen.colorDepth;
// << 24

/*
 * MORE USEFUL ON MOBILE
 */

// The Document Object
document.write("Hello, world!");

document.write("<h1>Hello, world!</h1>");

<h1>
  <script>document.write("Hello, world!")</script>
</h1>;

// Cookies
("name=Superman; hero=true; city=Metropolis");

/*
 * EU COOKIE DIRECTIVE
 */

// Creating Cookies
document.cookie = "name=Superman";
// << "name=Superman"

document.cookie = "hero=true";
// << "hero=true"

document.cookie = "city=Metropolis";
// << "city=Metropolis"

// Changing Cookie Values
document.cookie = "name=Batman";
// << "name=Batman";
document.cookie = "city=Gotham";
// << "city=Gotham";

document.cookie;
// << "name=Batman; hero=true; city=Gotham"

const cookies = document.cookie.split("; ");
for (crumb of cookies) {
  const [key, value] = crumb.split("=");
  console.log(`The value of ${key} is ${value}`);
}
// << The value of name is Batman
// The value of hero is true
// The value of city is Gotham

// Cookie Expiry Dates
const expiryDate = new Date();
const tomorrow = expiryDate.getTime() + 1000 * 60 * 60 * 24;
expiryDate.setTime(tomorrow);

document.cookie = `name=Batman; expires=${expiryDate.toUTCString()}`;

document.cookie = "name=Batman; max-age=86400"; // 86400 secs = 1 day

/*
 * DON'T RELY ON COOKIE EXPIRY
 */

// The Path and Domain of Cookies
document.cookie = "name=Batman; path=/";

document.cookie = "name=Batman; domain=sitepoint.com";

// Secure Cookies
document.cookie = "name=Batman; secure";

// Deleting Cookies
document.cookie = "name=Batman; expires=Thu, 01 Jan 1970 00:00:01 GMT";

/*
 * CUMBERSOME COOKIES
 */

// Timing Functionns
window.setTimeout(() => alert("Time's Up!"), 3000);
// << 4

window.setTimeout(() => alert("Time's Up!"), 3000);
// << 5

window.clearTimeout(5);
// << undefined

function chant() {
  console.log("Beetlejuice");
}

const summon = window.setInterval(chant, 1000);
// << 6

window.clearInterval(summon);

/*
 * USING THE 'THIS' KEYWORD
 */

const person = {
  name: "Superman",
  introduce() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

setTimeout(person.introduce, 50);
// << Hi, I'm

/*
 * DON'T RELY ON COOKIE EXPIRY
 */

// The Path and Domain Cookies
document.cookie = "name=Batman; path=/";

document.cookie = "name=Batman; domain=sitepoint.com";

document.cookie = "name=Batman; secure"; // Secure Cookies

// Deleting Cookies
document.cookie = "name=Batman; expires=Thu, 01 Jan 1970 00:00:01 GMT";

/*
 * CUMBERSOME COOKIES
 */

// Timing Functions
window.setTimeout(() => alert("Time's Up!"), 3000);
// << 4

window.setTimeout(() => alert("Time's Up!"), 3000);
// << 5

window.clearTimeout(5);
// << undefined

function chant() {
  console.log("Beetlejuice");
}

const summon = window.setInterval(chant, 1000);
// << 6

window.clearInterval(summon);

/*
 * USING THE THIS VIDEO
 */

const person = {
  name: "Superman",
  introduce() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

setTimeout(person.introduce, 50);
// << Hi, I'm
