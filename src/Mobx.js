import { observable } from "mobx";

const mobxstore={
Login:1,
Profile:0,
Contactlist:"",
Findaccount:"",
createpostdialog:true,
createstorymessageicon:1,
createstoryrouter:0,
textstorycontent:"",
textstorystyle:0,
textstorybackground:1,
friendlistsuggestion:[],
}
export const store=observable(mobxstore)