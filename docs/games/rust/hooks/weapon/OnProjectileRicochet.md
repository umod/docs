---
hide_table_of_contents: true
---

# OnProjectileRicochet

## Usage

* Called when a player's weapon projectile ricochets
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnProjectileRicochet(BasePlayer player, PlayerProjectileRicochet ricochet)
{
    Puts("OnProjectileRicochet works!");
    return null;
}
```
