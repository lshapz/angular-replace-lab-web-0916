function ErrorMessage() {
	return {
		template: '<div>Oh no, an error occured!</div>'
	};
}

angular
	.module('app')
	.directive('errorMessage', ErrorMessage);