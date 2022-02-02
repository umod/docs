---
hide_table_of_contents: true
---

# OnTurretDeauthorize

## Usage

* Called when a player is deauthorized on an autoturret
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnTurretDeauthorize(AutoTurret turret, BasePlayer player)
{
    Puts("OnTurretDeauthorize works!");
    return null;
}
```
