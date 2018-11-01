export class Invoice {
  public id: number;
  public customer_id: number;
  public discount: number;
  public total: number;

  constructor(id: number,
              customer_id: number,
              discount: number,
              total: number
  ) {

    this.id = id;
    this.customer_id = customer_id;
    this.discount = discount;
    this.total = total;
  }
}
