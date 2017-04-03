/** NAMESPACE PATTERN
 * Allows you to create a global object 'Namespace' for your app
 * emulating those of other languages. Built to not pollute the
 * global scope and should be built to not overwrite anything.
 *
 * Benefits: Avoid polluting global scope, common usage by others
 * Drawbacks: Not any, besides more lines of code
 */

var SAMPLEAPP = SAMPLEAPP || {};
// Avoid overwriting previous SAMPLEAPP if it exists

//Now, create a namespace function to build out JS namespace

SAMPLEAPP.namespace = function (ns_string) {
	var parts = ns_string.split('.');
	var partsLength = parts.length;
	var parent = SAMPLEAPP;
	var i;

	if (parts[0] === 'SAMPLEAPP') {
		parts = parts.slice(1);
	}

	for (i = 0; i < partsLength; i += 1) {
		if (typeof parent[parts[i]] === 'undefined') {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
};

//Implement namespace pattern, which will create spaces via dot notation as defined above

SAMPLEAPP.namespace('SAMPLEAPP.advancedJS.learning');