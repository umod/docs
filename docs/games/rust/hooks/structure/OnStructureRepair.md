---
hide_table_of_contents: true
---

# OnStructureRepair

## Usage

* Called when the player repairs a BuildingBlock or BaseCombatEntity
* Return a non-null value to override repair

## Examples

```csharp title=""
object OnStructureRepair(BaseCombatEntity entity, BasePlayer player)
{
    Puts("OnStructureRepair works!");
    return null;
}
```
