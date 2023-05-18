import { observable } from "mobx";

const mobxstore={
Login:1,
Profile:0,
Contactlist:"",
Findaccount:"",
createpostdialog:false,
createstorymessageicon:1
}
export const store=observable(mobxstore)