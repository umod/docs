---
hide_table_of_contents: true
---

# OnProjectileRicochet

## Usage

* Called when a player's weapon projectile ricochets
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnProjectileRicochet(BasePlayer player, PlayerProjectileRicochet ricochet)
{
    Puts("OnProjectileRicochet works!");
    return null;
}
```
