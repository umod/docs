---
hide_table_of_contents: true
---

# CanAffordUpgrade

## Usage

* Called before resources for changing a building block grade are checked
* Return false to prevent player from upgrading a building grade

## Examples

```csharp title="Allow free grade changes to Top Tier"
bool CanAffordUpgrade(BasePlayer player, BuildingBlock block, BuildingGrade.Enum grade)
{
    if (grade == BuildingGrade.Enum.TopTier)
    {
        return true;
    }

    return false;
}
```
