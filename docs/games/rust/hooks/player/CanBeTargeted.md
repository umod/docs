---
hide_table_of_contents: true
---

# CanBeTargeted

## Usage

* Called before a specific entity targets a player
* Supports AutoTurret, FlameTurret, GunTrap, and HelicopterTurret
* Return false to prevent player from being damaged

## Examples

```csharp title=""
object CanBeTargeted(BaseCombatEntity player, AutoTurret turret)
{
    return null;
}
```

```csharp title=""
object CanBeTargeted(BaseCombatEntity player, FlameTurret turret)
{
    return null;
}
```

```csharp title=""
object CanBeTargeted(BaseCombatEntity player, GunTrap trap)
{
    return null;
}
```

```csharp title=""
object CanBeTargeted(BaseCombatEntity player, HelicopterTurret turret)
{
    return null;
}
```
