---
hide_table_of_contents: true
---

# OnPayForUpgrade

## Usage

* Called when player is paying for an upgrade. Useful for preventing paying for block upgrade
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnPayForUpgrade(BasePlayer player, BuildingBlock block, ConstructionGrade gradeTarget)
{
    Puts("OnPayForUpgrade works!");
    return null;
}
```
