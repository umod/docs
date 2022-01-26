---
hide_table_of_contents: true
---

# OnPayForUpgrade

## Usage

* Called when player is paying for an upgrade. Useful for preventing paying for block upgrade
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnPayForUpgrade(BasePlayer player, BuildingBlock block, ConstructionGrade gradeTarget)
{
    Puts("OnPayForUpgrade works!");
    return null;
}
```
