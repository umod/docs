---
hide_table_of_contents: true
---

# OnBuyVendingItem

## Usage

* Called when a player buys an item from a vending machine
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnBuyVendingItem(VendingMachine machine, BasePlayer player, int sellOrderId, int numberOfTransactions)
{
    Puts("OnBuyVendingItem works!");
    return null;
}
```
