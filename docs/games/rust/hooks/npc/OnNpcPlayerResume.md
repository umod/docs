---
hide_table_of_contents: true
---

# OnNpcPlayerResume

## Usage

* Useful for canceling the invoke of TryForceToNavmesh
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnNpcPlayerResume(NPCPlayerApex npc)
{
    Puts("OnNpcPlayerResume works!");
    return null;
}
```
