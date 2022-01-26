---
hide_table_of_contents: true
---

# OnHorseLead

## Usage

* Called when a player tries to lead a horse
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnHorseLead(BaseRidableAnimal animal, BasePlayer player)
{
    Puts($"{player.displayName} tries to lead {animal.ShortPrefabName}");
    return null;
}
```
