---
hide_table_of_contents: true
---

# OnGrowableGather

## Usage

* Called when the player gathers a growable entity
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnGrowableGather(GrowableEntity plant, BasePlayer player)
{
    Puts("OnGrowableGather works!");
    return null;
}
```
