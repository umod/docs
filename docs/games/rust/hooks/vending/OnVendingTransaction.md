---
hide_table_of_contents: true
---

# OnVendingTransaction

## Usage

* Called when a player attempts to buy an item from a vending machine
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? OnVendingTransaction(VendingMachine machine, BasePlayer buyer, int sellOrderId, int numberOfTransactions)
{
    Puts("OnVendingTransaction works!");
    return null;
}
```
