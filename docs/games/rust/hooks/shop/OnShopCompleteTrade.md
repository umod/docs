---
hide_table_of_contents: true
---

# OnShopCompleteTrade

## Usage

* Called before the trade is completed in ShopFront
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnShopCompleteTrade(ShopFront entity)
{
    Puts("OnShopCompleteTrade works!");
    return null;
}
```

```csharp title=""
object OnShopCompleteTrade(ShopFront shop, BasePlayer customer)
{
    Puts("OnShopCompleteTrade works!");
    return null;
}
```
