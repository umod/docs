---
hide_table_of_contents: true
---

# OnQuarryEnabled

## Usage

* Called when the player reloads a weapon
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnReloadWeapon(BasePlayer player, BaseProjectile projectile)
{
    Puts("OnReloadWeapon works!");
    return null;
}
```
