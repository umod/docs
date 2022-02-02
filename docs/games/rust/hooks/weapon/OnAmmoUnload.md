---
hide_table_of_contents: true
---

# OnAirdrop

## Usage

* Called when a player is trying to unload ammo
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnAmmoUnload(BaseProjectile projectile, Item item, BasePlayer player)
{
    Puts("OnAmmoUnload works!");
    return null;
}
```
