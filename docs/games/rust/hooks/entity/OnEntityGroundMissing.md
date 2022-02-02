---
hide_table_of_contents: true
---

# OnEntityGroundMissing

## Usage

* Called when an entity (sleepingbag, sign, furnace,...) is going to be destroyed because the buildingblock it is on was removed
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnEntityGroundMissing(BaseEntity entity)
{
    Puts("OnEntityGroundMissing works!");
    return null;
}
```
