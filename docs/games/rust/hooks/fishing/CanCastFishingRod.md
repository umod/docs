---
hide_table_of_contents: true
---

# CanCastFishingRod

## Usage

* Called before a fishing rod is cast
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanCastFishingRod(BasePlayer player, BaseFishingRod fishingRod, Item lure)
{
    Puts("CanCastFishingRod works!");
    return null;
}
```
