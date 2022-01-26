---
hide_table_of_contents: true
---

# OnWeaponFired

## Usage

* Called when the player fires a weapon
* No Return behavior

## Examples

```csharp title=""
void OnWeaponFired(BaseProjectile projectile, BasePlayer player, ItemModProjectile mod, ProtoBuf.ProjectileShoot projectiles)
{
    Puts("OnWeaponFired works!");
}
```
