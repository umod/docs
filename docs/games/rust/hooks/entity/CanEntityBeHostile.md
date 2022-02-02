---
hide_table_of_contents: true
---

# CanEntityBeHostile

## Usage

* Useful for overriding hostility of an entity
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object CanEntityBeHostile(BaseCombatEntity entity)
{
    Puts("CanEntityBeHostile works!");
    return null;
}
```
