---
hide_table_of_contents: true
---

# CanEntityBeHostile

## Usage

* Useful for overriding hostility of an entity
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object CanEntityBeHostile(BaseCombatEntity entity)
{
    Puts("CanEntityBeHostile works!");
    return null;
}
```
