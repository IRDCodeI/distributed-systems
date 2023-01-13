export class Service {

  constructor(_id = "", type = '', scope = '', subject = '', desc = '', urlimg = ''){
    this._id=_id;
    this.type = type;
    this.scope = scope;
    this.subject = subject;
    this.desc = desc;
    this.urlimg = urlimg;
  }

  _id: String;
  type: String;
  scope: String;
  subject: String;
  desc: String;
  urlimg: String;
}
