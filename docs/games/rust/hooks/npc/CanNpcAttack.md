---
hide_table_of_contents: true
---

# CanNpcAttack

## Usage

* Called when a NPC attempts to attack another entity
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool CanNpcAttack(BaseNpc npc, BaseEntity target)
{
    Puts("CanNpcAttack works!");
    return true;
}
```
