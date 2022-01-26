---
hide_table_of_contents: true
---

# OnVendingShopRename

## Usage

* Called when a player tries to rename vending shop
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnVendingShopRename(VendingMachine vending, string newName, BasePlayer player)
{
    Puts("OnVendingShopRename works!");
    return null;
}
```
