/** CHAINING PATTERN
 * Allows you to call methods on an object one after the other,
 * without returning the previous operations values,
 * or spittling method calls onto multiple lines.
 *
 * Benefits: Concise, readable, encourages specialize functions
 * Drawbacks: Harder to debug, some dismiss as not worth using
 */

// Example of chaining pattern implementation
var myObj = {
	myName: 'johnathan brooks',
	reverse: function () {
		this.myName = this.myName.split('').reverse().join('');
        return this;
	},
    update: function () {
    	this.myName = 'faceless hacker';
    	return this;
    },
    read: function () {
    	return 'my current username is: ' + this.myName;
    }
}

console.log(myObj.update().reverse().read());
// Here's the same task WITHOUT chaining\
// NOT YET BUILT
