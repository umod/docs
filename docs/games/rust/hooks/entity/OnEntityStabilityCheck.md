---
hide_table_of_contents: true
---

# OnEntityStabilityCheck

## Usage

* Called when stability of an entity is checked
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnEntityStabilityCheck(StabilityEntity entity)
{
    Puts("OnEntityStabilityCheck works!");
    return null;
}
```
