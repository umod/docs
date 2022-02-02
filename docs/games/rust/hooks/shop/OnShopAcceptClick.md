---
hide_table_of_contents: true
---

# OnShopAcceptClick

## Usage

* Called when a player is trying to accept a trade in ShopFront
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnShopAcceptClick(ShopFront shop, BasePlayer player)
{
    Puts("OnShopAcceptClick works!");
    return null;
}
```
