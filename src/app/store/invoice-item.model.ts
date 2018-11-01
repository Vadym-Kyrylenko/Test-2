export class InvoiceItem {
  public id: number;
  public invoice_id: number;
  public product_id: number;
  public quantity: number;

  constructor(id: number,
              invoice_id: number,
              product_id: number,
              quantity: number
  ) {

    this.id = id;
    this.invoice_id = invoice_id;
    this.product_id = product_id;
    this.quantity = quantity;
  }
}
