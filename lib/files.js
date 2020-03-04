'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var File = require('./file');

var Files = /*#__PURE__*/function () {
  function Files(array) {
    _classCallCheck(this, Files);

    this.array = array;
  }

  _createClass(Files, [{
    key: "getFilePaths",
    value: function getFilePaths() {
      var filePaths = this.mapFile(function (file) {
        var filePath = file.getPath();
        return filePath;
      });
      return filePaths;
    }
  }, {
    key: "addFile",
    value: function addFile(file) {
      this.array.push(file);
    }
  }, {
    key: "mapFile",
    value: function mapFile(callback) {
      return this.array.map(callback);
    }
  }, {
    key: "someFile",
    value: function someFile(callback) {
      return this.array.some(callback);
    }
  }, {
    key: "reduceFile",
    value: function reduceFile(callback, initialValue) {
      return this.array.reduce(callback, initialValue);
    }
  }, {
    key: "forEachFile",
    value: function forEachFile(callback) {
      this.array.forEach(callback);
    }
  }, {
    key: "findFile",
    value: function findFile(callback) {
      return this.array.find(callback) || null; ///
    }
  }, {
    key: "save",
    value: function save(projectsDirectoryPath) {
      this.array.forEach(function (file) {
        file.save(projectsDirectoryPath);
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var filesJSON = this.array.map(function (file) {
        var fileJSON = file !== null ? file.toJSON() : null;
        return fileJSON;
      }),
          json = filesJSON;
      return json;
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(json) {
      var filesJSON = json,
          ///
      array = [],
          files = new Files(array);
      filesJSON.forEach(function (fileJSON) {
        var json = fileJSON,
            ///
        file = File.fromJSON(json);
        files.addFile(file);
      });
      return files;
    }
  }, {
    key: "fromNothing",
    value: function fromNothing() {
      var array = [],
          files = new Files(array);
      return files;
    }
  }, {
    key: "fromPaths",
    value: function fromPaths(paths, projectsDirectoryPath) {
      var array = [],
          files = new Files(array);
      paths.forEach(function (path) {
        var file = File.fromPath(path, projectsDirectoryPath);
        files.addFile(file);
      });
      return files;
    }
  }]);

  return Files;
}();

module.exports = Files;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGVzLmpzIl0sIm5hbWVzIjpbIkZpbGUiLCJyZXF1aXJlIiwiRmlsZXMiLCJhcnJheSIsImZpbGVQYXRocyIsIm1hcEZpbGUiLCJmaWxlIiwiZmlsZVBhdGgiLCJnZXRQYXRoIiwicHVzaCIsImNhbGxiYWNrIiwibWFwIiwic29tZSIsImluaXRpYWxWYWx1ZSIsInJlZHVjZSIsImZvckVhY2giLCJmaW5kIiwicHJvamVjdHNEaXJlY3RvcnlQYXRoIiwic2F2ZSIsImZpbGVzSlNPTiIsImZpbGVKU09OIiwidG9KU09OIiwianNvbiIsImZpbGVzIiwiZnJvbUpTT04iLCJhZGRGaWxlIiwicGF0aHMiLCJwYXRoIiwiZnJvbVBhdGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQXBCOztJQUVNQyxLO0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7bUNBRWM7QUFDYixVQUFNQyxTQUFTLEdBQUcsS0FBS0MsT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUN2QyxZQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0UsT0FBTCxFQUFqQjtBQUVBLGVBQU9ELFFBQVA7QUFDRCxPQUppQixDQUFsQjtBQU1BLGFBQU9ILFNBQVA7QUFDRDs7OzRCQUVPRSxJLEVBQU07QUFDWixXQUFLSCxLQUFMLENBQVdNLElBQVgsQ0FBZ0JILElBQWhCO0FBQ0Q7Ozs0QkFFT0ksUSxFQUFVO0FBQ2hCLGFBQU8sS0FBS1AsS0FBTCxDQUFXUSxHQUFYLENBQWVELFFBQWYsQ0FBUDtBQUNEOzs7NkJBRVFBLFEsRUFBVTtBQUNqQixhQUFPLEtBQUtQLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQkYsUUFBaEIsQ0FBUDtBQUNEOzs7K0JBRVVBLFEsRUFBVUcsWSxFQUFjO0FBQ2pDLGFBQU8sS0FBS1YsS0FBTCxDQUFXVyxNQUFYLENBQWtCSixRQUFsQixFQUE0QkcsWUFBNUIsQ0FBUDtBQUNEOzs7Z0NBRVdILFEsRUFBVTtBQUNwQixXQUFLUCxLQUFMLENBQVdZLE9BQVgsQ0FBbUJMLFFBQW5CO0FBQ0Q7Ozs2QkFFUUEsUSxFQUFVO0FBQ2pCLGFBQU8sS0FBS1AsS0FBTCxDQUFXYSxJQUFYLENBQWdCTixRQUFoQixLQUE2QixJQUFwQyxDQURpQixDQUN5QjtBQUMzQzs7O3lCQUVJTyxxQixFQUF1QjtBQUMxQixXQUFLZCxLQUFMLENBQVdZLE9BQVgsQ0FBbUIsVUFBQ1QsSUFBRCxFQUFVO0FBQzNCQSxRQUFBQSxJQUFJLENBQUNZLElBQUwsQ0FBVUQscUJBQVY7QUFDRCxPQUZEO0FBR0Q7Ozs2QkFFUTtBQUNQLFVBQU1FLFNBQVMsR0FBRyxLQUFLaEIsS0FBTCxDQUFXUSxHQUFYLENBQWUsVUFBQ0wsSUFBRCxFQUFVO0FBQ25DLFlBQU1jLFFBQVEsR0FBSWQsSUFBSSxLQUFLLElBQVYsR0FDR0EsSUFBSSxDQUFDZSxNQUFMLEVBREgsR0FFSyxJQUZ0QjtBQUlBLGVBQU9ELFFBQVA7QUFDRCxPQU5XLENBQWxCO0FBQUEsVUFPTUUsSUFBSSxHQUFHSCxTQVBiO0FBU0EsYUFBT0csSUFBUDtBQUNEOzs7NkJBRWVBLEksRUFBTTtBQUNwQixVQUFNSCxTQUFTLEdBQUdHLElBQWxCO0FBQUEsVUFBd0I7QUFDbEJuQixNQUFBQSxLQUFLLEdBQUcsRUFEZDtBQUFBLFVBRU1vQixLQUFLLEdBQUcsSUFBSXJCLEtBQUosQ0FBVUMsS0FBVixDQUZkO0FBSUFnQixNQUFBQSxTQUFTLENBQUNKLE9BQVYsQ0FBa0IsVUFBQ0ssUUFBRCxFQUFjO0FBQzlCLFlBQU1FLElBQUksR0FBR0YsUUFBYjtBQUFBLFlBQXdCO0FBQ2xCZCxRQUFBQSxJQUFJLEdBQUdOLElBQUksQ0FBQ3dCLFFBQUwsQ0FBY0YsSUFBZCxDQURiO0FBR0FDLFFBQUFBLEtBQUssQ0FBQ0UsT0FBTixDQUFjbkIsSUFBZDtBQUNELE9BTEQ7QUFPQSxhQUFPaUIsS0FBUDtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1wQixLQUFLLEdBQUcsRUFBZDtBQUFBLFVBQ01vQixLQUFLLEdBQUcsSUFBSXJCLEtBQUosQ0FBVUMsS0FBVixDQURkO0FBR0EsYUFBT29CLEtBQVA7QUFDRDs7OzhCQUVnQkcsSyxFQUFPVCxxQixFQUF1QjtBQUM3QyxVQUFNZCxLQUFLLEdBQUcsRUFBZDtBQUFBLFVBQ01vQixLQUFLLEdBQUcsSUFBSXJCLEtBQUosQ0FBVUMsS0FBVixDQURkO0FBR0F1QixNQUFBQSxLQUFLLENBQUNYLE9BQU4sQ0FBYyxVQUFDWSxJQUFELEVBQVU7QUFDdEIsWUFBTXJCLElBQUksR0FBR04sSUFBSSxDQUFDNEIsUUFBTCxDQUFjRCxJQUFkLEVBQW9CVixxQkFBcEIsQ0FBYjtBQUVBTSxRQUFBQSxLQUFLLENBQUNFLE9BQU4sQ0FBY25CLElBQWQ7QUFDRCxPQUpEO0FBTUEsYUFBT2lCLEtBQVA7QUFDRDs7Ozs7O0FBR0hNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjVCLEtBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGaWxlID0gcmVxdWlyZSgnLi9maWxlJyk7XG5cbmNsYXNzIEZpbGVzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRGaWxlUGF0aHMoKSB7XG4gICAgY29uc3QgZmlsZVBhdGhzID0gdGhpcy5tYXBGaWxlKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpO1xuXG4gICAgICByZXR1cm4gZmlsZVBhdGg7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZVBhdGhzO1xuICB9XG5cbiAgYWRkRmlsZShmaWxlKSB7XG4gICAgdGhpcy5hcnJheS5wdXNoKGZpbGUpO1xuICB9XG5cbiAgbWFwRmlsZShjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7XG4gIH1cblxuICBzb21lRmlsZShjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmFycmF5LnNvbWUoY2FsbGJhY2spO1xuICB9XG5cbiAgcmVkdWNlRmlsZShjYWxsYmFjaywgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpO1xuICB9XG5cbiAgZm9yRWFjaEZpbGUoY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgZmluZEZpbGUoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheS5maW5kKGNhbGxiYWNrKSB8fCBudWxsOyAvLy9cbiAgfVxuXG4gIHNhdmUocHJvamVjdHNEaXJlY3RvcnlQYXRoKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBmaWxlLnNhdmUocHJvamVjdHNEaXJlY3RvcnlQYXRoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlc0pTT04gPSB0aGlzLmFycmF5Lm1hcCgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZUpTT04gPSAoZmlsZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuICBcbiAgICAgICAgICAgIHJldHVybiBmaWxlSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZmlsZXNKU09OO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGZpbGVzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICAgIGFycmF5ID0gW10sXG4gICAgICAgICAgZmlsZXMgPSBuZXcgRmlsZXMoYXJyYXkpO1xuICAgIFxuICAgIGZpbGVzSlNPTi5mb3JFYWNoKChmaWxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGZpbGVKU09OLCAgLy8vXG4gICAgICAgICAgICBmaWxlID0gRmlsZS5mcm9tSlNPTihqc29uKTtcblxuICAgICAgZmlsZXMuYWRkRmlsZShmaWxlKTtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXSxcbiAgICAgICAgICBmaWxlcyA9IG5ldyBGaWxlcyhhcnJheSk7XG5cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVBhdGhzKHBhdGhzLCBwcm9qZWN0c0RpcmVjdG9yeVBhdGgpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdLFxuICAgICAgICAgIGZpbGVzID0gbmV3IEZpbGVzKGFycmF5KTtcblxuICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgIGNvbnN0IGZpbGUgPSBGaWxlLmZyb21QYXRoKHBhdGgsIHByb2plY3RzRGlyZWN0b3J5UGF0aCk7XG5cbiAgICAgIGZpbGVzLmFkZEZpbGUoZmlsZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWxlcztcbiJdfQ==