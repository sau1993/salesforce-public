({
    handlePublishLMS: function(component, event, helper, selectedSign, selectedDay) {
        var payload = {
           sign : selectedSign,
           day : selectedDay
        };
        component.find("HoroscopeMessageChannel").publish(payload);
    }
})