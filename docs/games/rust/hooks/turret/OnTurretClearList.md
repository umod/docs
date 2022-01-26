---
hide_table_of_contents: true
---

# OnTurretClearList

## Usage

* Called when a player attempts to clear an autoturret's authorized list
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnTurretClearList(AutoTurret turret, BasePlayer player)
{
    Puts("OnTurretClearList works!");
    return null;
}
```
