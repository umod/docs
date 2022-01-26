---
hide_table_of_contents: true
---

# OnHelicopterTarget

## Usage

* Called when a helicopter turret attempts to target an entity
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnHelicopterTarget(HelicopterTurret turret, BaseCombatEntity entity)
{
    Puts("OnHelicopterTarget works!");
    return null;
}
```
