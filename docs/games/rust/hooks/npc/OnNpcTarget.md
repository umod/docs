---
hide_table_of_contents: true
---

# OnNpcTarget

## Usage

* Called when an NPC targets another entity
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnNpcTarget(BaseEntity npc, BaseEntity entity)
{
    Puts("OnNpcTarget works!");
    return null;
}
```

```csharp title=""
object OnNpcTarget(HumanNPC npc, BaseEntity entity)
{
    Puts("OnNpcTarget works!");
    return null;
}
```
