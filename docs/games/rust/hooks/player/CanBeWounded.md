---
hide_table_of_contents: true
---

# CanBeWounded

## Usage

* Called before any damage is attempted on the player
* Return false to prevent player from being damaged

## Examples

```csharp title="Allow grade change to Top Tier without using resources"
object CanBeWounded(BasePlayer player, HitInfo hitInfo)
{
    if (grade == BuildingGrade.Enum.TopTier)
    {
        return false;
    }

    return null;
}
```
