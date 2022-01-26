---
hide_table_of_contents: true
---

# OnEngineLoadoutRefresh

## Usage

* Called before engine loadout data is refreshed
* Returning a non-null value overrides default behaviour

## Examples

```csharp title=""
object OnEngineLoadoutRefresh(EngineStorage storage)
{
    Puts("OnEngineLoadoutRefresh works!");
    return null;
}
```
