'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var needle = require('needle'),
    JSZip = require('jszip');

var Entries = require('./entries');

var Project = function () {
  function Project(name, entries) {
    _classCallCheck(this, Project);

    this.name = name;
    this.entries = entries;
  }

  _createClass(Project, [{
    key: 'toJSON',
    value: function toJSON() {
      var name = this.name,
          entriesJSON = this.entries.toJSON(),
          entries = entriesJSON,
          ///
      json = {
        "name": name,
        "entries": entries
      };

      return json;
    }
  }], [{
    key: 'fromURL',
    value: function fromURL(url, callback) {
      var follow_max = 1,
          options = {
        follow_max: follow_max
      };

      needle.get(url, options, function (error, response) {
        if (!error && response.statusCode == 200) {
          var body = response.body;

          JSZip.loadAsync(body).then(function (jsZip) {
            Project.fromJSZip(jsZip, callback);
          });
        } else {
          callback(null);
        }
      });
    }
  }, {
    key: 'fromJSZip',
    value: function fromJSZip(jsZip, callback) {
      var project = null;

      Entries.fromJSZip(jsZip, function (entries) {
        var topmostDirectoryName = entries.getTopmostDirectoryName();

        if (topmostDirectoryName !== null) {
          var name = topmostDirectoryName; ///

          project = new Project(name, entries);
        }

        callback(project);
      });
    }
  }, {
    key: 'fromTopmostDirectoryName',
    value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
      var entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories),
          project = new Project(topmostDirectoryName, entries);

      return project;
    }
  }]);

  return Project;
}();

module.exports = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIm5lZWRsZSIsInJlcXVpcmUiLCJKU1ppcCIsIkVudHJpZXMiLCJQcm9qZWN0IiwibmFtZSIsImVudHJpZXMiLCJlbnRyaWVzSlNPTiIsInRvSlNPTiIsImpzb24iLCJ1cmwiLCJjYWxsYmFjayIsImZvbGxvd19tYXgiLCJvcHRpb25zIiwiZ2V0IiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJib2R5IiwibG9hZEFzeW5jIiwidGhlbiIsImpzWmlwIiwiZnJvbUpTWmlwIiwicHJvamVjdCIsInRvcG1vc3REaXJlY3RvcnlOYW1lIiwiZ2V0VG9wbW9zdERpcmVjdG9yeU5hbWUiLCJwcm9qZWN0c0RpcmVjdG9yeVBhdGgiLCJkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzIiwiZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsUUFBUixDQUFmO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxPQUFSLENBRGQ7O0FBR0EsSUFBTUUsVUFBVUYsUUFBUSxXQUFSLENBQWhCOztJQUVNRyxPO0FBQ0osbUJBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCO0FBQUE7O0FBQ3pCLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OzZCQUVRO0FBQ1AsVUFBTUQsT0FBTyxLQUFLQSxJQUFsQjtBQUFBLFVBQ01FLGNBQWMsS0FBS0QsT0FBTCxDQUFhRSxNQUFiLEVBRHBCO0FBQUEsVUFFTUYsVUFBVUMsV0FGaEI7QUFBQSxVQUU4QjtBQUN4QkUsYUFBTztBQUNMLGdCQUFRSixJQURIO0FBRUwsbUJBQVdDO0FBRk4sT0FIYjs7QUFRQSxhQUFPRyxJQUFQO0FBQ0Q7Ozs0QkFFY0MsRyxFQUFLQyxRLEVBQVU7QUFDNUIsVUFBTUMsYUFBYSxDQUFuQjtBQUFBLFVBQ01DLFVBQVU7QUFDUkQsb0JBQVlBO0FBREosT0FEaEI7O0FBS0FaLGFBQU9jLEdBQVAsQ0FBV0osR0FBWCxFQUFnQkcsT0FBaEIsRUFBeUIsVUFBU0UsS0FBVCxFQUFnQkMsUUFBaEIsRUFBMEI7QUFDakQsWUFBSSxDQUFDRCxLQUFELElBQVdDLFNBQVNDLFVBQVQsSUFBdUIsR0FBdEMsRUFBNEM7QUFDMUMsY0FBTUMsT0FBT0YsU0FBU0UsSUFBdEI7O0FBRUFoQixnQkFBTWlCLFNBQU4sQ0FBZ0JELElBQWhCLEVBQXNCRSxJQUF0QixDQUEyQixVQUFTQyxLQUFULEVBQWdCO0FBQ3pDakIsb0JBQVFrQixTQUFSLENBQWtCRCxLQUFsQixFQUF5QlYsUUFBekI7QUFDRCxXQUZEO0FBR0QsU0FORCxNQU1PO0FBQ0xBLG1CQUFTLElBQVQ7QUFDRDtBQUNGLE9BVkQ7QUFXRDs7OzhCQUVnQlUsSyxFQUFPVixRLEVBQVU7QUFDaEMsVUFBSVksVUFBVSxJQUFkOztBQUVBcEIsY0FBUW1CLFNBQVIsQ0FBa0JELEtBQWxCLEVBQXlCLFVBQVNmLE9BQVQsRUFBa0I7QUFDekMsWUFBTWtCLHVCQUF1QmxCLFFBQVFtQix1QkFBUixFQUE3Qjs7QUFFQSxZQUFJRCx5QkFBeUIsSUFBN0IsRUFBbUM7QUFDakMsY0FBTW5CLE9BQU9tQixvQkFBYixDQURpQyxDQUNHOztBQUVwQ0Qsb0JBQVUsSUFBSW5CLE9BQUosQ0FBWUMsSUFBWixFQUFrQkMsT0FBbEIsQ0FBVjtBQUNEOztBQUVESyxpQkFBU1ksT0FBVDtBQUNELE9BVkQ7QUFXRDs7OzZDQUUrQkMsb0IsRUFBc0JFLHFCLEVBQXVCQyxrQyxFQUFvQztBQUMvRyxVQUFNckIsVUFBVUgsUUFBUXlCLHdCQUFSLENBQWlDSixvQkFBakMsRUFBdURFLHFCQUF2RCxFQUE4RUMsa0NBQTlFLENBQWhCO0FBQUEsVUFDTUosVUFBVSxJQUFJbkIsT0FBSixDQUFZb0Isb0JBQVosRUFBa0NsQixPQUFsQyxDQURoQjs7QUFHQSxhQUFPaUIsT0FBUDtBQUNEOzs7Ozs7QUFHSE0sT0FBT0MsT0FBUCxHQUFpQjFCLE9BQWpCIiwiZmlsZSI6InByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lZWRsZSA9IHJlcXVpcmUoJ25lZWRsZScpLFxuICAgICAgSlNaaXAgPSByZXF1aXJlKCdqc3ppcCcpO1xuXG5jb25zdCBFbnRyaWVzID0gcmVxdWlyZSgnLi9lbnRyaWVzJyk7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbnRyaWVzKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgZW50cmllc0pTT04gPSB0aGlzLmVudHJpZXMudG9KU09OKCksXG4gICAgICAgICAgZW50cmllcyA9IGVudHJpZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgXCJlbnRyaWVzXCI6IGVudHJpZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVVSTCh1cmwsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZm9sbG93X21heCA9IDEsXG4gICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGZvbGxvd19tYXg6IGZvbGxvd19tYXhcbiAgICAgICAgICB9O1xuXG4gICAgbmVlZGxlLmdldCh1cmwsIG9wdGlvbnMsIGZ1bmN0aW9uKGVycm9yLCByZXNwb25zZSkge1xuICAgICAgaWYgKCFlcnJvciAmJiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PSAyMDApKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSByZXNwb25zZS5ib2R5O1xuXG4gICAgICAgIEpTWmlwLmxvYWRBc3luYyhib2R5KS50aGVuKGZ1bmN0aW9uKGpzWmlwKSB7XG4gICAgICAgICAgUHJvamVjdC5mcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNaaXAoanNaaXAsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHByb2plY3QgPSBudWxsO1xuXG4gICAgRW50cmllcy5mcm9tSlNaaXAoanNaaXAsIGZ1bmN0aW9uKGVudHJpZXMpIHtcbiAgICAgIGNvbnN0IHRvcG1vc3REaXJlY3RvcnlOYW1lID0gZW50cmllcy5nZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSgpO1xuXG4gICAgICBpZiAodG9wbW9zdERpcmVjdG9yeU5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRvcG1vc3REaXJlY3RvcnlOYW1lOyAgLy8vXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgZW50cmllcyk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKHByb2plY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgcHJvamVjdHNEaXJlY3RvcnlQYXRoLCBkb05vdExvYWRIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEVudHJpZXMuZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGRvTm90TG9hZEhpZGRlbkZpbGVzQW5kRGlyZWN0b3JpZXMpLFxuICAgICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdCh0b3Btb3N0RGlyZWN0b3J5TmFtZSwgZW50cmllcyk7XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2plY3Q7XG4iXX0=