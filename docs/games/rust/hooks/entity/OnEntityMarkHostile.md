---
hide_table_of_contents: true
---

# OnEntityMarkHostile

## Usage

* Useful for denying marking the entity hostile
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnEntityMarkHostile(BaseCombatEntity entity, float duration)
{
    Puts("OnEntityMarkHostile works!");
    return null;
}
```
