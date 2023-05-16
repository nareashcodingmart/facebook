import { observable } from "mobx";

const mobxstore={
Login:1,
Profile:0,
Contactlist:"",
Findaccount:"",
createstorydialog:false,
}
export const store=observable(mobxstore)