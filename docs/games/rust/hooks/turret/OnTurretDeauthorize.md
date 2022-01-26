---
hide_table_of_contents: true
---

# OnTurretDeauthorize

## Usage

* Called when a player is deauthorized on an autoturret
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnTurretDeauthorize(AutoTurret turret, BasePlayer player)
{
    Puts("OnTurretDeauthorize works!");
    return null;
}
```
