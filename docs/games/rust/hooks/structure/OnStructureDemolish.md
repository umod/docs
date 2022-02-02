---
hide_table_of_contents: true
---

# OnStructureDemolish

## Usage

* Called when the player selects Demolish or DemolishImmediate from the BuildingBlock or BaseCombatEntity menu
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnStructureDemolish(BaseCombatEntity entity, BasePlayer player, bool immediate)
{
    Puts("OnStructureDemolish works!");
    return null;
}
```
