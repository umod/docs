---
hide_table_of_contents: true
---

# OnTurretClearList

## Usage

* Called when a player attempts to clear an autoturret's authorized list
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnTurretClearList(AutoTurret turret, BasePlayer player)
{
    Puts("OnTurretClearList works!");
    return null;
}
```
