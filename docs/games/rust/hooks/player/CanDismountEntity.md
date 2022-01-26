---
hide_table_of_contents: true
---

# CanDismountEntity

## Usage

* Called when the player attempts to dismount an entity
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object CanDismountEntity(BasePlayer player, BaseMountable entity)
{
    Puts("CanDismountEntity works!");
    return null;
}
```
