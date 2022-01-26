---
hide_table_of_contents: true
---

# CanBuild

## Usage

* Called before the player tries to build something
* Return false to prevent player from building

## Examples

```csharp title="Prevent building secific entity"
object CanBuild(Planner planner, Construction contruction, Construction.Target constructionTarget)
{
    if (target.entity is SurveyCrater)
    {
        player.ChatMessage("Sorry, you aren't allowed to build this");
        return false;
    }

    return null;
}
```

```csharp title="Prevent non-admin from building"
object CanBuild(Planner planner, Construction contruction, Construction.Target constructionTarget)
{
    var player = planner.GetOwnerPlayer();
    if (!player.IsAdmin)
    {
        return false;
    }

    return null;
}
```
