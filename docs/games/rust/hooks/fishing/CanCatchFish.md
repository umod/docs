---
hide_table_of_contents: true
---

# CanCatchFish

## Usage

* Called before a fish is caught
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanCatchFish(BasePlayer player, BaseFishingRod fishingRod, Item fish)
{
    Puts("Can we catch em fishes?");
    return null;
}
```
