---
hide_table_of_contents: true
---

# OnDispenserGather

## Usage

* Called before the player is given items from a resource
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnDispenserGather(ResourceDispenser dispenser, BaseEntity entity, Item item)
{
    Puts("OnDispenserGather works!");
    return null;
}
```
