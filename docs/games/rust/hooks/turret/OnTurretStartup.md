---
hide_table_of_contents: true
---

# OnTurretStartup

## Usage

* Called when an autoturret starts up
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnTurretStartup(AutoTurret turret)
{
    Puts("OnTurretStartup works!");
    return null;
}
```
