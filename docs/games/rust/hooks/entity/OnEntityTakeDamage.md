---
hide_table_of_contents: true
---

# OnEntityTakeDamage

## Usage

* Alternatively, modify the HitInfo object to change the damage
* It should be okay to set the damage to 0, but if you don't return non-null, the player's client will receive a damage indicator (if entity is a BasePlayer)
* HitInfo has all kinds of useful things in it, such as Weapon, damageProperties or damageTypes

## Examples

```csharp title=""
object OnEntityTakeDamage(BaseCombatEntity entity, HitInfo info)
{
    Puts("OnEntityTakeDamage works!");
    return null;
}
```
