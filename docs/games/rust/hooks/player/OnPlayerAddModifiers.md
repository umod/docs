---
hide_table_of_contents: true
---

# OnPlayerAddModifiers

## Usage

* Called after a player consumes an item such as tea that is about to apply modifiers
* Returning a non-null value overrides default behavior (prevents the modifiers from being applied)

## Examples

```csharp title=""
object OnPlayerAddModifiers(BasePlayer player, Item item, ItemModConsumable consumable)
{
    Puts("OnPlayerAddModifiers works!");
    return null;
}
```
