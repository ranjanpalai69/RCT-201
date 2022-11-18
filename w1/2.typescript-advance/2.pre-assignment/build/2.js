// Create an enum
// it should have User, SuperUser, Admin, SuperAdmin
var Guests;
(function (Guests) {
    Guests["User"] = "user";
    Guests["SuperUser"] = "superuser";
    Guests["Admin"] = "admin";
    Guests["SuperAdmin"] = "superadmin";
})(Guests || (Guests = {}));
let user = Guests.User;
