---
hide_table_of_contents: true
---

# OnRemoveDying

## Usage

* Called when a player is trying to harvest a dying growable entity
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnRemoveDying(GrowableEntity plant, BasePlayer player)
{
    Puts("OnRemoveDying works!");
    return null;
}
```
