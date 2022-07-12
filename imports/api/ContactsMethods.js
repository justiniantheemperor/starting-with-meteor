import { ContactsCollection } from "./ContactsCollection";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";

Meteor.methods({
    'contacts.insert'({ name, email, imageUrl }) {
        if(!name){
            throw new Meteor.Error("Name is required")
        }
        return ContactsCollection.insert({name,email,imageUrl});
    }
})