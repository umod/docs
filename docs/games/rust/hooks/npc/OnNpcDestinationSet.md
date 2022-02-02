---
hide_table_of_contents: true
---

# OnNpcDestinationSet

## Usage

* Useful for canceling the destination change on NPCs
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnNpcDestinationSet(NPCPlayerApex npc, Vector3 newPosition)
{
    Puts("OnNpcDestinationSet works!");
    return null;
}
```
