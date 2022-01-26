---
hide_table_of_contents: true
---

# OnMapMarkerAdd

## Usage

* Called when trying to add a marker
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnMapMarkerAdd(BasePlayer player, MapNote note)
{
    Puts("OnMapMarkerAdd works!");
    return null;
}
```
