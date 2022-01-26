---
hide_table_of_contents: true
---

# CanCreateWorldProjectile

## Usage

* Called when the item creates a projectile in the world
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object CanCreateWorldProjectile(HitInfo info, ItemDefinition itemDef)
{
    Puts("CanCreateWorldProjectile works!");
    return null;
}
```
