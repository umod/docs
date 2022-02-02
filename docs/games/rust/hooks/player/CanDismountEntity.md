---
hide_table_of_contents: true
---

# CanDismountEntity

## Usage

* Called when the player attempts to dismount an entity
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object CanDismountEntity(BasePlayer player, BaseMountable entity)
{
    Puts("CanDismountEntity works!");
    return null;
}
```
