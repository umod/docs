---
hide_table_of_contents: true
---

# OnVendingShopRename

## Usage

* Called when a player tries to rename vending shop
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnVendingShopRename(VendingMachine vending, string newName, BasePlayer player)
{
    Puts("OnVendingShopRename works!");
    return null;
}
```
