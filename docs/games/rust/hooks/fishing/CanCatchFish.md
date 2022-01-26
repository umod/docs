---
hide_table_of_contents: true
---

# CanCatchFish

## Usage

* Called before a fish is caught
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool? CanCatchFish(BasePlayer player, BaseFishingRod rod, Item item)
{
    Puts("can we catch em fishes?");
    return null;
}
```
