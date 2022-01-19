---
hide_table_of_contents: true
---

# CanAffordUpgrade

## Usage

* Called before resources for changing a building block grade are checked
* Return false to prevent player from affording upgrade

## Examples

```csharp title="Allow grade change to Top Tier without using resources"
object CanAffordUpgrade(BasePlayer player, BuildingBlock block, BuildingGrade.Enum grade)
{
    if (grade == BuildingGrade.Enum.TopTier)
    {
        return true;
    }

    return null;
}
```
