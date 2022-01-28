---
hide_table_of_contents: true
---

# OnFishCatch

## Usage

* Called after a fish is caught, before the item is given
* Returning an Item overrides the default behavior

## Examples

```csharp title=""
Item? OnFishCatch(Item fish, BaseFishingRod fishingRod, BasePlayer player)
{
    Puts($"{player.displayName} has just caught {item.amount} x {item.info.shortname}!");
    return null;
}
```
