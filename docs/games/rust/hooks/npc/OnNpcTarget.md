---
hide_table_of_contents: true
---

# OnNpcTarget

## Usage

* Called when an NPC targets another entity
* Returning a non-null value overrides default behavior

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
