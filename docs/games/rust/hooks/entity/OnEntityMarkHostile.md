---
hide_table_of_contents: true
---

# OnEntityMarkHostile

## Usage

* Useful for denying marking the entity hostile
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnEntityMarkHostile(BaseCombatEntity entity, float duration)
{
    Puts("OnEntityMarkHostile works!");
    return null;
}
```
