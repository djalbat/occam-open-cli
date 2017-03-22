'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSZip = require('jszip'),
    request = require('request');

var jsZip = function () {
  function jsZip() {
    _classCallCheck(this, jsZip);
  }

  _createClass(jsZip, null, [{
    key: 'fromURL',
    value: function fromURL(url, callback) {
      var params = {
        method: "GET",
        url: url,
        encoding: null
      };

      request(params, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          JSZip.loadAsync(body).then(function (jsZip) {
            callback(jsZip);
          });
        } else {
          callback(null);
        }
      });
    }
  }]);

  return jsZip;
}();

module.exports = jsZip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9qc1ppcC5qcyJdLCJuYW1lcyI6WyJKU1ppcCIsInJlcXVpcmUiLCJyZXF1ZXN0IiwianNaaXAiLCJ1cmwiLCJjYWxsYmFjayIsInBhcmFtcyIsIm1ldGhvZCIsImVuY29kaW5nIiwiZXJyb3IiLCJyZXNwb25zZSIsImJvZHkiLCJzdGF0dXNDb2RlIiwibG9hZEFzeW5jIiwidGhlbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLE9BQVIsQ0FBZDtBQUFBLElBQ01DLFVBQVVELFFBQVEsU0FBUixDQURoQjs7SUFHTUUsSzs7Ozs7Ozs0QkFDV0MsRyxFQUFLQyxRLEVBQVU7QUFDNUIsVUFBTUMsU0FBUztBQUNQQyxnQkFBUyxLQURGO0FBRVBILGFBQU1BLEdBRkM7QUFHUEksa0JBQVU7QUFISCxPQUFmOztBQU1BTixjQUFRSSxNQUFSLEVBQWdCLFVBQVVHLEtBQVYsRUFBaUJDLFFBQWpCLEVBQTJCQyxJQUEzQixFQUFpQztBQUMvQyxZQUFHLENBQUNGLEtBQUQsSUFBV0MsU0FBU0UsVUFBVCxLQUF3QixHQUF0QyxFQUE0QztBQUMxQ1osZ0JBQU1hLFNBQU4sQ0FBZ0JGLElBQWhCLEVBQXNCRyxJQUF0QixDQUEyQixVQUFTWCxLQUFULEVBQWdCO0FBQ3pDRSxxQkFBU0YsS0FBVDtBQUNELFdBRkQ7QUFHRCxTQUpELE1BSU87QUFDTEUsbUJBQVMsSUFBVDtBQUNEO0FBQ0YsT0FSRDtBQVNEOzs7Ozs7QUFHSFUsT0FBT0MsT0FBUCxHQUFpQmIsS0FBakIiLCJmaWxlIjoianNaaXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEpTWmlwID0gcmVxdWlyZSgnanN6aXAnKSxcbiAgICAgIHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG5cbmNsYXNzIGpzWmlwIHtcbiAgc3RhdGljIGZyb21VUkwodXJsLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIG1ldGhvZCA6IFwiR0VUXCIsXG4gICAgICAgICAgICB1cmwgOiB1cmwsXG4gICAgICAgICAgICBlbmNvZGluZzogbnVsbFxuICAgICAgICAgIH07XG5cbiAgICByZXF1ZXN0KHBhcmFtcywgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSwgYm9keSkge1xuICAgICAgaWYoIWVycm9yICYmIChyZXNwb25zZS5zdGF0dXNDb2RlID09PSAyMDApKSB7XG4gICAgICAgIEpTWmlwLmxvYWRBc3luYyhib2R5KS50aGVuKGZ1bmN0aW9uKGpzWmlwKSB7XG4gICAgICAgICAgY2FsbGJhY2soanNaaXApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ganNaaXA7XG4iXX0=