---
hide_table_of_contents: true
---

# CanNpcEat

## Usage

* Called when a NPC attempts to eat another entity
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanNpcEat(BaseNpc npc, BaseEntity target)
{
    Puts("CanNpcEat works!");
    return true;
}
```
