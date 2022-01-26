---
hide_table_of_contents: true
---

# OnStructureUpgrade

## Usage

* Called when the player upgrades the grade of a BuildingBlock or BaseCombatEntity
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnStructureUpgrade(BaseCombatEntity entity, BasePlayer player, BuildingGrade.Enum grade)
{
    Puts("OnStructureUpgrade works!");
    return null;
}
```
