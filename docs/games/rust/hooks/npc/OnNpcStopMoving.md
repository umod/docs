---
hide_table_of_contents: true
---

# OnNpcStopMoving

## Usage

* Useful for denying the move stop of NPCs
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnNpcStopMoving(NPCPlayerApex npc)
{
    Puts("OnNpcStopMoving works!");
    return null;
}
```
