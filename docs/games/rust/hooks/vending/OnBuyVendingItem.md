---
hide_table_of_contents: true
---

# OnBuyVendingItem

## Usage

* Called when a player buys an item from a vending machine
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnBuyVendingItem(VendingMachine machine, BasePlayer player, int sellOrderId, int numberOfTransactions)
{
    Puts("OnBuyVendingItem works!");
    return null;
}
```
