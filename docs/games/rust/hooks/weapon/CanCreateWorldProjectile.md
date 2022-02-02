---
hide_table_of_contents: true
---

# CanCreateWorldProjectile

## Usage

* Called when the item creates a projectile in the world
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object CanCreateWorldProjectile(HitInfo info, ItemDefinition itemDef)
{
    Puts("CanCreateWorldProjectile works!");
    return null;
}
```
