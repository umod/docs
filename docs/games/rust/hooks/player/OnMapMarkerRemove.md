---
hide_table_of_contents: true
---

# OnMapMarkerRemove

## Usage

* Called when trying to remove a marker
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnMapMarkerRemove(BasePlayer player, MapNote note)
{
    Puts("OnMapMarkerRemove works!");
    return null;
}
```
