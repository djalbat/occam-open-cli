"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "significantTokensFromTokens", {
    enumerable: true,
    get: function() {
        return significantTokensFromTokens;
    }
});
function significantTokensFromTokens(tokens) {
    var significantTokens = tokens.reduce(function(significantTokens, token) {
        var tokenSignificant = token.isSignificant();
        if (tokenSignificant) {
            var significantToken = token; ///
            significantTokens.push(significantToken);
        }
        return significantTokens;
    }, []);
    return significantTokens;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdG9rZW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmlmaWNhbnRUb2tlbnNGcm9tVG9rZW5zKHRva2Vucykge1xuICBjb25zdCBzaWduaWZpY2FudFRva2VucyA9IHRva2Vucy5yZWR1Y2UoKHNpZ25pZmljYW50VG9rZW5zLCB0b2tlbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHRva2VuU2lnbmlmaWNhbnQgPSB0b2tlbi5pc1NpZ25pZmljYW50KCk7XG5cbiAgICAgICAgICBpZiAodG9rZW5TaWduaWZpY2FudCkge1xuICAgICAgICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRva2VuOyAvLy9cblxuICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlbnMucHVzaChzaWduaWZpY2FudFRva2VuKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XG4gICAgICAgIH0sIFtdKTtcblxuICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlbnM7XG59XG4iXSwibmFtZXMiOlsic2lnbmlmaWNhbnRUb2tlbnNGcm9tVG9rZW5zIiwidG9rZW5zIiwic2lnbmlmaWNhbnRUb2tlbnMiLCJyZWR1Y2UiLCJ0b2tlbiIsInRva2VuU2lnbmlmaWNhbnQiLCJpc1NpZ25pZmljYW50Iiwic2lnbmlmaWNhbnRUb2tlbiIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFFR0EsNkJBQTJCOzs7ZUFBM0JBLDJCQUEyQjs7O0FBQXBDLFNBQVNBLDJCQUEyQixDQUFDQyxNQUFNLEVBQUU7SUFDbEQsSUFBTUMsaUJBQWlCLEdBQUdELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFNBQUNELGlCQUFpQixFQUFFRSxLQUFLLEVBQUs7UUFDOUQsSUFBTUMsZ0JBQWdCLEdBQUdELEtBQUssQ0FBQ0UsYUFBYSxFQUFFLEFBQUM7UUFFL0MsSUFBSUQsZ0JBQWdCLEVBQUU7WUFDcEIsSUFBTUUsZ0JBQWdCLEdBQUdILEtBQUssQUFBQyxFQUFDLEdBQUc7WUFFbkNGLGlCQUFpQixDQUFDTSxJQUFJLENBQUNELGdCQUFnQixDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVELE9BQU9MLGlCQUFpQixDQUFDO0lBQzNCLENBQUMsRUFBRSxFQUFFLENBQUMsQUFBQztJQUViLE9BQU9BLGlCQUFpQixDQUFDO0FBQzNCLENBQUMifQ==