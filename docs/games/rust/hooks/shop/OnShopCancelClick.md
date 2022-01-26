---
hide_table_of_contents: true
---

# OnShopCancelClick

## Usage

* Called when a player is cancelling a trade
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnShopCancelClick(ShopFront entity, BasePlayer player)
{
    Puts("OnShopCancelClick works!");
    return null;
}
```
