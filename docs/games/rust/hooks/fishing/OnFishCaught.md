---
hide_table_of_contents: true
---

# OnFishCaught

## Usage

* Called after a fish is caught
* No Return behavior

## Examples

```csharp title=""
void OnFishCaught(ItemDefinition definition, BaseFishingRod rod, BasePlayer player)
{
    Puts($"A fish ({definition.shortname}) has just been caught by {player.displayName}!");
}
```
