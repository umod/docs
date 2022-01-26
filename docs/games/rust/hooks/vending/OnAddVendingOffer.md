---
hide_table_of_contents: true
---

# OnAddVendingOffer

## Usage

* Called when a sell order/offer is added to a vending machine
* No Return behavior

## Examples

```csharp title=""
void OnAddVendingOffer(VendingMachine machine, ProtoBuf.VendingMachine.SellOrder sellOrder)
{
    Puts("OnAddVendingOffer works!");
}
```
