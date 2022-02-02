---
hide_table_of_contents: true
---

# OnShopCompleteTrade

## Usage

* Called before the trade is completed in ShopFront
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnShopCompleteTrade(ShopFront shop, BasePlayer customer, BasePlayer vendor)
{
    Puts("OnShopCompleteTrade works!");
    return null;
}
```
