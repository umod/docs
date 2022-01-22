---
hide_table_of_contents: true
---

# CanBuild

## Usage

* Called before the player tries to build something
* Return false to prevent player from building

## Examples

```csharp title="Block non-admin from building"
object CanBuild(Planner planner, Construction prefab, Construction.Target target)
{
    var player = planner.GetOwnerPlayer();
    if (!player.IsAdmin)
    {
        return false;
    }

    return null;
}
```
