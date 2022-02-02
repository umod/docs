---
hide_table_of_contents: true
---

# OnMapMarkersClear

## Usage

* Called when trying to clear map markers
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnMapMarkersClear(BasePlayer player, List<MapNote> notes)
{
    Puts("OnMapMarkersClear works!");
    return null;
}
```
