'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSZip = require('jszip'),
    request = require('request');

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
      var method = 'GET',
          encoding = null,
          options = {
        url: url,
        method: method,
        encoding: encoding
      };

      request(options, function (error, response) {
        var statusCode = response.statusCode;


        error = error || statusCode !== 200; ///

        if (error) {
          callback(null);

          return;
        }

        var body = response.body;


        JSZip.loadAsync(body).then(function (jsZip) {
          Project.fromJSZip(jsZip, callback);
        });
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
    value: function fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories) {
      var entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories),
          project = new Project(topmostDirectoryName, entries);

      return project;
    }
  }]);

  return Project;
}();

module.exports = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wcm9qZWN0LmpzIl0sIm5hbWVzIjpbIkpTWmlwIiwicmVxdWlyZSIsInJlcXVlc3QiLCJFbnRyaWVzIiwiUHJvamVjdCIsIm5hbWUiLCJlbnRyaWVzIiwiZW50cmllc0pTT04iLCJ0b0pTT04iLCJqc29uIiwidXJsIiwiY2FsbGJhY2siLCJtZXRob2QiLCJlbmNvZGluZyIsIm9wdGlvbnMiLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsImJvZHkiLCJsb2FkQXN5bmMiLCJ0aGVuIiwianNaaXAiLCJmcm9tSlNaaXAiLCJwcm9qZWN0IiwidG9wbW9zdERpcmVjdG9yeU5hbWUiLCJnZXRUb3Btb3N0RGlyZWN0b3J5TmFtZSIsInByb2plY3RzRGlyZWN0b3J5UGF0aCIsImFsbG93T25seVJlY29nbmlzZWRGaWxlcyIsImRpc2FsbG93SGlkZGVuRmlsZXNBbmREaXJlY3RvcmllcyIsImZyb21Ub3Btb3N0RGlyZWN0b3J5TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLE9BQVIsQ0FBZDtBQUFBLElBQ01DLFVBQVVELFFBQVEsU0FBUixDQURoQjs7QUFHQSxJQUFNRSxVQUFVRixRQUFRLFdBQVIsQ0FBaEI7O0lBRU1HLE87QUFDSixtQkFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7Ozs7NkJBRVE7QUFDUCxVQUFNRCxPQUFPLEtBQUtBLElBQWxCO0FBQUEsVUFDTUUsY0FBYyxLQUFLRCxPQUFMLENBQWFFLE1BQWIsRUFEcEI7QUFBQSxVQUVNRixVQUFVQyxXQUZoQjtBQUFBLFVBRThCO0FBQ3hCRSxhQUFPO0FBQ0wsZ0JBQVFKLElBREg7QUFFTCxtQkFBV0M7QUFGTixPQUhiOztBQVFBLGFBQU9HLElBQVA7QUFDRDs7OzRCQUVjQyxHLEVBQUtDLFEsRUFBVTtBQUM1QixVQUFNQyxTQUFTLEtBQWY7QUFBQSxVQUNNQyxXQUFXLElBRGpCO0FBQUEsVUFFTUMsVUFBVTtBQUNSSixnQkFEUTtBQUVSRSxzQkFGUTtBQUdSQztBQUhRLE9BRmhCOztBQVFBWCxjQUFRWSxPQUFSLEVBQWlCLFVBQVNDLEtBQVQsRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQUEsWUFDakNDLFVBRGlDLEdBQ2xCRCxRQURrQixDQUNqQ0MsVUFEaUM7OztBQUd6Q0YsZ0JBQVFBLFNBQVVFLGVBQWUsR0FBakMsQ0FIeUMsQ0FHRDs7QUFFeEMsWUFBSUYsS0FBSixFQUFXO0FBQ1RKLG1CQUFTLElBQVQ7O0FBRUE7QUFDRDs7QUFUd0MsWUFXakNPLElBWGlDLEdBV3hCRixRQVh3QixDQVdqQ0UsSUFYaUM7OztBQWF6Q2xCLGNBQU1tQixTQUFOLENBQWdCRCxJQUFoQixFQUNHRSxJQURILENBQ1EsVUFBU0MsS0FBVCxFQUFnQjtBQUNwQmpCLGtCQUFRa0IsU0FBUixDQUFrQkQsS0FBbEIsRUFBeUJWLFFBQXpCO0FBQ0QsU0FISDtBQUlELE9BakJEO0FBa0JEOzs7OEJBRWdCVSxLLEVBQU9WLFEsRUFBVTtBQUNoQyxVQUFJWSxVQUFVLElBQWQ7O0FBRUFwQixjQUFRbUIsU0FBUixDQUFrQkQsS0FBbEIsRUFBeUIsVUFBU2YsT0FBVCxFQUFrQjtBQUN6QyxZQUFNa0IsdUJBQXVCbEIsUUFBUW1CLHVCQUFSLEVBQTdCOztBQUVBLFlBQUlELHlCQUF5QixJQUE3QixFQUFtQztBQUNqQyxjQUFNbkIsT0FBT21CLG9CQUFiLENBRGlDLENBQ0c7O0FBRXBDRCxvQkFBVSxJQUFJbkIsT0FBSixDQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixDQUFWO0FBQ0Q7O0FBRURLLGlCQUFTWSxPQUFUO0FBQ0QsT0FWRDtBQVdEOzs7NkNBRStCQyxvQixFQUFzQkUscUIsRUFBdUJDLHdCLEVBQTBCQyxpQyxFQUFtQztBQUN4SSxVQUFNdEIsVUFBVUgsUUFBUTBCLHdCQUFSLENBQWlDTCxvQkFBakMsRUFBdURFLHFCQUF2RCxFQUE4RUMsd0JBQTlFLEVBQXdHQyxpQ0FBeEcsQ0FBaEI7QUFBQSxVQUNNTCxVQUFVLElBQUluQixPQUFKLENBQVlvQixvQkFBWixFQUFrQ2xCLE9BQWxDLENBRGhCOztBQUdBLGFBQU9pQixPQUFQO0FBQ0Q7Ozs7OztBQUdITyxPQUFPQyxPQUFQLEdBQWlCM0IsT0FBakIiLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSlNaaXAgPSByZXF1aXJlKCdqc3ppcCcpLFxuICAgICAgcmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKTtcblxuY29uc3QgRW50cmllcyA9IHJlcXVpcmUoJy4vZW50cmllcycpO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW50cmllcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGVudHJpZXNKU09OID0gdGhpcy5lbnRyaWVzLnRvSlNPTigpLFxuICAgICAgICAgIGVudHJpZXMgPSBlbnRyaWVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBcIm5hbWVcIjogbmFtZSxcbiAgICAgICAgICAgIFwiZW50cmllc1wiOiBlbnRyaWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21VUkwodXJsLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IG1ldGhvZCA9ICdHRVQnLFxuICAgICAgICAgIGVuY29kaW5nID0gbnVsbCxcbiAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgbWV0aG9kICxcbiAgICAgICAgICAgIGVuY29kaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgICBjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHJlc3BvbnNlO1xuXG4gICAgICBlcnJvciA9IGVycm9yIHx8IChzdGF0dXNDb2RlICE9PSAyMDApOyAgLy8vXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjayhudWxsKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgYm9keSB9ID0gcmVzcG9uc2U7XG5cbiAgICAgIEpTWmlwLmxvYWRBc3luYyhib2R5KVxuICAgICAgICAudGhlbihmdW5jdGlvbihqc1ppcCkge1xuICAgICAgICAgIFByb2plY3QuZnJvbUpTWmlwKGpzWmlwLCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU1ppcChqc1ppcCwgY2FsbGJhY2spIHtcbiAgICBsZXQgcHJvamVjdCA9IG51bGw7XG5cbiAgICBFbnRyaWVzLmZyb21KU1ppcChqc1ppcCwgZnVuY3Rpb24oZW50cmllcykge1xuICAgICAgY29uc3QgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBlbnRyaWVzLmdldFRvcG1vc3REaXJlY3RvcnlOYW1lKCk7XG5cbiAgICAgIGlmICh0b3Btb3N0RGlyZWN0b3J5TmFtZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBuYW1lID0gdG9wbW9zdERpcmVjdG9yeU5hbWU7ICAvLy9cbiAgICAgICAgXG4gICAgICAgIHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLCBlbnRyaWVzKTtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2socHJvamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGFsbG93T25seVJlY29nbmlzZWRGaWxlcywgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEVudHJpZXMuZnJvbVRvcG1vc3REaXJlY3RvcnlOYW1lKHRvcG1vc3REaXJlY3RvcnlOYW1lLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgsIGFsbG93T25seVJlY29nbmlzZWRGaWxlcywgZGlzYWxsb3dIaWRkZW5GaWxlc0FuZERpcmVjdG9yaWVzKSxcbiAgICAgICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QodG9wbW9zdERpcmVjdG9yeU5hbWUsIGVudHJpZXMpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9qZWN0O1xuIl19