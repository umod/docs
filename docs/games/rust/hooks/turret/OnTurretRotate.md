---
hide_table_of_contents: true
---

# OnTurretRotate

## Usage

* Called when a player tries to rotate an auto turret
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnTurretRotate(AutoTurret turret, BasePlayer player)
{
    Puts("OnTurretRotate works!");
    return null;
}
```
