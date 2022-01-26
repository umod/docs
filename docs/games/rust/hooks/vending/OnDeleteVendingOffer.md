---
hide_table_of_contents: true
---

# OnDeleteVendingOffer

## Usage

* Called when a sell order/offer is deleted from a vending machine
* No Return behavior

## Examples

```csharp title=""
void OnDeleteVendingOffer(VendingMachine machine, int offerId)
{
    Puts("OnDeleteVendingOffer works!");
}
```
