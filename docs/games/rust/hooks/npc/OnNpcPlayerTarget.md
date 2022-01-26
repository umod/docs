---
hide_table_of_contents: true
---

# OnNpcPlayerTarget

## Usage

* Called when an NPC player targets another entity
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnNpcPlayerTarget(NPCPlayerApex npcPlayer, BaseEntity entity)
{
    Puts("OnNpcPlayerTarget works!");
    return null;
}
```
