---
hide_table_of_contents: true
---

# OnRefreshVendingStock

## Usage

* Called when the stock on a vending machine is updated
* No Return behavior

## Examples

```csharp title=""
void OnRefreshVendingStock(VendingMachine machine, Item item)
{
    Puts("OnRefreshVendingStock works!");
}
```
