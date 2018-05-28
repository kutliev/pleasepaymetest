import { serializable } from 'serializr';

export default class Currency {
  @serializable id;
  @serializable title;

  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}
