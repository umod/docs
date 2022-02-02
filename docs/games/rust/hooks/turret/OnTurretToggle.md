---
hide_table_of_contents: true
---

# OnTurretToggle

## Usage

* Called when an autoturret toggles powerstate (on/off)
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnTurretToggle(AutoTurret turret)
{
    Puts("OnTurretToggle works!");
    return null;
}
```
