'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pathUtilities = function () {
  function pathUtilities() {
    _classCallCheck(this, pathUtilities);
  }

  _createClass(pathUtilities, null, [{
    key: 'isNameHiddenName',
    value: function isNameHiddenName(name) {
      var position = name.search(/^\..+/),
          bottommostNameHiddenName = position !== -1;

      return bottommostNameHiddenName;
    }
  }, {
    key: 'removeMasterDirectoryNameFromPath',
    value: function removeMasterDirectoryNameFromPath(path) {
      path = path.replace(/\-master/, '');

      return path;
    }
  }]);

  return pathUtilities;
}();

module.exports = pathUtilities;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvcGF0aC5qcyJdLCJuYW1lcyI6WyJwYXRoVXRpbGl0aWVzIiwibmFtZSIsInBvc2l0aW9uIiwic2VhcmNoIiwiYm90dG9tbW9zdE5hbWVIaWRkZW5OYW1lIiwicGF0aCIsInJlcGxhY2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGE7Ozs7Ozs7cUNBQ29CQyxJLEVBQU07QUFDNUIsVUFBTUMsV0FBV0QsS0FBS0UsTUFBTCxDQUFZLE9BQVosQ0FBakI7QUFBQSxVQUNNQywyQkFBNEJGLGFBQWEsQ0FBQyxDQURoRDs7QUFHQSxhQUFPRSx3QkFBUDtBQUNEOzs7c0RBRXdDQyxJLEVBQU07QUFDN0NBLGFBQU9BLEtBQUtDLE9BQUwsQ0FBYSxVQUFiLEVBQXlCLEVBQXpCLENBQVA7O0FBRUEsYUFBT0QsSUFBUDtBQUNEOzs7Ozs7QUFHSEUsT0FBT0MsT0FBUCxHQUFpQlIsYUFBakIiLCJmaWxlIjoicGF0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgcGF0aFV0aWxpdGllcyB7XG4gIHN0YXRpYyBpc05hbWVIaWRkZW5OYW1lKG5hbWUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5hbWUuc2VhcmNoKC9eXFwuLisvKSxcbiAgICAgICAgICBib3R0b21tb3N0TmFtZUhpZGRlbk5hbWUgPSAocG9zaXRpb24gIT09IC0xKTtcblxuICAgIHJldHVybiBib3R0b21tb3N0TmFtZUhpZGRlbk5hbWU7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlTWFzdGVyRGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC1tYXN0ZXIvLCAnJyk7XG4gIFxuICAgIHJldHVybiBwYXRoO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0aFV0aWxpdGllcztcbiJdfQ==