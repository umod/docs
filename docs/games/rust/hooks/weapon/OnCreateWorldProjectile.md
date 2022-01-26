---
hide_table_of_contents: true
---

# OnCreateWorldProjectile

## Usage

* Called when a projectile is created
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnCreateWorldProjectile(HitInfo info, Item item)
{
    Puts("OnCreateWorldProjectile works!");
    return null;
}
```
