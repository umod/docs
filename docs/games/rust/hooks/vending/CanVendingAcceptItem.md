---
hide_table_of_contents: true
---

# CanVendingAcceptItem

## Usage

* Called when a player attempts to administer a vending machine
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanVendingAcceptItem(VendingMachine vending, Item item, int targetPos)
{
    Puts("CanVendingAcceptItem works!");
    return null;
}
```
