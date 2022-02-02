---
hide_table_of_contents: true
---

# CanMountEntity

## Usage

* Called when the player attempts to mount an entity
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object CanMountEntity(BasePlayer player, BaseMountable entity)
{
    Puts("CanMountEntity works!");
    return null;
}
```
