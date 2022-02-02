---
hide_table_of_contents: true
---

# OnReloadMagazine

## Usage

* Called when the player reloads a magazine
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnReloadMagazine(BasePlayer player, BaseProjectile projectile, int desiredAmount)
{
    Puts("OnReloadMagazine works!");
    return null;
}
```
