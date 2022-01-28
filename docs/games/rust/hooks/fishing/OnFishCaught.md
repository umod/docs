---
hide_table_of_contents: true
---

# OnFishCaught

## Usage

* Called after a fish is caught
* No return behavior

## Examples

```csharp title=""
void OnFishCaught(ItemDefinition fish, BaseFishingRod fishingRod, BasePlayer player)
{
    Puts($"A fish ({definition.shortname}) has just been caught by {player.displayName}!");
}
```
