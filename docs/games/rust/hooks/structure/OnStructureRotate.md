---
hide_table_of_contents: true
---

# OnStructureRotate

## Usage

* Called when the player rotates a BuildingBlock or BaseCombatEntity
* Returning a non-null value cancels rotate

## Examples

```csharp title=""
object OnStructureRotate(BaseCombatEntity entity, BasePlayer player)
{
    Puts("OnStructureRotate works!");
    return null;
}
```
