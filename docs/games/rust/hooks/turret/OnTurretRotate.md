---
hide_table_of_contents: true
---

# OnTurretRotate

## Usage

* Called when a player tries to rotate an auto turret
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnTurretRotate(AutoTurret turret, BasePlayer player)
{
    Puts("OnTurretRotate works!");
    return null;
}
```
