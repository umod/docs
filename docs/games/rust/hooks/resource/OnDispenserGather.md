---
hide_table_of_contents: true
---

# OnDispenserGather

## Usage

* Called before the player is given items from a resource
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnDispenserGather(ResourceDispenser dispenser, BaseEntity entity, Item item)
{
    Puts("OnDispenserGather works!");
    return null;
}
```
