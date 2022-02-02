---
hide_table_of_contents: true
---

# CanSpectateTarget

## Usage

* Called when spectate target is attempting to update
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object CanSpectateTarget(BasePlayer player, string filter)
{
    Puts($"{player.displayName} tries to spectate with a filter: {filter}");
    return null;
}
```
