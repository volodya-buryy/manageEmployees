let UserFactory = function ($document, $rootScope, $q, $window) {
	const user = {};

	let getUser = () => {
		return user;
	};

	let isSignedIn = () => {
		return user.isSignedIn;
	};
	var d = $q.defer();
	function onScriptLoad() {
		// Load client in the browser
		$rootScope.$apply(function() { d.resolve($window.d3); });
	}
	let D3 = () => {
		var scriptTag = $document[0].createElement('script');
		scriptTag.type = 'text/javascript';
		scriptTag.async = true;
		scriptTag.src = 'http://d3js.org/d3.v3.min.js';
		scriptTag.onreadystatechange = function () {
			if (this.readyState == 'complete') onScriptLoad();
		}
		scriptTag.onload = onScriptLoad;

		var s = $document[0].getElementsByTagName('body')[0];
		s.appendChild(scriptTag);
	}

	return { getUser, isSignedIn, D3 };
};
UserFactory.$inject = ['$document', '$rootScope', '$q', '$window']
export default UserFactory;
