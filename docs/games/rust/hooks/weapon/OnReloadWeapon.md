---
hide_table_of_contents: true
---

# OnQuarryEnabled

## Usage

* Called when the player reloads a weapon
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnReloadWeapon(BasePlayer player, BaseProjectile projectile)
{
    Puts("OnReloadWeapon works!");
    return null;
}
```
