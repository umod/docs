---
hide_table_of_contents: true
---

# OnShopCancelClick

## Usage

* Called when a player is cancelling a trade
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnShopCancelClick(ShopFront shop, BasePlayer player)
{
    Puts("OnShopCancelClick works!");
    return null;
}
```
