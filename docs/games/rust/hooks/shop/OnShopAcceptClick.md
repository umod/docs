---
hide_table_of_contents: true
---

# OnShopAcceptClick

## Usage

* Called when a player is trying to accept a trade in ShopFront
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnShopAcceptClick(ShopFront entity, BasePlayer player)
{
    Puts("OnShopAcceptClick works!");
    return null;
}
```
