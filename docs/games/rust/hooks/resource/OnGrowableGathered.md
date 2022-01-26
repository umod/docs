---
hide_table_of_contents: true
---

# OnGrowableGathered

## Usage

* Called before the player receives an item from gathering a growable entity
* No Return behavior

## Examples

```csharp title=""
void OnGrowableGathered(GrowableEntity plant, Item item, BasePlayer player)
{
    Puts($"{player.displayName} has gathered {item.info.shortname} x {item.amount}.");
}
```
