---
hide_table_of_contents: true
---

# OnSwitchAmmo

## Usage

* Called when the player starts to switch the ammo in a weapon
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnSwitchAmmo(BasePlayer player, BaseProjectile projectile)
{
    Puts("OnSwitchAmmo works!");
    return null;
}
```
