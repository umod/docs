---
hide_table_of_contents: true
---

# CanChangeGrade

## Usage

* Called when a player tries to change a building grade
* Return false to prevent player from changing grades

## Examples

```csharp title="Prevent grade change/upgrade to Top Tier"
object CanChangeGrade(BasePlayer player, BuildingBlock block, BuildingGrade.Enum grade)
{
    if (grade == BuildingGrade.Enum.TopTier)
    {
        return false;
    }

    return null;
}
```
