---
hide_table_of_contents: true
---

# CanNpcAttack

## Usage

* Called when a NPC attempts to attack another entity
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnNpcAttack(BaseNpc npc, BaseEntity target)
{
    Puts("OnNpcAttack works!");
    return null;
}
```
