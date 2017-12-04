'use strict';
importScripts('./build/sw-toolbox.js');

const VERSION = 'v0.3.0';

self.toolbox.options.cache = {
	name: 'ionic-cache-' + VERSION
};

// pre-cache our key assets
self.toolbox.precache(
	[
		'./build/main.js',
		'./build/vendor.js',
		'./build/main.css',
		'./build/polyfills.js',
		'./assets/img/map.png',
		'./assets/img/ngbe-logo.svg',
		'index.html',
		'manifest.json'
	]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.fastest);
self.toolbox.router.any('/*', self.toolbox.cacheFirst, {origin: 'https://ng-be.org'});

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
