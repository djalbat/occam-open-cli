"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _node = require("../utilities/node");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var third = _necessary.arrayUtilities.third;
var RepositoryNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(RepositoryNode, NonTerminalNode);
    var _super = _createSuper(RepositoryNode);
    function RepositoryNode(ruleName, childNodes) {
        _classCallCheck(this, RepositoryNode);
        var _this;
        _this = _super.call(this, ruleName, childNodes);
        _this.repository = null;
        return _this;
    }
    _createClass(RepositoryNode, [
        {
            key: "getRepository",
            value: function getRepository() {
                var node = this, terminalNodes = (0, _node).findTerminalNodes(node), thirdTerminalNode = third(terminalNodes), thirdTerminalNodeSignificantToken = thirdTerminalNode.getSignificantToken(), thirdTerminalNodeSignificantTokenString = thirdTerminalNodeSignificantToken.getString(), repository = thirdTerminalNodeSignificantTokenString; ///
                return repository;
            }
        }
    ], [
        {
            key: "fromNodesAndRuleName",
            value: function fromNodesAndRuleName(nodes, ruleName) {
                var childNodes = nodes, repositoryNode = _occamParsers.NonTerminalNode.fromRuleNameAndChildNodes(RepositoryNode, ruleName, childNodes);
                return repositoryNode;
            }
        }
    ]);
    return RepositoryNode;
}(_occamParsers.NonTerminalNode);
exports.default = RepositoryNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3JlcG9zaXRvcnkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iLCIuLi9zcmMvYnJvd3Nlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgeyBmaW5kVGVybWluYWxOb2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5jb25zdCB7IHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb3NpdG9yeU5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBjb25zdHJ1Y3RvcihydWxlTmFtZSwgY2hpbGROb2Rlcykge1xuICAgIHN1cGVyKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHRoaXMucmVwb3NpdG9yeSA9IG51bGw7XG4gIH1cblxuICBnZXRSZXBvc2l0b3J5KCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgdGVybWluYWxOb2RlcyA9IGZpbmRUZXJtaW5hbE5vZGVzKG5vZGUpLFxuICAgICAgICAgIHRoaXJkVGVybWluYWxOb2RlID0gdGhpcmQodGVybWluYWxOb2RlcyksXG4gICAgICAgICAgdGhpcmRUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuID0gdGhpcmRUZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpLFxuICAgICAgICAgIHRoaXJkVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlblN0cmluZyA9IHRoaXJkVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZXBvc2l0b3J5ID0gdGhpcmRUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuU3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4gcmVwb3NpdG9yeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZXNBbmRSdWxlTmFtZShub2RlcywgcnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICAgIHJlcG9zaXRvcnlOb2RlID0gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMoUmVwb3NpdG9yeU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzKTtcblxuICAgIHJldHVybiByZXBvc2l0b3J5Tm9kZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBGaWxlIH0gZnJvbSBcIi4vZmlsZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGaWxlcyB9IGZyb20gXCIuL2ZpbGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHR5cGVzIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmVyc2lvbiB9IGZyb20gXCIuL3ZlcnNpb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVsZWFzZSB9IGZyb20gXCIuL3JlbGVhc2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRW50cmllcyB9IGZyb20gXCIuL2VudHJpZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaWxlUGF0aFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9maWxlUGF0aFwiO1xuIl0sIm5hbWVzIjpbInRoaXJkIiwiYXJyYXlVdGlsaXRpZXMiLCJSZXBvc2l0b3J5Tm9kZSIsInJ1bGVOYW1lIiwiY2hpbGROb2RlcyIsInJlcG9zaXRvcnkiLCJnZXRSZXBvc2l0b3J5Iiwibm9kZSIsInRlcm1pbmFsTm9kZXMiLCJmaW5kVGVybWluYWxOb2RlcyIsInRoaXJkVGVybWluYWxOb2RlIiwidGhpcmRUZXJtaW5hbE5vZGVTaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInRoaXJkVGVybWluYWxOb2RlU2lnbmlmaWNhbnRUb2tlblN0cmluZyIsImdldFN0cmluZyIsImZyb21Ob2Rlc0FuZFJ1bGVOYW1lIiwibm9kZXMiLCJyZXBvc2l0b3J5Tm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFa0IsSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBQ1YsSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBRWIsSUFBQSxLQUFtQixXQUFuQixtQkFBbUIsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckQsSUFBTSxBQUFFQSxLQUFLLEdBQUtDLFVBQWMsZUFBQSxDQUF4QkQsS0FBSyxBQUFtQixBQUFDO0FBRWxCLElBQUEsQUFBTUUsY0FBYyxpQkNUaEMsQURTWTs7O2FBQU1BLGNBQWMsQ0FDckJDLFFBQVEsRUFBRUMsVUFBVTs7O2tDQUN4QkQsUUFBUSxFQUFFQyxVQUFVLENFWDlCLENGV2dDO1FBRTVCLE1BQUtDLFVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7O1lBR3pCQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxJQUFNQyxJQUFJLEdBQUcsSUFBSSxFQUNYQyxhQUFhLEdBQUdDLENBQUFBLEdBQUFBLEtBQWlCLEFBQU0sQ0FBQSxrQkFBTixDQUFDRixJQUFJLENBQUMsRUFDdkNHLGlCQUFpQixHQUFHVixLQUFLLENBQUNRLGFBQWEsQ0FBQyxFQUN4Q0csaUNBQWlDLEdBQUdELGlCQUFpQixDQUFDRSxtQkFBbUIsRUFBRSxFQUMzRUMsdUNBQXVDLEdBQUdGLGlDQUFpQyxDQUFDRyxTQUFTLEVBQUUsRUFDdkZULFVBQVUsR0FBR1EsdUNBQXVDLEFBQUMsRUFBRSxHQUFHO2dCQUVoRSxPQUFPUixVQUFVLENBQUM7YUFDbkI7Ozs7WUFFTVUsR0FBb0IsRUFBcEJBLHNCQUFvQjttQkFBM0IsU0FBT0Esb0JBQW9CLENBQUNDLEtBQUssRUFBRWIsUUFBUSxFQUFFO2dCQUMzQyxJQUFNQyxVQUFVLEdBQUdZLEtBQUssRUFDbEJDLGNBQWMsR0FBR0MsYUFBZSxnQkFBQSxDQUFDQyx5QkFBeUIsQ0FBQ2pCLGNBQWMsRUFBRUMsUUFBUSxFQUFFQyxVQUFVLENBQUMsQUFBQztnQkFFdkcsT0FBT2EsY0FBYyxDQUFDO2FBQ3ZCOzs7O0NBQ0YsQ0F4QjJDQyxhQUFlLGdCQUFBLENBd0IxRDtrQkF4Qm9CaEIsY0FBYyJ9