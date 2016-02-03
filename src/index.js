/**
 * Created by claysissing on 03/02/2016.
 */
// index.js
// Notice that lodash isn't being imported via a relative path
// but all the other modules are. More on that in a bit :)
import _ from "lodash";
import Emmet from "./emmet";
import Wyldstyle from "./wyldstyle";
import Benny from "./benny";
import { getRandom } from "./utils";

// Taking advantage of new scope controls in ES6
// once a const is assigned, the reference cannot change.
// Of course, transpiling to ES5, this becomes a var, but
// a linter that understands ES6 can warn you if you
// attempt to re-assign a const value, which is useful.
const emmet = new Emmet();
const wyldstyle = new Wyldstyle();
const benny = new Benny();
const characters = { emmet, wyldstyle, benny };

// Pointless generator function that picks a random character
// and asks for a random quote and then yields it to the caller
function* randomQuote() {
    const chars = _.values( characters );
    const character = chars[ getRandom( 0, chars.length - 1 ) ];
    yield `${character.name}: ${character.saySomething()}`;
}

// Using object literal shorthand syntax, FTW
export default {
    characters,
    getRandomQuote() {
        return randomQuote().next().value;
    }
};