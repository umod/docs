---
hide_table_of_contents: true
---

# CanTakeCutting

## Usage

* Called when a player is trying to take a cutting (clone) of a GrowableEntity
* Returninga non-null value cancels default behavior

## Examples

```csharp title=""
object CanTakeCutting(BasePlayer player, GrowableEntity entity)
{
    Puts("CanTakeCutting works!");
    return null;
}
```
