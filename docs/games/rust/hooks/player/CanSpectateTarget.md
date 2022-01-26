---
hide_table_of_contents: true
---

# CanSpectateTarget

## Usage

* Called when spectate target is attempting to update
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object CanSpectateTarget(BasePlayer player, string filter)
{
    Puts($"{player.displayName} tries to spectate with a filter: {filter}");
    return null;
}
```
