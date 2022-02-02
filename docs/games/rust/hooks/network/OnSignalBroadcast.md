---
hide_table_of_contents: true
---

# OnSignalBroadcast

## Usage

* Called before a signal is broadcast to an entity
* No return behavior

## Examples

```csharp title=""
object OnSignalBroadcast(BaseEntity entity)
{
    Puts("OnSignalBroadcast works!");
    return null;
}
```
