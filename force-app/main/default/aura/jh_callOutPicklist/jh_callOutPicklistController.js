({
    getSign : function(component, event, helper) {
        component.set("v.selectedSign",component.find("sign").get("v.value"));
        if(component.get("v.selectedDay") != '' && component.get("v.selectedSign") != ''){
        helper.handlePublishLMS(component, event, helper, component.get("v.selectedSign"), component.get("v.selectedDay"));
        }
    },
    getDay : function(component, event, helper) {
        component.set("v.selectedDay",component.find("day").get("v.value"));
        if(component.get("v.selectedDay") != '' && component.get("v.selectedSign") != ''){
        helper.handlePublishLMS(component, event, helper, component.get("v.selectedSign"), component.get("v.selectedDay"));
        }
    }
})