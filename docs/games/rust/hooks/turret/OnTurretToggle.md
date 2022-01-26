---
hide_table_of_contents: true
---

# OnTurretToggle

## Usage

* Called when an autoturret toggles powerstate (on/off)
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnTurretToggle(AutoTurret turret)
{
    Puts("OnTurretToggle works!");
    return null;
}
```
