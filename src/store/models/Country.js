import { serializable } from 'serializr';

export default class Country {
  @serializable id;
  @serializable title;
  @serializable currencyId;

  constructor(id, title, currencyId) {
    this.id = id;
    this.title = title;
    this.currencyId = currencyId;
  }
}
