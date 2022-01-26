---
hide_table_of_contents: true
---

# OnAirdrop

## Usage

* Called when a player is trying to unload ammo
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnAmmoUnload(BaseProjectile projectile, Item item, BasePlayer player)
{
    Puts("OnAmmoUnload works!");
    return null;
}
```
