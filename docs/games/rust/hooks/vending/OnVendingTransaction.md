---
hide_table_of_contents: true
---

# OnVendingTransaction

## Usage

* Called when a player attempts to buy an item from a vending machine
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool OnVendingTransaction(VendingMachine machine, BasePlayer buyer, int sellOrderId, int numberOfTransactions)
{
    Puts("OnVendingTransaction works!");
    return true;
}
```
