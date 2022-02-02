---
hide_table_of_contents: true
---

# CanNpcEat

## Usage

* Called when a NPC attempts to eat another entity
* Return true or false to override default behavior

## Examples

```csharp title=""
bool? CanNpcEat(BaseNpc npc, BaseEntity target)
{
    Puts("CanNpcEat works!");
    return null;
}
```
