---
hide_table_of_contents: true
---

# OnMapMarkerAdd

## Usage

* Called when trying to add a marker
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnMapMarkerAdd(BasePlayer player, MapNote note)
{
    Puts("OnMapMarkerAdd works!");
    return null;
}
```
