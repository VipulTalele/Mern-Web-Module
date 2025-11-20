exports.getGreeting = function () {
    const hour = new Date().getHours();

    if (hour < 12) {
        return "Good Morning! Have a great day.";
    } else if (hour < 18) {
        return "Good Afternoon!";
    } else {
        return "Good Evening!";
    }
};
