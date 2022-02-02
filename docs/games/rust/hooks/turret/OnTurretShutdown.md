---
hide_table_of_contents: true
---

# OnTurretShutdown

## Usage

* Called when an autoturret is shut down
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnTurretShutdown(AutoTurret turret)
{
    Puts("OnTurretShutdown works!");
    return null;
}
```
