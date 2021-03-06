/*
 * (C) Copyright 2012, IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function() {
	var href = location.href,
		isDebugLoader = /[&?]debugLoader=1/.test(href);
	
	// make sure we use the global require object
	this.require = {
		packages: [
	   		{
	   			name: 'dojo',
	   			location: '../dojo-1.8.0/dojo',
	   			lib: '.'
	   		},
	   		{
	   			name: 'dijit',
	   			location: '../dojo-1.8.0/dijit',
	   			lib: '.'
	   		},
	   		{
	   			name: 'dojox',
	   			location: '../dojo-1.8.0/dojox',
	   			lib: '.'
	   		}
	   	],
	   	
	   	paths: {
	   		js: "../res/js"
	   	},
	   	
		has: {
			"dojo-error-api" : isDebugLoader,
			"dojo-trace-api" : isDebugLoader,
			"host-browser" : 1
		},
		
		// Enable the desired loader tracing options 
		trace: {
			"loader-inject":isDebugLoader,
			"loader-inject-combo": isDebugLoader,
			"loader-inject-combo-reject": isDebugLoader,
			"loader-define":isDebugLoader,
			"loader-exec-module":isDebugLoader,
			//"loader-run-factory":isDebugLoader,
			//"loader-finish-exec":isDebugLoader,
			"loader-define-module":isDebugLoader
		},

		// This option only has meaning if has.dojo-timeout-api is enabled
		waitSeconds: 10,
	
		combo: {
			contextPath: "/test/aggr",
			expandRequire: true,
			cacheBust: '${project.version}'
		},
		
		deps: [
	       "dojo/ready",
	       "dojo/parser", 
		    "js/bootstrap"
		],
		
		callback: function(ready, parser) {
			ready(function() {
				parser.parse();
			});
		}
	};
	
	// get combo propery overrides from URL
	for (var s in {optimize:0,expandRequire:0,showFilenames:0,noCache:0,exportNames:0}) {
		var regex = new RegExp("[&?]"+s+"=([^&]*)","i");
		var result = regex.exec(href) || [];
		if (result.length > 1) {
			require.combo[s] = result[1];
		}
	}
	
})();
