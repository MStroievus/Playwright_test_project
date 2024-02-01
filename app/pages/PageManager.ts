import { PageHolder } from "./abstractClasses/PageHolder";
import { HomePage } from "./HomePage";
import { FormInputsPage } from "./FormInputsPage";
import { SmartTablePage } from "./SmartTablePage";



export class Application extends PageHolder {
  public pagePath: string;
  public onHomePage = new HomePage(this.page)
  public onFormInputsPage = new FormInputsPage(this.page)
  public onSmartTablePage = new SmartTablePage(this.page)
}