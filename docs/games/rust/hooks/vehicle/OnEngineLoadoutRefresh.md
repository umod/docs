---
hide_table_of_contents: true
---

# OnEngineLoadoutRefresh

## Usage

* Called before engine loadout data is refreshed
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnEngineLoadoutRefresh(EngineStorage storage)
{
    Puts("OnEngineLoadoutRefresh works!");
    return null;
}
```
