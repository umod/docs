---
hide_table_of_contents: true
---

# OnHelicopterTarget

## Usage

* Called when a helicopter turret attempts to target an entity
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnHelicopterTarget(HelicopterTurret turret, BaseCombatEntity entity)
{
    Puts("OnHelicopterTarget works!");
    return null;
}
```
