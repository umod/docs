---
hide_table_of_contents: true
---

# OnTurretAuthorize

## Usage

* Called when a player attempts to authorize on a turret
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnTurretAuthorize(AutoTurret turret, BasePlayer player)
{
    Puts("OnTurretAuthorize works!");
    return null;
}
```
