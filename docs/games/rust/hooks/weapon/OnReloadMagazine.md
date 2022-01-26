---
hide_table_of_contents: true
---

# OnReloadMagazine

## Usage

* Called when the player reloads a magazine
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnReloadMagazine(BasePlayer player, BaseProjectile projectile, int desiredAmount)
{
    Puts("OnReloadMagazine works!");
    return null;
}
```
