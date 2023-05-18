import { observable } from "mobx";

const mobxstore={
Login:1,
Profile:0,
Contactlist:"",
Findaccount:"",
createpostdialog:false,
createstorymessageicon:1,
createstoryrouter:2,
textstorycontent:"",
}
export const store=observable(mobxstore)