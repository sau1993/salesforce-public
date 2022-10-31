import { LightningElement, wire } from 'lwc';
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
} from 'lightning/messageService';
import Horoscope_Message_Channel from "@salesforce/messageChannel/HoroscopeMessageChannel__c";
import getHoroscopeResults from '@salesforce/apex/HoroscopeApiController.getHoroscopeApiResults';

export default class Jh_showCalloutResults extends LightningElement {
    @wire(MessageContext)
    messageContext;
    myHoroscopeData={};
    callBack = false;
    error;
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                Horoscope_Message_Channel,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }
    handleMessage(message) {
        this.processAPICallout(message);
    }
    processAPICallout(data) {
        getHoroscopeResults({ requestBody: JSON.stringify(data) })
            .then(result => {
                this.myHoroscopeData = result;
                this.callBack = true;
            })
            .catch(error => {
                this.error =  JSON.stringify(error);
            });
    }
}